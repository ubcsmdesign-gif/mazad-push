(() => {
    if (document.querySelector('.mazad-page-cosmos')) return;

    const style = document.createElement('style');
    style.id = 'mazad-ambient-cosmos-style';
    style.textContent = `
        .mazad-page-cosmos {
            position: fixed;
            inset: 0;
            height: 100vh;
            overflow: hidden;
            pointer-events: none;
            z-index: 8;
            opacity: .96;
            mix-blend-mode: screen;
        }

        .mazad-page-cosmos__nebula {
            position: absolute;
            width: min(720px, 66vw);
            aspect-ratio: 1;
            border-radius: 44%;
            filter: blur(78px);
            mix-blend-mode: screen;
            opacity: .58;
            will-change: transform;
        }

        .mazad-page-cosmos__nebula--orange {
            left: -18%;
            top: -42%;
            background: radial-gradient(ellipse, rgba(255,132,26,.25), rgba(255,132,26,.07) 42%, transparent 68%);
            animation: mazad-nebula-drift-left 13s ease-in-out infinite alternate;
        }

        .mazad-page-cosmos__nebula--blue {
            right: -20%;
            top: -36%;
            background: radial-gradient(ellipse, rgba(65,92,174,.21), rgba(103,72,151,.07) 44%, transparent 69%);
            animation: mazad-nebula-drift-right 16s ease-in-out infinite alternate;
        }

        .mazad-page-cosmos__star {
            position: absolute;
            left: var(--star-x);
            top: var(--star-y);
            width: var(--star-size);
            height: var(--star-size);
            border-radius: 999px;
            background: var(--star-color);
            box-shadow: 0 0 5px var(--star-color), 0 0 13px var(--star-glow);
            opacity: .24;
            animation: mazad-page-star var(--star-speed) ease-in-out var(--star-delay) infinite;
        }

        .mazad-page-cosmos__star.is-bright::before,
        .mazad-page-cosmos__star.is-bright::after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            background: rgba(255,255,255,.8);
            border-radius: 999px;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 8px rgba(255,255,255,.48);
        }

        .mazad-page-cosmos__star.is-bright::before {
            width: 1px;
            height: 10px;
        }

        .mazad-page-cosmos__star.is-bright::after {
            width: 10px;
            height: 1px;
        }

        .mazad-page-cosmos__comet {
            position: absolute;
            left: -18%;
            top: var(--comet-y);
            width: 90px;
            height: 1px;
            border-radius: 999px;
            background: linear-gradient(90deg, transparent, rgba(196,215,255,.38), rgba(255,255,255,.86));
            box-shadow: 8px 0 15px rgba(255,255,255,.38), 15px 0 26px rgba(255,132,26,.22);
            opacity: 0;
            transform: rotate(-22deg);
            animation: mazad-page-comet var(--comet-speed) cubic-bezier(.2,.75,.35,1) var(--comet-delay) infinite;
        }

        @keyframes mazad-page-star {
            0%, 100% { opacity: .2; transform: translate3d(0, 7px, 0) scale(.7); }
            48% { opacity: var(--star-opacity); transform: translate3d(var(--star-drift), -6px, 0) scale(1); }
        }

        @keyframes mazad-nebula-drift-left {
            from { transform: translate3d(-2%, -2%, 0) rotate(-7deg) scale(.95); }
            to { transform: translate3d(9%, 5%, 0) rotate(5deg) scale(1.08); }
        }

        @keyframes mazad-nebula-drift-right {
            from { transform: translate3d(5%, -3%, 0) rotate(6deg) scale(1.05); }
            to { transform: translate3d(-8%, 6%, 0) rotate(-4deg) scale(.94); }
        }

        @keyframes mazad-page-comet {
            0%, 78% { opacity: 0; translate: -8vw 0; scale: .35 1; }
            81% { opacity: .62; }
            90% { opacity: .38; translate: 76vw 0; scale: 1 1; }
            94%, 100% { opacity: 0; translate: 125vw 0; scale: .55 1; }
        }

        @media (max-width: 640px) {
            .mazad-page-cosmos { opacity: .8; }
            .mazad-page-cosmos__nebula { filter: blur(64px); }
        }

        @media (prefers-reduced-motion: reduce) {
            .mazad-page-cosmos__star,
            .mazad-page-cosmos__nebula,
            .mazad-page-cosmos__comet {
                animation: none !important;
            }
            .mazad-page-cosmos__comet { display: none; }
        }
    `;
    document.head.appendChild(style);

    const cosmos = document.createElement('div');
    cosmos.className = 'mazad-page-cosmos';
    cosmos.setAttribute('aria-hidden', 'true');
    cosmos.innerHTML = `
        <div class="mazad-page-cosmos__nebula mazad-page-cosmos__nebula--orange"></div>
        <div class="mazad-page-cosmos__nebula mazad-page-cosmos__nebula--blue"></div>
    `;

    const starCount = window.innerWidth < 640 ? 24 : 40;
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < starCount; index++) {
        const depth = Math.random();
        const warm = Math.random() < .2;
        const star = document.createElement('span');
        star.className = 'mazad-page-cosmos__star';
        if (depth > .86 && Math.random() < .58) {
            star.classList.add('is-bright');
        }
        star.style.setProperty('--star-x', `${3 + Math.random() * 94}%`);
        star.style.setProperty('--star-y', `${4 + Math.random() * 91}%`);
        star.style.setProperty('--star-size', `${1 + depth * 1.8}px`);
        star.style.setProperty('--star-speed', `${6.5 + Math.random() * 5}s`);
        star.style.setProperty('--star-delay', `${-Math.random() * 8}s`);
        star.style.setProperty('--star-drift', `${-5 + Math.random() * 10}px`);
        star.style.setProperty('--star-opacity', `${.48 + depth * .34}`);
        star.style.setProperty('--star-color', warm ? '#ffd2a0' : '#f7f9ff');
        star.style.setProperty('--star-glow', warm ? 'rgba(255,132,26,.42)' : 'rgba(170,202,255,.34)');
        fragment.appendChild(star);
    }

    const cometCount = window.innerWidth < 640 ? 2 : 3;
    for (let index = 0; index < cometCount; index++) {
        const comet = document.createElement('span');
        comet.className = 'mazad-page-cosmos__comet';
        comet.style.setProperty('--comet-y', `${14 + index * 29}%`);
        comet.style.setProperty('--comet-speed', `${12 + index * 2.8}s`);
        comet.style.setProperty('--comet-delay', `${-3 - index * 5.5}s`);
        fragment.appendChild(comet);
    }

    cosmos.appendChild(fragment);
    document.body.prepend(cosmos);
})();
