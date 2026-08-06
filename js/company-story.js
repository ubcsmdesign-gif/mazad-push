(() => {
    let observer;
    let cleanupInteractions = () => {};

    const initCompanyStory = () => {
        const elements = [...document.querySelectorAll('.company-reveal')];
        if (!elements.length) return;
        observer?.disconnect();
        cleanupInteractions();

        const page = document.querySelector('.company-page');
        const progress = document.querySelector('.company-scroll-progress');
        const finePointer = window.matchMedia('(pointer:fine)').matches;
        let frame = 0;

        const updateProgress = () => {
            frame = 0;
            const maximum = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
            const value = Math.min(100, Math.max(0, window.scrollY / maximum * 100));
            progress?.style.setProperty('--company-scroll', `${value}%`);
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(updateProgress);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        updateProgress();

        const onPointerMove = event => {
            page?.style.setProperty('--company-cursor-x', `${event.clientX}px`);
            page?.style.setProperty('--company-cursor-y', `${event.clientY}px`);
        };
        if (finePointer) window.addEventListener('pointermove', onPointerMove, { passive: true });

        const interactiveCards = finePointer ? [...document.querySelectorAll('.news-category,.contact-route')] : [];
        const cardCleanups = interactiveCards.map(card => {
            const move = event => {
                const rect = card.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                const rotateY = (x / rect.width - .5) * 7;
                const rotateX = (.5 - y / rect.height) * 7;
                card.style.setProperty('--card-x', `${x}px`);
                card.style.setProperty('--card-y', `${y}px`);
                card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            };
            const leave = () => { card.style.transform = ''; };
            card.addEventListener('pointermove', move);
            card.addEventListener('pointerleave', leave);
            return () => {
                card.removeEventListener('pointermove', move);
                card.removeEventListener('pointerleave', leave);
            };
        });

        cleanupInteractions = () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('pointermove', onPointerMove);
            if (frame) cancelAnimationFrame(frame);
            cardCleanups.forEach(cleanup => cleanup());
        };

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
            elements.forEach(element => element.classList.add('is-visible'));
            return;
        }

        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.14, rootMargin: '0px 0px -7% 0px' });

        elements.forEach((element, index) => {
            element.style.transitionDelay = `${Math.min(index % 3, 2) * 90}ms`;
            observer.observe(element);
        });
    };

    document.addEventListener('DOMContentLoaded', initCompanyStory, { once: true });
    window.addEventListener('mazadCompanyRendered', initCompanyStory);
})();
