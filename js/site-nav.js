(() => {
    const items = [
        ['about', 'about.html', 'nav_about', 'About'],
        ['platform', 'platform.html', 'nav_platform', 'Platform'],
        ['ecosystem', 'ecosystem.html', 'nav_ecosystem', 'Ecosystem'],
        ['business', 'for-business.html', 'nav_for_business', 'For Business'],
        ['markets', 'countries.html', 'nav_markets', 'Markets'],
        ['company', 'company.html', 'nav_company', 'Company'],
        ['sell', 'sell-on-mazad.html', 'nav_sell', 'Sell on Mazad']
    ];
    const enabledKeys = new Set(items.map(([key]) => key));
    const savedLanguage = () => window.getMazadLanguage?.() || document.documentElement.lang || 'en';

    const removeFloatingAssistant = () => {
        ['yaman-ai-widget-wrapper', 'transition-orb', 'transition-ripple'].forEach(id => {
            document.getElementById(id)?.remove();
        });
    };

    const currentKey = () => {
        const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
        return {
            'index.html': 'home',
            'about.html': 'about',
            'platform.html': 'platform',
            'ecosystem.html': 'ecosystem',
            'business-model.html': 'ecosystem',
            'fintech.html': 'ecosystem',
            'for-business.html': 'business',
            'markets.html': 'markets',
            'countries.html': 'markets',
            'company.html': 'company',
            'contact.html': 'company',
            'sell-on-mazad.html': 'sell'
        }[page] || '';
    };

    const syncLanguageState = () => {
        const activeLanguage = savedLanguage();
        document.querySelectorAll('body > nav .lang-btn').forEach(button => {
            const isActive = button.dataset.lang === activeLanguage;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
    };

    const desktopLink = ([key, href, i18n, label], active) => {
        const enabled = enabledKeys.has(key);
        return `
        <a data-nav-key="${key}" ${enabled ? `href="${href}"` : 'aria-disabled="true" tabindex="-1"'} class="nav-item ${active === key ? 'is-active' : ''} relative ${key === 'sell' ? 'nav-sell ml-1 px-3.5 py-2 border border-brand-orange/60 rounded-lg bg-brand-orange/10 shadow-[0_0_16px_rgba(255,132,26,0.16)]' : 'px-2.5 py-2'} ${enabled ? (active === key ? 'text-brand-orange' : key === 'sell' ? 'text-brand-orange' : 'text-white/80 hover:text-white') : 'text-white/30 cursor-not-allowed opacity-55'} transition-all duration-500 text-[11px] xl:text-[13px] font-semibold group uppercase tracking-wider ${enabled ? 'hover:tracking-[0.12em] hover:-translate-y-1' : ''}">
            <span data-i18n="${i18n}" class="relative z-10 ${enabled && active === key ? 'drop-shadow-[0_0_12px_#FF841A]' : enabled ? 'group-hover:drop-shadow-[0_0_12px_#FF841A]' : ''}">${label}</span>
            ${enabled ? `<div class="absolute inset-0 bg-brand-orange/20 blur-md rounded-lg ${active === key ? 'opacity-60' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300"></div>` : ''}
            ${enabled && key !== 'sell' ? `<span class="absolute bottom-0 left-0 ${active === key ? 'w-full bg-brand-orange' : 'w-0 group-hover:w-full bg-white'} h-[2px] transition-all duration-300 shadow-[0_0_10px_#FF841A]"></span>` : ''}
        </a>
    `};
    const mobileLink = ([key, href, i18n, label], active) => {
        const enabled = enabledKeys.has(key);
        return `
        <a ${enabled ? `href="${href}"` : 'aria-disabled="true" tabindex="-1"'} class="block px-3 py-2.5 ${enabled ? (key === 'sell' ? 'mt-2 border border-brand-orange/60 bg-brand-orange/10 text-brand-orange shadow-[0_0_14px_rgba(255,132,26,0.14)]' : active === key ? 'text-brand-orange bg-white/5' : 'text-white hover:text-brand-orange hover:bg-white/5') : 'text-white/30 cursor-not-allowed opacity-55'} rounded-md text-xs font-medium transition-all duration-300">
            <span data-i18n="${i18n}">${label}</span>
        </a>
    `};

    const wireLogoAsHome = (nav) => {
        const logo = nav.querySelector('.mazad-nav-logo, .logo-breathing');
        if (!logo) return;

        logo.setAttribute('aria-label', 'Mazad Global — Home');
        logo.setAttribute('title', 'Home');

        if (logo.tagName === 'A') {
            logo.setAttribute('href', 'index.html');
            return;
        }

        logo.setAttribute('role', 'link');
        logo.setAttribute('tabindex', '0');
        if (logo.dataset.homeLinkReady === 'true') return;
        logo.dataset.homeLinkReady = 'true';
        logo.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
        logo.addEventListener('keydown', event => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            window.location.href = 'index.html';
        });
    };

    const fallbackNavigation = (nav) => {
        nav.className = 'fixed top-0 left-0 w-full bg-[#020617]/85 backdrop-blur-xl z-50 animate-nav border-b border-white/5';
        nav.innerHTML = `
            <div class="absolute bottom-0 left-0 w-full h-[2px] laser-border opacity-60"></div>
            <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div class="flex justify-between items-center h-24">
                    <a href="index.html" class="mazad-nav-logo flex-shrink-0 flex items-center mr-8 group logo-breathing no-underline">
                        <img src="images/logo.jpg" class="h-10 w-10 rounded-xl shadow-[0_0_15px_rgba(255,132,26,0.3)]" alt="Mazad Logo">
                        <span class="ml-3 text-white font-extrabold text-2xl tracking-wide">MAZAD<span class="text-brand-orange">GLOBAL</span></span>
                    </a>
                    <div class="mazad-original-desktop hidden lg:flex flex-1 items-center justify-between">
                        <div class="mazad-original-links flex items-center space-x-2 xl:space-x-4"></div>
                        <div class="ml-6 flex items-center gap-1.5">
                            <button type="button" onclick="setLanguage('tr')" data-lang="tr" class="lang-btn">TR</button>
                            <button type="button" onclick="setLanguage('ar')" data-lang="ar" class="lang-btn">AR</button>
                            <button type="button" onclick="setLanguage('en')" data-lang="en" class="lang-btn">EN</button>
                        </div>
                    </div>
                    <div class="mazad-original-mobile-trigger lg:hidden flex items-center">
                        <button id="mobile-menu-button" class="text-white hover:text-brand-orange focus:outline-none transition-colors" aria-label="Menu">
                            <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div id="mobile-menu" class="mazad-original-mobile-menu hidden lg:hidden bg-[#020617] border-t border-brand-orange/20 shadow-2xl">
                <div class="px-4 pt-2 pb-6 space-y-1">
                    <div class="mazad-original-mobile-links"></div>
                    <div class="mt-4 pt-4 border-t border-white/10 flex justify-center gap-4">
                        <button onclick="setLanguage('tr')" data-lang="tr" class="lang-btn">TR</button>
                        <button onclick="setLanguage('ar')" data-lang="ar" class="lang-btn">AR</button>
                        <button onclick="setLanguage('en')" data-lang="en" class="lang-btn">EN</button>
                    </div>
                </div>
            </div>
        `;
    };

    const init = () => {
        removeFloatingAssistant();
        const nav = document.querySelector('body > nav');
        if (!nav || nav.dataset.menuUpdated === 'true') return;
        nav.dataset.menuUpdated = 'true';
        const active = currentKey();
        const usesFallback = !nav.querySelector('[data-i18n="nav_home"]');

        if (usesFallback) fallbackNavigation(nav);
        wireLogoAsHome(nav);

        const homeLink = nav.querySelector('[data-i18n="nav_home"]')?.closest('a');
        const desktopLinks = usesFallback ? nav.querySelector('.mazad-original-links') : homeLink?.parentElement;
        const desktopContainer = usesFallback ? nav.querySelector('.mazad-original-desktop') : desktopLinks?.parentElement;
        if (desktopLinks) {
            desktopLinks.classList.add('mazad-original-links');
            desktopLinks.innerHTML = items.filter(([key]) => key !== 'sell').map(item => desktopLink(item, active)).join('');
        }
        desktopContainer?.classList.add('mazad-original-desktop');

        const desktopLanguageButton = [...nav.querySelectorAll('.lang-btn')].find(button => !button.closest('#mobile-menu'));
        const desktopActions = desktopLanguageButton?.parentElement;
        const sellItem = items.find(([key]) => key === 'sell');
        if (desktopActions && sellItem) {
            desktopActions.classList.add('mazad-nav-actions');
            desktopActions.querySelector('[data-nav-key="sell"]')?.remove();
            desktopActions.insertAdjacentHTML('afterbegin', desktopLink(sellItem, active));
        }

        const mobileMenu = nav.querySelector('#mobile-menu');
        const mobileRoot = mobileMenu?.firstElementChild;
        if (mobileRoot) {
            [...mobileRoot.children].filter(child => child.tagName === 'A').forEach(link => link.remove());
            let mobileLinks = mobileRoot.querySelector('.mazad-original-mobile-links');
            if (!mobileLinks) {
                mobileLinks = document.createElement('div');
                mobileLinks.className = 'mazad-original-mobile-links';
                mobileRoot.insertBefore(mobileLinks, mobileRoot.firstChild);
            }
            mobileLinks.innerHTML = items.map(item => mobileLink(item, active)).join('');
        }
        mobileMenu?.classList.add('mazad-original-mobile-menu');
        nav.querySelector('#mobile-menu-button')?.parentElement?.classList.add('mazad-original-mobile-trigger');

        if (!document.getElementById('mazad-original-nav-responsive')) {
            const style = document.createElement('style');
            style.id = 'mazad-original-nav-responsive';
            style.textContent = `
                body>nav{
                    position:fixed!important;top:0!important;left:0!important;width:100%!important;z-index:50!important;
                    direction:ltr!important;
                    background:rgba(36,37,39,.94)!important;border-bottom:1px solid rgba(255,132,26,.28)!important;
                    -webkit-backdrop-filter:blur(18px)!important;backdrop-filter:blur(18px)!important;
                    box-shadow:0 12px 38px rgba(0,0,0,.22);animation:mazadNavEnter .7s cubic-bezier(.16,1,.3,1) both
                }
                body>nav .laser-border{
                    height:1px!important;background:linear-gradient(90deg,transparent,rgba(255,132,26,.72),transparent)!important;
                    background-size:100% 100%!important;box-shadow:none!important;animation:none!important
                }
                body>nav .logo-breathing img{border:1px solid rgba(255,132,26,.35)!important;box-shadow:none!important;animation:mg-nav-logo-roll-in 1s cubic-bezier(.16,1,.3,1) .12s both!important}
                body>nav .logo-breathing>span{color:#F6F5F2!important;text-shadow:none!important}
                body>nav .logo-breathing>span span{color:#FF841A!important;text-shadow:none!important}
                body>nav .nav-item{position:relative;color:rgba(255,255,255,.8)!important;text-decoration:none;isolation:isolate}
                body>nav .nav-item>div{display:none!important}
                body>nav .nav-item>span{filter:none!important;text-shadow:none!important}
                body>nav .nav-item.is-active{color:#FF841A!important;text-shadow:none!important}
                body>nav .nav-item.is-active>span:last-child{background:#FF841A!important;width:100%!important;box-shadow:none!important}
                body>nav .nav-item:hover{color:#fff!important}
                body>nav .nav-sell{border-color:#FF841A!important;background:#FF841A!important;color:#242527!important;box-shadow:none!important}
                body>nav .nav-sell:hover{background:#FF9B45!important;color:#242527!important;box-shadow:0 12px 28px rgba(0,0,0,.24)!important}
                body>nav .mazad-nav-actions{display:flex!important;align-items:center!important;gap:6px!important;margin-left:auto!important;white-space:nowrap}
                body>nav .mazad-nav-actions .nav-sell{margin:0 12px 0 0!important;padding:10px 16px!important;border-color:#FF841A!important;background:#FF841A!important;color:#242527!important;box-shadow:none!important}
                body>nav .mazad-nav-actions .nav-sell:hover{transform:translateY(-3px)!important;background:#FF9B45!important;box-shadow:0 12px 28px rgba(0,0,0,.24)!important}
                body>nav .lang-btn{min-width:40px;padding:8px 10px;border:1px solid rgba(255,255,255,.15);border-radius:7px;background:rgba(255,255,255,.04);color:rgba(255,255,255,.7);font-size:12px;font-weight:750;transition:.3s ease}
                body>nav .lang-btn:hover,body>nav .lang-btn.active{border-color:#FF841A;background:rgba(255,132,26,.12);color:#fff;box-shadow:none}
                @keyframes mazadNavEnter{from{opacity:0;transform:translateY(-18px)}to{opacity:1;transform:none}}
                @keyframes mazadNavLaser{from{background-position:0 50%}to{background-position:220% 50%}}
                @keyframes mazadLogoBreath{50%{box-shadow:0 0 30px rgba(255,132,26,.72);transform:translateY(-1px) scale(1.035)}}
                @media (min-width:1100px){
                    body>nav .mazad-original-desktop{display:flex!important}
                    body>nav .mazad-original-mobile-trigger{display:none!important}
                    body>nav .mazad-original-mobile-menu{display:none!important}
                }
                @media (min-width:1100px) and (max-width:1339px){
                    .mazad-original-links{column-gap:0!important}
                    .mazad-original-links>.nav-item{margin-left:0!important;padding-left:6px!important;padding-right:6px!important;font-size:10px!important;letter-spacing:.02em!important}
                    .mazad-original-desktop>div:last-child{margin-left:8px!important}
                    body>nav .mazad-nav-actions .nav-sell{margin-right:7px!important;padding-left:10px!important;padding-right:10px!important;font-size:10px!important}
                    body>nav .logo-breathing{margin-right:14px!important}
                }
                @media (max-width:1099px){
                    .mazad-original-desktop{display:none!important}
                    .mazad-original-mobile-trigger{display:flex!important}
                    .mazad-original-mobile-menu.hidden{display:none!important}
                    .mazad-original-mobile-menu:not(.hidden){display:block!important}
                }
                @media(prefers-reduced-motion:reduce){body>nav,body>nav .laser-border,body>nav .logo-breathing img{animation:none!important}}
            `;
            document.head.appendChild(style);
        }

        const mobileButton = nav.querySelector('#mobile-menu-button');
        if (usesFallback && mobileButton && !mobileButton.dataset.updatedToggle) {
            mobileButton.dataset.updatedToggle = 'true';
            mobileButton.addEventListener('click', () => mobileMenu?.classList.toggle('hidden'));
        }
        window.setLanguage?.(savedLanguage());
        requestAnimationFrame(syncLanguageState);
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
    window.addEventListener('mazadLanguageChanged', syncLanguageState);
})();
