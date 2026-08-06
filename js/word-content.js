(() => {
    const SELLER_APPLICATION_URL = 'https://mazad.one/oauth/authorize?client_id=mazad-market-production&redirect_uri=https%3A%2F%2Fapi.mazad.market%2Foauth%2Fcallback&response_type=code&scope=openid+profile+email+phone&state=Vv74hbgwTmTLYbuxTUAGzGt7mSLiBR0QWufCI9Bk';
    const copy = {
        en: {
            home: {
                badge: 'Mazad Global',
                title: 'Building Regional Connections. <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-500">Creating Digital Possibilities.</span>',
                lead: 'Mazad Global is a Türkiye-based regional technology group connecting platforms, businesses, and markets across MENA through digital infrastructure, local expertise, and strategic partnerships.',
                statLabels: ['Regional headquarters', 'Current operations', 'Expansion direction'],
                action: 'Explore Mazad Global',
                chips: ['Technology', 'Ecosystem', 'Regional Growth'],
                benefits: ['Explore our platform', 'Discover the ecosystem', 'Business solutions', 'View our markets'],
                platformBadge: 'What Mazad Does',
                platformTitle: 'One Connected <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-500">Platform</span>',
                platformLead: 'A connected digital infrastructure bringing customer experiences, payments, logistics, business operations, and regional technology together.',
                cards: [
                    ['More Choice in One Marketplace', 'Discover products from stores, brands, and suppliers with organized categories, comparison tools, local currencies, and trusted reviews.'],
                    ['A Transparent Way to Bid', 'Join live and timed auctions with clear starting prices, real-time notifications, auction history, and buyer and seller protection.'],
                    ['Payments for Every Market', 'Choose from local payment methods, cards, wallets, cash on delivery, installments where available, and secure refunds.'],
                    ['From Supplier to Customer', 'Follow international shipping, customs coordination, local delivery, tracking, notifications, and returns in one connected journey.']
                ],
                componentLabels: ['Marketplace', 'Auctions', 'Payments', 'Logistics'],
                connectedPanels: [
                    ['One Connected Platform', 'Digital Experiences & Business Technology', 'Mazad connects customer journeys, digital operations, inventory, payments, and order management in one regional technology ecosystem.'],
                    ['Trust & Safety', 'Payments, Delivery & Customer Support', 'Country-specific payment options, secure transaction processes, delivery tracking, returns, and support keep every step clear for customers and businesses.']
                ],
                servesBadge: 'Who Mazad Serves',
                servesSpeech: [
                    'Mazad gives customers one localized place to discover products, join auctions, pay, track delivery, and receive support.',
                    'Sellers can create digital storefronts, manage products and orders, access delivery solutions, and reach new customers.',
                    'Brands, suppliers, and business partners can enter regional markets through localized content, integrations, logistics, and commercial collaboration.'
                ],
                servesCards: [
                    ['Customers', 'Discover products and auctions through localized payments, delivery tracking, reviews, and customer support.'],
                    ['Sellers', 'Build a digital storefront, manage products, synchronize inventory, receive orders, and follow sales performance.'],
                    ['Brands, Suppliers & Partners', 'Reach regional customers through official storefronts, product distribution, integrations, logistics, and partnerships.']
                ],
                marketsBadge: '',
                marketsTitle: 'Built Regionally. <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-500">Localized for Every Market.</span>',
                marketsLead: 'Mazad combines regional technology and supplier connections with localized language, currency, payment, delivery, and customer-support experiences.',
                marketCards: [
                    ['Türkiye', 'Headquarters', 'Technology, operations, supplier connections, product sourcing, and international logistics coordination.'],
                    ['Iraq', 'Operating market', 'Localized shopping, seller support, payment options, delivery information, and customer service.'],
                    ['MENA', 'Expansion vision', 'New markets are clearly identified as under evaluation, in preparation, launching soon, or operating.'],
                    ['Partnerships', 'Regional growth', 'Technology, payment, logistics, marketing, and local service partners help build every market responsibly.']
                ]
            },
            about: {
                badge: 'Who We Are',
                title: 'Connecting Türkiye and MENA Through Technology and Regional Expertise',
                lead: 'Mazad Global is a Türkiye-based regional technology group. It brings digital platforms, financial technology, logistics, business tools, and local expertise together within one connected ecosystem serving Türkiye and MENA.',
                labels: ['Our Story', 'Our Mission', 'Our Vision'],
                headings: ['Built in Türkiye. Growing Regionally.', 'Simplifying Regional Commerce', 'A Connected and Trusted Ecosystem'],
                paragraphs: [
                    'Mazad was established in Türkiye and developed its regional commerce strategy around marketplace and auction capabilities. Its operational expansion in Iraq is the next step in a wider regional journey. Future activities are presented as plans until they are confirmed.',
                    'To simplify regional commerce by connecting customers, sellers, brands, and suppliers through localized technology, reliable payment options, and integrated delivery solutions.',
                    'To become the most connected and trusted digital commerce ecosystem between Türkiye and the MENA region.'
                ],
                infoTitles: ['Regional Headquarters', 'Marketplace & Auctions', 'Localized Payments'],
                infoText: [
                    'Türkiye-based headquarters coordinating technology, operations, supplier relationships, and regional expansion.',
                    'Localized product discovery, digital storefronts, live and timed auctions, transparent bidding, and seller technology.',
                    'Country-specific payment options, secure transaction processes, refunds, and seller settlements.'
                ],
                valuesBadge: 'What Guides Us',
                valuesTitle: 'Our Values',
                valuesLead: 'The principles behind every customer experience, business relationship, and market decision.',
                valueTitles: ['Trust', 'Local Understanding', 'Accessibility', 'Innovation'],
                valueText: [
                    'Creating transparent experiences for customers and businesses.',
                    'Adapting the platform, language, payments, and delivery experience to every market.',
                    'Making digital commerce easier for customers, sellers, brands, and suppliers to access.',
                    'Using technology to simplify buying, selling, payments, and operations.'
                ],
                journeyBadge: 'Our Journey',
                journeyTitle: 'Built with regional understanding. Growing with purpose.',
                journeyLead: 'A focused journey from a Türkiye-based company to a connected marketplace and auction ecosystem serving regional commerce.',
                milestones: [
                    'Mazad was established in Türkiye.',
                    'The company expanded its supplier and business network.',
                    'Mazad developed its regional commerce strategy.',
                    'The platform evolved into a combined marketplace and auction ecosystem.',
                    'Mazad began its operational expansion in Iraq.'
                ],
                purposeBadge: 'Vision & Mission',
                leadershipTitle: 'Leadership',
                leadershipText: 'Mazad is guided by a regional leadership team bringing together experience in technology, commerce, operations, payments, and market development.',
                leadershipNote: 'Individual leadership profiles will be published with verified photographs, positions, biographies, experience, and professional links.',
                partnershipTitle: 'Partnership',
                partnershipText: 'Growing alongside sellers, suppliers, and service partners.'
            },
            platform: {
                badge: 'The Platform',
                title: 'Everything Customers Need to Discover, Buy, Bid, Pay, and Receive',
                lead: 'Mazad brings marketplace shopping, auctions, localized payments, logistics, trust, and customer support into one connected experience.',
                storyBadge: 'What Mazad Offers Customers',
                storyTitle: 'Five connected capabilities. One clear experience.',
                storyLead: 'Each part of the platform answers a practical customer need — from finding the right product to receiving an order and getting support.',
                sections: [
                    { title: 'Marketplace', lead: 'More Choice, Organized in One Marketplace', items: ['Product discovery and search', 'Organized product categories', 'Product comparison', 'Local currencies', 'Multiple payment methods', 'Order tracking', 'Ratings and reviews', 'Customer support'] },
                    { title: 'Auctions', lead: 'A Transparent Way to Discover and Bid', items: ['Live and timed auctions', 'Clear starting prices', 'Reserve prices where applicable', 'Real-time bid notifications', 'Automatic auction extensions', 'Auction history', 'Buyer and seller protection', 'Clear winning and payment process'] },
                    { title: 'Payments', lead: 'Convenient Options for Every Market', items: ['Cash on delivery', 'Debit and credit cards', 'Local payment gateways', 'Digital wallets', 'Installments where available', 'Multi-currency checkout', 'Secure refunds', 'Seller settlements', 'Buy now, pay later where available'] },
                    { title: 'Logistics', lead: 'From Supplier to Customer', items: ['International shipping from Türkiye', 'Air and land delivery options', 'Customs coordination', 'Local last-mile delivery', 'Shipment tracking', 'Delivery notifications', 'Returns coordination', 'Logistics partner network'] },
                    { title: 'Trust & Safety', lead: 'Protection Across the Journey', items: ['Seller and business verification', 'Product-listing standards', 'Secure payment process', 'Customer-data protection', 'Fraud monitoring', 'Ratings and reviews', 'Returns and refunds', 'Dispute resolution', 'Prohibited products policy'] },
                    { title: 'How Mazad Works', lead: 'Six Simple Steps', items: ['Create an account', 'Browse products or auctions', 'Place an order or submit a bid', 'Select a payment method', 'Track delivery', 'Receive support when needed'] }
                ],
                descriptions: [
                    'Mazad gives customers access to products from stores, brands, and suppliers through a localized digital shopping experience designed around convenience, choice, and trust.',
                    'Live and timed auctions bring clear starting prices, reserve prices where applicable, real-time bid notifications, automatic extensions, auction history, and a clear winning and payment process into one transparent experience.',
                    'Available payment options are presented by country and may include cash on delivery, cards, local gateways, digital wallets, installments, multi-currency checkout, secure refunds, seller settlements, and buy now, pay later where available.',
                    'Mazad connects international shipping from Türkiye with air and land delivery, customs coordination, local last-mile delivery, shipment tracking, notifications, returns coordination, and a logistics partner network.',
                    'Trust and safety covers seller and business verification, product-listing standards, secure payments, customer-data protection, fraud monitoring, ratings, returns, dispute resolution, and prohibited products.',
                    'The customer journey is designed as six understandable steps, from creating an account and discovering products or auctions to payment, delivery tracking, and support.'
                ],
                notes: [
                    '',
                    '',
                    'Payment methods and availability vary by country.',
                    'Delivery estimates vary by country and shipping method.',
                    ''
                ],
                journeyBadge: 'How Mazad Works',
                journeyTitle: 'From account creation to support, one connected journey.',
                journeyLead: 'Customers always know the next step while browsing products, joining auctions, paying, and following delivery.',
                cta: 'Explore Mazad'
            },
            business: {
                badge: 'For Business',
                title: 'Grow Your Business with Mazad',
                lead: 'Mazad gives sellers, brands, suppliers, and partners the tools and regional connections they need to reach customers and manage commerce.',
                storyBadge: 'Business Growth, Connected',
                storyTitle: 'One place to reach customers and manage regional commerce.',
                storyLead: 'Start with the opportunity that fits your business. Mazad brings storefronts, product management, orders, delivery, integrations, and regional partnerships into one commercial experience.',
                sections: [
                    { title: 'For Sellers', lead: 'Build and manage your digital storefront.', items: ['Reach customers in Iraq and future markets', 'Create a digital storefront', 'List and manage products', 'Synchronize inventory', 'Receive and manage orders', 'Access delivery solutions', 'Track sales performance', 'Join promotional campaigns', 'Receive seller support'] },
                    { title: 'For Brands', lead: 'Bring official brand experiences to regional customers.', items: ['Official storefronts', 'Brand visibility', 'Localized product content', 'Campaign placements', 'Customer insights', 'Brand protection', 'Local currency and payment support', 'Cross-border logistics'] },
                    { title: 'For Suppliers', lead: 'Bring your products to new markets.', items: ['Product distribution', 'Bulk catalog integration', 'Cross-border order processing', 'Wholesale and retail opportunities', 'Regional market access', 'Inventory integration', 'Reporting and analytics', 'Dedicated commercial support'] },
                    { title: 'Technology Integrations', lead: 'Connect Mazad with the systems your business already uses.', items: ['E-commerce platforms', 'ERP systems', 'Inventory systems', 'Order-management systems', 'Accounting platforms', 'Payment gateways', 'Logistics providers', 'Technical onboarding support'] },
                    { title: 'For Partners', lead: 'Build the future of regional commerce with us.', items: ['Payment partners', 'Logistics partners', 'Technology partners', 'Marketing partners', 'Local service providers', 'Strategic market partners'] }
                ],
                sellerCta: 'Become a Seller',
                onboardingBadge: 'Seller Onboarding',
                onboardingTitle: 'From application to settlements, six clear steps.',
                onboardingLead: 'A structured path helps each seller prepare the business, store, catalog, and operations before receiving orders.',
                onboarding: ['Submit an application', 'Complete business verification', 'Set up the store', 'Upload or synchronize products', 'Start receiving orders', 'Receive settlements'],
                brandSupplierBadge: 'For Brands & Suppliers',
                brandSupplierTitle: 'Bring Your Products to New Markets',
                brandSupplierLead: 'Mazad supports official brand experiences, product distribution, localized content, regional market access, cross-border operations, and commercial support.',
                integrationBadge: 'Technology Integrations',
                integrationTitle: 'Connect Mazad with the systems your business already uses.',
                integrationLead: 'Integration methods, technical onboarding, documentation, and support should match the connected platform and operational requirement.',
                partnerBadge: 'For Partners',
                partnerTitle: 'Build the Future of Regional Commerce with Us',
                partnerLead: 'Mazad works with payment, logistics, technology, marketing, local service, and strategic market partners.',
                formTitle: 'Become a Partner',
                formLead: 'Share the essential details needed to understand the partnership opportunity.',
                formFields: ['Company name', 'Country', 'Website', 'Partnership category', 'Contact details', 'Partnership proposal'],
                cta: 'Discover Business Solutions'
            },
            markets: {
                badge: 'Markets',
                title: 'Built Regionally. Localized for Every Market.',
                lead: 'Mazad combines regional technology and supplier connections with localized payment, delivery, language, currency, and customer-support experiences.',
                statuses: ['Operating', 'Launching soon', 'In preparation', 'Under evaluation'],
                sections: [
                    { title: 'Türkiye', lead: 'Headquarters and regional capability center.', items: ['Technology and operations', 'Supplier and brand network', 'Product sourcing', 'Cross-border commerce capabilities', 'International logistics coordination'] },
                    { title: 'Iraq', lead: 'Mazad’s current operating market.', items: ['Localized marketplace experience', 'Current delivery coverage', 'Available categories and payment methods', 'Customer and seller support', 'Delivery and returns information', 'App access and local contact details'] },
                    { title: 'Expansion Markets', lead: 'Every market is presented with a clear and accurate status.', items: ['Saudi Arabia', 'United Arab Emirates', 'Qatar', 'Bahrain', 'Jordan', 'Algeria', 'Libya', 'Syria', 'Lebanon'] }
                ],
                cta: 'Explore Markets'
            },
            company: {
                badge: 'Company',
                title: 'The People, News, and Opportunities Behind Mazad',
                lead: 'Follow Mazad’s regional journey, discover career opportunities, and reach the right team for your enquiry.',
                newsTitle: 'The Mazad Newsroom',
                newsLead: 'A clear home for company announcements, market developments, partnerships, platform updates, and regional commerce stories.',
                articleMetaTitle: 'Every published story is presented with context.',
                articleMeta: ['Publication date', 'Category', 'Author or Mazad Communications', 'Featured image', 'Related articles', 'Media contact when relevant'],
                careerTitle: 'Build the Next Chapter of Commerce with Mazad',
                careerLead: 'Explore the culture, teams, locations, and recruitment journey behind Mazad.',
                careerFilters: ['Country', 'Department', 'Employment type', 'Work arrangement'],
                contactTitle: 'Start with the Right Team',
                contactLead: 'Choose the enquiry category that matches your need and continue through the official contact route.',
                officeTitle: 'Verified Contact Information',
                officeLead: 'Office and contact details appear only after they have been confirmed.',
                sections: [
                    { title: 'News', lead: 'Company and market updates.', items: ['Company announcements', 'New partnerships', 'Market launches', 'Platform updates', 'Seller stories', 'Community initiatives', 'Industry insights'] },
                    { title: 'Careers', lead: 'Build the next chapter of commerce with Mazad.', items: ['Company culture', 'Working at Mazad', 'Employee values', 'Departments', 'Office locations', 'Open positions', 'Internship opportunities', 'Recruitment process'] },
                    { title: 'Contact', lead: 'Choose the team that best matches your request.', items: ['Customer support', 'Seller support', 'Brand and supplier enquiries', 'Partnership enquiries', 'Technology integrations', 'Media enquiries', 'Careers', 'General enquiries'] },
                    { title: 'Office Information', lead: 'Only verified contact details are published.', items: ['Türkiye headquarters', 'Iraq office', 'Official email addresses', 'Verified telephone numbers', 'Working hours', 'Map locations', 'Social media channels'] }
                ],
                cta: 'Contact Mazad'
            },
            sell: {
                badge: 'Sell on Mazad',
                title: 'Reach More Customers and Grow with Mazad',
                lead: 'Create a digital storefront, manage products and orders, access delivery solutions, and grow across Iraq and future regional markets.',
                sections: [
                    { title: 'Why Sell on Mazad?', lead: 'One place to manage your regional commerce journey.', items: ['Reach new customers', 'Create a digital storefront', 'List and manage products', 'Synchronize inventory', 'Receive and manage orders', 'Access delivery solutions', 'Track sales performance', 'Join promotional campaigns', 'Receive seller support'] },
                    { title: 'Seller Onboarding', lead: 'A clear path from application to your first order.', items: ['Submit an application', 'Complete business verification', 'Set up your store', 'Upload or synchronize products', 'Start receiving orders', 'Receive settlements'] },
                    { title: 'What You Will Need', lead: 'Information required for a responsible onboarding process.', items: ['Company or seller details', 'Country and contact information', 'Product categories', 'Business verification documents', 'Settlement information', 'Delivery requirements'] }
                ],
                cta: 'Become a Seller'
            }
        },
        tr: {
            home: {
                badge: 'Mazad Global',
                title: 'Bölgesel Bağlantılar Kuruyoruz. <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-500">Dijital Olanaklar Yaratıyoruz.</span>',
                lead: 'Mazad Global; dijital altyapı, yerel uzmanlık ve stratejik iş ortaklıklarıyla Türkiye ile MENA genelinde platformları, işletmeleri ve pazarları birbirine bağlayan bölgesel bir teknoloji grubudur.',
                statLabels: ['Bölgesel merkez', 'Mevcut operasyon', 'Büyüme yönü'],
                action: 'Mazad Global’i Keşfet',
                chips: ['Teknoloji', 'Ekosistem', 'Bölgesel Büyüme'],
                benefits: ['Platformumuzu keşfet', 'Ekosistemi incele', 'İş çözümleri', 'Pazarlarımızı gör'],
                platformBadge: 'Mazad Ne Sunar?',
                platformTitle: 'Tek ve Bağlantılı <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-500">Platform</span>',
                platformLead: 'Pazaryeri alışverişini, açık artırmaları, ödemeleri, lojistiği ve satıcı teknolojisini bir araya getiren yerelleştirilmiş ticaret deneyimi.',
                cards: [
                    ['Tek Pazaryerinde Daha Fazla Seçenek', 'Mağaza, marka ve tedarikçilerin ürünlerini düzenli kategoriler, karşılaştırma araçları, yerel para birimleri ve güvenilir değerlendirmelerle keşfedin.'],
                    ['Şeffaf Bir Teklif Deneyimi', 'Canlı ve süreli açık artırmalara net başlangıç fiyatları, anlık bildirimler, geçmiş kayıtları ve alıcı-satıcı korumasıyla katılın.'],
                    ['Her Pazara Uygun Ödemeler', 'Yerel ödeme yöntemleri, kartlar, cüzdanlar, kapıda ödeme, mevcutsa taksit ve güvenli iadeler arasından seçim yapın.'],
                    ['Tedarikçiden Müşteriye', 'Uluslararası gönderim, gümrük koordinasyonu, yerel teslimat, takip, bildirim ve iadeleri tek yolculukta yönetin.']
                ],
                componentLabels: ['Pazaryeri', 'Açık Artırmalar', 'Ödemeler', 'Lojistik'],
                connectedPanels: [
                    ['Bağlantılı Tek Platform', 'Pazaryeri, Açık Artırmalar ve Satıcı Teknolojisi', 'Mazad; ürün keşfini, şeffaf teklifleri, dijital mağazaları, stok ve sipariş yönetimini tek bir bölgesel ticaret deneyiminde birleştirir.'],
                    ['Güven ve Emniyet', 'Ödemeler, Teslimat ve Müşteri Desteği', 'Ülkeye özgü ödeme seçenekleri, güvenli işlem süreçleri, teslimat takibi, iadeler ve destek her adımı müşteriler ve işletmeler için anlaşılır kılar.']
                ],
                servesBadge: 'Mazad Kimlere Hizmet Eder?',
                servesSpeech: [
                    'Mazad, müşterilere ürün keşfi, açık artırma, ödeme, teslimat takibi ve destek için yerelleştirilmiş tek bir deneyim sunar.',
                    'Satıcılar dijital mağaza kurabilir, ürün ve siparişleri yönetebilir, teslimat çözümlerine erişebilir ve yeni müşterilere ulaşabilir.',
                    'Markalar, tedarikçiler ve iş ortakları yerelleştirilmiş içerik, entegrasyon, lojistik ve ticari iş birlikleriyle bölgesel pazarlara ulaşabilir.'
                ],
                servesCards: [
                    ['Müşteriler', 'Ürünleri ve açık artırmaları yerel ödeme, teslimat takibi, değerlendirme ve müşteri desteğiyle keşfedin.'],
                    ['Satıcılar', 'Dijital mağaza kurun, ürünleri yönetin, stokları eşitleyin, sipariş alın ve satış performansını takip edin.'],
                    ['Markalar, Tedarikçiler ve İş Ortakları', 'Resmî mağazalar, ürün dağıtımı, entegrasyon, lojistik ve iş ortaklıklarıyla bölgesel müşterilere ulaşın.']
                ],
                marketsBadge: 'Pazarlarımız',
                marketsTitle: 'Bölgesel Olarak Kuruldu. <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-500">Her Pazara Uyarlandı.</span>',
                marketsLead: 'Mazad, bölgesel teknolojiyi ve tedarikçi bağlantılarını yerel dil, para birimi, ödeme, teslimat ve müşteri desteğiyle birleştirir.',
                marketCards: [
                    ['Türkiye', 'Genel merkez', 'Teknoloji, operasyon, tedarikçi bağlantıları, ürün tedariği ve uluslararası lojistik koordinasyonu.'],
                    ['Irak', 'Faaliyet gösterilen pazar', 'Yerelleştirilmiş alışveriş, satıcı desteği, ödeme seçenekleri, teslimat bilgileri ve müşteri hizmetleri.'],
                    ['MENA', 'Bölgesel büyüme vizyonu', 'Yeni pazarlar değerlendirmede, hazırlıkta, yakında açılacak veya faaliyette olarak açıkça belirtilir.'],
                    ['İş Ortaklıkları', 'Bölgesel büyüme', 'Teknoloji, ödeme, lojistik, pazarlama ve yerel hizmet ortakları her pazarın sorumlu biçimde kurulmasına destek olur.']
                ]
            },
            about: {
                badge: 'Biz Kimiz',
                title: 'Türkiye ile MENA’yı Teknoloji ve Bölgesel Uzmanlıkla Buluşturuyoruz',
                lead: 'Mazad Global, Türkiye merkezli bölgesel bir teknoloji ve ticaret grubudur. Dijital platformları, ödemeleri, lojistiği, iş araçlarını ve yerel pazar uzmanlığını Türkiye ile MENA’ya hizmet eden bağlantılı bir ekosistemde bir araya getirir.',
                labels: ['Hikâyemiz', 'Misyonumuz', 'Vizyonumuz'],
                headings: ['Türkiye’de Kuruldu. Bölgesel Olarak Büyüyor.', 'Bölgesel Ticareti Kolaylaştırmak', 'Bağlantılı ve Güvenilir Bir Ekosistem'],
                paragraphs: [
                    'Mazad Türkiye’de kuruldu ve bölgesel ticaret stratejisini pazaryeri ile açık artırma yetenekleri üzerine geliştirdi. Irak’taki operasyonel büyüme daha geniş bölgesel yolculuğun sonraki adımıdır. Gelecekteki faaliyetler doğrulanana kadar plan olarak sunulur.',
                    'Yerelleştirilmiş teknoloji, güvenilir ödeme seçenekleri ve entegre teslimat çözümleriyle müşterileri, satıcıları, markaları ve tedarikçileri buluşturarak bölgesel ticareti kolaylaştırmak.',
                    'Türkiye ile MENA bölgesi arasındaki en bağlantılı ve güvenilir dijital ticaret ekosistemi olmak.'
                ],
                infoTitles: ['Bölgesel Genel Merkez', 'Pazaryeri ve Açık Artırmalar', 'Yerelleştirilmiş Ödemeler'],
                infoText: [
                    'Teknoloji, operasyon, tedarikçi ilişkileri ve bölgesel büyümeyi koordine eden Türkiye merkezli yapı.',
                    'Yerelleştirilmiş ürün keşfi, dijital mağazalar, canlı ve süreli açık artırmalar, şeffaf teklifler ve satıcı teknolojisi.',
                    'Ülkeye özgü ödeme seçenekleri, güvenli işlem süreçleri, iadeler ve satıcı ödemeleri.'
                ],
                valuesBadge: 'Bize Yön Verenler',
                valuesTitle: 'Değerlerimiz',
                valuesLead: 'Her müşteri deneyiminin, iş ilişkisinin ve pazar kararının arkasındaki ilkeler.',
                valueTitles: ['Güven', 'Yerel Anlayış', 'Erişilebilirlik', 'Yenilik'],
                valueText: ['Müşteriler ve işletmeler için şeffaf deneyimler oluşturmak.', 'Platformu, dili, ödemeleri ve teslimatı her pazara uyarlamak.', 'Dijital ticareti müşteriler, satıcılar, markalar ve tedarikçiler için daha erişilebilir kılmak.', 'Alım, satım, ödeme ve operasyonları teknolojiyle kolaylaştırmak.'],
                journeyBadge: 'Yolculuğumuz',
                journeyTitle: 'Bölgesel anlayışla kuruldu. Net bir amaçla büyüyor.',
                journeyLead: 'Türkiye merkezli bir şirketten bölgesel ticarete hizmet eden bağlantılı bir pazaryeri ve açık artırma ekosistemine uzanan odaklı yolculuk.',
                milestones: ['Mazad Türkiye’de kuruldu.', 'Şirket, tedarikçi ve iş ağı kapsamını genişletti.', 'Mazad bölgesel ticaret stratejisini geliştirdi.', 'Platform birleşik bir pazaryeri ve açık artırma ekosistemine dönüştü.', 'Mazad Irak’taki operasyonel genişlemesine başladı.'],
                purposeBadge: 'Vizyon ve Misyon',
                leadershipTitle: 'Liderlik',
                leadershipText: 'Mazad; teknoloji, ticaret, operasyon, ödeme ve pazar geliştirme deneyimini bir araya getiren bölgesel bir liderlik ekibi tarafından yönlendirilir.',
                leadershipNote: 'Bireysel liderlik profilleri; doğrulanmış fotoğraf, görev, biyografi, deneyim ve profesyonel bağlantılarla yayımlanacaktır.',
                partnershipTitle: 'İş Ortaklığı',
                partnershipText: 'Satıcılar, tedarikçiler ve hizmet ortaklarıyla birlikte büyümek.'
            },
            platform: {
                badge: 'Platform',
                title: 'Keşfetmek, Satın Almak, Teklif Vermek, Ödemek ve Teslim Almak İçin Her Şey',
                lead: 'Mazad; pazaryeri alışverişini, açık artırmaları, yerel ödemeleri, lojistiği, güvenliği ve müşteri desteğini tek deneyimde birleştirir.',
                storyBadge: 'Mazad Müşterilere Ne Sunar?',
                storyTitle: 'Beş bağlantılı yetenek. Tek ve anlaşılır deneyim.',
                storyLead: 'Platformun her parçası, doğru ürünü bulmaktan siparişi teslim almaya ve destek almaya kadar gerçek bir müşteri ihtiyacını karşılar.',
                sections: [
                    { title: 'Pazaryeri', lead: 'Tek Pazaryerinde Daha Fazla Seçenek', items: ['Ürün keşfi ve arama', 'Düzenli ürün kategorileri', 'Ürün karşılaştırma', 'Yerel para birimleri', 'Çoklu ödeme yöntemleri', 'Sipariş takibi', 'Puan ve değerlendirmeler', 'Müşteri desteği'] },
                    { title: 'Açık Artırmalar', lead: 'Şeffaf Keşif ve Teklif Deneyimi', items: ['Canlı ve süreli açık artırmalar', 'Net başlangıç fiyatları', 'Uygun olduğunda rezerv fiyatı', 'Anlık teklif bildirimleri', 'Otomatik süre uzatımı', 'Açık artırma geçmişi', 'Alıcı ve satıcı koruması', 'Kazanan ve ödeme süreci'] },
                    { title: 'Ödemeler', lead: 'Her Pazara Uygun Seçenekler', items: ['Kapıda ödeme', 'Banka ve kredi kartları', 'Yerel ödeme ağ geçitleri', 'Dijital cüzdanlar', 'Mevcutsa taksit', 'Çoklu para birimi', 'Güvenli iadeler', 'Satıcı ödemeleri', 'Mevcutsa şimdi al sonra öde'] },
                    { title: 'Lojistik', lead: 'Tedarikçiden Müşteriye', items: ['Türkiye’den uluslararası gönderim', 'Hava ve kara teslimatı', 'Gümrük koordinasyonu', 'Yerel son kilometre teslimatı', 'Gönderi takibi', 'Teslimat bildirimleri', 'İade koordinasyonu', 'Lojistik iş ortağı ağı'] },
                    { title: 'Güven ve Emniyet', lead: 'Yolculuğun Her Adımında Koruma', items: ['Satıcı ve işletme doğrulaması', 'Ürün listeleme standartları', 'Güvenli ödeme süreci', 'Müşteri verilerinin korunması', 'Dolandırıcılık takibi', 'Puan ve değerlendirmeler', 'İade ve geri ödemeler', 'Uyuşmazlık çözümü', 'Yasaklı ürün politikası'] },
                    { title: 'Mazad Nasıl Çalışır?', lead: 'Altı Basit Adım', items: ['Hesap oluşturun', 'Ürünlere veya açık artırmalara göz atın', 'Sipariş verin veya teklif sunun', 'Ödeme yöntemini seçin', 'Teslimatı takip edin', 'Gerektiğinde destek alın'] }
                ],
                descriptions: [
                    'Mazad; mağaza, marka ve tedarikçilerin ürünlerini kolaylık, seçenek ve güven odağında tasarlanmış yerelleştirilmiş bir dijital alışveriş deneyimiyle müşterilere sunar.',
                    'Canlı ve süreli açık artırmalar; net başlangıç fiyatlarını, uygun olduğunda rezerv fiyatlarını, anlık teklif bildirimlerini, otomatik uzatmaları, geçmişi ve açık kazanan-ödeme sürecini tek şeffaf deneyimde birleştirir.',
                    'Ülkeye göre sunulan seçenekler; kapıda ödeme, kartlar, yerel ağ geçitleri, dijital cüzdanlar, taksit, çoklu para birimi, güvenli iadeler, satıcı ödemeleri ve mevcutsa şimdi al sonra ödeyi içerebilir.',
                    'Mazad; Türkiye’den uluslararası gönderimi, hava ve kara teslimatını, gümrük koordinasyonunu, yerel son kilometre teslimatını, takibi, bildirimleri, iadeleri ve lojistik ortak ağını birbirine bağlar.',
                    'Güven ve emniyet; satıcı ve işletme doğrulamasından ürün standartlarına, güvenli ödemeden müşteri verilerinin korunmasına, dolandırıcılık takibinden iade ve uyuşmazlık çözümüne kadar uzanır.',
                    'Müşteri yolculuğu; hesap oluşturmadan ürün veya açık artırma keşfine, ödeme, teslimat takibi ve desteğe kadar altı anlaşılır adımdan oluşur.'
                ],
                notes: ['', '', 'Ödeme yöntemleri ve kullanılabilirlik ülkeye göre değişir.', 'Teslimat tahminleri ülkeye ve gönderim yöntemine göre değişir.', ''],
                journeyBadge: 'Mazad Nasıl Çalışır?',
                journeyTitle: 'Hesap oluşturmadan desteğe, bağlantılı tek yolculuk.',
                journeyLead: 'Müşteriler; ürün keşfederken, açık artırmaya katılırken, ödeme yaparken ve teslimatı takip ederken sıradaki adımı bilir.',
                cta: 'Mazad’ı Keşfet'
            },
            business: {
                badge: 'İşletmeler İçin', title: 'İşinizi Mazad ile Büyütün', lead: 'Mazad; satıcılara, markalara, tedarikçilere ve iş ortaklarına müşterilere ulaşmak ve ticareti yönetmek için gerekli araçları sunar.',
                storyBadge: 'Bağlantılı İş Büyümesi',
                storyTitle: 'Müşterilere ulaşmak ve bölgesel ticareti yönetmek için tek yer.',
                storyLead: 'İşletmenize uygun fırsatla başlayın. Mazad; mağazaları, ürün yönetimini, siparişleri, teslimatı, entegrasyonları ve bölgesel iş ortaklıklarını tek ticari deneyimde birleştirir.',
                sections: [
                    { title: 'Satıcılar İçin', lead: 'Dijital mağazanızı kurun ve yönetin.', items: ['Irak ve gelecekteki pazarlarda müşterilere ulaşın', 'Dijital mağaza oluşturun', 'Ürünleri listeleyin ve yönetin', 'Stokları eşitleyin', 'Siparişleri alın ve yönetin', 'Teslimat çözümlerine erişin', 'Satış performansını takip edin', 'Kampanyalara katılın', 'Satıcı desteği alın'] },
                    { title: 'Markalar İçin', lead: 'Resmî marka deneyiminizi bölgesel müşterilere taşıyın.', items: ['Resmî mağazalar', 'Marka görünürlüğü', 'Yerelleştirilmiş ürün içeriği', 'Kampanya alanları', 'Müşteri içgörüleri', 'Marka koruması', 'Yerel para ve ödeme desteği', 'Sınır ötesi lojistik'] },
                    { title: 'Tedarikçiler İçin', lead: 'Ürünlerinizi yeni pazarlara taşıyın.', items: ['Ürün dağıtımı', 'Toplu katalog entegrasyonu', 'Sınır ötesi sipariş işleme', 'Toptan ve perakende fırsatları', 'Bölgesel pazar erişimi', 'Stok entegrasyonu', 'Raporlama ve analiz', 'Özel ticari destek'] },
                    { title: 'Teknoloji Entegrasyonları', lead: 'Mazad’ı kullandığınız sistemlere bağlayın.', items: ['E-ticaret platformları', 'ERP sistemleri', 'Stok sistemleri', 'Sipariş yönetimi', 'Muhasebe platformları', 'Ödeme ağ geçitleri', 'Lojistik sağlayıcıları', 'Teknik kurulum desteği'] },
                    { title: 'İş Ortakları İçin', lead: 'Bölgesel ticaretin geleceğini birlikte kuralım.', items: ['Ödeme ortakları', 'Lojistik ortakları', 'Teknoloji ortakları', 'Pazarlama ortakları', 'Yerel hizmet sağlayıcıları', 'Stratejik pazar ortakları'] }
                ],
                sellerCta: 'Satıcı Olun',
                onboardingBadge: 'Satıcı Kurulumu',
                onboardingTitle: 'Başvurudan ödemelere uzanan altı net adım.',
                onboardingLead: 'Yapılandırılmış süreç, sipariş almadan önce işletmenin, mağazanın, kataloğun ve operasyonların hazırlanmasına yardımcı olur.',
                onboarding: ['Başvuru gönderin', 'İşletme doğrulamasını tamamlayın', 'Mağazayı kurun', 'Ürünleri yükleyin veya eşitleyin', 'Sipariş almaya başlayın', 'Ödemeleri alın'],
                brandSupplierBadge: 'Markalar ve Tedarikçiler İçin',
                brandSupplierTitle: 'Ürünlerinizi Yeni Pazarlara Taşıyın',
                brandSupplierLead: 'Mazad; resmî marka deneyimlerini, ürün dağıtımını, yerelleştirilmiş içeriği, bölgesel erişimi, sınır ötesi operasyonları ve ticari desteği bir araya getirir.',
                integrationBadge: 'Teknoloji Entegrasyonları',
                integrationTitle: 'Mazad’ı işletmenizin kullandığı sistemlere bağlayın.',
                integrationLead: 'Entegrasyon yöntemleri, teknik kurulum, dokümantasyon ve destek; bağlanan platforma ve operasyonel ihtiyaca göre sunulmalıdır.',
                partnerBadge: 'İş Ortakları İçin',
                partnerTitle: 'Bölgesel Ticaretin Geleceğini Birlikte Kuralım',
                partnerLead: 'Mazad; ödeme, lojistik, teknoloji, pazarlama, yerel hizmet ve stratejik pazar ortaklarıyla çalışır.',
                formTitle: 'İş Ortağı Olun',
                formLead: 'İş ortaklığı fırsatını anlamamız için gerekli temel bilgileri paylaşın.',
                formFields: ['Şirket adı', 'Ülke', 'Web sitesi', 'İş ortaklığı kategorisi', 'İletişim bilgileri', 'İş ortaklığı önerisi'],
                cta: 'İşletme Çözümlerini Keşfet'
            },
            markets: {
                badge: 'Pazarlarımız', title: 'Bölgesel Olarak Kuruldu. Her Pazara Uyarlandı.', lead: 'Mazad, bölgesel teknolojiyi yerel ödeme, teslimat, dil, para birimi ve müşteri desteği deneyimleriyle birleştirir.', statuses: ['Faaliyette', 'Yakında açılacak', 'Hazırlıkta', 'Değerlendirmede'],
                sections: [
                    { title: 'Türkiye', lead: 'Genel merkez ve bölgesel yetenek merkezi.', items: ['Teknoloji ve operasyon', 'Tedarikçi ve marka ağı', 'Ürün tedariği', 'Sınır ötesi ticaret', 'Uluslararası lojistik koordinasyonu'] },
                    { title: 'Irak', lead: 'Mazad’ın mevcut faaliyet pazarı.', items: ['Yerelleştirilmiş pazaryeri', 'Mevcut teslimat kapsamı', 'Kategori ve ödeme yöntemleri', 'Müşteri ve satıcı desteği', 'Teslimat ve iade bilgileri', 'Uygulama ve yerel iletişim'] },
                    { title: 'Büyüme Pazarları', lead: 'Her ülke doğru ve açık bir durumla sunulur.', items: ['Suudi Arabistan', 'Birleşik Arap Emirlikleri', 'Katar', 'Bahreyn', 'Ürdün', 'Cezayir', 'Libya', 'Suriye', 'Lübnan'] }
                ], cta: 'Pazarlarımızı Keşfet'
            },
            company: {
                badge: 'Şirket', title: 'Mazad’ın Arkasındaki İnsanlar, Haberler ve Fırsatlar', lead: 'Mazad’ın bölgesel yolculuğunu takip edin, kariyer fırsatlarını keşfedin ve talebiniz için doğru ekibe ulaşın.',
                newsTitle: 'Mazad Haber Merkezi', newsLead: 'Şirket duyuruları, pazar gelişmeleri, iş ortaklıkları, platform güncellemeleri ve bölgesel ticaret hikâyeleri için açık bir merkez.',
                articleMetaTitle: 'Yayımlanan her içerik bağlamıyla birlikte sunulur.',
                articleMeta: ['Yayın tarihi', 'Kategori', 'Yazar veya Mazad İletişim', 'Öne çıkan görsel', 'İlgili içerikler', 'Gerektiğinde medya iletişimi'],
                careerTitle: 'Ticaretin Yeni Bölümünü Mazad ile İnşa Edin', careerLead: 'Mazad’ın kültürünü, ekiplerini, lokasyonlarını ve işe alım yolculuğunu keşfedin.',
                careerFilters: ['Ülke', 'Departman', 'Çalışma türü', 'Çalışma düzeni'],
                contactTitle: 'Doğru Ekiple Başlayın', contactLead: 'İhtiyacınıza uygun talep kategorisini seçin ve resmî iletişim kanalından devam edin.',
                officeTitle: 'Doğrulanmış İletişim Bilgileri', officeLead: 'Ofis ve iletişim bilgileri yalnızca doğrulandıktan sonra yayımlanır.',
                sections: [
                    { title: 'Haberler', lead: 'Şirket ve pazar güncellemeleri.', items: ['Şirket duyuruları', 'Yeni iş ortaklıkları', 'Pazar açılışları', 'Platform güncellemeleri', 'Satıcı hikâyeleri', 'Topluluk girişimleri', 'Sektör içgörüleri'] },
                    { title: 'Kariyer', lead: 'Ticaretin yeni bölümünü Mazad ile inşa edin.', items: ['Şirket kültürü', 'Mazad’da çalışma', 'Çalışan değerleri', 'Departmanlar', 'Ofis konumları', 'Açık pozisyonlar', 'Staj fırsatları', 'İşe alım süreci'] },
                    { title: 'İletişim', lead: 'Talebinize uygun ekibi seçin.', items: ['Müşteri desteği', 'Satıcı desteği', 'Marka ve tedarikçi talepleri', 'İş ortaklığı talepleri', 'Teknoloji entegrasyonları', 'Medya talepleri', 'Kariyer', 'Genel talepler'] },
                    { title: 'Ofis Bilgileri', lead: 'Yalnızca doğrulanmış bilgiler yayımlanır.', items: ['Türkiye genel merkezi', 'Irak ofisi', 'Resmî e-postalar', 'Doğrulanmış telefonlar', 'Çalışma saatleri', 'Harita konumları', 'Sosyal medya kanalları'] }
                ], cta: 'Mazad ile İletişime Geç'
            },
            sell: {
                badge: 'Mazad’da Satış Yap', title: 'Daha Fazla Müşteriye Ulaşın ve Mazad ile Büyüyün', lead: 'Dijital mağaza oluşturun, ürün ve siparişleri yönetin, teslimat çözümlerine erişin ve Irak ile gelecekteki bölgesel pazarlarda büyüyün.',
                sections: [
                    { title: 'Neden Mazad’da Satış?', lead: 'Bölgesel ticaret yolculuğunu tek yerden yönetin.', items: ['Yeni müşterilere ulaşın', 'Dijital mağaza oluşturun', 'Ürünleri yönetin', 'Stokları eşitleyin', 'Siparişleri yönetin', 'Teslimat çözümlerine erişin', 'Satışları takip edin', 'Kampanyalara katılın', 'Satıcı desteği alın'] },
                    { title: 'Satıcı Kurulumu', lead: 'Başvurudan ilk siparişe net bir yol.', items: ['Başvuru gönderin', 'İşletme doğrulamasını tamamlayın', 'Mağazanızı kurun', 'Ürünleri yükleyin veya eşitleyin', 'Sipariş almaya başlayın', 'Ödemelerinizi alın'] },
                    { title: 'Gerekli Bilgiler', lead: 'Sorumlu bir kurulum süreci için gerekenler.', items: ['Şirket veya satıcı bilgileri', 'Ülke ve iletişim bilgileri', 'Ürün kategorileri', 'İşletme doğrulama belgeleri', 'Ödeme bilgileri', 'Teslimat gereksinimleri'] }
                ], cta: 'Satıcı Ol'
            }
        }
    };

    // Arabic uses the same content structure. Keeping it explicit ensures that
    // language switching never falls back to English on the new pages.
    copy.ar = {
        home: {
            badge: 'مزاد جلوبال',
            title: 'نبني روابط إقليمية. <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-500">ونصنع إمكانات رقمية.</span>',
            lead: 'مزاد جلوبال مجموعة تقنية إقليمية مقرها تركيا، تربط المنصات والشركات والأسواق في منطقة الشرق الأوسط وشمال أفريقيا من خلال البنية الرقمية والخبرة المحلية والشراكات الاستراتيجية.',
            statLabels: ['المقر الإقليمي', 'العمليات الحالية', 'اتجاه التوسع'],
            action: 'استكشف مزاد جلوبال', chips: ['التقنية', 'المنظومة', 'النمو الإقليمي'],
            benefits: ['استكشف منصتنا', 'اكتشف المنظومة', 'حلول الأعمال', 'اطلع على أسواقنا'],
            platformBadge: 'ماذا تقدم مزاد؟',
            platformTitle: 'منصة <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-500">واحدة مترابطة</span>',
            platformLead: 'تجربة تجارة محلية تجمع التسوق والمزادات والمدفوعات والخدمات اللوجستية وتقنيات البائعين.',
            cards: [
                ['خيارات أكثر في سوق واحد', 'اكتشف منتجات المتاجر والعلامات والموردين عبر فئات منظمة ومقارنة المنتجات والعملات المحلية والتقييمات الموثوقة.'],
                ['طريقة شفافة للمزايدة', 'شارك في المزادات المباشرة والمؤقتة مع أسعار بداية واضحة وإشعارات فورية وسجل للمزادات وحماية للبائع والمشتري.'],
                ['مدفوعات مناسبة لكل سوق', 'اختر وسائل الدفع المحلية والبطاقات والمحافظ والدفع عند الاستلام والتقسيط عند توفره والاسترداد الآمن.'],
                ['من المورد إلى العميل', 'تابع الشحن الدولي والتخليص والتوصيل المحلي والتتبع والإشعارات والمرتجعات في رحلة واحدة.']
            ],
            componentLabels: ['السوق', 'المزادات', 'المدفوعات', 'الخدمات اللوجستية'],
            connectedPanels: [
                ['منصة واحدة مترابطة', 'السوق والمزادات وتقنيات البائعين', 'تجمع مزاد اكتشاف المنتجات والمزايدة الشفافة والمتاجر الرقمية وإدارة المخزون والطلبات في تجربة تجارة إقليمية واحدة.'],
                ['الثقة والأمان', 'المدفوعات والتوصيل ودعم العملاء', 'تجعل خيارات الدفع المحلية والمعاملات الآمنة وتتبع التوصيل والمرتجعات والدعم كل خطوة واضحة للعملاء والشركات.']
            ],
            servesBadge: 'من تخدم مزاد؟',
            servesSpeech: [
                'تمنح مزاد العملاء مكاناً محلياً واحداً لاكتشاف المنتجات والانضمام إلى المزادات والدفع وتتبع التوصيل والحصول على الدعم.',
                'يمكن للبائعين إنشاء متاجر رقمية وإدارة المنتجات والطلبات والوصول إلى حلول التوصيل وعملاء جدد.',
                'تصل العلامات والموردون وشركاء الأعمال إلى الأسواق الإقليمية عبر المحتوى المحلي والتكاملات والخدمات اللوجستية والتعاون التجاري.'
            ],
            servesCards: [
                ['العملاء', 'اكتشف المنتجات والمزادات مع وسائل دفع محلية وتتبع للتوصيل وتقييمات ودعم للعملاء.'],
                ['البائعون', 'أنشئ متجراً رقمياً وأدر المنتجات وزامن المخزون واستقبل الطلبات وتابع أداء المبيعات.'],
                ['العلامات والموردون والشركاء', 'صل إلى العملاء إقليمياً عبر المتاجر الرسمية وتوزيع المنتجات والتكاملات والخدمات اللوجستية والشراكات.']
            ],
            marketsBadge: 'أسواقنا',
            marketsTitle: 'بُنيت إقليمياً. <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-500">ومحلية لكل سوق.</span>',
            marketsLead: 'تجمع مزاد التقنية الإقليمية وشبكات الموردين مع اللغة والعملات والدفع والتوصيل ودعم العملاء محلياً.',
            marketCards: [
                ['تركيا', 'المقر الرئيسي', 'التقنية والعمليات وشبكات الموردين وتوريد المنتجات وتنسيق الخدمات اللوجستية الدولية.'],
                ['العراق', 'سوق التشغيل الحالي', 'تسوق محلي ودعم للبائعين وخيارات دفع ومعلومات توصيل وخدمة عملاء.'],
                ['المنطقة', 'رؤية التوسع', 'تُعرض الأسواق الجديدة بوضوح: قيد التقييم أو التحضير أو الإطلاق قريباً أو التشغيل.'],
                ['الشراكات', 'النمو الإقليمي', 'شركاء التقنية والدفع والخدمات اللوجستية والتسويق والخدمات المحلية يدعمون بناء كل سوق بمسؤولية.']
            ]
        },
        about: {
            badge: 'من نحن', title: 'نربط تركيا ومنطقة الشرق الأوسط وشمال أفريقيا بالتقنية والخبرة الإقليمية',
            lead: 'مزاد جلوبال مجموعة إقليمية للتقنية والتجارة مقرها تركيا. تجمع المنصات الرقمية والمدفوعات والخدمات اللوجستية وأدوات الأعمال والخبرة المحلية ضمن منظومة مترابطة تخدم تركيا والمنطقة.',
            labels: ['قصتنا', 'مهمتنا', 'رؤيتنا'],
            headings: ['تأسست في تركيا وتنمو إقليمياً', 'تبسيط التجارة الإقليمية', 'منظومة مترابطة وموثوقة'],
            paragraphs: [
                'تأسست مزاد في تركيا وطورت استراتيجيتها الإقليمية حول قدرات السوق والمزادات. يمثل التوسع التشغيلي في العراق الخطوة التالية في رحلة إقليمية أوسع، وتُعرض الأنشطة المستقبلية كخطط حتى يتم تأكيدها.',
                'تبسيط التجارة الإقليمية بربط العملاء والبائعين والعلامات والموردين من خلال تقنية محلية وخيارات دفع موثوقة وحلول توصيل متكاملة.',
                'أن نصبح منظومة التجارة الرقمية الأكثر ترابطاً وثقة بين تركيا ومنطقة الشرق الأوسط وشمال أفريقيا.'
            ],
            infoTitles: ['المقر الإقليمي', 'السوق والمزادات', 'المدفوعات المحلية'],
            infoText: ['مقر في تركيا ينسق التقنية والعمليات وعلاقات الموردين والتوسع الإقليمي.', 'اكتشاف المنتجات والمتاجر الرقمية والمزادات المباشرة والمؤقتة والمزايدة الشفافة وتقنيات البائعين.', 'خيارات دفع حسب البلد وعمليات آمنة واسترداد وتسويات للبائعين.'],
            valuesBadge: 'ما يوجهنا', valuesTitle: 'قيمنا', valuesLead: 'المبادئ التي تقف خلف كل تجربة وقرار وعلاقة عمل.',
            valueTitles: ['الثقة', 'الفهم المحلي', 'سهولة الوصول', 'الابتكار'],
            valueText: ['تجارب شفافة للعملاء والشركات.', 'تكييف المنصة واللغة والدفع والتوصيل لكل سوق.', 'جعل التجارة الرقمية أسهل للعملاء والبائعين والعلامات والموردين.', 'استخدام التقنية لتبسيط الشراء والبيع والدفع والعمليات.'],
            journeyBadge: 'رحلتنا',
            journeyTitle: 'تأسست بفهم إقليمي وتنمو بهدف واضح.',
            journeyLead: 'رحلة مركزة من شركة مقرها تركيا إلى منظومة سوق ومزادات مترابطة تخدم التجارة الإقليمية.',
            milestones: ['تأسست مزاد في تركيا.', 'وسعت الشركة شبكة الموردين والأعمال.', 'طورت مزاد استراتيجيتها للتجارة الإقليمية.', 'تطورت المنصة إلى منظومة موحدة للسوق والمزادات.', 'بدأت مزاد توسعها التشغيلي في العراق.'],
            purposeBadge: 'الرؤية والمهمة',
            leadershipTitle: 'القيادة',
            leadershipText: 'تقود مزاد مجموعة إقليمية تجمع الخبرة في التقنية والتجارة والعمليات والمدفوعات وتطوير الأسواق.',
            leadershipNote: 'ستنشر ملفات القيادة الفردية بعد التحقق من الصور والمناصب والسير والخبرات والروابط المهنية.',
            partnershipTitle: 'الشراكة',
            partnershipText: 'النمو مع البائعين والموردين وشركاء الخدمات.'
        },
        platform: {
            badge: 'المنصة', title: 'كل ما يحتاجه العميل للاكتشاف والشراء والمزايدة والدفع والاستلام', lead: 'تجمع مزاد التسوق والمزادات والمدفوعات المحلية والخدمات اللوجستية والثقة والدعم في تجربة واحدة.',
            storyBadge: 'ما الذي تقدمه مزاد للعملاء؟',
            storyTitle: 'خمس قدرات مترابطة. تجربة واحدة واضحة.',
            storyLead: 'يلبي كل جزء من المنصة حاجة عملية للعميل، من العثور على المنتج المناسب إلى استلام الطلب والحصول على الدعم.',
            sections: [
                { title: 'السوق', lead: 'خيارات أكثر في سوق واحد', items: ['البحث واكتشاف المنتجات', 'فئات منظمة', 'مقارنة المنتجات', 'عملات محلية', 'وسائل دفع متعددة', 'تتبع الطلب', 'التقييمات والمراجعات', 'دعم العملاء'] },
                { title: 'المزادات', lead: 'اكتشاف ومزايدة بشفافية', items: ['مزادات مباشرة ومؤقتة', 'أسعار بداية واضحة', 'سعر احتياطي عند الحاجة', 'إشعارات فورية', 'تمديد تلقائي', 'سجل المزاد', 'حماية المشتري والبائع', 'عملية فوز ودفع واضحة'] },
                { title: 'المدفوعات', lead: 'خيارات مناسبة لكل سوق', items: ['الدفع عند الاستلام', 'بطاقات الخصم والائتمان', 'بوابات دفع محلية', 'محافظ رقمية', 'التقسيط عند توفره', 'دفع بعملات متعددة', 'استرداد آمن', 'تسويات البائعين', 'اشتر الآن وادفع لاحقاً عند توفره'] },
                { title: 'الخدمات اللوجستية', lead: 'من المورد إلى العميل', items: ['شحن دولي من تركيا', 'شحن جوي وبري', 'تنسيق الجمارك', 'توصيل محلي', 'تتبع الشحنات', 'إشعارات التوصيل', 'تنسيق المرتجعات', 'شبكة شركاء لوجستيين'] },
                { title: 'الثقة والأمان', lead: 'حماية في كل خطوة', items: ['توثيق البائع والشركة', 'معايير عرض المنتجات', 'دفع آمن', 'حماية بيانات العملاء', 'مراقبة الاحتيال', 'تقييمات ومراجعات', 'مرتجعات واسترداد', 'حل النزاعات', 'سياسة المنتجات المحظورة'] },
                { title: 'كيف تعمل مزاد؟', lead: 'ست خطوات بسيطة', items: ['أنشئ حساباً', 'تصفح المنتجات أو المزادات', 'اطلب أو قدم مزايدة', 'اختر وسيلة الدفع', 'تتبع التوصيل', 'احصل على الدعم عند الحاجة'] }
            ],
            descriptions: [
                'تمنح مزاد العملاء إمكانية الوصول إلى منتجات المتاجر والعلامات والموردين من خلال تجربة تسوق رقمية محلية مصممة حول السهولة والاختيار والثقة.',
                'تجمع المزادات المباشرة والمؤقتة أسعار البداية الواضحة والسعر الاحتياطي عند الحاجة والإشعارات الفورية والتمديد التلقائي وسجل المزاد وعملية الفوز والدفع الواضحة في تجربة شفافة.',
                'تُعرض خيارات الدفع حسب الدولة وقد تشمل الدفع عند الاستلام والبطاقات والبوابات المحلية والمحافظ الرقمية والتقسيط والدفع بعملات متعددة والاسترداد وتسويات البائعين والشراء الآن والدفع لاحقاً عند توفره.',
                'تربط مزاد الشحن الدولي من تركيا بالنقل الجوي والبري وتنسيق الجمارك والتوصيل المحلي وتتبع الشحنات والإشعارات وتنسيق المرتجعات وشبكة الشركاء اللوجستيين.',
                'تشمل الثقة والأمان توثيق البائعين والشركات ومعايير عرض المنتجات وأمان الدفع وحماية بيانات العملاء ومراقبة الاحتيال والتقييمات والمرتجعات وحل النزاعات وسياسة المنتجات المحظورة.',
                'تتكون رحلة العميل من ست خطوات واضحة، من إنشاء الحساب واكتشاف المنتجات أو المزادات إلى الدفع وتتبع التوصيل والحصول على الدعم.'
            ],
            notes: ['', '', 'تختلف وسائل الدفع ومدى توفرها حسب الدولة.', 'تختلف تقديرات التوصيل حسب الدولة وطريقة الشحن.', ''],
            journeyBadge: 'كيف تعمل مزاد؟',
            journeyTitle: 'من إنشاء الحساب إلى الدعم، رحلة واحدة مترابطة.',
            journeyLead: 'يعرف العملاء دائماً الخطوة التالية أثناء اكتشاف المنتجات والانضمام إلى المزادات والدفع ومتابعة التوصيل.',
            cta: 'استكشف مزاد'
        },
        business: {
            badge: 'للأعمال', title: 'نمِّ أعمالك مع مزاد', lead: 'تمنح مزاد البائعين والعلامات والموردين والشركاء الأدوات والروابط الإقليمية للوصول إلى العملاء وإدارة التجارة.',
            storyBadge: 'نمو أعمال مترابط',
            storyTitle: 'مكان واحد للوصول إلى العملاء وإدارة التجارة الإقليمية.',
            storyLead: 'ابدأ بالفرصة المناسبة لنشاطك. تجمع مزاد المتاجر وإدارة المنتجات والطلبات والتوصيل والتكاملات والشراكات الإقليمية في تجربة تجارية واحدة.',
            sections: [
                { title: 'للبائعين', lead: 'أنشئ متجرك الرقمي وأدره.', items: ['الوصول إلى عملاء العراق والأسواق المستقبلية', 'إنشاء متجر رقمي', 'إدارة المنتجات', 'مزامنة المخزون', 'إدارة الطلبات', 'حلول توصيل', 'متابعة المبيعات', 'حملات ترويجية', 'دعم البائع'] },
                { title: 'للعلامات التجارية', lead: 'قدّم تجربة علامتك الرسمية للعملاء إقليمياً.', items: ['متاجر رسمية', 'ظهور العلامة', 'محتوى منتجات محلي', 'حملات تسويقية', 'رؤى العملاء', 'حماية العلامة', 'دعم العملات والدفع', 'لوجستيات عابرة للحدود'] },
                { title: 'للموردين', lead: 'انقل منتجاتك إلى أسواق جديدة.', items: ['توزيع المنتجات', 'تكامل الكتالوج', 'معالجة الطلبات الدولية', 'فرص الجملة والتجزئة', 'وصول إقليمي', 'تكامل المخزون', 'تقارير وتحليلات', 'دعم تجاري مخصص'] },
                { title: 'التكاملات التقنية', lead: 'اربط مزاد بأنظمتك الحالية.', items: ['منصات التجارة الإلكترونية', 'أنظمة ERP', 'أنظمة المخزون', 'إدارة الطلبات', 'المحاسبة', 'بوابات الدفع', 'مزودو الخدمات اللوجستية', 'دعم الإعداد التقني'] },
                { title: 'للشركاء', lead: 'لنبنِ مستقبل التجارة الإقليمية معاً.', items: ['شركاء الدفع', 'شركاء الخدمات اللوجستية', 'شركاء التقنية', 'شركاء التسويق', 'مزودو الخدمات المحلية', 'شركاء الأسواق الاستراتيجيون'] }
            ],
            sellerCta: 'كن بائعاً',
            onboardingBadge: 'إعداد البائع',
            onboardingTitle: 'ست خطوات واضحة من الطلب إلى التسويات.',
            onboardingLead: 'يساعد المسار المنظم كل بائع على إعداد النشاط والمتجر والكتالوج والعمليات قبل استقبال الطلبات.',
            onboarding: ['أرسل طلباً', 'أكمل توثيق النشاط', 'جهّز المتجر', 'ارفع المنتجات أو زامنها', 'ابدأ استقبال الطلبات', 'استلم التسويات'],
            brandSupplierBadge: 'للعلامات والموردين',
            brandSupplierTitle: 'انقل منتجاتك إلى أسواق جديدة',
            brandSupplierLead: 'تدعم مزاد تجارب العلامات الرسمية وتوزيع المنتجات والمحتوى المحلي والوصول الإقليمي والعمليات العابرة للحدود والدعم التجاري.',
            integrationBadge: 'التكاملات التقنية',
            integrationTitle: 'اربط مزاد بالأنظمة التي يستخدمها نشاطك.',
            integrationLead: 'تتوافق وسائل التكامل والإعداد التقني والتوثيق والدعم مع المنصة المتصلة والاحتياج التشغيلي.',
            partnerBadge: 'للشركاء',
            partnerTitle: 'لنبنِ مستقبل التجارة الإقليمية معاً',
            partnerLead: 'تعمل مزاد مع شركاء الدفع والخدمات اللوجستية والتقنية والتسويق والخدمات المحلية والأسواق الاستراتيجية.',
            formTitle: 'كن شريكاً',
            formLead: 'شارك المعلومات الأساسية اللازمة لفهم فرصة الشراكة.',
            formFields: ['اسم الشركة', 'الدولة', 'الموقع الإلكتروني', 'فئة الشراكة', 'بيانات التواصل', 'مقترح الشراكة'],
            cta: 'استكشف حلول الأعمال'
        },
        markets: {
            badge: 'أسواقنا', title: 'بُنيت إقليمياً. ومحلية لكل سوق.', lead: 'تجمع مزاد التقنية الإقليمية مع الدفع والتوصيل واللغة والعملات ودعم العملاء محلياً.', statuses: ['تعمل', 'تُطلق قريباً', 'قيد التحضير', 'قيد التقييم'],
            sections: [
                { title: 'تركيا', lead: 'المقر ومركز القدرات الإقليمية.', items: ['التقنية والعمليات', 'شبكة الموردين والعلامات', 'توريد المنتجات', 'التجارة عبر الحدود', 'تنسيق الخدمات اللوجستية الدولية'] },
                { title: 'العراق', lead: 'سوق التشغيل الحالي لمزاد.', items: ['سوق محلي', 'نطاق التوصيل الحالي', 'الفئات ووسائل الدفع', 'دعم العملاء والبائعين', 'معلومات التوصيل والمرتجعات', 'التطبيق والتواصل المحلي'] },
                { title: 'أسواق التوسع', lead: 'تُعرض كل دولة بحالة واضحة ودقيقة.', items: ['السعودية', 'الإمارات', 'قطر', 'البحرين', 'الأردن', 'الجزائر', 'ليبيا', 'سوريا', 'لبنان'] }
            ], cta: 'استكشف أسواقنا'
        },
        company: {
            badge: 'الشركة', title: 'الأشخاص والأخبار والفرص خلف مزاد', lead: 'تابع رحلة مزاد الإقليمية واكتشف فرص العمل وتواصل مع الفريق المناسب.',
            newsTitle: 'غرفة أخبار مزاد', newsLead: 'مساحة واضحة لإعلانات الشركة وتطورات الأسواق والشراكات وتحديثات المنصة وقصص التجارة الإقليمية.',
            articleMetaTitle: 'يُعرض كل محتوى منشور مع سياقه.',
            articleMeta: ['تاريخ النشر', 'الفئة', 'الكاتب أو اتصالات مزاد', 'الصورة الرئيسية', 'محتوى ذو صلة', 'جهة الاتصال الإعلامية عند الحاجة'],
            careerTitle: 'ابنِ الفصل القادم من التجارة مع مزاد', careerLead: 'اكتشف ثقافة مزاد وفرقها ومواقعها ومسار التوظيف.',
            careerFilters: ['الدولة', 'القسم', 'نوع التوظيف', 'نظام العمل'],
            contactTitle: 'ابدأ مع الفريق المناسب', contactLead: 'اختر فئة الطلب التي تناسب احتياجك وتابع عبر قناة التواصل الرسمية.',
            officeTitle: 'معلومات تواصل موثقة', officeLead: 'لا تُنشر معلومات المكاتب والتواصل إلا بعد التحقق منها.',
            sections: [
                { title: 'الأخبار', lead: 'تحديثات الشركة والأسواق.', items: ['إعلانات الشركة', 'شراكات جديدة', 'إطلاق الأسواق', 'تحديثات المنصة', 'قصص البائعين', 'مبادرات المجتمع', 'رؤى القطاع'] },
                { title: 'الوظائف', lead: 'ابنِ الفصل القادم من التجارة مع مزاد.', items: ['ثقافة الشركة', 'العمل في مزاد', 'قيم الموظفين', 'الأقسام', 'المكاتب', 'الوظائف المتاحة', 'التدريب', 'عملية التوظيف'] },
                { title: 'التواصل', lead: 'اختر الفريق المناسب لطلبك.', items: ['دعم العملاء', 'دعم البائعين', 'طلبات العلامات والموردين', 'الشراكات', 'التكاملات التقنية', 'الإعلام', 'الوظائف', 'الطلبات العامة'] },
                { title: 'معلومات المكاتب', lead: 'ننشر معلومات التواصل المؤكدة فقط.', items: ['مقر تركيا', 'مكتب العراق', 'البريد الرسمي', 'أرقام مؤكدة', 'ساعات العمل', 'المواقع', 'قنوات التواصل الاجتماعي'] }
            ], cta: 'تواصل مع مزاد'
        },
        sell: {
            badge: 'بِع على مزاد', title: 'صل إلى عملاء أكثر وانمُ مع مزاد', lead: 'أنشئ متجراً رقمياً وأدر المنتجات والطلبات واحصل على حلول التوصيل وانمُ في العراق والأسواق الإقليمية المستقبلية.',
            sections: [
                { title: 'لماذا تبيع على مزاد؟', lead: 'أدر رحلة تجارتك الإقليمية من مكان واحد.', items: ['الوصول إلى عملاء جدد', 'إنشاء متجر', 'إدارة المنتجات', 'مزامنة المخزون', 'إدارة الطلبات', 'حلول التوصيل', 'متابعة المبيعات', 'الحملات', 'دعم البائع'] },
                { title: 'إعداد البائع', lead: 'مسار واضح من الطلب إلى أول طلبية.', items: ['أرسل الطلب', 'أكمل توثيق الشركة', 'جهز متجرك', 'ارفع المنتجات أو زامنها', 'ابدأ استقبال الطلبات', 'استلم التسويات'] },
                { title: 'ما الذي تحتاجه؟', lead: 'معلومات مطلوبة لإعداد مسؤول.', items: ['بيانات الشركة أو البائع', 'الدولة والتواصل', 'فئات المنتجات', 'وثائق التحقق', 'معلومات التسوية', 'متطلبات التوصيل'] }
            ], cta: 'كن بائعاً'
        }
    };

    const lang = () => document.documentElement.lang || localStorage.getItem('mazad_lang') || 'en';
    const page = () => (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const setHTML = (element, value) => { if (element && value != null) element.innerHTML = value; };
    const setText = (element, value) => { if (element && value != null) element.textContent = value; };

    const footerCopy = {
        en: {
            description: 'Mazad Global connects platforms, businesses, and regional markets through technology, local expertise, and strategic partnerships.',
            signature: '',
            headings: ['Platform', 'Business', 'Company & Support'],
            links: [
                ['Marketplace', 'Auctions', 'Payments', 'Logistics'],
                ['Sellers', 'Brands & Suppliers', 'Partners', 'Integrations'],
                ['About', 'News & Careers', 'Contact', 'Help Centre']
            ],
            legal: 'Privacy • Terms • Cookies • Seller Policies • Prohibited Products'
        },
        tr: {
            description: 'Mazad Global; platformları, işletmeleri ve bölgesel pazarları teknoloji, yerel uzmanlık ve stratejik iş ortaklıklarıyla birbirine bağlar.',
            signature: '',
            headings: ['Platform', 'İşletmeler', 'Şirket ve Destek'],
            links: [
                ['Pazaryeri', 'Açık Artırmalar', 'Ödemeler', 'Lojistik'],
                ['Satıcılar', 'Markalar ve Tedarikçiler', 'İş Ortakları', 'Entegrasyonlar'],
                ['Hakkımızda', 'Haberler ve Kariyer', 'İletişim', 'Yardım Merkezi']
            ],
            legal: 'Gizlilik • Koşullar • Çerezler • Satıcı Politikaları • Yasaklı Ürünler'
        },
        ar: {
            description: 'تربط مزاد جلوبال المنصات والشركات والأسواق الإقليمية من خلال التقنية والخبرة المحلية والشراكات الاستراتيجية.',
            signature: '',
            headings: ['المنصة', 'الأعمال', 'الشركة والدعم'],
            links: [
                ['السوق', 'المزادات', 'المدفوعات', 'الخدمات اللوجستية'],
                ['البائعون', 'العلامات والموردون', 'الشركاء', 'التكاملات'],
                ['من نحن', 'الأخبار والوظائف', 'التواصل', 'مركز المساعدة']
            ],
            legal: 'الخصوصية • الشروط • ملفات الارتباط • سياسات البائع • المنتجات المحظورة'
        }
    };

    function applyFooter() {
        const footer = document.querySelector('.mg-footer');
        const data = footerCopy[lang()] || footerCopy.en;
        if (!footer) return;
        setText(footer.querySelector('.mg-footer-description'), data.description);
        footer.querySelector('.mg-footer-signature')?.remove();
        const headings = [...footer.querySelectorAll('.mg-footer-heading')];
        headings.forEach((heading, index) => setText(heading, data.headings[index]));
        const linkGroups = [...footer.querySelectorAll('.mg-footer-links')];
        const hrefGroups = [
            ['platform.html#section-1', 'platform.html#section-2', 'platform.html#section-3', 'platform.html#section-4'],
            ['sell-on-mazad.html', 'for-business.html#section-2', 'for-business.html#section-5', 'for-business.html#section-4'],
            ['about.html', 'company.html', 'contact.html', 'contact.html']
        ];
        linkGroups.forEach((group, groupIndex) => {
            [...group.querySelectorAll('[data-footer-entry]')].forEach((link, linkIndex) => {
                setText(link, data.links[groupIndex]?.[linkIndex]);
                if (link.tagName === 'A') {
                    link.setAttribute('href', hrefGroups[groupIndex]?.[linkIndex] || '#');
                }
            });
        });
        const legal = footer.querySelector('.mg-footer-legal');
        if (legal) legal.innerHTML = `© 2026 MAZAD GLOBAL. ${data.legal}`;
    }

    function deactivateUnreleasedLinks() {
        const inactivePages = new Set();
        document.querySelectorAll('a[href]').forEach(link => {
            const href = link.getAttribute('href') || '';
            if (/^(?:https?:|mailto:|tel:|#)/i.test(href)) return;
            const targetPage = href.split(/[?#]/)[0].split('/').pop()?.toLowerCase();
            if (!inactivePages.has(targetPage)) return;
            link.dataset.inactiveHref = href;
            link.removeAttribute('href');
            link.setAttribute('aria-disabled', 'true');
            link.setAttribute('tabindex', '-1');
            link.style.cursor = 'not-allowed';
        });
    }

    const platformIcons = [
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 5h18l-2 9H6L3 5Z"/><path d="M8 19h.01M17 19h.01M7 14l-1 3h13"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m14 4 6 6M12 6l6 6M13 11 5 19M3 21l2-2M8 3l7 7-4 4-7-7 4-4Z"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M16 15h2"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"/><path d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3 4.5 6v5.5c0 4.6 3.1 7.9 7.5 9.5 4.4-1.6 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="m9 12 2 2 4-4"/></svg>'
    ];

    const businessIcons = [
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 9h16l-1-5H5L4 9Z"/><path d="M5 9v11h14V9M9 20v-6h6v6"/><path d="M4 9c0 2 3 2 4 0 1 2 3 2 4 0 1 2 3 2 4 0 1 2 4 2 4 0"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3 2.1 4.3 4.7.7-3.4 3.3.8 4.7-4.2-2.2L7.8 16l.8-4.7L5.2 8l4.7-.7L12 3Z"/><path d="M7 20h10"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="M4 7v10l8 4 8-4V7M12 11v10"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 12h8M12 8v8"/><path d="M7 3v4M17 3v4M7 17v4M17 17v4"/><rect x="5" y="5" width="14" height="14" rx="3"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m8 12 3 3 5-6"/><path d="M4 7h5l2-2h2l2 2h5v11H4V7Z"/><path d="M8 18v2h8v-2"/></svg>'
    ];

    const integrationIcons = [
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M8 14h3M8 17h7"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16v12H4zM8 10h8M8 14h5"/><path d="M7 3v3M17 3v3M7 18v3M17 18v3"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 7.5 12 4l7 3.5-7 3.5-7-3.5Z"/><path d="M5 12l7 3.5 7-3.5M5 16.5 12 20l7-3.5"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 4h10v16H7zM10 8h4M10 12h4M10 16h2"/><path d="M4 7h3M17 7h3M4 17h3M17 17h3"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16v12H4zM7 4h10v3M8 11h8M8 15h5"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="13" rx="3"/><path d="M3 10h18M16 15h2"/><path d="m8 15 1.5 1.5L12 14"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v5M12 16v5M3 12h5M16 12h5"/><circle cx="12" cy="12" r="4"/><path d="m6 6 3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/></svg>'
    ];

    function renderBusinessPage() {
        const data = copy[lang()]?.business || copy.en.business;
        const main = document.querySelector('body > main');
        if (!main || !data) return;
        const [seller, brand, supplier, integrations, partners] = data.sections;
        const growthPositions = [
            ['0%', '24px', '0px', '0%', '22px'],
            ['21%', '110px', '25px', '12%', '96px'],
            ['43%', '196px', '50px', '28%', '170px'],
            ['29%', '282px', '75px', '18%', '244px'],
            ['49%', '368px', '100px', '36%', '318px']
        ];
        main.innerHTML = `
            <div class="business-page">
                <div class="business-shell">
                    <header class="business-hero">
                        <div>
                            <span class="business-kicker"><i aria-hidden="true"></i>${data.badge}</span>
                            <h1>${data.title}</h1>
                            <p class="business-hero-copy">${data.lead}</p>
                            <nav class="business-jump" aria-label="${data.storyBadge}">
                                <a href="#business-sellers">${seller.title}</a>
                                <a href="#business-brands">${data.brandSupplierBadge}</a>
                                <a href="#business-integrations">${integrations.title}</a>
                                <a href="#business-partners">${partners.title}</a>
                            </nav>
                        </div>
                        <div class="growth-stage" aria-label="${data.storyTitle}">
                            <div class="growth-aura" aria-hidden="true"></div>
                            <div class="growth-stack">
                                <div class="growth-axis" aria-hidden="true"></div>
                                ${data.sections.map((section, index) => {
                                    const [x, y, z, mx, my] = growthPositions[index];
                                    return `
                                        <article class="growth-card" style="--x:${x};--y:${y};--z:${z};--mx:${mx};--my:${my};--delay:${index * .4}s">
                                            <div class="growth-card-top">
                                                <span class="growth-icon" aria-hidden="true">${businessIcons[index]}</span>
                                                <span class="growth-number">0${index + 1}</span>
                                            </div>
                                            <strong>${section.title}</strong>
                                            <small>${section.lead}</small>
                                        </article>`;
                                }).join('')}
                            </div>
                        </div>
                    </header>

                    <section class="business-section" aria-labelledby="business-story-title">
                        <header class="business-section-head business-reveal">
                            <span class="business-kicker"><i aria-hidden="true"></i>${data.storyBadge}</span>
                            <h2 id="business-story-title">${data.storyTitle}</h2>
                            <p>${data.storyLead}</p>
                        </header>
                    </section>

                    <section class="business-section" id="business-sellers" aria-labelledby="business-seller-title">
                        <div class="seller-panel business-reveal">
                            <div class="seller-summary">
                                <div>
                                    <span class="business-kicker"><i aria-hidden="true"></i>${seller.title}</span>
                                    <h3 id="business-seller-title">${data.title}</h3>
                                    <p>${seller.lead}</p>
                                    <a class="seller-cta" data-seller-apply href="${SELLER_APPLICATION_URL}">${data.sellerCta}</a>
                                </div>
                                <div class="business-feature-grid">
                                    ${seller.items.map(item => `<div class="business-feature"><i aria-hidden="true"></i><span>${item}</span></div>`).join('')}
                                </div>
                            </div>
                            <div class="onboarding">
                                <div class="onboarding-head">
                                    <span class="business-kicker"><i aria-hidden="true"></i>${data.onboardingBadge}</span>
                                    <h3>${data.onboardingTitle}</h3>
                                    <p>${data.onboardingLead}</p>
                                </div>
                                <div class="onboarding-track">
                                    <div class="onboarding-line" aria-hidden="true"></div>
                                    ${data.onboarding.map((item, index) => `
                                        <article class="onboarding-step">
                                            <span class="onboarding-number">0${index + 1}</span>
                                            <p>${item}</p>
                                        </article>`).join('')}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="business-section" id="business-brands" aria-labelledby="business-audiences-title">
                        <header class="business-section-head business-reveal">
                            <span class="business-kicker"><i aria-hidden="true"></i>${data.brandSupplierBadge}</span>
                            <h2 id="business-audiences-title">${data.brandSupplierTitle}</h2>
                            <p>${data.brandSupplierLead}</p>
                        </header>
                        <div class="audience-grid">
                            ${[brand, supplier].map((section, index) => `
                                <article class="audience-card business-reveal">
                                    <span class="audience-icon" aria-hidden="true">${businessIcons[index + 1]}</span>
                                    <h3>${section.title}</h3>
                                    <p>${section.lead}</p>
                                    <div class="audience-list">${section.items.map(item => `<span>${item}</span>`).join('')}</div>
                                </article>`).join('')}
                        </div>
                    </section>

                    <section class="business-section" id="business-integrations" aria-labelledby="business-integrations-title">
                        <header class="business-section-head business-reveal">
                            <span class="business-kicker"><i aria-hidden="true"></i>${data.integrationBadge}</span>
                            <h2 id="business-integrations-title">${data.integrationTitle}</h2>
                            <p>${data.integrationLead}</p>
                        </header>
                        <div class="integration-panel business-reveal">
                            <div class="integration-grid">
                                ${integrations.items.map((item, index) => `
                                    <div class="integration-card" style="--delay:${index * .22}s">
                                        <span class="integration-icon" aria-hidden="true">${integrationIcons[index]}</span>
                                        <strong>${item}</strong>
                                        <small><i aria-hidden="true"></i>CONNECT ${String(index + 1).padStart(2, '0')}</small>
                                    </div>`).join('')}
                            </div>
                        </div>
                    </section>

                    <section class="business-section" id="business-partners" aria-labelledby="business-partners-title">
                        <header class="business-section-head business-reveal">
                            <span class="business-kicker"><i aria-hidden="true"></i>${data.partnerBadge}</span>
                            <h2 id="business-partners-title">${data.partnerTitle}</h2>
                            <p>${data.partnerLead}</p>
                        </header>
                        <div class="partner-layout">
                            <article class="partner-categories business-reveal">
                                <h3>${partners.title}</h3>
                                <p>${partners.lead}</p>
                                <div class="partner-category-grid">${partners.items.map(item => `<span class="partner-category"><i aria-hidden="true"></i>${item}</span>`).join('')}</div>
                            </article>
                            <form class="partner-brief business-reveal" action="contact.html" method="get">
                                <h3>${data.formTitle}</h3>
                                <p>${data.formLead}</p>
                                <div class="partnership-fields">
                                    ${data.formFields.map((field, index) => index === data.formFields.length - 1
                                        ? `<label class="partnership-field"><span>${field}</span><textarea name="partnership_proposal" rows="2" aria-label="${field}"></textarea></label>`
                                        : `<label class="partnership-field"><span>${field}</span><input name="partnership_field_${index + 1}" type="text" aria-label="${field}"></label>`
                                    ).join('')}
                                </div>
                                <button class="partner-action" type="submit">${data.formTitle}</button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>`;
        document.title = `${data.badge} — MAZAD GLOBAL`;
        window.dispatchEvent(new CustomEvent('mazadBusinessRendered'));
    }

    function renderPlatformPage() {
        const data = copy[lang()]?.platform || copy.en.platform;
        const main = document.querySelector('body > main');
        if (!main || !data) return;
        const chapters = data.sections.slice(0, 5);
        const journey = data.sections[5];
        main.innerHTML = `
            <div class="platform-page">
                <div class="platform-shell">
                    <header class="platform-hero">
                        <div>
                            <span class="platform-kicker"><i aria-hidden="true"></i>${data.badge}</span>
                            <h1>${data.title}</h1>
                            <p class="platform-hero-copy">${data.lead}</p>
                            <nav class="platform-jump" aria-label="${data.storyBadge}">
                                ${chapters.map((section, index) => `<a href="#platform-capability-${index + 1}">${section.title}</a>`).join('')}
                            </nav>
                        </div>
                        <div class="platform-deck-stage" aria-label="${data.storyTitle}">
                            <div class="platform-deck-aura" aria-hidden="true"></div>
                            <div class="platform-deck" role="group" aria-label="${data.storyBadge}">
                                ${chapters.map((section, index) => `
                                    <article class="platform-deck-card" data-deck-index="${index}" data-slot="${index}" tabindex="0">
                                        <div class="platform-deck-card-head">
                                            <span class="platform-deck-icon" aria-hidden="true">${platformIcons[index]}</span>
                                            <span class="platform-deck-index">0${index + 1} / 05</span>
                                        </div>
                                        <h2>${section.title}</h2>
                                        <p>${section.lead}</p>
                                        <div class="platform-deck-status"><span>MAZAD / ${data.badge}</span><i aria-hidden="true"></i></div>
                                    </article>`).join('')}
                                <div class="platform-deck-controls" aria-label="${data.storyBadge}">
                                    ${chapters.map((section, index) => `<button type="button" class="platform-deck-control ${index === 0 ? 'is-active' : ''}" data-deck-target="${index}" aria-label="${section.title}"></button>`).join('')}
                                </div>
                            </div>
                        </div>
                    </header>

                    <section class="platform-story" aria-labelledby="platform-story-title">
                        <header class="platform-story-head">
                            <span class="platform-kicker"><i aria-hidden="true"></i>${data.storyBadge}</span>
                            <h2 id="platform-story-title">${data.storyTitle}</h2>
                            <p>${data.storyLead}</p>
                        </header>
                        ${chapters.map((section, index) => `
                            <article class="platform-chapter" id="platform-capability-${index + 1}" data-platform-chapter="${index}">
                                <div class="platform-chapter-copy">
                                    <div class="platform-chapter-top">
                                        <span class="platform-icon" aria-hidden="true">${platformIcons[index]}</span>
                                        <span class="platform-index">0${index + 1} / 05</span>
                                    </div>
                                    <h2>${section.title}</h2>
                                    <h3>${section.lead}</h3>
                                    <p class="platform-chapter-description">${data.descriptions[index]}</p>
                                    ${data.notes[index] ? `<p class="platform-note">${data.notes[index]}</p>` : ''}
                                </div>
                                <div class="platform-capabilities">
                                    ${section.items.map(item => `<div class="platform-capability"><i aria-hidden="true"></i><span>${item}</span></div>`).join('')}
                                </div>
                            </article>`).join('')}
                    </section>

                    <section class="platform-journey" id="platform-how-it-works" aria-labelledby="platform-journey-title">
                        <div class="platform-journey-panel">
                            <header class="platform-journey-head">
                                <span class="platform-kicker"><i aria-hidden="true"></i>${data.journeyBadge}</span>
                                <h2 id="platform-journey-title">${data.journeyTitle}</h2>
                                <p>${data.journeyLead}</p>
                            </header>
                            <div class="platform-steps">
                                <div class="platform-steps-line" aria-hidden="true"></div>
                                ${journey.items.map((item, index) => `
                                    <article class="platform-step">
                                        <span class="platform-step-number">0${index + 1}</span>
                                        <p>${item}</p>
                                    </article>`).join('')}
                            </div>
                        </div>
                    </section>
                </div>
            </div>`;
        document.title = `${data.badge} — MAZAD GLOBAL`;
        window.dispatchEvent(new CustomEvent('mazadPlatformRendered'));
    }

    const companyIcons = [
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h5M16 13h.01M8 17h8"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 7V5a4 4 0 0 1 8 0v2"/><rect x="3" y="7" width="18" height="13" rx="3"/><path d="M3 12h18M10 12v2h4v-2"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h8M8 16h5"/><path d="m16 17 2 2 3-4"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V8l8-4 8 4v12"/><path d="M8 20v-5h8v5M8 10h.01M12 10h.01M16 10h.01"/></svg>'
    ];

    function renderCompanyPage() {
        const data = copy[lang()]?.company || copy.en.company;
        const main = document.querySelector('body > main');
        if (!main || !data) return;
        const [news, careers, contact, office] = data.sections;
        main.innerHTML = `
            <div class="company-page">
                <div class="company-scroll-progress" aria-hidden="true"><span></span></div>
                <div class="company-shell">
                    <header class="company-hero">
                        <div class="company-hero-copy">
                            <span class="company-kicker"><i aria-hidden="true"></i>${data.badge}</span>
                            <h1>${data.title}</h1>
                            <p>${data.lead}</p>
                            <nav class="company-jump" aria-label="${data.badge}">
                                ${data.sections.map((section, index) => `<a href="#company-section-${index + 1}"><span>0${index + 1}</span>${section.title}</a>`).join('')}
                            </nav>
                        </div>
                        <div class="company-radar" aria-label="${data.title}">
                            <div class="company-radar-ring company-radar-ring-a" aria-hidden="true"></div>
                            <div class="company-radar-ring company-radar-ring-b" aria-hidden="true"></div>
                            <div class="company-radar-core">
                                <img src="images/logo.jpg" alt="Mazad">
                                <strong>MAZAD</strong>
                                <small>${data.badge}</small>
                            </div>
                            ${data.sections.map((section, index) => `
                                <a class="company-radar-node company-radar-node-${index + 1}" href="#company-section-${index + 1}">
                                    <span>${companyIcons[index]}</span>
                                    <strong>${section.title}</strong>
                                </a>`).join('')}
                        </div>
                    </header>

                    <section class="company-section company-news" id="company-section-1" aria-labelledby="company-news-title">
                        <header class="company-section-head company-reveal">
                            <span class="company-kicker"><i aria-hidden="true"></i>${news.title}</span>
                            <h2 id="company-news-title">${data.newsTitle}</h2>
                            <p>${data.newsLead}</p>
                        </header>
                        <div class="newsroom-layout">
                            <div class="news-category-grid company-reveal">
                                ${news.items.map((item, index) => `
                                    <article class="news-category">
                                        <span>0${index + 1}</span>
                                        <h3>${item}</h3>
                                        <i aria-hidden="true"></i>
                                    </article>`).join('')}
                            </div>
                            <aside class="article-anatomy company-reveal">
                                <span class="company-icon">${companyIcons[0]}</span>
                                <h3>${data.articleMetaTitle}</h3>
                                <div>${data.articleMeta.map((item, index) => `<p><b>0${index + 1}</b>${item}</p>`).join('')}</div>
                            </aside>
                        </div>
                    </section>

                    <section class="company-section company-careers" id="company-section-2" aria-labelledby="company-careers-title">
                        <div class="career-stage company-reveal">
                            <div class="career-copy">
                                <span class="company-kicker"><i aria-hidden="true"></i>${careers.title}</span>
                                <h2 id="company-careers-title">${data.careerTitle}</h2>
                                <p>${data.careerLead}</p>
                                <div class="career-filter-row">${data.careerFilters.map(item => `<span>${item}<i aria-hidden="true"></i></span>`).join('')}</div>
                            </div>
                            <div class="career-orbit">
                                <div class="career-orbit-core"><span class="company-icon">${companyIcons[1]}</span></div>
                                ${careers.items.map((item, index) => `<span class="career-orbit-item" style="--career-index:${index};--career-delay:${index * -.55}s">${item}</span>`).join('')}
                            </div>
                        </div>
                    </section>

                    <section class="company-section company-contact" id="company-section-3" aria-labelledby="company-contact-title">
                        <header class="company-section-head company-reveal">
                            <span class="company-kicker"><i aria-hidden="true"></i>${contact.title}</span>
                            <h2 id="company-contact-title">${data.contactTitle}</h2>
                            <p>${data.contactLead}</p>
                        </header>
                        <div class="contact-route-grid company-reveal">
                            ${contact.items.map((item, index) => `
                                <a class="contact-route" href="contact.html?route=${index + 1}">
                                    <span>0${index + 1}</span>
                                    <strong>${item}</strong>
                                    <i aria-hidden="true">↗</i>
                                </a>`).join('')}
                        </div>
                    </section>

                    <section class="company-section company-office" id="company-section-4" aria-labelledby="company-office-title">
                        <div class="office-panel company-reveal">
                            <div class="office-copy">
                                <span class="company-kicker"><i aria-hidden="true"></i>${office.title}</span>
                                <h2 id="company-office-title">${data.officeTitle}</h2>
                                <p>${data.officeLead}</p>
                                <a href="contact.html">${data.cta}<i aria-hidden="true">↗</i></a>
                            </div>
                            <div class="office-verification">
                                ${office.items.map((item, index) => `
                                    <div class="office-item">
                                        <span class="office-check" aria-hidden="true">✓</span>
                                        <strong>${item}</strong>
                                        <small>0${index + 1}</small>
                                    </div>`).join('')}
                            </div>
                        </div>
                    </section>
                </div>
            </div>`;
        document.title = `${data.badge} — MAZAD GLOBAL`;
        window.dispatchEvent(new CustomEvent('mazadCompanyRendered'));
    }

    function renderStructuredPage(type) {
        const data = copy[lang()]?.[type] || copy.en[type];
        const main = document.querySelector('body > main');
        if (!main || !data) return;
        const statuses = data.statuses?.length ? `
            <div class="flex flex-wrap justify-center gap-3 mt-8">
                ${data.statuses.map(status => `<span class="px-4 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider">${status}</span>`).join('')}
            </div>` : '';
        main.innerHTML = `
            <section class="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 pt-44 pb-16 relative z-10">
                <div class="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wider uppercase">
                    <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>${data.badge}
                </div>
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight max-w-5xl">${data.title}</h1>
                <p class="text-white/60 max-w-3xl text-base md:text-xl leading-relaxed">${data.lead}</p>
                ${statuses}
            </section>
            <section class="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 pb-28 relative z-10">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-7">
                    ${data.sections.map((section, index) => `
                        <article id="section-${index + 1}" class="group relative scroll-mt-32 bg-white/[0.03] border border-white/10 hover:border-brand-orange/40 rounded-[28px] p-8 md:p-10 overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-[0_4px_30px_rgba(0,0,0,0.35)]">
                            <div class="absolute -top-20 -right-20 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span class="relative text-brand-orange text-xs font-mono uppercase tracking-[0.18em]">0${index + 1}</span>
                            <h2 class="relative text-2xl md:text-3xl font-black mt-4 mb-3">${section.title}</h2>
                            <p class="relative text-white/60 mb-6 leading-relaxed">${section.lead}</p>
                            <ul class="relative grid sm:grid-cols-2 gap-x-5 gap-y-3">
                                ${section.items.map(item => `<li class="flex items-start gap-3 text-white/70 text-sm leading-relaxed"><span class="mt-2 w-1.5 h-1.5 rounded-full bg-brand-orange shadow-[0_0_8px_#FF841A] flex-none"></span><span>${item}</span></li>`).join('')}
                            </ul>
                        </article>`).join('')}
                </div>
                <div class="mt-14 text-center">
                    <a href="${type === 'sell' ? 'company.html' : type === 'company' ? 'contact.html' : type === 'markets' ? 'countries.html' : type === 'business' ? 'sell-on-mazad.html' : 'index.html'}" class="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-brand-orange/50 bg-brand-orange/10 text-brand-orange font-bold text-sm uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-[0_0_24px_rgba(255,132,26,.16)]">${data.cta}</a>
                </div>
            </section>`;
        document.title = `${data.badge} — MAZAD GLOBAL`;
    }

    function renderSellPage() {
        const data = copy[lang()]?.sell || copy.en.sell;
        const main = document.querySelector('body > main');
        if (!main || !data) return;

        const ui = {
            en: {
                signal: 'Seller launch path',
                explore: 'See how it works',
                system: 'Connected seller workspace',
                systemLead: 'Store, catalog, orders and delivery move together.',
                benefitsTitle: 'Everything needed to start and grow',
                benefitsLead: 'A focused set of tools for running daily commerce without switching between disconnected systems.',
                processTitle: 'From application to your first order',
                processLead: 'Six clear steps prepare your business, storefront and operations.',
                requirementsTitle: 'Prepare these details',
                requirementsLead: 'Having this information ready helps the review and setup process move smoothly.',
                finalTitle: 'Ready to build your Mazad storefront?',
                finalLead: 'Submit your seller application and take the first step toward reaching more customers.',
                reviewNote: 'Applications are reviewed before store activation.',
                apply: data.cta
            },
            tr: {
                signal: 'Satıcı başlangıç yolu',
                explore: 'İşleyişi görün',
                system: 'Bağlantılı satıcı çalışma alanı',
                systemLead: 'Mağaza, katalog, sipariş ve teslimat birlikte ilerler.',
                benefitsTitle: 'Başlamak ve büyümek için gerekenler',
                benefitsLead: 'Günlük ticareti birbirinden kopuk sistemler arasında geçiş yapmadan yönetmek için odaklı araçlar.',
                processTitle: 'Başvurudan ilk siparişinize',
                processLead: 'Altı açık adım işletmenizi, mağazanızı ve operasyonunuzu hazırlar.',
                requirementsTitle: 'Bu bilgileri hazırlayın',
                requirementsLead: 'Bilgilerin hazır olması inceleme ve mağaza kurulumunun daha düzenli ilerlemesini sağlar.',
                finalTitle: 'Mazad mağazanızı kurmaya hazır mısınız?',
                finalLead: 'Satıcı başvurunuzu gönderin ve daha fazla müşteriye ulaşmak için ilk adımı atın.',
                reviewNote: 'Mağaza etkinleştirilmeden önce başvurular incelenir.',
                apply: data.cta
            },
            ar: {
                signal: 'مسار انطلاق البائع',
                explore: 'شاهد آلية العمل',
                system: 'مساحة عمل مترابطة للبائع',
                systemLead: 'المتجر والكتالوج والطلبات والتوصيل تعمل معاً.',
                benefitsTitle: 'كل ما تحتاجه للبدء والنمو',
                benefitsLead: 'أدوات مركزة لإدارة التجارة اليومية دون التنقل بين أنظمة منفصلة.',
                processTitle: 'من الطلب إلى أول طلبية',
                processLead: 'ست خطوات واضحة تجهّز نشاطك ومتجرك وعملياتك.',
                requirementsTitle: 'جهّز هذه المعلومات',
                requirementsLead: 'تجهيز المعلومات يساعد على سلاسة المراجعة وإعداد المتجر.',
                finalTitle: 'هل أنت مستعد لبناء متجرك على مزاد؟',
                finalLead: 'أرسل طلب البائع واتخذ الخطوة الأولى للوصول إلى عملاء أكثر.',
                reviewNote: 'تتم مراجعة الطلبات قبل تفعيل المتجر.',
                apply: data.cta
            }
        }[lang()] || null;

        const labels = ui || {
            signal: 'Seller launch path',
            explore: 'See how it works',
            system: 'Connected seller workspace',
            systemLead: 'Store, catalog, orders and delivery move together.',
            benefitsTitle: 'Everything needed to start and grow',
            benefitsLead: '',
            processTitle: 'From application to your first order',
            processLead: '',
            requirementsTitle: 'Prepare these details',
            requirementsLead: '',
            finalTitle: 'Ready to build your Mazad storefront?',
            finalLead: '',
            reviewNote: 'Applications are reviewed before store activation.',
            apply: data.cta
        };

        const applicationUrl = document.body.dataset.sellerApplicationUrl || 'contact.html?topic=seller-application';
        const [benefits, onboarding, requirements] = data.sections;
        const benefitGroups = [
            benefits.items.slice(0, 3),
            benefits.items.slice(3, 6),
            benefits.items.slice(6)
        ];
        const benefitIcons = [
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 18V8l8-4 8 4v10"/><path d="M8 18v-5h8v5M7 9h.01M12 9h.01M17 9h.01"/></svg>',
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16v12H4z"/><path d="M8 10h8M8 14h5"/><path d="M7 3v3M17 3v3M7 18v3M17 18v3"/></svg>',
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>'
        ];

        main.innerHTML = `
            <div class="sell-page">
                <div class="sell-intro-gate" aria-hidden="true"><span></span></div>
                <div class="sell-shell">
                    <header class="sell-hero">
                        <div class="sell-hero-copy">
                            <span class="sell-signal"><i aria-hidden="true"></i>${labels.signal}</span>
                            <h1>${data.title}</h1>
                            <p>${data.lead}</p>
                            <div class="sell-actions">
                                <a class="sell-primary-action" data-seller-apply href="${applicationUrl}">${labels.apply}<span aria-hidden="true">↗</span></a>
                                <a class="sell-secondary-action" href="#seller-process">${labels.explore}<span aria-hidden="true">↓</span></a>
                            </div>
                            <small class="sell-review-note"><i aria-hidden="true">✓</i>${labels.reviewNote}</small>
                        </div>

                        <div class="sell-launchpad" aria-label="${labels.system}">
                            <div class="sell-launchpad-grid" aria-hidden="true"></div>
                            <div class="sell-orbit sell-orbit-a" aria-hidden="true"></div>
                            <div class="sell-orbit sell-orbit-b" aria-hidden="true"></div>
                            <div class="sell-core">
                                <img src="images/logo.jpg" alt="">
                                <strong>MAZAD</strong>
                                <small>SELLER</small>
                            </div>
                            <div class="sell-node sell-node-store"><span>01</span><strong>${benefits.items[1]}</strong></div>
                            <div class="sell-node sell-node-orders"><span>02</span><strong>${benefits.items[4]}</strong></div>
                            <div class="sell-node sell-node-delivery"><span>03</span><strong>${benefits.items[5]}</strong></div>
                            <div class="sell-launchpad-caption">
                                <strong>${labels.system}</strong>
                                <span>${labels.systemLead}</span>
                            </div>
                        </div>
                    </header>

                    <section class="sell-section" aria-labelledby="seller-benefits-title">
                        <header class="sell-section-head sell-reveal">
                            <span>01 / ${benefits.title}</span>
                            <h2 id="seller-benefits-title">${labels.benefitsTitle}</h2>
                            <p>${labels.benefitsLead}</p>
                        </header>
                        <div class="sell-benefit-grid">
                            ${benefitGroups.map((group, index) => `
                                <article class="sell-benefit-card sell-reveal">
                                    <span class="sell-benefit-icon" aria-hidden="true">${benefitIcons[index]}</span>
                                    <strong>0${index + 1}</strong>
                                    <ul>${group.map(item => `<li><i aria-hidden="true"></i>${item}</li>`).join('')}</ul>
                                </article>`).join('')}
                        </div>
                    </section>

                    <section class="sell-section" id="seller-process" aria-labelledby="seller-process-title">
                        <div class="sell-process-panel sell-reveal">
                            <header class="sell-section-head">
                                <span>02 / ${onboarding.title}</span>
                                <h2 id="seller-process-title">${labels.processTitle}</h2>
                                <p>${labels.processLead}</p>
                            </header>
                            <div class="sell-process-track">
                                <div class="sell-process-line" aria-hidden="true"><i></i></div>
                                ${onboarding.items.map((item, index) => `
                                    <article class="sell-process-step">
                                        <span>0${index + 1}</span>
                                        <p>${item}</p>
                                    </article>`).join('')}
                            </div>
                        </div>
                    </section>

                    <section class="sell-section" aria-labelledby="seller-requirements-title">
                        <div class="sell-ready-panel sell-reveal">
                            <div>
                                <span class="sell-panel-index">03 / ${requirements.title}</span>
                                <h2 id="seller-requirements-title">${labels.requirementsTitle}</h2>
                                <p>${labels.requirementsLead}</p>
                            </div>
                            <div class="sell-requirement-list">
                                ${requirements.items.map((item, index) => `<span><i>${String(index + 1).padStart(2, '0')}</i>${item}</span>`).join('')}
                            </div>
                        </div>
                    </section>

                    <section class="sell-final sell-reveal" id="seller-application">
                        <div>
                            <h2>${labels.finalTitle}</h2>
                            <p>${labels.finalLead}</p>
                        </div>
                        <a class="sell-primary-action" data-seller-apply href="${applicationUrl}">${labels.apply}<span aria-hidden="true">↗</span></a>
                    </section>
                </div>
            </div>`;
        document.title = `${data.badge} — MAZAD GLOBAL`;
        window.dispatchEvent(new CustomEvent('mazadSellRendered'));
    }

    function renderSimpleSellPage() {
        const data = copy[lang()]?.sell || copy.en.sell;
        const main = document.querySelector('body > main');
        if (!main || !data) return;
        const [benefits, onboarding, requirements] = data.sections;
        const text = {
            en: {
                intro: 'A simple way to bring your store, products and orders into Mazad.',
                benefitsTitle: 'What you can do',
                benefitsBody: 'Reach new customers, create a digital storefront, manage products and inventory, receive orders, connect delivery and follow sales performance.',
                processTitle: 'How it starts',
                processBody: 'Submit your application and complete business verification. We then prepare your store, add or synchronize products, and get your operation ready to receive orders and settlements.',
                readyTitle: 'Before you apply',
                readyBody: 'Prepare your seller or company details, contact information, product categories, verification documents, settlement information and delivery requirements.',
                finalTitle: 'Ready to sell on Mazad?',
                finalBody: 'Continue to Mazad One to begin your vendor application.',
                action: 'Become a Vendor'
            },
            tr: {
                intro: 'Mağazanızı, ürünlerinizi ve siparişlerinizi Mazad’a taşımanın sade bir yolu.',
                benefitsTitle: 'Neler yapabilirsiniz?',
                benefitsBody: 'Yeni müşterilere ulaşın, dijital mağaza oluşturun, ürünleri ve stokları yönetin, sipariş alın, teslimatı bağlayın ve satış performansını takip edin.',
                processTitle: 'Nasıl başlar?',
                processBody: 'Başvurunuzu gönderip işletme doğrulamasını tamamlayın. Ardından mağazanız hazırlanır, ürünleriniz yüklenir veya eşitlenir ve sipariş ile ödeme sürecine hazır hale gelirsiniz.',
                readyTitle: 'Başvurmadan önce',
                readyBody: 'Satıcı veya şirket bilgilerinizi, iletişim bilgilerinizi, ürün kategorilerinizi, doğrulama belgelerinizi, ödeme ve teslimat gereksinimlerinizi hazırlayın.',
                finalTitle: 'Mazad’da satışa hazır mısınız?',
                finalBody: 'Satıcı başvurunuzu başlatmak için Mazad One’a devam edin.',
                action: 'Satıcı Ol'
            },
            ar: {
                intro: 'طريقة بسيطة لنقل متجرك ومنتجاتك وطلباتك إلى مزاد.',
                benefitsTitle: 'ماذا يمكنك أن تفعل؟',
                benefitsBody: 'صل إلى عملاء جدد وأنشئ متجراً رقمياً وأدر المنتجات والمخزون واستقبل الطلبات واربط التوصيل وتابع أداء المبيعات.',
                processTitle: 'كيف تبدأ؟',
                processBody: 'أرسل طلبك وأكمل توثيق النشاط. بعد ذلك نجهز متجرك ونرفع المنتجات أو نزامنها لتصبح جاهزاً لاستقبال الطلبات والتسويات.',
                readyTitle: 'قبل التقديم',
                readyBody: 'جهّز بيانات البائع أو الشركة ومعلومات التواصل وفئات المنتجات ووثائق التحقق ومعلومات التسوية ومتطلبات التوصيل.',
                finalTitle: 'هل أنت مستعد للبيع على مزاد؟',
                finalBody: 'تابع إلى مزاد ون لبدء طلب الانضمام كبائع.',
                action: 'انضم كبائع'
            }
        }[lang()] || null;
        const labels = text || {
            intro: data.lead,
            benefitsTitle: benefits.title,
            benefitsBody: benefits.items.join(', '),
            processTitle: onboarding.title,
            processBody: onboarding.items.join(', '),
            readyTitle: requirements.title,
            readyBody: requirements.items.join(', '),
            finalTitle: data.title,
            finalBody: data.lead,
            action: 'Become a Vendor'
        };

        main.innerHTML = `
            <div class="sell-simple-page">
                <section class="sell-simple-content">
                    <header class="sell-simple-hero">
                        <span>${data.badge}</span>
                        <h1>${data.title}</h1>
                        <p>${labels.intro}</p>
                    </header>

                    <div class="sell-simple-text">
                        <section>
                            <span>01</span>
                            <h2>${labels.benefitsTitle}</h2>
                            <p>${labels.benefitsBody}</p>
                        </section>
                        <section>
                            <span>02</span>
                            <h2>${labels.processTitle}</h2>
                            <p>${labels.processBody}</p>
                        </section>
                        <section>
                            <span>03</span>
                            <h2>${labels.readyTitle}</h2>
                            <p>${labels.readyBody}</p>
                        </section>
                    </div>

                    <footer class="sell-simple-final">
                        <h2>${labels.finalTitle}</h2>
                        <p>${labels.finalBody}</p>
                        <a data-seller-apply href="${SELLER_APPLICATION_URL}"><b>${labels.action}</b><span aria-hidden="true">↗</span></a>
                    </footer>
                </section>
            </div>`;
        document.title = `${data.badge} — MAZAD GLOBAL`;
    }

    function applyHome() {
        const data = copy[lang()]?.home || copy.en.home;
        const hero = document.getElementById('hero-left-content');
        if (!hero) return;
        setText(hero.children[0], data.badge);
        setHTML(hero.querySelector('h1'), data.title);
        setText(hero.querySelector('p'), data.lead);
        const marketValues = lang() === 'ar' ? ['تركيا', 'العراق', 'المنطقة'] : lang() === 'tr' ? ['Türkiye', 'Irak', 'MENA'] : ['Türkiye', 'Iraq', 'MENA'];
        ['counter-population', 'counter-vendors', 'counter-countries'].forEach((id, index) => {
            const value = document.getElementById(id) || document.querySelector(`[data-word-market-counter="${index}"]`);
            if (value) {
                value.dataset.wordMarketCounter = String(index);
                value.removeAttribute('id');
                setText(value, marketValues[index]);
                value.classList.remove('text-2xl', 'md:text-3xl');
                value.classList.add('text-xl', 'md:text-2xl');
            }
            setText(value?.nextElementSibling, data.statLabels[index]);
        });
        setText(hero.querySelector('a'), data.action);
        [...hero.querySelectorAll('.flex.items-center.gap-2 > span')].slice(-3).forEach((chip, index) => setText(chip, data.chips[index]));
        document.querySelectorAll('.benefit-card').forEach((card, index) => setText(card.querySelector('span:last-child'), data.benefits[index]));

        ['convergence-text-left', 'convergence-text-right'].forEach((id, index) => {
            const panel = document.getElementById(id);
            const content = data.connectedPanels[index];
            if (!panel || !content) return;
            setText(panel.querySelector('span'), content[0]);
            setText(panel.querySelector('h3'), content[1]);
            setText(panel.querySelector('p'), content[2]);
        });

        const platformSection = [...document.querySelectorAll('section')].find(section => section.textContent.includes('Why Choose Mazad?') || section.querySelector('.value-card') === null && section.textContent.includes('Complete Ecosystem'));
        if (platformSection) {
            const header = platformSection.querySelector('.text-center');
            setText(header?.firstElementChild, data.platformBadge);
            setHTML(header?.querySelector('h2'), data.platformTitle);
            setText(header?.querySelector('p'), data.platformLead);
            [...platformSection.querySelectorAll('.grid > div .text-orange-400')].slice(0, 4).forEach((label, index) => setText(label, data.componentLabels[index]));
            [...platformSection.querySelectorAll('h3')].slice(0, 4).forEach((heading, index) => setText(heading, data.cards[index]?.[0]));
            [...platformSection.querySelectorAll('.grid > div > p')].slice(0, 4).forEach((paragraph, index) => setText(paragraph, data.cards[index]?.[1]));
        }

        const servesSection = document.getElementById('yaman-ai-showcase');
        if (servesSection) {
            const speechBubble = servesSection.querySelector('#ai-speech-bubble');
            setText(speechBubble?.querySelector('.flex span:last-child'), data.servesBadge);
            setText(document.getElementById('speech-text'), data.servesSpeech[0]);
            data.servesCards.forEach((item, index) => {
                const card = document.getElementById(`feat-card-${index + 1}`);
                setText(card?.querySelector('h3'), item[0]);
                setText(card?.querySelector('p'), item[1]);
            });
            window.__mazadHomeSpeechSteps = data.servesSpeech;
            window.__mazadHomeFaceLabels = data.servesCards.map(item => item[0]);
            const emptyStatus = document.querySelector('#org-sphere-4 > span');
            emptyStatus?.remove();
        }

        const marketsSection = document.getElementById('future-goals-section');
        if (marketsSection) {
            const header = marketsSection.querySelector('.text-center');
            const marketsBadge = header?.firstElementChild;
            if (marketsBadge && marketsBadge !== header?.querySelector('h2')) marketsBadge.remove();
            setHTML(header?.querySelector('h2'), data.marketsTitle);
            setText(header?.querySelector('p'), data.marketsLead);
            const cards = [...marketsSection.querySelectorAll('.tilt-card')];
            cards.forEach((card, index) => {
                const item = data.marketCards[index];
                if (!item) return;
                setText(card.querySelector('h3'), item[0]);
                setText(card.querySelector('p'), item[2]);
                const counter = card.querySelector('[id^="counter-future-"], [data-word-market-card-counter]');
                if (counter) {
                    counter.dataset.wordMarketCardCounter = String(index);
                    counter.removeAttribute('id');
                    setText(counter, item[1]);
                    counter.classList.remove('text-5xl');
                    counter.classList.add('text-2xl');
                }
            });
            marketsSection.querySelectorAll('.tilt-card > .mt-6.pt-4').forEach(extra => {
                extra.remove();
            });
        }
        document.title = 'MAZAD GLOBAL — Regional Digital Commerce';
    }

    function renderAboutNarrative(data) {
        const current = document.getElementById('legacy-about-story') || document.querySelector('.about-story-shell');
        if (!current) return;
        document.getElementById('legacy-about-values')?.remove();
        const years = ['2022', '2023', '2024', '2025', '2026'];
        const values = data.valueTitles.map((title, index) => [title, data.valueText[index]]);
        values.push([data.partnershipTitle, data.partnershipText]);
        current.outerHTML = `
            <section class="about-story-shell py-24 md:py-32" id="about-story">
                <div class="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
                    <header class="max-w-3xl mx-auto text-center">
                        <div class="inline-flex items-center gap-3 mb-6 text-brand-orange text-xs font-extrabold uppercase tracking-[.2em]">
                            <span class="w-8 h-px bg-gradient-to-r from-transparent to-orange-500"></span>
                            <span>${data.journeyBadge}</span>
                            <span class="w-8 h-px bg-gradient-to-l from-transparent to-orange-500"></span>
                        </div>
                        <h2 class="text-3xl md:text-5xl font-black tracking-tight leading-tight text-balance">${data.journeyTitle}</h2>
                        <p class="mt-6 text-white/65 text-base md:text-lg leading-relaxed">${data.journeyLead}</p>
                    </header>

                    <div class="journey-timeline" aria-label="${data.journeyBadge}">
                        <div class="journey-line" aria-hidden="true"></div>
                        <div class="journey-line-fill" aria-hidden="true"></div>
                        ${years.map((year, index) => `
                            <article class="journey-step">
                                <div class="journey-card">
                                    <span class="journey-year">${year}</span>
                                    <p class="text-white/72 text-sm md:text-base leading-relaxed">${data.milestones[index]}</p>
                                </div>
                                <span class="journey-node" aria-hidden="true"></span>
                            </article>`).join('')}
                    </div>

                    <div class="mt-24 md:mt-32">
                        <div class="text-center mb-12">
                            <span class="text-brand-orange text-xs font-extrabold uppercase tracking-[.2em]">${data.purposeBadge}</span>
                        </div>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <article class="purpose-card rounded-[28px] p-8 md:p-10">
                                <span class="text-brand-orange text-xs font-mono uppercase tracking-widest">${data.labels[2]}</span>
                                <h3 class="text-2xl md:text-3xl font-black mt-4 mb-4">${data.headings[2]}</h3>
                                <p class="text-white/65 leading-relaxed">${data.paragraphs[2]}</p>
                            </article>
                            <article class="purpose-card rounded-[28px] p-8 md:p-10">
                                <span class="text-brand-orange text-xs font-mono uppercase tracking-widest">${data.labels[1]}</span>
                                <h3 class="text-2xl md:text-3xl font-black mt-4 mb-4">${data.headings[1]}</h3>
                                <p class="text-white/65 leading-relaxed">${data.paragraphs[1]}</p>
                            </article>
                        </div>
                    </div>

                    <div class="mt-24 md:mt-32">
                        <header class="text-center max-w-2xl mx-auto mb-12">
                            <span class="text-brand-orange text-xs font-extrabold uppercase tracking-[.2em]">${data.valuesBadge}</span>
                            <h2 class="text-3xl md:text-5xl font-black mt-4">${data.valuesTitle}</h2>
                            <p class="text-white/60 mt-5 leading-relaxed">${data.valuesLead}</p>
                        </header>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            ${values.map(([title, description], index) => `
                                <article class="value-pill rounded-[22px] p-6 ${index === values.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}">
                                    <span class="inline-flex w-7 h-7 items-center justify-center rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-[10px] font-black">0${index + 1}</span>
                                    <h3 class="text-white font-bold mt-5 mb-3">${title}</h3>
                                    <p class="text-white/52 text-sm leading-relaxed">${description}</p>
                                </article>`).join('')}
                        </div>
                    </div>

                    <article class="leadership-card rounded-[30px] p-8 md:p-11 mt-20 md:mt-24">
                        <div class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-7 md:gap-9 items-center">
                            <div class="w-16 h-16 rounded-2xl border border-brand-orange/30 bg-brand-orange/10 flex items-center justify-center text-brand-orange shadow-[0_0_24px_rgba(255,132,26,.14)]">
                                <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            </div>
                            <div>
                                <span class="text-brand-orange text-xs font-extrabold uppercase tracking-[.2em]">${data.leadershipTitle}</span>
                                <p class="text-white text-lg md:text-xl font-semibold leading-relaxed mt-3">${data.leadershipText}</p>
                                <p class="text-white/42 text-sm leading-relaxed mt-4">${data.leadershipNote}</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>`;
        window.dispatchEvent(new CustomEvent('mazadAboutStoryRendered'));
    }

    function applyAbout() {
        const data = copy[lang()]?.about || copy.en.about;
        const setKey = (key, value) => document.querySelectorAll(`[data-i18n="${key}"]`).forEach(element => setText(element, value));
        setKey('about_badge', data.badge);
        setKey('about_hero_title', data.title);
        setKey('about_hero_desc', data.lead);
        ['about_origin_label', 'about_mission_label', 'about_vision_label'].forEach((key, i) => setKey(key, data.labels[i]));
        ['about_origin_title', 'about_mission_block_title', 'about_vision_title'].forEach((key, i) => setKey(key, data.headings[i]));
        ['about_origin_desc', 'about_mission_block_desc', 'about_vision_desc'].forEach((key, i) => setKey(key, data.paragraphs[i]));
        ['about_hq_title', 'about_tech_title', 'about_fintech_card_title'].forEach((key, i) => setKey(key, data.infoTitles[i]));
        ['about_hq_desc', 'about_tech_desc', 'about_fintech_card_desc'].forEach((key, i) => setKey(key, data.infoText[i]));
        setKey('about_values_badge', data.valuesBadge);
        setKey('about_values_title', data.valuesTitle);
        setKey('about_values_desc', data.valuesLead);
        ['about_val_trust_title', 'about_val_local_title', 'about_val_innov_title', 'about_val_comm_title'].forEach((key, i) => setKey(key, data.valueTitles[i]));
        ['about_val_trust_desc', 'about_val_local_desc', 'about_val_innov_desc', 'about_val_comm_desc'].forEach((key, i) => setKey(key, data.valueText[i]));

        const stats = [...document.querySelectorAll('.stat-number')];
        const values = ['2022', lang() === 'ar' ? 'العراق' : lang() === 'tr' ? 'Irak' : 'Iraq', lang() === 'ar' ? 'تركيا' : lang() === 'tr' ? 'Türkiye' : 'Türkiye', lang() === 'ar' ? 'إقليمي' : lang() === 'tr' ? 'Bölgesel' : 'Regional'];
        stats.forEach((stat, index) => setText(stat, values[index]));
        const labels = lang() === 'ar' ? ['تأسست', 'سوق التشغيل', 'المقر', 'اتجاه التوسع'] : lang() === 'tr' ? ['Kuruluş', 'Faaliyet Pazarı', 'Genel Merkez', 'Büyüme Yönü'] : ['Founded', 'Operating Market', 'Headquarters', 'Expansion Direction'];
        ['stat_founded', 'stat_countries_label', 'stat_population_label', 'stat_products_label'].forEach((key, i) => setKey(key, labels[i]));
        renderAboutNarrative(data);
    }

    function applyMarkets() {
        const data = copy[lang()]?.markets || copy.en.markets;
        const setKey = (key, value) => document.querySelectorAll(`[data-i18n="${key}"]`).forEach(element => setText(element, value));
        setKey('world_badge', data.badge);
        setKey('world_title', data.title);
        setKey('world_desc', data.lead);
        setKey('world_hint', lang() === 'ar' ? 'اسحب لتدوير العالم • مرّر المؤشر لإيقاف الحركة' : lang() === 'tr' ? 'Dünyayı döndürmek için sürükleyin • İmleci üzerinde tutunca durur' : 'Drag to turn the world • Hover to pause');
        setKey('countries_badge', data.badge);
        setKey('countries_hero_title', data.title);
        setKey('countries_hero_desc', data.lead);
        setKey('countries_trade_title', data.sections[0].title);
        setKey('countries_trade_desc', data.sections[0].lead);
        document.title = `${data.badge} — MAZAD GLOBAL`;
    }

    function applyEcosystem() {
        const language = lang();
        const ecosystemCopy = {
            en: ['One Connected Platform', 'Digital platforms, financial technology, logistics, business operations, and regional expertise work together in one connected Mazad Global ecosystem.', 'One journey. Connected capabilities.', 'Choose the capabilities your business needs today and connect more as you grow.'],
            tr: ['Tek ve Bağlantılı Platform', 'Dijital platformlar, finansal teknoloji, lojistik, işletme operasyonları ve bölgesel uzmanlık tek bir Mazad Global ekosisteminde birlikte çalışır.', 'Tek yolculuk. Bağlantılı yetenekler.', 'Bugün ihtiyaç duyduğunuz yeteneklerle başlayın, büyüdükçe yenilerini bağlayın.'],
            ar: ['منصة واحدة مترابطة', 'تعمل المنصات الرقمية والتقنيات المالية والخدمات اللوجستية وعمليات الأعمال والخبرة الإقليمية معاً ضمن منظومة Mazad Global مترابطة.', 'رحلة واحدة. قدرات مترابطة.', 'ابدأ بالقدرات التي تحتاجها اليوم وأضف المزيد مع نمو أعمالك.']
        };
        const values = ecosystemCopy[language] || ecosystemCopy.en;
        const setKey = (key, value) => document.querySelectorAll(`[data-i18n="${key}"]`).forEach(element => setText(element, value));
        setKey('eco_hero_title', values[0]);
        setKey('eco_hero_desc', values[1]);
        setKey('eco_capabilities_title', values[2]);
        setKey('eco_capabilities_desc', values[3]);
    }

    function applyBusinessModel() {
        const businessCopy = {
            en: {
                bm_new_badge: 'One connected commerce journey',
                bm_new_title: 'Mazad connects every step of regional commerce.',
                bm_new_desc: 'Customers discover, buy, bid, pay, and receive. Sellers list, manage, deliver, and grow. Mazad keeps marketplace, payment, logistics, and seller technology connected.',
                bm_story_badge: 'How Mazad Works',
                bm_story_title: 'A clear journey from discovery to delivery.',
                bm_story_desc: 'Every stage is designed to be understandable for customers and manageable for businesses.',
                bm_calc_title: 'See how the platform responds.',
                bm_calc_desc: 'Explore how orders, sellers, marketplace activity, and operational tools work together. Figures shown here are illustrative scenarios, not published company results.',
                bm_result_note: 'Illustrative scenario only. Live performance figures are published only after verification.'
            },
            tr: {
                bm_new_badge: 'Tek ve bağlantılı ticaret yolculuğu',
                bm_new_title: 'Mazad bölgesel ticaretin her adımını birbirine bağlar.',
                bm_new_desc: 'Müşteriler keşfeder, satın alır, teklif verir, öder ve teslim alır. Satıcılar listeler, yönetir, teslim eder ve büyür. Mazad pazaryeri, ödeme, lojistik ve satıcı teknolojisini bağlantılı tutar.',
                bm_story_badge: 'Mazad Nasıl Çalışır?',
                bm_story_title: 'Keşiften teslimata açık bir yolculuk.',
                bm_story_desc: 'Her aşama müşteriler için anlaşılır, işletmeler için yönetilebilir olacak şekilde tasarlanmıştır.',
                bm_calc_title: 'Platformun nasıl yanıt verdiğini görün.',
                bm_calc_desc: 'Siparişlerin, satıcıların, pazaryeri faaliyetinin ve operasyon araçlarının birlikte nasıl çalıştığını keşfedin. Buradaki rakamlar örnek senaryolardır; yayımlanmış şirket sonuçları değildir.',
                bm_result_note: 'Yalnızca örnek senaryo. Gerçek performans verileri ancak doğrulandıktan sonra yayımlanır.'
            },
            ar: {
                bm_new_badge: 'رحلة تجارة واحدة مترابطة',
                bm_new_title: 'تربط مزاد كل خطوة في التجارة الإقليمية.',
                bm_new_desc: 'يكتشف العملاء ويشترون ويزايدون ويدفعون ويستلمون. ويعرض البائعون منتجاتهم ويديرونها ويوصلونها وينمون. وتبقي مزاد السوق والدفع والخدمات اللوجستية وتقنيات البائعين مترابطة.',
                bm_story_badge: 'كيف تعمل مزاد؟',
                bm_story_title: 'رحلة واضحة من الاكتشاف إلى التوصيل.',
                bm_story_desc: 'صُممت كل مرحلة لتكون مفهومة للعملاء وقابلة للإدارة للشركات.',
                bm_calc_title: 'شاهد كيف تستجيب المنصة.',
                bm_calc_desc: 'استكشف عمل الطلبات والبائعين والسوق وأدوات التشغيل معاً. الأرقام هنا سيناريوهات توضيحية وليست نتائج منشورة للشركة.',
                bm_result_note: 'سيناريو توضيحي فقط. لا تُنشر أرقام الأداء الفعلية إلا بعد التحقق.'
            }
        };
        const data = businessCopy[lang()] || businessCopy.en;
        Object.entries(data).forEach(([key, value]) => document.querySelectorAll(`[data-i18n="${key}"]`).forEach(element => setText(element, value)));
    }

    function applyFintech() {
        const fintechCopy = {
            en: {
                fintech_badge: 'Payments',
                fintech_hero_title: 'Convenient Payment Options for Every Market',
                fintech_hero_desc: 'Mazad supports country-specific payment experiences including cash on delivery, cards, local payment gateways, digital wallets, installments where available, multi-currency checkout, secure refunds, and seller settlements.',
                cash_eyebrow: 'Localized payment experience',
                cash_promise_title: 'Pay with clarity. Sell with confidence.',
                cash_promise_desc: 'Payment availability is shown by country. Mazad is not described as a licensed financial institution unless that legal status is formally confirmed.',
                cash_journey_title: 'One clear payment journey.',
                cash_journey_desc: 'From checkout to settlement, customers and sellers can understand what happens next.',
                cash_cap_title: 'Payment capabilities connected to commerce.',
                cash_cap_desc: 'Local methods, transaction protection, refunds, records, and seller settlements work with the marketplace and delivery journey.'
            },
            tr: {
                fintech_badge: 'Ödemeler',
                fintech_hero_title: 'Her Pazara Uygun Ödeme Seçenekleri',
                fintech_hero_desc: 'Mazad; kapıda ödeme, kartlar, yerel ödeme ağ geçitleri, dijital cüzdanlar, mevcutsa taksit, çoklu para birimi, güvenli iadeler ve satıcı ödemeleri dâhil ülkeye özgü deneyimleri destekler.',
                cash_eyebrow: 'Yerelleştirilmiş ödeme deneyimi',
                cash_promise_title: 'Net biçimde ödeyin. Güvenle satış yapın.',
                cash_promise_desc: 'Ödeme seçenekleri ülkeye göre gösterilir. Yasal statüsü resmen doğrulanmadıkça Mazad lisanslı finans kuruluşu olarak tanımlanmaz.',
                cash_journey_title: 'Tek ve anlaşılır ödeme yolculuğu.',
                cash_journey_desc: 'Ödeme adımından satıcı ödemesine kadar müşteriler ve satıcılar sonraki adımı anlayabilir.',
                cash_cap_title: 'Ticarete bağlı ödeme yetenekleri.',
                cash_cap_desc: 'Yerel yöntemler, işlem koruması, iadeler, kayıtlar ve satıcı ödemeleri pazaryeri ve teslimat yolculuğuyla birlikte çalışır.'
            },
            ar: {
                fintech_badge: 'المدفوعات',
                fintech_hero_title: 'خيارات دفع مناسبة لكل سوق',
                fintech_hero_desc: 'تدعم مزاد تجارب دفع حسب البلد تشمل الدفع عند الاستلام والبطاقات والبوابات المحلية والمحافظ الرقمية والتقسيط عند توفره والدفع بعملات متعددة والاسترداد الآمن وتسويات البائعين.',
                cash_eyebrow: 'تجربة دفع محلية',
                cash_promise_title: 'ادفع بوضوح. وبِع بثقة.',
                cash_promise_desc: 'تُعرض وسائل الدفع حسب البلد. ولا توصف مزاد كمؤسسة مالية مرخصة ما لم يتم تأكيد هذا الوضع قانونياً.',
                cash_journey_title: 'رحلة دفع واحدة واضحة.',
                cash_journey_desc: 'من الدفع إلى التسوية، يفهم العملاء والبائعون ما يحدث بعد ذلك.',
                cash_cap_title: 'قدرات دفع مرتبطة بالتجارة.',
                cash_cap_desc: 'تعمل الوسائل المحلية وحماية المعاملات والاسترداد والسجلات وتسويات البائعين مع السوق والتوصيل.'
            }
        };
        const data = fintechCopy[lang()] || fintechCopy.en;
        Object.entries(data).forEach(([key, value]) => document.querySelectorAll(`[data-i18n="${key}"]`).forEach(element => setText(element, value)));
    }

    function applyContact() {
        const contactCopy = {
            en: ['Contact', 'Reach the Right Mazad Team', 'Choose customer support, seller support, brand and supplier enquiries, partnerships, technology integrations, media, careers, or general enquiries. Only verified office details and official contact channels are published.'],
            tr: ['İletişim', 'Doğru Mazad Ekibine Ulaşın', 'Müşteri desteği, satıcı desteği, marka ve tedarikçi talepleri, iş ortaklıkları, teknoloji entegrasyonları, medya, kariyer veya genel talepler arasından seçim yapın. Yalnızca doğrulanmış ofis ve iletişim bilgileri yayımlanır.'],
            ar: ['التواصل', 'تواصل مع فريق مزاد المناسب', 'اختر دعم العملاء أو البائعين أو طلبات العلامات والموردين أو الشراكات أو التكاملات التقنية أو الإعلام أو الوظائف أو الطلبات العامة. لا ننشر إلا معلومات المكاتب وقنوات التواصل الرسمية المؤكدة.']
        };
        const data = contactCopy[lang()] || contactCopy.en;
        ['contact_badge', 'contact_hero_title', 'contact_hero_desc'].forEach((key, index) => document.querySelectorAll(`[data-i18n="${key}"]`).forEach(element => setText(element, data[index])));
    }

    function removeRequestedOverlines() {
        const current = page();
        const currentCopy = copy[lang()] || copy.en;
        const hide = element => {
            if (!element) return;
            element.style.setProperty('display', 'none', 'important');
            element.setAttribute('aria-hidden', 'true');
        };
        const removeBadge = element => {
            if (!element) return;
            const wrapper = element.parentElement;
            const isBadgeWrapper = wrapper?.classList.contains('inline-flex') &&
                wrapper.querySelectorAll('span').length <= 2 &&
                !wrapper.querySelector('h1,h2,h3,a,button');
            (isBadgeWrapper ? wrapper : element).remove();
        };

        if (current === 'index.html') {
            const hero = document.getElementById('hero-left-content');
            hide(hero?.firstElementChild);
            document.querySelectorAll('main section .text-center > .inline-flex').forEach(hide);
            hide(document.querySelector('#ai-speech-bubble .flex.items-center'));
        }

        if (current === 'about.html') {
            const labels = new Set([currentCopy.about?.purposeBadge, currentCopy.about?.valuesBadge]);
            document.querySelectorAll('.about-story-shell span').forEach(element => {
                if (labels.has(element.textContent.trim())) element.remove();
            });
        }

        if (current === 'platform.html') {
            document.querySelectorAll('.platform-kicker').forEach(element => element.remove());
        }

        if (current === 'for-business.html') {
            const data = currentCopy.business;
            const labels = new Set([
                data?.badge,
                data?.storyBadge,
                data?.sections?.[0]?.title,
                data?.onboardingBadge,
                data?.brandSupplierBadge,
                data?.integrationBadge
            ]);
            document.querySelectorAll('.business-kicker').forEach(element => {
                if (labels.has(element.textContent.trim())) element.remove();
            });
        }

        if (current === 'markets.html') {
            removeBadge(document.querySelector('main > section:first-child > .inline-flex'));
        }

        if (current === 'company.html') {
            const data = currentCopy.company;
            const labels = new Set([data?.badge, data?.sections?.[0]?.title, data?.sections?.[2]?.title, data?.sections?.[3]?.title]);
            document.querySelectorAll('.company-kicker').forEach(element => {
                if (labels.has(element.textContent.trim())) element.remove();
            });
        }

        [
            'eco_badge',
            'bm_new_badge',
            'bm_story_badge',
            'fintech_badge',
            'contact_badge',
            'world_badge'
        ].forEach(key => document.querySelectorAll(`[data-i18n="${key}"]`).forEach(removeBadge));
    }

    function apply() {
        const current = page();
        if (current === 'index.html') applyHome();
        if (current === 'about.html') applyAbout();
        if (current === 'ecosystem.html') applyEcosystem();
        if (current === 'countries.html') applyMarkets();
        if (current === 'platform.html') renderPlatformPage();
        if (current === 'for-business.html') renderBusinessPage();
        if (current === 'markets.html') renderStructuredPage('markets');
        if (current === 'company.html') renderCompanyPage();
        if (current === 'sell-on-mazad.html') renderSimpleSellPage();
        if (current === 'business-model.html') applyBusinessModel();
        if (current === 'fintech.html') applyFintech();
        if (current === 'contact.html') applyContact();
        removeRequestedOverlines();
        applyFooter();
        deactivateUnreleasedLinks();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', apply, { once: true });
    } else {
        apply();
    }
    window.addEventListener('mazadLanguageChanged', apply);
})();
