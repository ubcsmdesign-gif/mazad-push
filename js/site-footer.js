(() => {
    const initializeSiteFooter = () => {
        if (document.querySelector('.mg-footer')) return true;

        const footer = document.querySelector('footer');
        if (!footer) return false;

    if (!document.getElementById('mazad-global-footer-styles')) {
        const style = document.createElement('style');
        style.id = 'mazad-global-footer-styles';
        style.textContent = `
            .mg-footer {
                position: relative;
                z-index: 20;
                overflow: hidden;
                color: #fff;
                border-top: 1px solid rgba(255,132,26,.22);
                background:
                    radial-gradient(circle at 12% 8%, rgba(255,132,26,.13), transparent 34%),
                    radial-gradient(circle at 88% 100%, rgba(255,132,26,.07), transparent 28%),
                    #030712;
            }
            .mg-footer::before {
                content: "";
                position: absolute;
                inset: 0;
                pointer-events: none;
                opacity: .22;
                background-image:
                    linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
                background-size: 42px 42px;
                -webkit-mask-image: linear-gradient(to bottom, #000, transparent 72%);
                mask-image: linear-gradient(to bottom, #000, transparent 72%);
            }
            .mg-footer-shell {
                position: relative;
                width: min(100% - 40px, 1440px);
                margin: 0 auto;
                padding: 78px 0 30px;
            }
            .mg-footer-grid {
                display: grid;
                grid-template-columns: minmax(280px, 1.45fr) repeat(3, minmax(150px, .75fr));
                gap: 56px;
                align-items: start;
            }
            .mg-footer-brand {
                max-width: 430px;
            }
            .mg-footer-logo {
                display: inline-flex;
                align-items: center;
                gap: 13px;
                margin-bottom: 22px;
                text-decoration: none;
                color: #fff;
            }
            .mg-footer-logo img {
                width: 46px;
                height: 46px;
                object-fit: cover;
                border-radius: 14px;
                box-shadow: 0 0 26px rgba(255,132,26,.45);
                transition: transform .35s ease, box-shadow .35s ease;
            }
            .mg-footer-logo:hover img {
                transform: translateY(-3px) rotate(4deg);
                box-shadow: 0 0 38px rgba(255,132,26,.72);
            }
            .mg-footer-wordmark {
                font-size: 23px;
                font-weight: 900;
                letter-spacing: .035em;
            }
            .mg-footer-wordmark span:last-child {
                color: #FF841A;
            }
            .mg-footer-description {
                max-width: 390px;
                margin: 0;
                color: rgba(255,255,255,.5);
                font-size: 14px;
                line-height: 1.8;
            }
            .mg-footer-signature {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                margin-top: 24px;
                padding: 8px 12px;
                border: 1px solid rgba(255,132,26,.2);
                border-radius: 999px;
                color: rgba(255,255,255,.65);
                background: rgba(255,132,26,.06);
                font-size: 10px;
                font-weight: 800;
                letter-spacing: .14em;
                text-transform: uppercase;
            }
            .mg-footer-signature::before {
                content: "";
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: #FF841A;
                box-shadow: 0 0 12px #FF841A;
                animation: mg-footer-pulse 2s ease-in-out infinite;
            }
            .mg-footer-heading {
                display: flex;
                align-items: center;
                gap: 9px;
                margin: 7px 0 22px;
                color: #fff;
                font-size: 13px;
                font-weight: 850;
                letter-spacing: .12em;
                text-transform: uppercase;
            }
            .mg-footer-heading::before {
                content: "";
                width: 18px;
                height: 2px;
                border-radius: 2px;
                background: #FF841A;
                box-shadow: 0 0 9px rgba(255,132,26,.7);
            }
            .mg-footer-links {
                display: grid;
                gap: 13px;
                margin: 0;
                padding: 0;
                list-style: none;
            }
            .mg-footer-links a,
            .mg-footer-links .mg-footer-link {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                width: fit-content;
                color: rgba(255,255,255,.46);
                font-size: 14px;
                line-height: 1.35;
                text-decoration: none;
                transition: color .25s ease, transform .25s ease;
            }
            .mg-footer-links a::before,
            .mg-footer-links .mg-footer-link::before {
                content: "";
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: rgba(255,132,26,.34);
                transition: transform .25s ease, background .25s ease, box-shadow .25s ease;
            }
            .mg-footer-links .mg-footer-link[aria-disabled="true"] {
                color: rgba(255,255,255,.2);
                cursor: not-allowed;
                opacity: .62;
            }
            .mg-footer-links a:hover {
                color: #fff;
                transform: translateX(5px);
            }
            html[dir="rtl"] .mg-footer-links a:hover {
                transform: translateX(-5px);
            }
            .mg-footer-links a:hover::before {
                transform: scale(1.65);
                background: #FF841A;
                box-shadow: 0 0 10px #FF841A;
            }
            .mg-footer-bottom {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 24px;
                margin-top: 62px;
                padding-top: 26px;
                border-top: 1px solid rgba(255,255,255,.07);
            }
            .mg-footer-legal {
                color: rgba(255,255,255,.32);
                font-size: 12px;
                line-height: 1.7;
            }
            .mg-footer-socials {
                display: flex;
                align-items: center;
                gap: 9px;
            }
            .mg-footer-socials a {
                display: grid;
                place-items: center;
                width: 38px;
                height: 38px;
                border: 1px solid rgba(255,255,255,.09);
                border-radius: 12px;
                color: rgba(255,255,255,.48);
                background: rgba(255,255,255,.025);
                transition: color .25s ease, border-color .25s ease, background .25s ease, transform .25s ease, box-shadow .25s ease;
            }
            .mg-footer-socials a:hover {
                color: #fff;
                border-color: rgba(255,132,26,.48);
                background: rgba(255,132,26,.1);
                transform: translateY(-4px);
                box-shadow: 0 0 22px rgba(255,132,26,.18);
            }
            .mg-footer-socials svg {
                width: 17px;
                height: 17px;
            }
            @keyframes mg-footer-pulse {
                0%,100% { opacity: .55; transform: scale(.86); }
                50% { opacity: 1; transform: scale(1.18); }
            }
            @media (max-width: 900px) {
                .mg-footer-grid {
                    grid-template-columns: 1.3fr 1fr 1fr;
                    gap: 42px 28px;
                }
                .mg-footer-brand {
                    grid-column: 1 / -1;
                }
            }
            @media (max-width: 620px) {
                .mg-footer-shell {
                    width: min(100% - 32px, 1440px);
                    padding-top: 58px;
                }
                .mg-footer-grid {
                    grid-template-columns: 1fr 1fr;
                    gap: 40px 22px;
                }
                .mg-footer-brand {
                    grid-column: 1 / -1;
                }
                .mg-footer-bottom {
                    align-items: flex-start;
                    flex-direction: column;
                    margin-top: 48px;
                }
            }
            @media (prefers-reduced-motion: reduce) {
                .mg-footer-signature::before { animation: none; }
                .mg-footer-logo img,
                .mg-footer-links a,
                .mg-footer-socials a { transition: none; }
            }
        `;
        document.head.appendChild(style);
    }

    footer.outerHTML = `
        <footer class="mg-footer" aria-label="Mazad Global footer">
            <div class="mg-footer-shell">
                <div class="mg-footer-grid">
                    <div class="mg-footer-brand">
                        <a class="mg-footer-logo" href="index.html">
                            <img src="images/logo.jpg" alt="Mazad Global">
                            <span class="mg-footer-wordmark"><span>MAZAD</span><span>GLOBAL</span></span>
                        </a>
                        <p class="mg-footer-description">Mazad Global connects technology, businesses, and regional markets through digital infrastructure, local expertise, and strategic partnerships.</p>
                        <span class="mg-footer-signature">Regional Technology. Connected Growth.</span>
                    </div>
                    <nav aria-label="Platform">
                        <h3 class="mg-footer-heading">Platform</h3>
                        <ul class="mg-footer-links">
                            <li><a data-footer-entry href="platform.html#section-1">Marketplace</a></li>
                            <li><a data-footer-entry href="platform.html#section-2">Auctions</a></li>
                            <li><a data-footer-entry href="platform.html#section-3">Payments</a></li>
                            <li><a data-footer-entry href="platform.html#section-4">Logistics</a></li>
                        </ul>
                    </nav>
                    <nav aria-label="Company">
                        <h3 class="mg-footer-heading">Company</h3>
                        <ul class="mg-footer-links">
                            <li><a data-footer-entry href="sell-on-mazad.html">Sellers</a></li>
                            <li><a data-footer-entry href="for-business.html#section-2">Brands & Suppliers</a></li>
                            <li><a data-footer-entry href="for-business.html#section-5">Partners</a></li>
                            <li><a data-footer-entry href="for-business.html#section-4">Integrations</a></li>
                        </ul>
                    </nav>
                    <nav aria-label="Support">
                        <h3 class="mg-footer-heading">Support</h3>
                        <ul class="mg-footer-links">
                            <li><a data-footer-entry href="about.html">About</a></li>
                            <li><a data-footer-entry href="company.html">News & Careers</a></li>
                            <li><a data-footer-entry href="contact.html">Contact</a></li>
                            <li><a data-footer-entry href="contact.html">Help Centre</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="mg-footer-bottom">
                    <div class="mg-footer-legal">© 2026 MAZAD GLOBAL. <span>All rights reserved.</span> <span>Powered by Mazad Türkiye HQ.</span></div>
                    <div class="mg-footer-socials">
                        <a href="#" aria-label="X / Twitter"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M18.5 4 5.5 20M6 4l12 16"/></svg></a>
                        <a href="#" aria-label="LinkedIn"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M6.5 9.5V18m0-12.5v.01M10.5 18v-5c0-2 1.2-3.3 3.1-3.3 2 0 3.4 1.3 3.4 3.8V18M4 3h16v18H4z"/></svg></a>
                        <a href="#" aria-label="Instagram"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><path stroke-linecap="round" d="M17.4 6.6h.01"/></svg></a>
                        <a href="#" aria-label="Facebook"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 21v-8h2.8l.5-3h-3.3V8.2c0-.9.3-1.7 1.8-1.7H18V3.8c-.5-.1-1.4-.2-2.5-.2-2.6 0-4.4 1.6-4.4 4.5V10H8v3h3.1v8"/></svg></a>
                    </div>
                </div>
            </div>
        </footer>
    `;

        if (typeof window.setLanguage === 'function') {
            window.setLanguage(window.getMazadLanguage?.() || document.documentElement.lang || 'en');
        }

        return true;
    };

    if (!initializeSiteFooter()) {
        document.addEventListener('DOMContentLoaded', initializeSiteFooter, { once: true });
    }
})();
