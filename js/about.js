/**
 * ============================================
 * GOOD VIBES ONLY — About Page Functionality
 * Animations, counters, interactions
 * ============================================
 */

(function() {
    'use strict';

    let animatedCounters = false;

    function init() {
        // Listen for route changes to init about page
        document.addEventListener('routechange', handleRouteChange);
        
        // Also init if we're already on about page
        if (window.GVRouter && window.GVRouter.getCurrentPage() === 'about') {
            initAboutPage();
        }
    }

    function handleRouteChange(e) {
        if (e.detail.page === 'about') {
            setTimeout(initAboutPage, 300); // Wait for transition
        }
    }

    function initAboutPage() {
        initCounterAnimations();
        initTimelineAnimations();
        initFloatingElements();
    }

    // ===== ANIMATED COUNTERS =====
    
    function initCounterAnimations() {
        if (animatedCounters) return;
        
        const counters = document.querySelectorAll('.stat-number[data-target]');
        if (!counters.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
        animatedCounters = true;
    }

    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out cubic)
            const eased = 1 - Math.pow(1 - progress, 3);
            
            const current = Math.round(start + (target - start) * eased);
            el.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // ===== TIMELINE ANIMATIONS =====
    
    function initTimelineAnimations() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('timeline-visible');
                    }, index * 150);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        timelineItems.forEach(item => observer.observe(item));
    }

    // ===== FLOATING DECORATIVE ELEMENTS =====
    
    function initFloatingElements() {
        const floats = document.querySelectorAll('.floating-element');
        
        floats.forEach((el, i) => {
            // Randomize animation delay and duration slightly
            const delay = (i * 0.5) + Math.random() * 2;
            const duration = 3 + Math.random() * 2;
            
            el.style.animationDelay = `${delay}s`;
            el.style.animationDuration = `${duration}s`;
        });
    }

    // ===== INITIALIZE =====
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
