(() => {
    let activeSection = null;
    let ticking = false;

    const updateProgress = () => {
        ticking = false;
        if (!activeSection?.isConnected) return;
        const fill = activeSection.querySelector('.journey-line-fill');
        const timeline = activeSection.querySelector('.journey-timeline');
        if (!fill || !timeline) return;
        const rect = timeline.getBoundingClientRect();
        const viewportPoint = window.innerHeight * 0.66;
        const progress = Math.max(0, Math.min(1, (viewportPoint - rect.top) / Math.max(rect.height, 1)));
        fill.style.height = `${progress * 100}%`;
    };

    const requestProgress = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(updateProgress);
    };

    const initialize = () => {
        const section = document.querySelector('.about-story-shell');
        if (!section || section.dataset.storyInitialized === 'true') return;
        section.dataset.storyInitialized = 'true';
        activeSection = section;
        const steps = [...section.querySelectorAll('.journey-step')];

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            steps.forEach(step => step.classList.add('is-visible'));
            const fill = section.querySelector('.journey-line-fill');
            if (fill) fill.style.height = '100%';
            return;
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const index = steps.indexOf(entry.target);
                entry.target.style.transitionDelay = `${Math.max(index, 0) * 45}ms`;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.28, rootMargin: '0px 0px -8% 0px' });

        steps.forEach(step => observer.observe(step));
        requestProgress();
    };

    window.addEventListener('scroll', requestProgress, { passive: true });
    window.addEventListener('resize', requestProgress);
    window.addEventListener('mazadAboutStoryRendered', initialize);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize, { once: true });
    } else {
        initialize();
    }
})();
