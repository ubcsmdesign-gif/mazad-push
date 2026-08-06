(() => {
    let chapterObserver;
    let stepObserver;
    let frame = 0;
    let deckTimer = 0;
    let deckIndex = 0;

    const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

    const updateProgress = () => {
        frame = 0;
        const page = document.querySelector('.platform-page');
        if (!page) return;

        const journey = document.querySelector('.platform-journey-panel');
        if (journey) {
            const rect = journey.getBoundingClientRect();
            const journeyProgress = clamp((window.innerHeight * 0.72 - rect.top) / Math.max(1, rect.height * 0.72)) * 100;
            journey.style.setProperty('--journey-progress', `${journeyProgress}%`);
        }

        const chapters = [...document.querySelectorAll('.platform-chapter')];
        if (chapters.length) {
            const focus = window.innerHeight * 0.5;
            let active = chapters[0];
            let activeDistance = Infinity;
            chapters.forEach(chapter => {
                const rect = chapter.getBoundingClientRect();
                const distance = Math.abs(rect.top + rect.height / 2 - focus);
                if (distance < activeDistance) {
                    active = chapter;
                    activeDistance = distance;
                }
            });
            chapters.forEach(chapter => chapter.classList.toggle('is-active', chapter === active));
        }
    };

    const requestProgress = () => {
        if (!frame) frame = requestAnimationFrame(updateProgress);
    };

    const initializeDeck = () => {
        window.clearInterval(deckTimer);
        const deck = document.querySelector('.platform-deck');
        const cards = [...document.querySelectorAll('.platform-deck-card')];
        const controls = [...document.querySelectorAll('.platform-deck-control')];
        if (!deck || !cards.length) return;

        const showCard = index => {
            deckIndex = (index + cards.length) % cards.length;
            cards.forEach((card, cardIndex) => {
                card.dataset.slot = String((cardIndex - deckIndex + cards.length) % cards.length);
            });
            controls.forEach((control, controlIndex) => {
                control.classList.toggle('is-active', controlIndex === deckIndex);
            });
        };

        const start = () => {
            window.clearInterval(deckTimer);
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            deckTimer = window.setInterval(() => showCard(deckIndex + 1), 1600);
        };

        cards.forEach((card, index) => {
            const activate = () => {
                showCard(index);
                start();
            };
            card.addEventListener('click', activate);
            card.addEventListener('keydown', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    activate();
                }
            });
        });
        controls.forEach((control, index) => control.addEventListener('click', () => {
            showCard(index);
            start();
        }));
        deck.addEventListener('mouseenter', () => window.clearInterval(deckTimer));
        deck.addEventListener('mouseleave', start);
        showCard(0);
        start();
    };

    const initialize = () => {
        chapterObserver?.disconnect();
        stepObserver?.disconnect();
        initializeDeck();

        const chapters = [...document.querySelectorAll('.platform-chapter')];
        const steps = [...document.querySelectorAll('.platform-step')];
        if (!chapters.length) return;

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reducedMotion || !('IntersectionObserver' in window)) {
            chapters.forEach(chapter => chapter.classList.add('is-visible'));
            steps.forEach(step => step.classList.add('is-visible'));
            updateProgress();
            return;
        }

        chapterObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('is-visible');
            });
        }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
        chapters.forEach(chapter => chapterObserver.observe(chapter));

        stepObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const index = steps.indexOf(entry.target);
                entry.target.style.transitionDelay = `${Math.max(0, index) * 80}ms`;
                entry.target.classList.add('is-visible');
            });
        }, { threshold: 0.25 });
        steps.forEach(step => stepObserver.observe(step));

        requestProgress();
    };

    window.addEventListener('scroll', requestProgress, { passive: true });
    window.addEventListener('resize', requestProgress);
    window.addEventListener('mazadPlatformRendered', initialize);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize, { once: true });
    } else {
        initialize();
    }
})();
