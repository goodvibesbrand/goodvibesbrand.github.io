/**
 * ============================================
 * GOOD VIBES ONLY — SPA Router System
 * Client-side routing with History API
 * Supports: /, /about, /quote/:id, /category/:name
 * ============================================
 */

(function() {
    'use strict';

    // ===== ROUTER STATE =====
    const state = {
        currentPage: 'home',
        previousPage: null,
        routeParams: {},
        isTransitioning: false,
        historyStack: [],
        pendingAnchor: null  // Store anchor to scroll after navigation
    };

    // ===== ROUTE DEFINITIONS =====
    const routes = {
        '/': {
            name: 'home',
            title: 'Good Vibes Only | Daily Positive Quotes & Motivation',
            description: 'Start your day with powerful positive quotes. Good Vibes Only delivers handpicked motivational quotes to elevate your mindset.'
        },
        '/about': {
            name: 'about',
            title: 'About Us | Why Good Vibes Only — Our Story & Mission',
            description: 'Discover why Good Vibes exists. We\'re on a mission to spread positivity through curated daily quotes.'
        },
        '/quote/:id': {
            name: 'quote',
            title: null,  // Dynamic - set when resolved
            description: null,  // Dynamic - set when resolved
            isDynamic: true
        },
        '/category/:name': {
            name: 'category',
            title: null,
            description: null,
            isDynamic: true
        }
    };

    // ===== DOM REFERENCES =====
    let DOM = {};

    // ===== INITIALIZATION =====
    function init() {
        cacheDOM();
        interceptLinks();
        handlePopState();
        
        // Initial route resolution
        resolveRoute(window.location.pathname + window.location.search);
        
        console.log('✦ SPA Router — Initialized');
    }

    function cacheDOM() {
        DOM = {
            pages: document.querySelectorAll('[data-page]'),
            navLinks: document.querySelectorAll('[data-route]'),
            body: document.body,
            header: document.querySelector('.site-header'),
            footer: document.querySelector('.site-footer')
        };
    }

    // ===== URL PARSING & MATCHING =====
    
    /**
     * Parse current URL and extract route + optional anchor
     * Returns { path, anchor }
     */
    function parseURL(fullPath) {
        // Split off query string and hash
        const withoutQuery = fullPath.split('?')[0];
        
        // Extract anchor if present
        const parts = withoutQuery.split('#');
        const path = parts[0];
        const anchor = parts[1] || null;
        
        // Clean the path
        let cleanPath = path;
        
        // Ensure leading slash
        if (!cleanPath.startsWith('/') || cleanPath === '') cleanPath = '/';
        if (cleanPath !== '/' && !cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
        
        // Remove trailing slash (except root)
        if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
            cleanPath = cleanPath.slice(0, -1);
        }
        
        return { path: cleanPath, anchor };
    }

    /**
     * Match path against defined routes
     */
    function matchRoute(path) {
        // Direct match first
        if (routes[path]) {
            return { ...routes[path], params: {}, path };
        }

        // Dynamic route matching
        for (const [pattern, route] of Object.entries(routes)) {
            if (!route.isDynamic) continue;
            
            const regex = patternToRegex(pattern);
            const match = path.match(regex);
            
            if (match) {
                const params = extractParams(pattern, match);
                return { ...route, params, path };
            }
        }

        // 404 - fall back to home
        return { ...routes['/'], params: {}, path: '/' };
    }

    /**
     * Convert route pattern like '/quote/:id' to RegExp
     */
    function patternToRegex(pattern) {
        const paramNames = [];
        const regexString = pattern.replace(/:([^/]+)/g, (_, paramName) => {
            paramNames.push(paramName);
            return '([^/]+)';
        });
        return new RegExp(`^${regexString}$`);
    }

    /**
     * Extract parameter values from matched route
     */
    function extractParams(pattern, match) {
        const paramNames = [];
        pattern.replace(/:([^/]+)/g, (_, name) => paramNames.push(name));
        
        const params = {};
        paramNames.forEach((name, i) => {
            params[name] = decodeURIComponent(match[i + 1]);
        });
        
        return params;
    }

    // ===== NAVIGATION =====

    /**
     * Navigate to a new route (with optional anchor)
     */
    function navigate(path, options = {}) {
        if (state.isTransitioning) return Promise.resolve();
        
        const parsed = parseURL(path);
        const { path: cleanPath, anchor } = parsed;
        const route = matchRoute(cleanPath);
        
        // Store anchor for post-navigation scroll
        state.pendingAnchor = anchor || options.anchor || null;
        
        // Check if we're on the same page and just need to scroll to anchor
        if (route.name === state.currentPage && !options.force) {
            if (state.pendingAnchor) {
                scrollToAnchor(state.pendingAnchor);
                state.pendingAnchor = null;
            }
            return Promise.resolve();
        }

        state.isTransitioning = true;
        state.previousPage = state.currentPage;
        state.routeParams = route.params;

        // Build full URL for history (include anchor if present)
        const historyUrl = state.pendingAnchor ? `${cleanPath}#${state.pendingAnchor}` : cleanPath;

        return transitionTo(route, options)
            .then(() => {
                // Update browser history (unless replacing)
                if (!options.replace) {
                    window.history.pushState({ 
                        page: route.name, 
                        params: route.params,
                        anchor: state.pendingAnchor
                    }, '', historyUrl);
                } else {
                    window.history.replaceState({
                        page: route.name,
                        params: route.params,
                        anchor: state.pendingAnchor
                    }, '', historyUrl);
                }
                
                state.currentPage = route.name;
                state.isTransitioning = false;
                
                // Scroll to top first, then to anchor if present
                if (state.pendingAnchor) {
                    // Delay to ensure page transition is complete and DOM is ready
                    // Page transition takes ~350ms (250 exit + 100 gap), so wait a bit more
                    setTimeout(() => {
                        scrollToAnchor(state.pendingAnchor);
                        state.pendingAnchor = null;
                    }, 450);
                } else {
                    scrollToTop();
                }
                
                // Dispatch custom event
                dispatchRouteChange(route);
            })
            .catch(err => {
                console.error('Navigation error:', err);
                state.isTransitioning = false;
            });
    }

    /**
     * Resolve initial route on page load
     */
    function resolveRoute(url) {
        const parsed = parseURL(url.split('?')[0]);
        const { path: cleanPath, anchor } = parsed;
        const query = url.includes('?') ? url.split('?')[1] : '';
        const queryParams = new URLSearchParams(query);
        
        // Check for legacy ?quote=N parameter and redirect
        if (queryParams.has('quote')) {
            const quoteId = queryParams.get('quote');
            navigate(`/quote/${quoteId}`, { replace: true });
            return;
        }
        
        const route = matchRoute(cleanPath);
        state.currentPage = route.name;
        state.routeParams = route.params;
        state.pendingAnchor = anchor;

        // Show initial page without animation
        showPage(route.name, { animate: false });
        
        // Build history URL with anchor
        const historyUrl = anchor ? `${cleanPath}#${anchor}` : cleanPath;
        window.history.replaceState({
            page: route.name,
            params: route.params,
            anchor: anchor
        }, '', historyUrl);

        dispatchRouteChange(route);
        
        // Handle initial anchor scroll after a tick
        if (anchor) {
            setTimeout(() => scrollToAnchor(anchor), 100);
        }
    }

    // ===== PAGE TRANSITIONS =====

    /**
     * Handle animated transition between pages
     */
    function transitionTo(route, options = {}) {
        return new Promise((resolve) => {
            const currentPageEl = document.querySelector(`[data-page="${state.currentPage}"]`);
            const nextPageEl = document.querySelector(`[data-page="${route.name}"]`);
            
            if (!nextPageEl) {
                console.warn(`Page not found: ${route.name}`);
                resolve();
                return;
            }

            // Update active nav link
            updateActiveNav(route.name);

            if (!currentPageEl || options.animate === false || state.previousPage === null) {
                // First load or no animation needed
                hideAllPages();
                showPage(route.name, { animate: false });
                
                // Initialize page-specific content
                initPageContent(route);
                updateDocumentMeta(route);
                
                resolve();
                return;
            }

            // Animate out current page
            currentPageEl.classList.add('page-exit');
            currentPageEl.classList.remove('page-active');

            setTimeout(() => {
                hideAllPages();
                
                // Animate in new page
                showPage(route.name, { animate: true });
                
                // Initialize page-specific content
                initPageContent(route);
                updateDocumentMeta(route);

                setTimeout(() => {
                    resolve();
                }, 100);
            }, 250);
        });
    }

    /**
     * Show specific page
     */
    function showPage(pageName, options = {}) {
        const pageEl = document.querySelector(`[data-page="${pageName}"]`);
        if (!pageEl) return;

        pageEl.style.display = '';
        pageEl.classList.add('page-active');
        
        if (options.animate !== false) {
            pageEl.classList.add('page-enter');
            setTimeout(() => {
                pageEl.classList.remove('page-enter');
            }, 400);
        }

        // Trigger page-specific scroll animations
        triggerScrollAnimations(pageEl);
    }

    /**
     * Hide all pages
     */
    function hideAllPages() {
        DOM.pages.forEach(page => {
            page.style.display = 'none';
            page.classList.remove('page-active', 'page-enter', 'page-exit');
        });
    }

    /**
     * Initialize page-specific content based on route params
     */
    function initPageContent(route) {
        switch (route.name) {
            case 'quote':
                if (route.params.id && window.GoodVibesOnly) {
                    const quoteIndex = window.GoodVibesOnly.getQuotes().findIndex(
                        q => q.id === parseInt(route.params.id)
                    );
                    if (quoteIndex >= 0) {
                        window.GoodVibesOnly.showQuote(quoteIndex);
                        // Scroll to quote on home page
                        setTimeout(() => {
                            const quoteSection = document.getElementById('quote-of-the-day');
                            if (quoteSection) {
                                quoteSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }, 100);
                    }
                }
                break;
                
            case 'category':
                if (route.params.name && window.GoodVibesOnly) {
                    window.GoodVibesOnly.getByCategory(route.params.name);
                }
                break;
        }
    }

    // ===== META TAG UPDATES =====

    /**
     * Update document meta tags for SEO/social sharing
     */
    function updateDocumentMeta(route) {
        let title = route.title;
        let description = route.description;

        // Dynamic meta for quote pages
        if (route.name === 'quote' && route.params.id && window.GoodVibesOnly) {
            const quotes = window.GoodVibesOnly.getQuotes();
            const quote = quotes.find(q => q.id === parseInt(route.params.id));
            
            if (quote) {
                title = `"${quote.text.substring(0, 60)}..." — ${quote.author} | Good Vibes Only`;
                description = `${quote.text} — ${quote.author}. Your daily dose of positivity from Good Vibes Only.`;
                
                // Update OG/Twitter tags for social cards
                updateSocialMeta(quote);
            }
        }

        // Update basic meta
        document.title = title || 'Good Vibes Only';
        updateMetaTag('meta[name="description"]', 'content', description);
        updateMetaTag('meta[property="og:title"]', 'content', title);
        updateMetaTag('meta[property="og:description"]', 'content', description);
        updateMetaTag('meta[name="twitter:title"]', 'content', title);
        updateMetaTag('meta[name="twitter:description"]', 'content', description);
        
        // Update canonical URL
        const canonicalUrl = `${window.location.origin}${window.location.pathname}`;
        updateMetaTag('link[rel="canonical"]', 'href', canonicalUrl);
        updateMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
        updateMetaTag('meta[name="twitter:url"]', 'content', canonicalUrl);
    }

    /**
     * Update social media meta tags for shared quotes
     */
    function updateSocialMeta(quote) {
        // Generate OG image URL (could point to dynamic image generator)
        const ogImage = `${window.location.origin}/img/og-quote.jpg?id=${quote.id}`;
        
        updateMetaTag('meta[property="og:image"]', 'content', ogImage);
        updateMetaTag('meta[property="og:image:alt"]', 'content', `"${quote.text.substring(0, 80)}" — ${quote.author}`);
        updateMetaTag('meta[name="twitter:image"]', 'content', ogImage);
        
        // Update OG type to article for individual quotes
        updateMetaTag('meta[property="og:type"]', 'content', 'article');
    }

    /**
     * Helper to update or create meta tag
     */
    function updateMetaTag(selector, attr, value) {
        let tag = document.querySelector(selector);
        if (tag) {
            tag.setAttribute(attr, value);
        }
    }

    // ===== NAVIGATION UI =====

    /**
     * Update active state in navigation
     * Note: Quote of the Day link ALWAYS keeps its styling (never removes)
     */
    function updateActiveNav(pageName) {
        DOM.navLinks.forEach(link => {
            const linkRoute = link.getAttribute('data-route');
            
            // Quote of the Day button keeps its style permanently — never remove it
            if (linkRoute === '/#quote-of-the-day') {
                link.classList.add('active');
                return;
            }
            
            link.classList.toggle('active', linkRoute === `/${pageName}` || 
                (pageName === 'quote' && linkRoute === '/') ||
                (pageName === 'category' && linkRoute === '/'));
        });
    }

    /**
     * Intercept all internal links for SPA navigation
     * Handles: routes, routes+anchors (#), same-page anchors
     */
    function interceptLinks() {
        document.addEventListener('click', (e) => {
            // Check for data-route links FIRST (our SPA navigation)
            const routeLink = e.target.closest('[data-route]');
            if (routeLink) {
                const navHref = routeLink.getAttribute('data-route');
                
                // Only prevent default for internal routes
                if (navHref && (navHref.startsWith('/') || navHref.startsWith('#'))) {
                    e.preventDefault();
                    
                    // Handle pure same-page anchors
                    if (navHref.startsWith('#') && !navHref.startsWith('#!')) {
                        const anchorId = navHref.substring(1);
                        if (anchorId) {
                            scrollToAnchor(anchorId);
                            window.history.replaceState(
                                window.history.state || {}, 
                                '', 
                                `${window.location.pathname}${window.location.search}${navHref}`
                            );
                        }
                        return;
                    }
                    
                    // Navigate via router
                    navigate(navHref);
                }
                return;
            }
            
            // Fall back to regular href links
            const link = e.target.closest('a[href]');
            if (!link) return;

            const href = link.getAttribute('href');
            
            // Skip external links, non-HTTP, and special links
            if (!href || 
                href.startsWith('http') || 
                href.startsWith('//') ||
                href.startsWith('mailto:') ||
                href.startsWith('tel:') ||
                link.hasAttribute('download') ||
                link.hasAttribute('target')) {
                return;
            }
            
            // Handle pure same-page anchors (just #id)
            if (href.startsWith('#') && !href.startsWith('#!')) {
                const anchorId = href.substring(1);
                if (anchorId) {
                    e.preventDefault();
                    scrollToAnchor(anchorId);
                    // Update URL hash without triggering navigation
                    window.history.replaceState(
                        window.history.state || {}, 
                        '', 
                        `${window.location.pathname}${window.location.search}${href}`
                    );
                }
                return;
            }
            
            // Check if this is a route with anchor (like /#archive or /about#mission)
            if (href.match(/^\/(#.*)?$/)) {
                e.preventDefault();
                navigate(href);
                return;
            }
            
            // Handle other internal paths
            if (!href.startsWith('/') && href !== '') {
                return;  // Let browser handle it
            }

            // Prevent default and navigate via router
            e.preventDefault();
            navigate(href);
        });
    }

    /**
     * Handle browser back/forward buttons
     */
    function handlePopState() {
        window.addEventListener('popstate', (event) => {
            if (event.state) {
                state.routeParams = event.state.params || {};
                const route = matchRoute(window.location.pathname);
                const anchor = event.state.anchor || window.location.hash.substring(1) || null;
                
                transitionTo(route, { force: true }).then(() => {
                    state.currentPage = route.name;
                    updateActiveNav(route.name);
                    
                    // Handle anchor on popstate
                    if (anchor) {
                        setTimeout(() => scrollToAnchor(anchor), 100);
                    }
                    
                    dispatchRouteChange(route);
                });
            }
        });
        
        // Also listen for hash changes (for same-page anchor navigation)
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                scrollToAnchor(hash);
            }
        });
    }

    // ===== UTILITIES =====

    /**
     * Smooth scroll to top of page
     */
    function scrollToTop() {
        // If we're in an iframe, scroll the parent too
        if (window.parent !== window) {
            window.parent.scrollTo({ top: 0, behavior: 'smooth' });
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    /**
     * Scroll to specific anchor element
     */
    function scrollToAnchor(anchorId) {
        if (!anchorId) return;
        
        // Try to find element by ID
        let target = document.getElementById(anchorId);
        
        // Fallback: try finding by name attribute
        if (!target) {
            target = document.querySelector(`[name="${anchorId}"]`);
        }
        
        if (target) {
            // Small delay to ensure page is fully rendered
            requestAnimationFrame(() => {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start'
                });
                
                // Update focus for accessibility
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            });
        } else {
            console.warn(`Anchor not found: #${anchorId}`);
            // Fall back to scrolling to top
            scrollToTop();
        }
    }

    /**
     * Trigger Intersection Observer animations within a container
     */
    function triggerScrollAnimations(container) {
        const elements = container.querySelectorAll('.animate-on-scroll');
        
        // Use setTimeout to allow DOM to settle before triggering
        setTimeout(() => {
            elements.forEach(el => {
                el.classList.add('visible');
            });
        }, 50);
        
        // Also trigger stagger animations
        const staggerContainers = container.querySelectorAll('.stagger-children');
        staggerContainers.forEach(container => {
            container.classList.add('visible');
        });
    }

    /**
     * Dispatch custom route change event
     */
    function dispatchRouteChange(route) {
        const event = new CustomEvent('routechange', {
            detail: {
                page: route.name,
                params: route.params,
                previousPage: state.previousPage
            }
        });
        document.dispatchEvent(event);
    }

    // ===== PUBLIC API =====
    window.GVRouter = {
        navigate,
        getCurrentPage: () => state.currentPage,
        getParams: () => state.routeParams,
        getPreviousPage: () => state.previousPage,
        goBack: () => window.history.back(),
        generateQuoteUrl: (quoteId) => `/quote/${quoteId}`,
        generateCategoryUrl: (categoryName) => `/category/${encodeURIComponent(categoryName)}`,
        scrollToAnchor,
        /**
         * Navigate to home page with optional anchor
         * @param {string} [anchor] - Section ID to scroll to (e.g., 'archive', 'subscribe')
         */
        goToHome: (anchor) => {
            navigate(anchor ? `/#${anchor}` : '/');
        },
        /**
         * Navigate to about page with optional anchor
         * @param {string} [anchor] - Section ID to scroll to
         */
        goToAbout: (anchor) => {
            navigate(anchor ? `/about#${anchor}` : '/about');
        }
    };

    // ===== INITIALIZE ON DOM READY =====
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
