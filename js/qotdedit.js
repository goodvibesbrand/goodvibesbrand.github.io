/* ============================================
   QOTD Template Designer — Editor Logic
   Full WYSIWYG with Snap Grid, Auto-Center
   ============================================ */

(function() {
    'use strict';

    // ===== STATE =====
    const state = {
        zoom: 0.75,
        gridSize: 20,
        snapEnabled: true,
        showOutlines: true,
        selectedElement: null,
        isDragging: false,
        dragOffset: { x: 0, y: 0 },
        template: null
    };

    // ===== DEFAULT TEMPLATE =====
    const DEFAULT_TEMPLATE = {
        canvasWidth: 1200,
        canvasHeight: 1200,
        background: {
            type: 'gradient',
            color: '#00aaff',
            gradientStart: '#00aaff',
            gradientEnd: '#0066cc',
            direction: '180deg'
        },
        card: {
            left: 60,
            top: 60,
            width: 1080,
            height: 1080,
            background: '#ffffff',
            opacity: 95,
            radius: 20,
            padding: 50,
            shadow: '0 10px 40px rgba(0,0,0,0.15)'
        },
        typography: {
            fontFamily: "'Poppins', sans-serif",
            quoteSize: 42,
            quoteWeight: '600',
            quoteColor: '#1a1a1a',
            authorSize: 20,
            authorColor: '#666666'
        },
        badge: { bg: '#00aaff', color: '#ffffff' },
        accent: '#00aaff',
        decoSize: 48,
        elements: {
            badge: { left: 40, top: 40 },
            title: { left: 40, top: 100 },
            quote: { left: 60, top: 200, width: 960 },
            author: { left: 60, bottom: 200 },
            meta: { left: 60, bottom: 120 },
            decoration: { right: 40, bottom: 40 }
        }
    };

    // ===== DOM REFS =====
    const DOM = {
        canvasWrapper: document.getElementById('canvas-wrapper'),
        designCanvas: document.getElementById('design-canvas'),
        bgLayer: document.getElementById('bg-layer'),
        cardContainer: document.getElementById('card-container'),
        gridOverlay: document.getElementById('grid-overlay'),
        zoomLevel: document.getElementById('zoom-level'),
        toast: document.getElementById('toast'),
        toastMsg: document.getElementById('toast-msg'),
        previewModal: document.getElementById('preview-modal'),
        previewContainer: document.getElementById('preview-container')
    };

    // ===== INITIALIZATION =====
    function init() {
        loadTemplate();
        bindEvents();
        applyTemplate();
        updateZoomDisplay();
        console.log('✦ QOTD Template Designer Initialized');
    }

    // ===== TEMPLATE MANAGEMENT =====
    function loadTemplate() {
        try {
            const saved = localStorage.getItem('qotd_template');
            state.template = saved ? JSON.parse(saved) : { ...DEFAULT_TEMPLATE };
        } catch (e) {
            state.template = { ...DEFAULT_TEMPLATE };
        }
    }

    function saveTemplate() {
        captureElementPositions();
        localStorage.setItem('qotd_template', JSON.stringify(state.template));
        showToast('✅ Template saved successfully!');
    }

    function resetToDefault() {
        if (!confirm('Reset all settings to default?')) return;
        state.template = { ...DEFAULT_TEMPLATE };
        applyTemplate();
        showToast('🔄 Reset to default template');
    }

    function captureElementPositions() {
        const elements = ['badge', 'title', 'quote', 'author', 'meta', 'decoration'];
        elements.forEach(el => {
            const domEl = document.getElementById(`el-${el}`);
            if (domEl) {
                const rect = domEl.getBoundingClientRect();
                const containerRect = DOM.cardContainer.getBoundingClientRect();
                state.template.elements[el] = {
                    left: rect.left - containerRect.left,
                    top: rect.top - containerRect.top,
                    width: rect.width,
                    right: containerRect.right - rect.right,
                    bottom: containerRect.bottom - rect.bottom
                };
            }
        });
    }

    // ===== APPLY TEMPLATE TO CANVAS =====
    function applyTemplate() {
        const t = state.template;
        
        // Canvas size
        DOM.designCanvas.style.width = t.canvasWidth + 'px';
        DOM.designCanvas.style.height = t.canvasHeight + 'px';
        
        // Background
        applyBackground();
        
        // Card
        applyCardStyle();
        
        // Typography
        applyTypography();
        
        // Badge colors
        applyBadgeColors();
        
        // Element positions
        applyElementPositions();
        
        // Update UI controls
        syncUIWithTemplate();
    }

    function applyBackground() {
        const bg = state.template.background;
        if (bg.type === 'solid') {
            DOM.bgLayer.style.background = bg.color;
        } else if (bg.type === 'gradient') {
            if (bg.direction === 'radial') {
                DOM.bgLayer.style.background = `radial-gradient(circle, ${bg.gradientStart}, ${bg.gradientEnd})`;
            } else {
                DOM.bgLayer.style.background = `linear-gradient(${bg.direction}, ${bg.gradientStart}, ${bg.gradientEnd})`;
            }
        }
    }

    function applyCardStyle() {
        const c = state.template.card;
        Object.assign(DOM.cardContainer.style, {
            left: c.left + 'px',
            top: c.top + 'px',
            width: c.width + 'px',
            height: c.height + 'px',
            background: c.background.replace(/[\d.]+\)$/, `${c.opacity / 100})`),
            borderRadius: c.radius + 'px',
            padding: c.padding + 'px',
            boxShadow: c.shadow
        });
    }

    function applyTypography() {
        const ty = state.template.typography;
        
        // Quote text
        const quoteText = document.querySelector('.quote-text');
        if (quoteText) {
            quoteText.style.fontFamily = ty.fontFamily;
            quoteText.style.fontSize = ty.quoteSize + 'px';
            quoteText.style.fontWeight = ty.quoteWeight;
            quoteText.style.color = ty.quoteColor;
        }
        
        // Title
        const titleText = document.querySelector('.title-text');
        if (titleText) {
            titleText.style.fontFamily = ty.fontFamily;
        }
        
        // Author
        const authorText = document.querySelector('.author-text');
        if (authorText) {
            authorText.style.fontFamily = ty.fontFamily;
            authorText.style.fontSize = ty.authorSize + 'px';
            authorText.style.color = ty.authorColor;
        }
    }

    function applyBadgeColors() {
        const b = state.template.badge;
        const badgeText = document.querySelector('.badge-text');
        if (badgeText) {
            badgeText.style.background = b.bg;
            badgeText.style.color = b.color;
        }
    }

    function applyElementPositions() {
        const els = state.template.elements;
        Object.keys(els).forEach(key => {
            const el = document.getElementById(`el-${key}`);
            const pos = els[key];
            if (el && pos) {
                el.style.left = pos.left !== undefined ? pos.left + 'px' : 'auto';
                el.style.top = pos.top !== undefined ? pos.top + 'px' : 'auto';
                el.style.right = pos.right !== undefined ? pos.right + 'px' : 'auto';
                el.style.bottom = pos.bottom !== undefined ? pos.bottom + 'px' : 'auto';
                el.style.width = pos.width ? pos.width + 'px' : '';
            }
        });
    }

    // ===== SYNC UI WITH TEMPLATE =====
    function syncUIWithTemplate() {
        const t = state.template;
        
        // Canvas size inputs
        document.getElementById('canvas-w').value = t.canvasWidth;
        document.getElementById('canvas-h').value = t.canvasHeight;
        
        // Background
        document.getElementById('bg-type').value = t.background.type;
        document.getElementById('bg-color').value = t.background.color || '#00aaff';
        document.getElementById('grad-start').value = t.background.gradientStart;
        document.getElementById('grad-start-hex').value = t.background.gradientStart;
        document.getElementById('grad-end').value = t.background.gradientEnd;
        document.getElementById('grad-end-hex').value = t.background.gradientEnd;
        document.getElementById('grad-direction').value = t.background.direction;
        
        // Toggle bg groups
        document.querySelector('.bg-solid-group').style.display = 
            t.background.type === 'solid' ? 'block' : 'none';
        document.querySelector('.bg-gradient-group').style.display = 
            t.background.type === 'gradient' ? 'block' : 'none';
        
        // Card
        document.getElementById('card-bg').value = hexFromRgba(t.card.background);
        document.getElementById('card-opacity').value = t.card.opacity;
        document.getElementById('card-radius').value = t.card.radius;
        document.getElementById('card-radius-val').textContent = t.card.radius + 'px';
        document.getElementById('card-padding').value = t.card.padding;
        document.getElementById('card-padding-val').textContent = t.card.padding + 'px';
        document.getElementById('card-shadow').value = t.card.shadow;
        
        // Typography
        document.getElementById('font-family').value = t.typography.fontFamily;
        document.getElementById('quote-size').value = t.typography.quoteSize;
        document.getElementById('quote-size-val').textContent = t.typography.quoteSize + 'px';
        document.getElementById('quote-weight').value = t.typography.quoteWeight;
        document.getElementById('quote-color').value = t.typography.quoteColor;
        document.getElementById('author-size').value = t.typography.authorSize;
        document.getElementById('author-size-val').textContent = t.typography.authorSize + 'px';
        document.getElementById('author-color').value = t.typography.authorColor;
        
        // Badge & Accent
        document.getElementById('badge-bg').value = t.badge.bg;
        document.getElementById('badge-color').value = t.badge.color;
        document.getElementById('accent-color').value = t.accent;
        document.getElementById('deco-size').value = t.decoSize;
        document.getElementById('deco-size-val').textContent = t.decoSize + 'px';
        
        // Toggles
        document.getElementById('snap-grid').checked = state.snapEnabled;
        document.getElementById('show-outlines').checked = state.showOutlines;
    }

    function hexFromRgba(rgba) {
        const match = rgba.match(/[\d.]+/g);
        if (match && match.length >= 3) {
            const r = parseInt(match[0]), g = parseInt(match[1]), b = parseInt(match[2]);
            return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
        }
        return '#ffffff';
    }

    // ===== DRAG & DROP =====
    function bindDragEvents() {
        const elements = document.querySelectorAll('.editable-element');
        
        elements.forEach(el => {
            el.addEventListener('mousedown', startDrag);
            el.addEventListener('touchstart', startDrag, { passive: false });
            
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                selectElement(el);
            });
        });
    }

    function startDrag(e) {
        if (e.target.contentEditable === 'true' && document.activeElement === e.target) return;
        
        e.preventDefault();
        state.isDragging = true;
        state.selectedElement = e.currentTarget;
        
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        const rect = state.selectedElement.getBoundingClientRect();
        state.dragOffset.x = clientX - rect.left;
        state.dragOffset.y = clientY - rect.top;
        
        state.selectedElement.classList.add('dragging');
        selectElement(state.selectedElement);
        
        document.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchmove', onDrag, { passive: false });
        document.addEventListener('touchend', stopDrag);
    }

    function onDrag(e) {
        if (!state.isDragging || !state.selectedElement) return;
        e.preventDefault();
        
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        const containerRect = DOM.cardContainer.getBoundingClientRect();
        
        let newX = clientX - containerRect.left - state.dragOffset.x;
        let newY = clientY - containerRect.top - state.dragOffset.y;
        
        // Snap to grid
        if (state.snapEnabled) {
            newX = Math.round(newX / state.gridSize) * state.gridSize;
            newY = Math.round(newY / state.gridSize) * state.gridSize;
        }
        
        // Constrain to container
        newX = Math.max(0, Math.min(newX, containerRect.width - state.selectedElement.offsetWidth));
        newY = Math.max(0, Math.min(newY, containerRect.height - state.selectedElement.offsetHeight));
        
        state.selectedElement.style.left = newX + 'px';
        state.selectedElement.style.top = newY + 'px';
        state.selectedElement.style.right = 'auto';
        state.selectedElement.style.bottom = 'auto';
    }

    function stopDrag() {
        if (state.selectedElement) {
            state.selectedElement.classList.remove('dragging');
        }
        state.isDragging = false;
        
        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchmove', onDrag);
        document.removeEventListener('touchend', stopDrag);
    }

    // ===== ELEMENT SELECTION =====
    function selectElement(el) {
        document.querySelectorAll('.editable-element').forEach(e => e.classList.remove('selected'));
        el.classList.add('selected');
        state.selectedElement = el;
        
        // Highlight in element list
        document.querySelectorAll('.element-btn').forEach(btn => btn.classList.remove('active'));
        const elementType = el.dataset.element;
        const btn = document.querySelector(`[data-element="${elementType}"]`);
        if (btn) btn.classList.add('active');
    }

    function deselectAll() {
        document.querySelectorAll('.editable-element').forEach(e => e.classList.remove('selected'));
        state.selectedElement = null;
        document.querySelectorAll('.element-btn').forEach(btn => btn.classList.remove('active'));
    }

    // ===== SNAP TO GRID =====
    function updateGridOverlay() {
        DOM.gridOverlay.style.backgroundSize = `${state.gridSize}px ${state.gridSize}px`;
        DOM.gridOverlay.style.display = state.snapEnabled ? 'block' : 'none';
    }

    // ===== ALIGNMENT =====
    function alignElement(alignment) {
        if (!state.selectedElement) {
            showToast('⚠ Select an element first');
            return;
        }
        
        const el = state.selectedElement;
        const container = DOM.cardContainer;
        const containerW = container.offsetWidth;
        const containerH = container.offsetHeight;
        const elW = el.offsetWidth;
        const elH = el.offsetHeight;
        
        switch (alignment) {
            case 'left': el.style.left = '20px'; break;
            case 'center-h': el.style.left = ((containerW - elW) / 2) + 'px'; break;
            case 'right': el.style.left = (containerW - elW - 20) + 'px'; break;
            case 'top': el.style.top = '20px'; break;
            case 'center-v': el.style.top = ((containerH - elH) / 2) + 'px'; break;
            case 'bottom': el.style.top = (containerH - elH - 20) + 'px'; break;
        }
        
        el.style.right = 'auto';
        el.style.bottom = 'auto';
        showToast(`↔ Aligned ${alignment}`);
    }

    // ===== ZOOM =====
    function setZoom(level) {
        state.zoom = Math.max(0.25, Math.min(2, level));
        DOM.canvasWrapper.style.transform = `scale(${state.zoom})`;
        updateZoomDisplay();
    }

    function updateZoomDisplay() {
        DOM.zoomLevel.textContent = Math.round(state.zoom * 100) + '%';
    }

    function fitToScreen() {
        const areaRect = document.querySelector('.canvas-area').getBoundingClientRect();
        const padding = 80;
        const availW = areaRect.width - padding * 2;
        const availH = areaRect.height - padding * 2;
        const scaleX = availW / state.template.canvasWidth;
        const scaleY = availH / state.template.canvasHeight;
        setZoom(Math.min(scaleX, scaleY, 1));
    }

    // ===== CANVAS SIZE =====
    function setCanvasSize(w, h) {
        state.template.canvasWidth = w;
        state.template.canvasHeight = h;
        DOM.designCanvas.style.width = w + 'px';
        DOM.designCanvas.style.height = h + 'px';
        fitToScreen();
        showToast(`📐 Canvas: ${w}×${h}`);
    }

    // ===== PREVIEW =====
    function openPreview() {
        captureElementPositions();
        saveTemplate();
        
        // Clone canvas for preview
        const clone = DOM.designCanvas.cloneNode(true);
        clone.style.transform = 'none';
        clone.querySelector('.grid-overlay').style.display = 'none';
        clone.querySelectorAll('.editable-element').forEach(el => {
            el.classList.remove('selected', 'dragging');
            el.style.border = 'none';
        });
        
        DOM.previewContainer.innerHTML = '';
        DOM.previewContainer.appendChild(clone);
        DOM.previewModal.style.display = 'flex';
    }

    function closePreview() {
        DOM.previewModal.style.display = 'none';
    }

    async function downloadPreview() {
        showToast('⏳ Generating image...');
        
        try {
            const html2canvas = await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
            const canvas = await html2canvas(DOM.previewContainer.querySelector('.design-canvas'), {
                scale: 2,
                useCORS: true,
                backgroundColor: null
            });
            
            const link = document.createElement('a');
            link.download = `qotd-template-${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            
            showToast('✅ Image downloaded!');
        } catch (err) {
            showToast('❌ Error generating image');
            console.error(err);
        }
    }

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve(window.html2canvas);
                return;
            }
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve(window.html2canvas);
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // ===== EXPORT TEMPLATE AS JSON =====
    function exportTemplate() {
        captureElementPositions();
        const data = JSON.stringify(state.template, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.download = 'qotd-template.json';
        link.href = url;
        link.click();
        
        URL.revokeObjectURL(url);
        showToast('📥 Template exported as JSON');
    }

    // ===== LOAD SAMPLE QUOTE =====
    function loadSampleQuote() {
        const samples = [
            { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
            { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
            { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
            { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
            { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
        ];
        
        const sample = samples[Math.floor(Math.random() * samples.length)];
        
        document.querySelector('.quote-text').textContent = `"${sample.text}"`;
        document.querySelector('.author-text').textContent = `— ${sample.author}`;
        
        showToast('💬 Sample quote loaded');
    }

    // ===== TOAST NOTIFICATION =====
    function showToast(msg) {
        DOM.toastMsg.textContent = msg;
        DOM.toast.classList.add('show');
        setTimeout(() => DOM.toast.classList.remove('show'), 2500);
    }

    // ===== EVENT BINDINGS =====
    function bindEvents() {
        // Canvas size presets
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                setCanvasSize(parseInt(btn.dataset.w), parseInt(btn.dataset.h));
            });
        });
        
        // Custom size
        document.getElementById('apply-size').addEventListener('click', () => {
            const w = parseInt(document.getElementById('canvas-w').value) || 1200;
            const h = parseInt(document.getElementById('canvas-h').value) || 1200;
            setCanvasSize(w, h);
        });
        
        // Zoom controls
        document.getElementById('zoom-in').addEventListener('click', () => setZoom(state.zoom + 0.1));
        document.getElementById('zoom-out').addEventListener('click', () => setZoom(state.zoom - 0.1));
        document.getElementById('zoom-fit').addEventListener('click', fitToScreen);
        
        // Grid toggle
        document.getElementById('snap-grid').addEventListener('change', (e) => {
            state.snapEnabled = e.target.checked;
            updateGridOverlay();
        });
        
        // Grid size
        document.getElementById('grid-size-select').addEventListener('change', (e) => {
            state.gridSize = parseInt(e.target.value);
            updateGridOverlay();
        });
        
        // Show outlines toggle
        document.getElementById('show-outlines').addEventListener('change', (e) => {
            state.showOutlines = e.target.checked;
            document.querySelectorAll('.editable-element').forEach(el => {
                el.style.borderStyle = e.target.checked ? 'dashed' : 'none';
            });
        });
        
        // Align buttons
        document.querySelectorAll('.align-btn').forEach(btn => {
            btn.addEventListener('click', () => alignElement(btn.dataset.align));
        });
        
        // Element selection buttons
        document.querySelectorAll('.element-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const el = document.getElementById(`el-${btn.dataset.element}`);
                if (el) selectElement(el);
            });
        });
        
        // Background type
        document.getElementById('bg-type').addEventListener('change', (e) => {
            state.template.background.type = e.target.value;
            document.querySelector('.bg-solid-group').style.display = 
                e.target.value === 'solid' ? 'block' : 'none';
            document.querySelector('.bg-gradient-group').style.display = 
                e.target.value === 'gradient' ? 'block' : 'none';
            applyBackground();
        });
        
        // Background color
        document.getElementById('bg-color').addEventListener('input', (e) => {
            state.template.background.color = e.target.value;
            applyBackground();
        });
        
        // Gradient colors
        ['grad-start', 'grad-end'].forEach(id => {
            document.getElementById(id).addEventListener('input', (e) => {
                const key = id === 'grad-start' ? 'gradientStart' : 'gradientEnd';
                state.template.background[key] = e.target.value;
                document.getElementById(id + '-hex').value = e.target.value;
                applyBackground();
            });
            document.getElementById(id + '-hex').addEventListener('input', (e) => {
                const key = id === 'grad-start' ? 'gradientStart' : 'gradientEnd';
                if (/^#[0-9A-Fa-f]{6}$/.test(e.target.value)) {
                    state.template.background[key] = e.target.value;
                    document.getElementById(id).value = e.target.value;
                    applyBackground();
                }
            });
        });
        
        // Gradient direction
        document.getElementById('grad-direction').addEventListener('change', (e) => {
            state.template.background.direction = e.target.value;
            applyBackground();
        });
        
        // Card properties
        document.getElementById('card-bg').addEventListener('input', (e) => {
            state.template.card.background = hexToRgba(e.target.value, state.template.card.opacity / 100);
            applyCardStyle();
        });
        
        document.getElementById('card-opacity').addEventListener('input', (e) => {
            state.template.card.opacity = parseInt(e.target.value);
            document.getElementById('card-opacity-val') = e.target.value;
            applyCardStyle();
        });
        
        document.getElementById('card-radius').addEventListener('input', (e) => {
            state.template.card.radius = parseInt(e.target.value);
            document.getElementById('card-radius-val').textContent = e.target.value + 'px';
            applyCardStyle();
        });
        
        document.getElementById('card-padding').addEventListener('input', (e) => {
            state.template.card.padding = parseInt(e.target.value);
            document.getElementById('card-padding-val').textContent = e.target.value + 'px';
            applyCardStyle();
        });
        
        document.getElementById('card-shadow').addEventListener('change', (e) => {
            state.template.card.shadow = e.target.value;
            applyCardStyle();
        });
        
        // Typography
        document.getElementById('font-family').addEventListener('change', (e) => {
            state.template.typography.fontFamily = e.target.value;
            applyTypography();
        });
        
        document.getElementById('quote-size').addEventListener('input', (e) => {
            state.template.typography.quoteSize = parseInt(e.target.value);
            document.getElementById('quote-size-val').textContent = e.target.value + 'px';
            applyTypography();
        });
        
        document.getElementById('quote-weight').addEventListener('change', (e) => {
            state.template.typography.quoteWeight = e.target.value;
            applyTypography();
        });
        
        document.getElementById('quote-color').addEventListener('input', (e) => {
            state.template.typography.quoteColor = e.target.value;
            applyTypography();
        });
        
        document.getElementById('author-size').addEventListener('input', (e) => {
            state.template.typography.authorSize = parseInt(e.target.value);
            document.getElementById('author-size-val').textContent = e.target.value + 'px';
            applyTypography();
        });
        
        document.getElementById('author-color').addEventListener('input', (e) => {
            state.template.typography.authorColor = e.target.value;
            applyTypography();
        });
        
        // Badge colors
        document.getElementById('badge-bg').addEventListener('input', (e) => {
            state.template.badge.bg = e.target.value;
            applyBadgeColors();
        });
        
        document.getElementById('badge-color').addEventListener('input', (e) => {
            state.template.badge.color = e.target.value;
            applyBadgeColors();
        });
        
        // Accent & Decoration
        document.getElementById('accent-color').addEventListener('input', (e) => {
            state.template.accent = e.target.value;
        });
        
        document.getElementById('deco-size').addEventListener('input', (e) => {
            state.template.decoSize = parseInt(e.target.value);
            document.getElementById('deco-size-val').textContent = e.target.value + 'px';
            document.querySelector('.deco-text').style.fontSize = e.target.value + 'px';
        });
        
        // Action buttons
        document.getElementById('btn-save-template').addEventListener('click', saveTemplate);
        document.getElementById('btn-preview').addEventListener('click', openPreview);
        document.getElementById('btn-export').addEventListener('click', exportTemplate);
        document.getElementById('btn-reset').addEventListener('click', resetToDefault);
        document.getElementById('btn-load-sample').addEventListener('click', loadSampleQuote);
        
        // Modal
        document.getElementById('close-preview').addEventListener('click', closePreview);
        document.getElementById('download-preview').addEventListener('click', downloadPreview);
        DOM.previewModal.addEventListener('click', (e) => {
            if (e.target === DOM.previewModal) closePreview();
        });
        
        // Click outside to deselect
        DOM.designCanvas.addEventListener('click', (e) => {
            if (e.target === DOM.designCanvas || e.target === DOM.cardContainer || e.target === DOM.bgLayer) {
                deselectAll();
            }
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Delete' || e.key === 'Backspace') {
                if (document.activeElement.contentEditable !== 'true') {
                    e.preventDefault();
                }
            }
            if (e.key === 'Escape') {
                deselectAll();
                closePreview();
            }
        });
        
        // Initialize drag events
        bindDragEvents();
        
        // Initial fit
        setTimeout(fitToScreen, 100);
    }

    // ===== UTILITIES =====
    function hexToRgba(hex, alpha = 1) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // ===== START =====
    init();

})();
