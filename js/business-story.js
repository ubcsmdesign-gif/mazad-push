(() => {
    let revealObserver;
    let stepObserver;
    let frame = 0;

    const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

    const updateProgress = () => {
        frame = 0;
        const track = document.querySelector('.onboarding-track');
        if (!track) return;
        const rect = track.getBoundingClientRect();
        const start = window.innerHeight * 0.85;
        const end = window.innerHeight * 0.28;
        const progress = clamp((start - rect.top) / Math.max(1, start - end)) * 100;
        track.style.setProperty('--onboarding-progress', `${progress}%`);
    };

    const requestProgress = () => {
        if (!frame) frame = requestAnimationFrame(updateProgress);
    };

    const initialize = () => {
        revealObserver?.disconnect();
        stepObserver?.disconnect();

        const reveals = [...document.querySelectorAll('.business-reveal')];
        const steps = [...document.querySelectorAll('.onboarding-step')];
        if (!reveals.length) return;

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reducedMotion || !('IntersectionObserver' in window)) {
            reveals.forEach(element => element.classList.add('is-visible'));
            steps.forEach(element => element.classList.add('is-visible'));
            updateProgress();
            return;
        }

        revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('is-visible');
            });
        }, { threshold: 0.13, rootMargin: '0px 0px -7% 0px' });
        reveals.forEach(element => revealObserver.observe(element));

        stepObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const index = steps.indexOf(entry.target);
                entry.target.style.transitionDelay = `${Math.max(0, index) * 85}ms`;
                entry.target.classList.add('is-visible');
            });
        }, { threshold: 0.22 });
        steps.forEach(element => stepObserver.observe(element));

        requestProgress();
    };

    window.addEventListener('scroll', requestProgress, { passive: true });
    window.addEventListener('resize', requestProgress);
    window.addEventListener('mazadBusinessRendered', initialize);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize, { once: true });
    } else {
        initialize();
    }
})();
