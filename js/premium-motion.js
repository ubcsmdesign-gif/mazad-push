(() => {
    if (window.__mazadPremiumMotion) return;
    window.__mazadPremiumMotion = true;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const isHome = /(?:^|\/)index\.html$/.test(location.pathname) || /\/$/.test(location.pathname);
    document.body.classList.toggle('mg-home-page', isHome);

    const progress = document.createElement('div');
    progress.className = 'mg-scroll-progress';
    progress.setAttribute('aria-hidden', 'true');
    document.body.appendChild(progress);

    const depth = document.createElement('div');
    depth.className = 'mg-depth-field';
    depth.setAttribute('aria-hidden', 'true');
    depth.innerHTML = '<span class="mg-aurora mg-aurora--one"></span><span class="mg-aurora mg-aurora--two"></span><span class="mg-depth-orbit"><b class="mg-depth-signal"></b></span>';
    const starCount = isHome ? 34 : 18;
    for (let i = 0; i < starCount; i += 1) {
        const star = document.createElement('i');
        star.className = 'mg-depth-star';
        star.style.setProperty('--star-x', `${5 + ((i * 37) % 91)}%`);
        star.style.setProperty('--star-y', `${4 + ((i * 53) % 89)}%`);
        star.style.setProperty('--star-size', `${1 + (i % 3) * .7}px`);
        star.style.setProperty('--star-alpha', `${.3 + (i % 5) * .12}`);
        star.style.setProperty('--star-speed', `${4.2 + (i % 7) * .7}s`);
        star.style.setProperty('--star-delay', `${-(i % 9) * .55}s`);
        depth.appendChild(star);
    }
    document.body.prepend(depth);

    const revealTargets = [...document.querySelectorAll('main > section, main section > article, .benefit-card')]
        .filter((node) => !node.closest('#welcome-portal'));
    revealTargets.forEach((node, index) => {
        node.classList.add('mg-reveal');
        node.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    });

    if ('IntersectionObserver' in window && !reduced) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('mg-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: .08, rootMargin: '0px 0px -7% 0px' });
        revealTargets.forEach((node) => observer.observe(node));
    } else {
        revealTargets.forEach((node) => node.classList.add('mg-visible'));
    }

    const reactiveSelector = [
        '.benefit-card', '.product-card', '.eco-capability-card', '.business-feature-card',
        '.market-card', '.company-card', '.platform-story-card', '.mg-footer-grid > *'
    ].join(',');
    const reactiveCards = [...document.querySelectorAll(reactiveSelector)].slice(0, 42);
    reactiveCards.forEach((card) => card.classList.add('mg-card-reactive'));

    const magneticTargets = [...document.querySelectorAll('body > nav .nav-sell, #hero-left-content a, main a[class*="bg-brand-orange"], main button[class*="bg-brand-orange"]')];
    magneticTargets.forEach((target) => {
        target.classList.add('mg-magnetic');
        if (getComputedStyle(target).position === 'static') target.style.position = 'relative';
        target.style.overflow = 'hidden';
    });

    let pointerX = innerWidth / 2;
    let pointerY = innerHeight * .4;
    let frame = 0;

    const paint = () => {
        frame = 0;
        const doc = document.documentElement;
        const max = Math.max(1, doc.scrollHeight - innerHeight);
        const ratio = Math.min(1, Math.max(0, scrollY / max));
        doc.style.setProperty('--mg-scroll-progress', `${ratio * 100}%`);
        doc.style.setProperty('--mg-pointer-x', `${pointerX}px`);
        doc.style.setProperty('--mg-pointer-y', `${pointerY}px`);
        doc.style.setProperty('--mg-orbit-y', `${Math.round(scrollY * -.055)}px`);
        doc.style.setProperty('--mg-column-y', `${Math.round(scrollY * -.024)}px`);
        doc.style.setProperty('--mg-column-y-reverse', `${Math.round(scrollY * .024)}px`);
        document.querySelector('body > nav')?.classList.toggle('mg-nav-scrolled', scrollY > 24);
    };
    const requestPaint = () => { if (!frame) frame = requestAnimationFrame(paint); };
    addEventListener('scroll', requestPaint, { passive: true });
    addEventListener('resize', requestPaint, { passive: true });

    if (!coarse && !reduced) {
        addEventListener('pointermove', (event) => {
            pointerX = event.clientX;
            pointerY = event.clientY;
            const nx = (pointerX / innerWidth - .5);
            const ny = (pointerY / innerHeight - .5);
            document.documentElement.style.setProperty('--mg-hero-x', `${nx * 8}px`);
            document.documentElement.style.setProperty('--mg-hero-y', `${ny * 6}px`);
            requestPaint();
        }, { passive: true });

        reactiveCards.forEach((card) => {
            card.addEventListener('pointermove', (event) => {
                const rect = card.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width;
                const y = (event.clientY - rect.top) / rect.height;
                card.style.setProperty('--mg-card-x', `${x * 100}%`);
                card.style.setProperty('--mg-card-y', `${y * 100}%`);
                card.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 3.4}deg) rotateY(${(x - 0.5) * 4.2}deg) translateY(-2px)`;
            });
            card.addEventListener('pointerleave', () => { card.style.transform = ''; });
        });

        magneticTargets.forEach((target) => {
            target.addEventListener('pointermove', (event) => {
                const rect = target.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - .5;
                const y = (event.clientY - rect.top) / rect.height - .5;
                target.style.transform = `translate3d(${x * 8}px,${y * 6}px,0)`;
            });
            target.addEventListener('pointerleave', () => { target.style.transform = ''; });
        });
    }

    paint();
})();
