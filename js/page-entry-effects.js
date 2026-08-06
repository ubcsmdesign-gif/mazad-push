(() => {
    const STYLE_ID = 'mazad-page-entry-effects';
    let revealObserver;

    const installStyles = () => {
        if (document.getElementById(STYLE_ID)) return;
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            [data-mazad-enter] {
                opacity: 0;
                translate: var(--mazad-enter-x, 0) var(--mazad-enter-y, 30px);
                scale: var(--mazad-enter-scale, 1);
                filter: blur(var(--mazad-enter-blur, 8px));
                will-change: opacity, translate, scale, filter;
            }

            .mazad-entry-running [data-mazad-enter] {
                animation: mazad-page-enter var(--mazad-enter-duration, 900ms)
                    cubic-bezier(.16, 1, .3, 1) var(--mazad-enter-delay, 0ms) both;
            }

            [data-mazad-scroll-reveal] {
                opacity: 0;
                translate: 0 42px;
                scale: .988;
                filter: blur(7px);
                transition:
                    opacity 820ms ease var(--mazad-reveal-delay, 0ms),
                    translate 920ms cubic-bezier(.16, 1, .3, 1) var(--mazad-reveal-delay, 0ms),
                    scale 920ms cubic-bezier(.16, 1, .3, 1) var(--mazad-reveal-delay, 0ms),
                    filter 780ms ease var(--mazad-reveal-delay, 0ms);
                will-change: opacity, translate, scale, filter;
            }

            [data-mazad-scroll-reveal].is-mazad-visible {
                opacity: 1;
                translate: 0 0;
                scale: 1;
                filter: blur(0);
            }

            @keyframes mazad-page-enter {
                0% {
                    opacity: 0;
                    translate: var(--mazad-enter-x, 0) var(--mazad-enter-y, 30px);
                    scale: var(--mazad-enter-scale, 1);
                    filter: blur(var(--mazad-enter-blur, 8px));
                }
                58% { opacity: 1; }
                100% {
                    opacity: 1;
                    translate: 0 0;
                    scale: 1;
                    filter: blur(0);
                }
            }

            @media (prefers-reduced-motion: reduce) {
                [data-mazad-enter],
                [data-mazad-scroll-reveal] {
                    opacity: 1 !important;
                    translate: none !important;
                    scale: 1 !important;
                    filter: none !important;
                    animation: none !important;
                    transition: none !important;
                }
            }
        `;
        document.head.appendChild(style);
    };

    const markEntry = (element, options = {}) => {
        if (!element) return;
        element.dataset.mazadEnter = '';
        element.style.setProperty('--mazad-enter-delay', `${options.delay || 0}ms`);
        element.style.setProperty('--mazad-enter-duration', `${options.duration || 900}ms`);
        element.style.setProperty('--mazad-enter-x', options.x || '0');
        element.style.setProperty('--mazad-enter-y', options.y || '30px');
        element.style.setProperty('--mazad-enter-scale', options.scale || '1');
        element.style.setProperty('--mazad-enter-blur', options.blur || '8px');
    };

    const markCopy = (container, startDelay = 90) => {
        if (!container) return;
        const children = [...container.children].filter(child => child.offsetParent !== null);
        children.forEach((child, index) => {
            markEntry(child, {
                delay: startDelay + index * 105,
                duration: 880 + Math.min(index, 3) * 45,
                x: '-34px',
                y: '22px'
            });
        });
    };

    const markScrollReveal = (elements) => {
        elements.filter(Boolean).forEach((element, index) => {
            if (element.hasAttribute('data-mazad-enter')) return;
            element.dataset.mazadScrollReveal = '';
            element.style.setProperty('--mazad-reveal-delay', `${(index % 3) * 80}ms`);
        });
    };

    const setupObserver = (root) => {
        revealObserver?.disconnect();
        const elements = [...root.querySelectorAll('[data-mazad-scroll-reveal]')];
        if (!elements.length) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
            elements.forEach(element => element.classList.add('is-mazad-visible'));
            return;
        }

        revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-mazad-visible');
                revealObserver.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
        elements.forEach(element => revealObserver.observe(element));
    };

    const initialize = () => {
        installStyles();
        const main = document.querySelector('main') || document.querySelector('.relative.z-10.pt-28');
        if (!main) return;

        main.classList.remove('mazad-entry-running');
        main.querySelectorAll('[data-mazad-enter]').forEach(element => {
            delete element.dataset.mazadEnter;
        });

        const platformHero = main.querySelector('.platform-hero');
        const businessHero = main.querySelector('.business-hero');
        const companyHero = main.querySelector('.company-hero');
        const marketsHero = document.querySelector('#interactive-world-section');

        if (platformHero) {
            markCopy(platformHero.firstElementChild, 80);
            markEntry(platformHero.querySelector('.platform-deck-stage'), {
                delay: 260, duration: 1100, x: '46px', y: '12px', scale: '.95', blur: '11px'
            });
            markScrollReveal([
                ...main.querySelectorAll('.platform-story-head, .platform-journey-panel')
            ]);
        } else if (businessHero) {
            markCopy(businessHero.firstElementChild, 80);
            markEntry(businessHero.querySelector('.growth-stage'), {
                delay: 270, duration: 1120, x: '48px', y: '14px', scale: '.95', blur: '11px'
            });
        } else if (companyHero) {
            markCopy(companyHero.querySelector('.company-hero-copy'), 80);
            markEntry(companyHero.querySelector('.company-radar'), {
                delay: 260, duration: 1120, x: '48px', y: '10px', scale: '.95', blur: '11px'
            });
        } else if (marketsHero) {
            const heroCopy = marketsHero.firstElementChild;
            markCopy(heroCopy, 65);
            markEntry(marketsHero.querySelector('.world-command'), {
                delay: 260, duration: 1120, x: '0', y: '38px', scale: '.965', blur: '12px'
            });
            markEntry(marketsHero.querySelector('#world-country-chips'), {
                delay: 470, duration: 900, x: '0', y: '25px', scale: '.985', blur: '7px'
            });
        } else {
            return;
        }

        setupObserver(main);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => main.classList.add('mazad-entry-running'));
        });
    };

    window.addEventListener('mazadPlatformRendered', initialize);
    window.addEventListener('mazadBusinessRendered', initialize);
    window.addEventListener('mazadCompanyRendered', initialize);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize, { once: true });
    } else {
        initialize();
    }
})();
