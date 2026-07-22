/**
 * ============================================
 * GOOD VIBES ONLY — Main Application
 * Quote Engine, Sharing, SEO & Interactions
 * ============================================
 */

(function() {
    'use strict';

    // ===== STATE MANAGEMENT =====
    const state = {
        currentQuote: null,
        currentQuoteIndex: -1,
        isAnimating: false,
        quotes: window.QUOTES_DB || [],
        categories: window.CATEGORIES || {},
        currentLayout: 1,  // 1 = Neobrutalism (default), 2 = Clean Blue Minimalist
        currentVibe: 'all'  // Current selected vibe filter
    };

    // ===== DOM ELEMENTS =====
    const DOM = {
        quoteText: document.getElementById('quote-text'),
        quoteAuthor: document.getElementById('quote-author'),
        quoteCategory: document.getElementById('quote-category'),
        quoteNumber: document.getElementById('quote-number'),
        quoteDate: document.getElementById('quote-date'),
        quoteCard: document.getElementById('quote-card'),
        newQuoteBtn: document.getElementById('new-quote-btn'),
        copyLinkBtn: document.getElementById('copy-link-btn'),
        downloadBtn: document.getElementById('download-btn'),
        toast: document.getElementById('toast'),
        toastMessage: document.getElementById('toast-message'),
        currentYear: document.getElementById('current-year'),
        mobileMenuToggle: document.querySelector('.mobile-menu-toggle'),
        mainNav: document.querySelector('.main-nav'),
        shareButtons: document.querySelectorAll('.btn-share'),
        categoryCards: document.querySelectorAll('.category-card'),
        vibeButtons: document.querySelectorAll('.vibe-btn'),
        logoToggle: document.getElementById('logo-toggle'),
        layout1: document.getElementById('layout-1'),
        layout2: document.getElementById('layout-2')
    };

    // ===== INITIALIZATION =====
    function init() {
        setCurrentYear();
        setTodaysDate();
        loadDailyQuote();
        bindEvents();
        initAnimations();
        updateMetaTags();
        
        console.log('✦ Good Vibes Only — Initialized');
    }

    // ===== QUOTE ENGINE =====

    /**
     * Get deterministic daily quote based on date
     */
    function getDailyQuoteIndex() {
        const today = new Date();
        const dayOfYear = Math.floor(
            (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
        );
        return dayOfYear % state.quotes.length;
    }

    /**
     * Load today's quote or a random one
     */
    function loadDailyQuote(forceRandom = false) {
        let index;
        
        if (state.currentVibe === 'all') {
            // No filter - get from all quotes
            if (forceRandom) {
                do {
                    index = Math.floor(Math.random() * state.quotes.length);
                } while (index === state.currentQuoteIndex && state.quotes.length > 1);
            } else {
                index = getDailyQuoteIndex();
            }
        } else {
            // Filter by current vibe
            const filteredQuotes = state.quotes.filter(q => q.category === state.currentVibe);
            if (filteredQuotes.length === 0) {
                // Fallback to all quotes if category is empty
                state.currentVibe = 'all';
                updateVibeButtonStates();
                return loadDailyQuote(forceRandom);
            }
            
            if (forceRandom) {
                const randomFilteredIndex = Math.floor(Math.random() * filteredQuotes.length);
                index = state.quotes.indexOf(filteredQuotes[randomFilteredIndex]);
            } else {
                // Deterministic selection within category
                const dayOfYear = Math.floor(
                    (new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
                );
                const filteredIndex = dayOfYear % filteredQuotes.length;
                index = state.quotes.indexOf(filteredQuotes[filteredIndex]);
            }
        }
        
        displayQuote(index);
    }

    /**
     * Handle vibe button click - filter quotes by category
     */
    function handleVibeSelect(vibe) {
        state.currentVibe = vibe;
        updateVibeButtonStates();
        
        // Load a new quote from the selected vibe
        loadDailyQuote(true);
        
        // Scroll to quote section
        scrollToQuoteSection();
        
        trackEvent('vibe_select', { vibe: vibe });
    }

    /**
     * Update active states on vibe buttons
     */
    function updateVibeButtonStates() {
        DOM.vibeButtons.forEach(btn => {
            const isActive = btn.dataset.vibe === state.currentVibe;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive.toString());
        });
    }

    /**
     * Display quote at given index with animation
     */
    function displayQuote(index) {
        if (state.isAnimating || !state.quotes[index]) return;
        
        // Safety: ensure DOM elements exist
        if (!DOM.quoteCard || !DOM.quoteText) {
            console.warn('DOM elements not ready, retrying...');
            setTimeout(() => displayQuote(index), 100);
            return;
        }
        
        state.isAnimating = true;
        state.currentQuoteIndex = index;
        state.currentQuote = state.quotes[index];

        // Animate out
        DOM.quoteCard.classList.add('fade-out');
        
        setTimeout(() => {
            // Update content
            DOM.quoteText.textContent = state.currentQuote.text;
            DOM.quoteAuthor.textContent = `— ${state.currentQuote.author}`;
            
            const categoryInfo = state.categories[state.currentQuote.category];
            DOM.quoteCategory.textContent = `${categoryInfo?.icon || '✦'} ${categoryInfo?.name || state.currentQuote.category}`;
            DOM.quoteNumber.textContent = `Quote #${String(state.currentQuote.id).padStart(3, '0')} of ${state.quotes.length}`;

            // Update page title for SEO/sharing
            updatePageTitle();
            
            // Animate in
            DOM.quoteCard.classList.remove('fade-out');
            DOM.quoteCard.classList.add('fade-in');
            
            setTimeout(() => {
                DOM.quoteCard.classList.remove('fade-in');
                state.isAnimating = false;
            }, 400);
            
        }, 200);
    }

    /**
     * Get random quote from specific category
     */
    function getCategoryQuote(category) {
        const filteredQuotes = state.quotes.filter(q => q.category === category);
        if (filteredQuotes.length === 0) return loadDailyQuote(true);
        
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const originalIndex = state.quotes.indexOf(filteredQuotes[randomIndex]);
        displayQuote(originalIndex);
        
        // Scroll to quote section
        scrollToQuoteSection();
    }

    // ===== SHARING FUNCTIONALITY =====

    /**
     * Generate share URL for current quote (SPA-friendly)
     * Uses clean /quote/:id route for social sharing
     */
    function getShareUrl() {
        if (!state.currentQuote) return window.location.href;
        
        // Use SPA route for cleaner shareable URLs
        if (window.GVRouter) {
            return `${window.location.origin}${window.GVRouter.generateQuoteUrl(state.currentQuote.id)}`;
        }
        
        // Fallback for when router isn't loaded yet
        return `${window.location.origin}/quote/${state.currentQuote.id}`;
    }

    /**
     * Generate share text for social platforms
     */
    function getShareText(platform) {
        if (!state.currentQuote) return '';
        
        const quote = state.currentQuote.text.substring(0, 200);
        const author = state.currentQuote.author;
        const hashtag = '#GoodVibesOnly';
        
        switch (platform) {
            case 'twitter':
                return `"${quote}" — ${author} ${hashtag}\n\n✦ GoodVibesOnly.com`;
            
            case 'facebook':
                return `"${quote}" — ${author} ${hashtag}`;
            
            case 'linkedin':
                return `${hashtag} Daily Inspiration:\n\n"${quote}"\n\n— ${author}\n\n🌟 Start your day with positivity at GoodVibesOnly.com`;
            
            case 'whatsapp':
                return `*"${quote}"*\n\n— ${author}\n\n${hashtag} ✦ GoodVibesOnly.com`;
            
            default:
                return `"${quote}" — ${author}`;
        }
    }

    /**
     * Share to specific platform
     */
    function shareToPlatform(platform) {
        const text = getShareText(platform);
        const url = getShareUrl();
        let shareUrl;

        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
                break;
            
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
                break;
            
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                break;
            
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
                break;
            
            default:
                return;
        }

        openPopup(shareUrl, platform);
        trackShareEvent(platform);
    }

    /**
     * Open share popup window
     */
    function openPopup(url, platform) {
        const width = platform === 'whatsapp' ? 600 : 550;
        const height = platform === 'whatsapp' ? 500 : 420;
        const left = (screen.width / 2) - (width / 2);
        const top = (screen.height / 2) - (height / 2);

        window.open(
            url,
            `share-${platform}`,
            `width=${width},height=${height},top=${top},left=${left},toolbar=no,menubar=no,scrollbars=no,resizable=yes`
        );
    }

    /**
     * Copy quote link to clipboard
     */
    async function copyLink() {
        const url = getShareUrl();
        
        try {
            await navigator.clipboard.writeText(url);
            showToast('✓ Link copied to clipboard!');
            trackEvent('copy_link', { quote_id: state.currentQuote?.id });
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = url;
            textArea.style.position = 'fixed';
            textArea.style.left = '-9999px';
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showToast('✓ Link copied to clipboard!');
        }
    }

    /**
     * Download quote as image - Canvas-based with Poppins font
     */
    async function downloadAsImage() {
        if (!state.currentQuote) {
            showToast('⚠ No quote loaded yet');
            return;
        }
        
        showToast('⏳ Generating beautiful image...');
        
        try {
            // Wait a tick for toast to show
            await new Promise(resolve => setTimeout(resolve, 100));
            
            // Create offscreen canvas
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Social media optimized dimensions (1080x1080 for Instagram, also works for Twitter)
            canvas.width = 1200;
            canvas.height = 1200;
            
            const W = canvas.width;
            const H = canvas.height;
            
            // ===== BACKGROUND GRADIENT =====
            const bgGradient = ctx.createLinearGradient(0, 0, W, H);
            bgGradient.addColorStop(0, '#00aaff');      // Brand blue
            bgGradient.addColorStop(0.5, '#0090DD');   // Medium blue
            bgGradient.addColorStop(1, '#0066AA');      // Deep blue
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, W, H);
            
            // ===== SUBTLE PATTERN OVERLAY =====
            ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
            for (let i = 0; i < 20; i++) {
                const x = Math.random() * W;
                const y = Math.random() * H;
                const r = Math.random() * 100 + 50;
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fill();
            }
            
            // ===== QUOTE TEXT WITH WRAPPING QUOTES =====
            ctx.fillStyle = '#FFFFFF';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            // Try system fonts that approximate Poppins bold
            const fontStack = '"Poppins", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif';
            
            // Calculate font size based on quote length
            const quoteLength = state.currentQuote.text.length;
            let fontSize = 56;
            if (quoteLength > 150) fontSize = 46;
            if (quoteLength > 200) fontSize = 40;
            if (quoteLength > 280) fontSize = 34;
            
            ctx.font = `700 ${fontSize}px ${fontStack}`;
            
            // Word wrap logic
            const maxWidth = W - 160;
            const words = state.currentQuote.text.split(' ');
            let lines = [];
            let currentLine = '';
            
            words.forEach(word => {
                const testLine = currentLine + word + ' ';
                const metrics = ctx.measureText(testLine);
                
                if (metrics.width > maxWidth && currentLine !== '') {
                    lines.push(currentLine.trim());
                    currentLine = word + ' ';
                } else {
                    currentLine = testLine;
                }
            });
            lines.push(currentLine.trim());
            
            // Draw quote text (vertically centered in upper-middle area)
            const lineHeight = fontSize * 1.5;
            const totalTextHeight = lines.length * lineHeight;
            const textStartY = (H * 0.42) - (totalTextHeight / 2) + (lineHeight / 2);
            
            // ===== WRAPPING DECORATIVE QUOTES =====
            // Large curly quotes that visually frame the quote text (like bookends)
            ctx.save();
            ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
            ctx.font = '500px Georgia, serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            // Opening quote: top-left corner
            ctx.fillText('\u201C', W * 0.10, H * 0.405);
            // Closing quote: bottom-right corner
            ctx.fillText('\u201D', W * 0.90, H * 0.69);
            ctx.restore();
            
            lines.forEach((line, index) => {
                const y = textStartY + (index * lineHeight);
                
                // Text shadow for readability
                ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
                ctx.shadowBlur = 8;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 2;
                
                ctx.fillText(line, W / 2, y);
            });
            
            // Reset shadow
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            
            // ===== AUTHOR =====
            const authorY = textStartY + totalTextHeight + 60;
            
            // Author background pill
            const authorText = `— ${state.currentQuote.author}`;
            ctx.font = `600 28px ${fontStack}`;
            const authorWidth = ctx.measureText(authorText).width + 50;
            const authorHeight = 50;
            const authorX = (W - authorWidth) / 2;
            const authorYPos = authorY - authorHeight / 2;
            
            // Pill background
            ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
            roundRect(ctx, authorX, authorYPos, authorWidth, authorHeight, 25);
            ctx.fill();
            
            // Author text
            ctx.fillStyle = '#0088cc';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(authorText, W / 2, authorY);
            
            // ===== PROFESSIONAL BRANDING FOOTER BAR =====
            const footerBarY = H - 90;
            const footerBarHeight = 90;
            
            // Footer background bar (subtle dark overlay)
            ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
            roundRect(ctx, 0, footerBarY, W, footerBarHeight, 0);
            ctx.fill();
            
            // Top edge line for polish
            ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.fillRect(0, footerBarY, W, 1);
            
            // Brand logo mark (centered with balanced stars)
            ctx.save();
            ctx.fillStyle = '#FFFFFF';
            ctx.font = `700 20px ${fontStack}`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('✦ Good Vibes Only ✦', W / 2, footerBarY + 32);
            ctx.restore();
            
            // Website URL watermark (center/bottom - prominent)
            ctx.save();
            ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
            ctx.font = `500 18px ${fontStack}`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('goodvibesonlybrand.github.io', W / 2, footerBarY + 62);
            ctx.restore();
            

            // Subtle corner watermark (top-right area) - decorative brand element
            ctx.save();
            ctx.globalAlpha = 0.08;
            ctx.fillStyle = '#FFFFFF';
            ctx.font = `800 120px ${fontStack}`;
            ctx.textAlign = 'right';
            ctx.textBaseline = 'top';
            ctx.fillText('GVO', W - 30, 25);
            ctx.restore();
            
            // Centered brand watermark (GOOD / VIBES / ONLY)
            ctx.save();
            ctx.globalAlpha = 0.04;
            ctx.fillStyle = '#FFFFFF';
            ctx.font = `900 250px ${fontStack}`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.letterSpacing = '-1.4px';
            const centerLines = ['GOOD', 'VIBES', 'ONLY'];
            const centerLineHeight = 225;
            const centerStartY = H / 2 - (centerLineHeight * 1);
            centerLines.forEach((line, i) => {
                ctx.fillText(line, W / 2, centerStartY + (i * centerLineHeight));
            });
            ctx.restore();
            
            // ===== CONVERT TO DOWNLOADABLE IMAGE (Blob method - more reliable) =====
            const fileName = `good-vibes-only-${state.currentQuote.author.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.png`;
            
            try {
                // Method 1: Blob + createObjectURL (most reliable for iframes)
                const blob = await new Promise((resolve, reject) => {
                    canvas.toBlob((b) => {
                        if (b) resolve(b);
                        else reject(new Error('Canvas toBlob failed'));
                    }, 'image/png', 1.0);
                });
                
                const blobUrl = URL.createObjectURL(blob);
                
                // Create download trigger
                const link = document.createElement('a');
                link.download = fileName;
                link.href = blobUrl;
                link.style.display = 'none';
                
                // Append to body, click, then cleanup
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Revoke blob URL after a delay (gives browser time to initiate download)
                setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
                
                showToast('✓ Image saved! Check your downloads folder 📸');
                
            } catch (blobError) {
                console.warn('Blob method failed, trying dataURL fallback:', blobError);
                
                // Method 2: dataURL fallback (for older browsers)
                const dataUrl = canvas.toDataURL('image/png', 1.0);
                
                // Open in new tab as last resort (user can right-click save)
                const newTab = window.open('', '_blank');
                if (newTab) {
                    newTab.document.write(`
                        <html>
                            <head><title>Good Vibes Only - Quote Image</title></head>
                            <body style="margin:0;display:flex;justify-content:center;align-items:center;min-height:100vh;background:#00aaff;">
                                <img src="${dataUrl}" style="max-width:100%;height:auto;" alt="Quote Image"/>
                                <div style="position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.7);color:white;padding:12px 24px;border-radius:8px;font-family:sans-serif;">
                                    Right-click image → Save as... &nbsp;|&nbsp; ${fileName}
                                </div>
                            </body>
                        </html>
                    `);
                    newTab.document.close();
                    showToast('📸 Opened in new tab — Right-click → Save image as...');
                } else {
                    // Popup blocked — copy to clipboard alternative
                    showToast('⚠ Download blocked. Try: Right-click quote → Save image, or allow popups.');
                }
            }
            trackEvent('download_image', { 
                quote_id: state.currentQuote.id,
                format: 'png',
                size: '1200x1200'
            });
            
        } catch (error) {
            console.error('Download failed:', error);
            showToast('⚠ Download failed. Try taking a screenshot instead.');
        }
    }

    /**
     * Helper: Draw rounded rectangle
     */
    function roundRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    }

    // ===== SEO & META TAG UPDATES =====

    /**
     * Update page title dynamically
     */
    function updatePageTitle() {
        if (!state.currentQuote) return;
        
        const author = state.currentQuote.author;
        const preview = state.currentQuote.text.substring(0, 60) + '...';
        document.title = `"${preview}" — ${author} | Good Vibes Only`;
    }

    /**
     * Update Open Graph and Twitter Card meta tags
     */
    function updateMetaTags() {
        if (!state.currentQuote) return;
        
        const quote = state.currentQuote.text;
        const author = state.currentQuote.author;
        const description = `"${quote.substring(0, 100)}" — ${author}. Your daily dose of positivity.`;
        
        // Update OG tags
        setMetaTag('og:description', description);
        setMetaTag('og:title', `Good Vibes Only | "${quote.substring(0, 50)}..."`);
        
        // Update Twitter tags
        setMetaTag('twitter:description', description);
        setMetaTag('twitter:title', `Good Vibes Only | "${quote.substring(0, 50)}..."`);
        
        // Update canonical URL with quote ID (SPA route)
        const canonicalUrl = `${window.location.origin}/quote/${state.currentQuote.id}`;
        setMetaTag('og:url', canonicalUrl, 'property');
        document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
    }

    /**
     * Helper to set meta tag content
     */
    function setMetaTag(name, content, attr = 'name') {
        let tag = document.querySelector(`meta[${attr}="${name}"]`);
        if (tag) {
            tag.setAttribute('content', content);
        }
    }

    // ===== UTILITY FUNCTIONS =====

    /**
     * Show toast notification
     */
    function showToast(message, duration = 3000) {
        DOM.toastMessage.textContent = message;
        DOM.toast.hidden = false;
        DOM.toast.classList.add('visible');
        
        setTimeout(() => {
            DOM.toast.classList.remove('visible');
            setTimeout(() => {
                DOM.toast.hidden = true;
            }, 300);
        }, duration);
    }

    /**
     * Set current year in footer
     */
    function setCurrentYear() {
        if (DOM.currentYear) {
            DOM.currentYear.textContent = new Date().getFullYear();
        }
    }

    /**
     * Set today's date in quote section
     */
    function setTodaysDate() {
        if (DOM.quoteDate) {
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            const today = new Date().toLocaleDateString('en-US', options);
            DOM.quoteDate.textContent = today;
            DOM.quoteDate.setAttribute('datetime', new Date().toISOString().split('T')[0]);
        }
    }

    /**
     * Scroll to quote section smoothly
     */
    function scrollToQuoteSection() {
        const section = document.getElementById('quote-of-the-day');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // ===== EVENT TRACKING (Analytics Placeholder) =====

    /**
     * Track custom events
     */
    function trackEvent(action, data = {}) {
        // Google Analytics / Plausible / etc.
        if (typeof gtag === 'function') {
            gtag('event', action, data);
        }
        
        // Console for development
        console.log('📊 Event:', action, data);
    }

    /**
     * Track share events specifically
     */
    function trackShareEvent(platform) {
        trackEvent('share', {
            method: platform,
            quote_id: state.currentQuote?.id,
            category: state.currentQuote?.category
        });
        showToast(`Opening ${platform.charAt(0).toUpperCase() + platform.slice(1)}...`);
    }

    // ===== ANIMATIONS =====

    /**
     * Initialize scroll-triggered animations
     */
    function initAnimations() {
        // Add fade animation styles if not present
        if (!document.getElementById('animation-styles')) {
            const style = document.createElement('style');
            style.id = 'animation-styles';
            style.textContent = `
                .quote-card {
                    transition: opacity 0.2s ease, transform 0.2s ease;
                }
                .quote-card.fade-out {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                .quote-card.fade-in {
                    opacity: 0;
                    transform: translateY(10px);
                    animation: fadeInUp 0.4s ease forwards;
                }
                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                /* Intersection Observer animations */
                .animate-on-scroll {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.6s ease, transform 0.6s ease;
                }
                .animate-on-scroll.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                /* Staggered children */
                .stagger-children > * {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.4s ease, transform 0.4s ease;
                }
                .stagger-children.visible > *:nth-child(1) { transition-delay: 0ms; }
                .stagger-children.visible > *:nth-child(2) { transition-delay: 100ms; }
                .stagger-children.visible > *:nth-child(3) { transition-delay: 200ms; }
                .stagger-children.visible > *:nth-child(4) { transition-delay: 300ms; }
                .stagger-children.visible > *:nth-child(5) { transition-delay: 400ms; }
                .stagger-children.visible > *:nth-child(6) { transition-delay: 500ms; }
                .stagger-children.visible > * {
                    opacity: 1;
                    transform: translateY(0);
                }
            `;
            document.head.appendChild(style);
        }

        // Setup intersection observer for scroll animations
        setupScrollAnimations();
    }

    /**
     * Setup Intersection Observer for scroll-triggered animations
     */
    function setupScrollAnimations() {
        const animatedElements = document.querySelectorAll(
            '.about-card, .category-card, .section-header, .subscribe-card'
        );

        animatedElements.forEach(el => el.classList.add('animate-on-scroll'));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => observer.observe(el));

        // Add stagger class to grids
        document.querySelectorAll('.about-grid, .category-grid').forEach(grid => {
            grid.classList.add('stagger-children');
        });
    }

    // ===== MOBILE NAVIGATION =====

    /**
     * Toggle mobile menu
     */
    function toggleMobileMenu() {
        const isOpen = DOM.mainNav.classList.toggle('open');
        DOM.mobileMenuToggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
        
        // Create/remove overlay
        let overlay = document.querySelector('.mobile-overlay');
        if (isOpen && !overlay) {
            overlay = document.createElement('div');
            overlay.className = 'mobile-overlay visible';
            overlay.addEventListener('click', toggleMobileMenu);
            document.body.appendChild(overlay);
        } else if (overlay) {
            overlay.classList.remove('visible');
            setTimeout(() => overlay.remove(), 300);
        }
    }

    // Close mobile menu on link click
    function closeMobileMenuOnLinkClick(e) {
        if (e.target.classList.contains('nav-link') && DOM.mainNav.classList.contains('open')) {
            toggleMobileMenu();
        }
    }

    // ===== EVENT BINDING =====

    /**
     * Bind all event listeners
     */
    function bindEvents() {
        // New quote button
        if (DOM.newQuoteBtn) {
            DOM.newQuoteBtn.addEventListener('click', () => loadDailyQuote(true));
        }

        // Copy link button
        if (DOM.copyLinkBtn) {
            DOM.copyLinkBtn.addEventListener('click', copyLink);
        }

        // Download button
        if (DOM.downloadBtn) {
            DOM.downloadBtn.addEventListener('click', downloadAsImage);
        }

        // Share buttons
        DOM.shareButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const platform = btn.dataset.platform;
                if (platform) shareToPlatform(platform);
            });
        });

        // Category cards
        DOM.categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                if (category) getCategoryQuote(category);
            });
        });

        // Vibe selector buttons
        DOM.vibeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const vibe = btn.dataset.vibe;
                if (vibe) handleVibeSelect(vibe);
            });
        });

        // Mobile menu toggle
        if (DOM.mobileMenuToggle) {
            DOM.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        }

        // Close mobile menu on nav link click
        if (DOM.mainNav) {
            DOM.mainNav.addEventListener('click', closeMobileMenuOnLinkClick);
        }

        // Keyboard navigation
        document.addEventListener('keydown', handleKeyboard);

        // Form submission (prevent default for demo)
        const subscribeForm = document.querySelector('.subscribe-form');
        if (subscribeForm) {
            subscribeForm.addEventListener('submit', handleSubscribe);
        }

        // Handle URL parameters for shared quotes
        handleSharedQuote();
        
        // Layout toggle - click logo icon only (not text)
        if (DOM.logoToggle) {
            DOM.logoToggle.addEventListener('click', handleLayoutToggle);
            DOM.logoToggle.style.cursor = 'pointer';
        }
        
        // Restore saved layout preference
        restoreLayoutPreference();
    }

    /**
     * Handle keyboard navigation
     */
    function handleKeyboard(e) {
        // Space or N for new quote when focused on quote card
        if ((e.code === 'Space' || e.key === 'n' || e.key === 'N') && 
            (document.activeElement === DOM.quoteCard || DOM.quoteCard.contains(document.activeElement))) {
            e.preventDefault();
            loadDailyQuote(true);
        }
        
        // Escape to close mobile menu
        if (e.key === 'Escape' && DOM.mainNav.classList.contains('open')) {
            toggleMobileMenu();
        }
    }

    /**
     * Handle newsletter subscription form
     */
    function handleSubscribe(e) {
        e.preventDefault();
        const emailInput = document.getElementById('email-input');
        const email = emailInput?.value;
        
        if (email && email.includes('@')) {
            showToast('🎉 Welcome to the good vibes club! Check your inbox soon.');
            emailInput.value = '';
            trackEvent('newsletter_subscribe', { email_hash: btoa(email).substring(0, 8) });
        } else {
            showToast('📧 Please enter a valid email address');
        }
    }

    /**
     * Handle shared quote from URL parameter
     */
    function handleSharedQuote() {
        const params = new URLSearchParams(window.location.search);
        const quoteId = parseInt(params.get('quote'), 10);
        
        if (quoteId) {
            const index = state.quotes.findIndex(q => q.id === quoteId);
            if (index !== -1) {
                displayQuote(index);
                scrollToQuoteSection();
            }
        }
    }

    // ===== LAYOUT TOGGLE SYSTEM =====

    /**
     * Handle layout toggle when logo icon is clicked
     * Only the icon (✦) triggers this, not the text
     */
    function handleLayoutToggle(e) {
        // Prevent the parent <a> tag from navigating
        e.preventDefault();
        e.stopPropagation();
        
        // Toggle between layouts
        const newLayout = state.currentLayout === 1 ? 2 : 1;
        setLayout(newLayout);
        
        // Visual feedback on icon
        if (DOM.logoToggle) {
            DOM.logoToggle.classList.add('layout-toggle-active');
            setTimeout(() => {
                DOM.logoToggle.classList.remove('layout-toggle-active');
            }, 600);
        }
    }

    /**
     * Set active layout with smooth transition
     */
    function setLayout(layoutNum) {
        if (!DOM.layout1 || !DOM.layout2) return;
        
        const body = document.body;
        
        // Start fade out
        body.classList.add('layout-transitioning');
        
        // Brief delay for fade-out, then switch and fade in
        setTimeout(() => {
            state.currentLayout = layoutNum;
            
            if (layoutNum === 1) {
                // Neobrutalism Layout
                DOM.layout1.disabled = false;
                DOM.layout2.disabled = true;
                showToast('🎨 Layout: Bold Neobrutalism');
                console.log('🎨 Switched to Layout 1: Bold Neobrutalism');
            } else {
                // Clean Blue Minimalist Layout
                DOM.layout1.disabled = true;
                DOM.layout2.disabled = false;
                showToast('💙 Layout: Clean Blue Minimalist');
                console.log('💙 Switched to Layout 2: Clean Blue Minimalist');
            }
            
            // Save preference
            saveLayoutPreference(layoutNum);
            
            // Track event
            trackEvent('layout_toggle', { 
                layout: layoutNum,
                layout_name: layoutNum === 1 ? 'neobrutalism' : 'minimalist_blue'
            });
            
            // Fade back in
            requestAnimationFrame(() => {
                body.classList.remove('layout-transitioning');
            });
        }, 150);
    }

    /**
     * Save layout preference to localStorage
     */
    function saveLayoutPreference(layout) {
        try {
            localStorage.setItem('gvo_layout', layout.toString());
        } catch (e) {
            console.warn('Could not save layout preference:', e);
        }
    }

    /**
     * Restore saved layout preference from localStorage
     */
    function restoreLayoutPreference() {
        try {
            const saved = localStorage.getItem('gvo_layout');
            if (saved !== null) {
                const layoutNum = parseInt(saved, 10);
                if (layoutNum === 1 || layoutNum === 2) {
                    setLayout(layoutNum);
                }
            }
        } catch (e) {
            console.warn('Could not restore layout preference:', e);
        }
    }

    // ===== SERVICE WORKER REGISTRATION (Offline Support) =====

    /**
     * Register service worker for offline capability
     */
    function registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(reg => console.log('✦ Service Worker registered'))
                .catch(err => console.log('✦ SW registration failed:', err));
        }
    }

    // ===== INITIALIZE ON DOM READY =====

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose public API for debugging and router integration
    window.GoodVibesOnly = {
        getQuote: () => state.currentQuote,
        getQuotes: () => state.quotes,
        showQuote: (index) => displayQuote(index),
        nextQuote: () => loadDailyQuote(true),
        getByCategory: (cat) => getCategoryQuote(cat),
        getState: () => state
    };

})();
