/**
 * Mazad Global Multi-Language (i18n) Translation Engine
 * Supports: English (EN - default), Turkish (TR), Arabic (AR with RTL support)
 */

const i18nDictionary = {
    en: {
        // Navigation
        "nav_home": "Home",
        "nav_about": "About",
        "nav_projects": "Our Projects",
        "nav_ecosystem": "Ecosystem",
        "nav_business": "Business Model",
        "nav_fintech": "Fintech",
        "nav_countries": "Countries",
        "nav_contact": "Contact",
        "nav_platform": "Platform",
        "nav_for_business": "For Business",
        "nav_markets": "Markets",
        "nav_company": "Company",
        "nav_sell": "Sell on Mazad",

        // Hero & Home General
        "hero_badge": "One App, Endless Market",
        "hero_title": "The Future of Commerce in MENA",
        "hero_desc": "Mazad unifies fragmented markets across the Middle East and North Africa into a single, seamless digital ecosystem where auctions and e-commerce meet.",
        "btn_watch_demo": "Watch Demo",
        "stat_population": "Population",
        "stat_vendors": "Vendors",
        "stat_countries": "Countries",

        // About Page
        "about_badge": "Who We Are",
        "about_hero_title": "Redefining Commerce for the MENA Region",
        "about_hero_desc": "Born in the heart of the Middle East, Mazad Global is a technology company on a mission to unify fragmented markets into a single, borderless digital economy.",
        "stat_founded": "Founded",
        "stat_countries_label": "Countries",
        "stat_population_label": "Market Population",
        "stat_products_label": "Ecosystem Products",

        "about_origin_label": "Our Origin",
        "about_origin_title": "From Istanbul to the World",
        "about_origin_desc": "Founded in Istanbul with deep roots across MENA, Mazad Global emerged from a realization: the region's 500M+ population deserved a unified digital marketplace that understood its culture, languages, and trade patterns.",
        "about_mission_label": "Our Mission",
        "about_mission_block_title": "One App. Endless Market.",
        "about_mission_block_desc": "We are building the operating system for commerce in the MENA region — combining real-time auctions, B2B wholesale, C2C trading, AI assistance, and digital payments into a single seamless ecosystem.",
        "about_vision_label": "Our Vision",
        "about_vision_title": "A Borderless Digital Future",
        "about_vision_desc": "By 2028, we aim to operate across 22+ countries, serving millions of active users and processing billions in secure escrow volume while remaining true to our regional heritage.",

        "about_hq_title": "Headquarters",
        "about_hq_desc": "Istanbul, Turkey — with active operations spanning Iraq, the GCC, and North Africa.",
        "about_tech_title": "Technology",
        "about_tech_desc": "AI-first architecture powering Yaman Copilot, Mazad Studio & Smart Bidding — purpose-built for regional commerce.",
        "about_fintech_card_title": "Fintech",
        "about_fintech_card_desc": "Mazad Cash delivers bank-grade digital wallets, escrow protection, and multi-currency settlements.",

        "about_values_badge": "What Drives Us",
        "about_values_title": "Our Core Values",
        "about_values_desc": "The principles that shape every product, every partnership, and every line of code we write.",
        "about_val_trust_title": "Trust & Security",
        "about_val_trust_desc": "Bank-grade encryption and escrow systems protect every transaction on the platform.",
        "about_val_local_title": "Local First",
        "about_val_local_desc": "Deep cultural understanding of the MENA region drives every product decision we make.",
        "about_val_innov_title": "Innovation",
        "about_val_innov_desc": "AI-driven features, smart contracts, and next-gen UX define everything we ship.",
        "about_val_comm_title": "Community",
        "about_val_comm_desc": "We grow together with our merchants, buyers, and partners across the entire ecosystem.",

        // Business Model Page
        "biz_badge": "Sustainable Growth Engine",
        "biz_hero_title": "A Multi-Layered Monetization Framework",
        "biz_hero_desc": "Mazad Global operates a diversified revenue model spanning auction commissions, marketplace transaction fees, payment gateway processing, and enterprise ERP subscriptions.",
        
        "biz_layer1_badge": "Layer 01 — Front-End Commerce",
        "biz_layer1_title": "Unified Marketplace & Auctions",
        "biz_layer1_desc": "B2B, B2C, and C2C asset transaction flow & auto-extension engines.",
        "biz_layer2_badge": "Layer 02 — Payment & Settlement",
        "biz_layer2_title": "Fintech Custody & Escrow pools",
        "biz_layer2_desc": "Multi-currency wallets, automatic ledger logs, and secure deposits.",
        "biz_layer3_badge": "Layer 03 — Intelligence & Tools",
        "biz_layer3_title": "AI Copilot & Creative Studio",
        "biz_layer3_desc": "Automated product photography, AI descriptions, and market pricing.",
        "biz_layer4_badge": "Layer 04 — Enterprise Infrastructure",
        "biz_layer4_title": "SaaS & ERP Subscription Suite",
        "biz_layer4_desc": "Warehouse inventory management, multi-channel sync, and finance modules.",

        "biz_rev_header_badge": "Revenue Streams",
        "biz_rev_header_title": "How Mazad Generates Sustainable Value",
        "biz_rev_header_desc": "A resilient multi-stream monetization strategy designed for long-term compounding growth.",
        "biz_rev1_title": "Auction Commissions",
        "biz_rev1_desc": "Dynamic fee structures on successful B2B and B2C auctions.",
        "biz_rev2_title": "Marketplace Fees",
        "biz_rev2_desc": "Transaction charges and featured listing promotions.",
        "biz_rev3_title": "Fintech & Escrow Services",
        "biz_rev3_desc": "Processing and escrow verification fees on Mazad Cash.",
        "biz_rev4_title": "SaaS & Enterprise ERP",
        "biz_rev4_desc": "Monthly software subscriptions for regional businesses.",
        "bm_new_badge": "One transaction. Multiple value moments.",
        "bm_new_title": "Mazad grows when commerce keeps moving.",
        "bm_new_desc": "A customer discovers, pays and receives. A merchant sells, manages and grows. Mazad connects that journey and creates value at the moments where the platform helps.",
        "bm_principle_1": "Transaction-led",
        "bm_principle_2": "Service-supported",
        "bm_principle_3": "Software-enabled",
        "bm_principle_4": "Designed to scale",
        "bm_core_label": "CONNECTED VALUE",
        "bm_node_market": "Market",
        "bm_node_market_small": "Trade happens",
        "bm_node_payments": "Payments",
        "bm_node_payments_small": "Money moves",
        "bm_node_operations": "Operations",
        "bm_node_operations_small": "Orders move",
        "bm_node_software": "Software",
        "bm_node_software_small": "Businesses grow",
        "bm_calc_title": "Watch the model respond.",
        "bm_calc_desc": "The scenario changes automatically every 1.35 seconds. Move a control to explore your own mix; the live demonstration resumes when you leave the panel.",
        "bm_auto_running": "Auto scenario running",
        "bm_scenario_1": "Launch",
        "bm_scenario_2": "Growing market",
        "bm_scenario_3": "Regional scale",
        "bm_scenario_4": "Connected network",
        "bm_control_gmv": "Monthly commerce volume",
        "bm_control_merchants": "Connected business accounts",
        "bm_control_orders": "Monthly fulfilled orders",
        "bm_result_label": "Illustrative monthly platform value",
        "bm_result_note": "A transparent illustration based on the selected scenario — not a financial forecast.",
        "bm_breakdown_market": "Commerce",
        "bm_breakdown_software": "Software",
        "bm_breakdown_operations": "Operations",
        "bm_story_badge": "One connected journey",
        "bm_story_title": "Useful at every step, valuable as one system.",
        "bm_story_desc": "The business model is not a collection of unrelated fees. Each capability supports the same customer journey and makes the next step easier.",
        "bm_story_1_title": "A sale begins",
        "bm_story_1_desc": "Discovery, listings and auctions bring demand and supply together.",
        "bm_story_2_title": "Payment stays connected",
        "bm_story_2_desc": "The transaction journey continues through wallet, protected hold and settlement.",
        "bm_story_3_title": "The order keeps moving",
        "bm_story_3_desc": "Operational tools connect the sale with fulfillment and delivery.",
        "bm_story_4_title": "The business grows",
        "bm_story_4_desc": "Connected software helps merchants manage more activity without changing systems.",
        // Fintech Page
        "fintech_badge": "Meet Mazad Cash",
        "fintech_hero_title": "Money, Moving as One Connected Experience",
        "fintech_hero_desc": "Discover the digital wallet experience that brings payments, protected transactions and settlement together inside the Mazad ecosystem.",
        
        "fintech_sim_badge": "Interactive Simulator",
        "fintech_sim_title": "Escrow Vault Lifecycle",
        "fintech_sim_desc": "Simulate how buyer deposits are safely locked in neutral escrow until product inspection and delivery are confirmed.",

        "fintech_feat_badge": "Institutional Grade",
        "fintech_feat_title": "Core Payment Infrastructure",
        "fintech_feat_desc": "Designed to provide zero-trust transaction safety across emerging MENA markets.",
        "fintech_f1_title": "Smart Escrow Vaults",
        "fintech_f1_desc": "Buyer payments are locked safely in neutral escrow until product delivery is verified.",
        "fintech_f2_title": "Multi-Currency Settlement",
        "fintech_f2_desc": "Instant conversion across USD, TRY, IQD, SAR, and AED.",
        "fintech_f3_title": "Fraud Protection & KYC",
        "fintech_f3_desc": "Biometric identity verification and real-time AML fraud detection.",
        "cash_eyebrow": "The money layer of the Mazad ecosystem",
        "cash_promise_title": "One flow. From payment to settlement.",
        "cash_promise_desc": "Mazad Cash introduces the financial experience inside Mazad commerce by bringing wallet, protected hold and settlement into one visual journey.",
        "cash_promise_1": "Connected digital wallet experience",
        "cash_promise_2": "Protected transaction journey",
        "cash_promise_3": "Settlement connected to operations",
        "cash_wallet_status": "CONNECTED MONEY FLOW",
        "cash_flow_label": "TRANSACTION JOURNEY",
        "cash_flow_title": "Protected from payment to payout",
        "cash_flow_buyer": "BUYER PAYS",
        "cash_flow_hold": "SECURE HOLD",
        "cash_flow_seller": "SELLER PAID",
        "cash_for_label": "Built for every side of the transaction",
        "cash_for_title": "Three perspectives. One shared money journey.",
        "cash_for_desc": "Explore how Mazad Cash presents the same connected transaction experience to buyers, sellers and businesses.",
        "cash_buyer_label": "FOR BUYERS",
        "cash_buyer_title": "A clear payment experience.",
        "cash_buyer_desc": "Follow the payment as it moves from the wallet into the Mazad transaction journey.",
        "cash_seller_label": "FOR SELLERS",
        "cash_seller_title": "A connected payout journey.",
        "cash_seller_desc": "See how an order moves from payment stage to release and settlement.",
        "cash_business_label": "FOR BUSINESSES",
        "cash_business_title": "A single view of money movement.",
        "cash_business_desc": "Bring wallet activity and transaction stages into the wider Mazad operation.",
        "cash_journey_label": "How Mazad Cash works",
        "cash_journey_title": "Watch the transaction move.",
        "cash_journey_desc": "The showcase moves automatically through four stages; hover over it to pause and explore.",
        "cash_step_1_title": "Payment created",
        "cash_step_1_desc": "The buyer chooses a supported payment method and confirms the order.",
        "cash_step_2_title": "Funds protected",
        "cash_step_2_desc": "The amount is reserved while the seller prepares the order.",
        "cash_step_3_title": "Milestone confirmed",
        "cash_step_3_desc": "Delivery or the agreed transaction condition is confirmed.",
        "cash_step_4_title": "Settlement completed",
        "cash_step_4_desc": "Funds are released and the transaction record is synchronized.",
        "cash_cap_label": "The essentials",
        "cash_cap_title": "One money layer for daily commerce.",
        "cash_cap_desc": "Use the capabilities you need today, then connect more of the Mazad ecosystem as your operation grows.",
        "cash_cap_wallet_title": "Connected Wallet",
        "cash_cap_wallet_desc": "View incoming, reserved, released and refunded balances in one place.",
        "cash_cap_hold_title": "Protected Hold",
        "cash_cap_hold_desc": "Keep money between buyer and seller until the transaction condition is met.",
        "cash_cap_currency_title": "Regional Currency Flow",
        "cash_cap_currency_desc": "Structure collections and settlements for the currencies your market uses.",
        "cash_cap_records_title": "Unified Records",
        "cash_cap_records_desc": "Return payment status to orders, invoices and operational reporting.",
        // Countries Page
        "countries_badge": "Regional Footprint",
        "countries_hero_title": "Connecting 22+ Markets Across MENA",
        "countries_hero_desc": "From our headquarters in Istanbul to key operational hubs in Baghdad, Erbil, Riyadh, Dubai, and Cairo.",
        "country_hq": "Headquarters",
        "country_hub": "Regional Hub",
        "country_active": "Active Market",
        "countries_trade_badge": "Global Trade Corridor",
        "countries_trade_title": "Borderless Digital Trade Bridge",
        "countries_trade_desc": "Mazad is not merely an operational entity in different countries; it is a living bridge unifying trade, logistics, escrow payment corridors, manufacturers, and buyers across Türkiye, Iraq, the GCC, and North Africa under a single roof.",
        "countries_roof_tag": "MAZAD UNIFIED ROOF & BRIDGE CORE",
        "countries_partner_btn": "Partner with Mazad in your country",
        "world_badge": "Explore the Mazad World",
        "world_title": "Turn the world. Discover the network.",
        "world_desc": "A living view of the markets, gateways and regional connections shaping the Mazad journey across MENA.",
        "world_hint": "DRAG TO ROTATE • SELECT A GLOWING POINT",
        "world_selected_label": "Selected network point",
        "world_region_label": "Region",
        "world_focus_label": "Network focus",
        "world_contact_button": "Connect with this market",
        "world_card_1_title": "A world you can explore",
        "world_card_1_desc": "Rotate the globe freely and bring any Mazad market into view.",
        "world_card_2_title": "Markets connected by one experience",
        "world_card_2_desc": "Each point introduces its role inside the wider commerce network.",
        "world_card_3_title": "A regional story in motion",
        "world_card_3_desc": "The globe keeps moving to reflect a network designed to keep evolving.",

        // Ecosystem Page
        "eco_badge": "All-In-One Architecture",
        "eco_hero_title": "Everything Your Business Needs. Connected.",
        "eco_hero_desc": "Sell, collect payments, manage operations, create content and deliver orders through one ecosystem built to grow with you.",
        "eco_promise_title": "Start with one need. Scale without changing systems.",
        "eco_promise_desc": "From finding your first customer to collecting payment, managing inventory and delivering the order, Mazad keeps every step connected in one operating system.",
        "eco_chip_merchants": "FOR MERCHANTS",
        "eco_chip_buyers": "FOR BUYERS",
        "eco_chip_enterprise": "FOR ENTERPRISE",
        "eco_core_label": "CONNECTED CORE",
        "eco_orbit_hint": "DRAG • CLICK TO OPEN",
        "eco_capabilities_label": "Everything your business needs",
        "eco_capabilities_title": "One journey. Six connected capabilities.",
        "eco_capabilities_desc": "Every capability works independently. Together, they remove handoffs, duplicated data and operational blind spots.",
        "eco_one_action": "Verify once. Give customers and teams secure access to every Mazad service with one identity.",
        "eco_one_result_1": "One login across the ecosystem",
        "eco_one_result_2": "Verified buyer and business profiles",
        "eco_market_action": "Launch a store or auction, reach verified buyers and turn listings into orders from one marketplace.",
        "eco_market_result_1": "B2B, B2C and C2C selling",
        "eco_market_result_2": "Fixed-price and live auction journeys",
        "eco_cash_action": "Collect payments, protect funds with escrow and settle transactions in regional currencies.",
        "eco_cash_result_1": "Wallet, transfer and escrow flows",
        "eco_cash_result_2": "Clear settlement and transaction records",
        "eco_erp_action": "Keep catalog, inventory, invoices and ledgers synchronized as orders move through your business.",
        "eco_erp_result_1": "Real-time stock and order control",
        "eco_erp_result_2": "Automated invoices and reporting",
        "eco_ai_action": "Create product content faster and support customers naturally in Arabic, Turkish and English.",
        "eco_ai_result_1": "Campaign and product creative generation",
        "eco_ai_result_2": "Always-on multilingual assistance",
        "eco_logistics_action": "Quote, dispatch, track and confirm delivery without losing visibility after checkout.",
        "eco_logistics_result_1": "Connected regional carrier network",
        "eco_logistics_result_2": "Shipment status returned to every system",
        "eco_index_identity": "01 / IDENTITY",
        "eco_index_commerce": "02 / COMMERCE",
        "eco_index_payments": "03 / PAYMENTS",
        "eco_index_operations": "04 / OPERATIONS",
        "eco_index_growth": "05 / GROWTH",
        "eco_index_delivery": "06 / DELIVERY",
        "eco_flow_discover": "Discover",
        "eco_flow_discover_sub": "Find or list",
        "eco_flow_verify": "Verify",
        "eco_flow_verify_sub": "Trust identity",
        "eco_flow_pay": "Pay",
        "eco_flow_pay_sub": "Protect funds",
        "eco_flow_operate": "Operate",
        "eco_flow_operate_sub": "Sync the business",
        "eco_flow_deliver": "Deliver",
        "eco_flow_deliver_sub": "Complete the journey",
        "eco_spotlight_title": "Integrated Commerce Architecture",

        // Contact Page
        "contact_badge": "Support & Inquiries",
        "contact_hero_title": "Get in Touch With Our Global Team",
        "contact_hero_desc": "Connect with our administrative headquarters in Istanbul or regional operational centers across MENA.",
        "contact_form_name": "Full Name",
        "contact_form_email": "Email Address",
        "contact_form_subject": "Subject",
        "contact_form_msg": "Your Message",
        "contact_btn_send": "Send Message",

        // Yaman AI Assistant
        "yaman_title": "Yaman AI Copilot",
        "yaman_status": "Online & Ready",
        "yaman_greeting": "Hello! I am Yaman AI, your Mazad Global assistant. How can I help you explore our ecosystem today?",
        "yaman_placeholder": "Ask Yaman AI anything...",
        "yaman_quick_1": "⚡ What is Mazad Ecosystem?",
        "yaman_quick_2": "💳 How does Mazad Cash work?",
        "yaman_quick_3": "🗺️ Operational countries?",

        // Footer
        "footer_rights": "All rights reserved.",
        "footer_tagline": "Bridging MENA commerce with high-velocity AI and digital auctions."
    },
    tr: {
        // Navigation
        "nav_home": "Ana Sayfa",
        "nav_about": "Hakkımızda",
        "nav_projects": "Projelerimiz",
        "nav_ecosystem": "Ekosistem",
        "nav_business": "İş Modeli",
        "nav_fintech": "Fintech",
        "nav_countries": "Ülkeler",
        "nav_contact": "İletişim",
        "nav_platform": "Platform",
        "nav_for_business": "İşletmeler İçin",
        "nav_markets": "Pazarlar",
        "nav_company": "Şirket",
        "nav_sell": "Mazad'da Satış Yap",

        // Hero & Home General
        "hero_badge": "Tek Uygulama, Sonsuz Pazar",
        "hero_title": "MENA Bölgesinde Ticaretin Geleceği",
        "hero_desc": "Mazad, Orta Doğu ve Kuzey Afrika'daki parçalanmış pazarları açık artırma ve e-ticaretin buluştuğu tek, kusursuz bir dijital ekosistemde birleştirir.",
        "btn_watch_demo": "Demoyu İzle",
        "stat_population": "Nüfus",
        "stat_vendors": "Satıcı",
        "stat_countries": "Ülke",

        // About Page
        "about_badge": "Biz Kimiz",
        "about_hero_title": "MENA Bölgesi İçin Ticareti Yeniden Tanımlıyoruz",
        "about_hero_desc": "Orta Doğu'nun kalbinde doğan Mazad Global, parçalanmış pazarları tek, sınırları olmayan bir dijital ekonomide birleştirmeyi hedefleyen bir teknoloji şirketidir.",
        "stat_founded": "Kuruluş",
        "stat_countries_label": "Aktif Ülke",
        "stat_population_label": "Pazar Nüfusu",
        "stat_products_label": "Ekosistem Ürünü",

        "about_origin_label": "Kökenimiz",
        "about_origin_title": "İstanbul'dan Dünyaya",
        "about_origin_desc": "İstanbul'da kurulan ve tüm MENA bölgesinde kök salan Mazad Global, bölgedeki 500 milyondan fazla nüfusun kültürünü, dilini ve ticaret alışkanlıklarını anlayan tek bir birleşik platform hak ettiği düşüncesiyle doğdu.",
        "about_mission_label": "Misyonumuz",
        "about_mission_block_title": "Tek Uygulama. Sonsuz Pazar.",
        "about_mission_block_desc": "MENA bölgesinde ticaretin işletim sistemini inşa ediyoruz — canlı açık artırmaları, B2B toptan ticareti, C2C pazar yerini, yapay zeka asistanını ve dijital ödemeleri tek bir kusursuz ekosistemde birleştiriyoruz.",
        "about_vision_label": "Vizyonumuz",
        "about_vision_title": "Sınırları Olmayan Dijital Bir Gelecek",
        "about_vision_desc": "2028 yılına kadar 22'den fazla ülkede aktif olarak faaliyet göstermeyi, milyonlarca kullanıcıya hizmet vermeyi ve milyarlarca dolarlık güvenli Escrow hacmi işlemeyi hedefliyoruz.",

        "about_hq_title": "Genel Merkez",
        "about_hq_desc": "İstanbul, Türkiye — Irak, Körfez ülkeleri ve Kuzey Afrika'daki aktif operasyonlarımızla.",
        "about_tech_title": "Teknoloji",
        "about_tech_desc": "Yaman Copilot, Mazad Studio ve Akıllı Teklif sistemlerimizi güçlendiren yapay zeka odaklı mimari.",
        "about_fintech_card_title": "Fintech & Ödeme",
        "about_fintech_card_desc": "Mazad Cash ile kurumsal düzeyde dijital cüzdanlar, Escrow güvencesi ve çoklu para birimi ödeme çözümleri.",

        "about_values_badge": "Bize Yol Gösterenler",
        "about_values_title": "Temel Değerlerimiz",
        "about_values_desc": "Geliştirdiğimiz her ürünü, kurduğumuz her ortaklığı ve yazdığımız her satır kodu şekillendiren ilkelerimiz.",
        "about_val_trust_title": "Güven ve Güvenlik",
        "about_val_trust_desc": "Banka düzeyinde şifreleme ve Escrow sistemleri platformdaki her işlemi %100 koruma altına alır.",
        "about_val_local_title": "Yerel Odaklılık",
        "about_val_local_desc": "MENA bölgesinin kültürel yapısını ve ticaret dinamiklerini derinlemesine anlamak her kararımızın temelidir.",
        "about_val_innov_title": "Yenilikçilik",
        "about_val_innov_desc": "Yapay zeka özellikleri, akıllı sözleşmeler ve nesil UX standartları sunduğumuz tüm hizmetleri tanımlar.",
        "about_val_comm_title": "Topluluk",
        "about_val_comm_desc": "Tüccarlarımız, alıcılarımız ve tüm ekosistem ortaklarımızla birlikte büyüyoruz.",

        // Business Model Page
        "biz_badge": "Sürdürülebilir Büyüme Motoru",
        "biz_hero_title": "Çok Katmanlı Gelir Mimarisi",
        "biz_hero_desc": "Mazad Global, açık artırma komisyonları, pazaryeri işlem ücretleri, ödeme geçidi gelirleri ve kurumsal ERP aboneliklerinden oluşan çok yönlü bir gelir modeli işletir.",
        
        "biz_layer1_badge": "Katman 01 — Ön Yüz Ticareti",
        "biz_layer1_title": "Birleşik Pazaryeri & Mezatlar",
        "biz_layer1_desc": "B2B, B2C ve C2C varlık işlem akışı ve otomatik süre uzatma motorları.",
        "biz_layer2_badge": "Katman 02 — Ödeme & Takas",
        "biz_layer2_title": "Fintech Muhafaza & Escrow Havuzları",
        "biz_layer2_desc": "Çoklu para birimli cüzdanlar, otomatik defter kayıtları ve güvenli depozitolar.",
        "biz_layer3_badge": "Katman 03 — Zeka & Araçlar",
        "biz_layer3_title": "AI Copilot & Yaratıcı Stüdyo",
        "biz_layer3_desc": "Otomatik ürün fotoğrafçılığı, yapay zeka ürün açıklamaları ve pazar fiyatlandırması.",
        "biz_layer4_badge": "Katman 04 — Kurumsal Altyapı",
        "biz_layer4_title": "SaaS & ERP Abonelik Paketi",
        "biz_layer4_desc": "Depo envanter yönetimi, çoklu kanal senkronizasyonu ve finans modülleri.",

        "biz_rev_header_badge": "Gelir Kaynakları",
        "biz_rev_header_title": "Mazad Nasıl Sürdürülebilir Değer Üretir?",
        "biz_rev_header_desc": "Uzun vadeli katlanarak büyüme için tasarlanmış çok kanallı gelir stratejisi.",
        "biz_rev1_title": "Açık Artırma Komisyonları",
        "biz_rev1_desc": "Başarılı B2B ve B2C mezatlarda dinamik komisyon oranları.",
        "biz_rev2_title": "Pazaryeri Ücretleri",
        "biz_rev2_desc": "İşlem hizmet bedelleri ve öne çıkarılan ilan tanıtımları.",
        "biz_rev3_title": "Fintech & Escrow Hizmetleri",
        "biz_rev3_desc": "Mazad Cash üzerinden ödeme doğrulama ve Escrow güvence ücretleri.",
        "biz_rev4_title": "SaaS & Kurumsal ERP",
        "biz_rev4_desc": "Bölgesel işletmeler için aylık ve yıllık yazılım abonelikleri.",
        "bm_new_badge": "Tek işlem. Birden fazla değer anı.",
        "bm_new_title": "Ticaret hareket ettikçe Mazad büyür.",
        "bm_new_desc": "Müşteri keşfeder, öder ve teslim alır. Satıcı satar, yönetir ve büyür. Mazad bu yolculuğu birbirine bağlar ve platformun yardımcı olduğu anlarda değer üretir.",
        "bm_principle_1": "İşlem odaklı",
        "bm_principle_2": "Hizmet destekli",
        "bm_principle_3": "Yazılım gücünde",
        "bm_principle_4": "Ölçeklenmek için tasarlandı",
        "bm_core_label": "BAĞLANTILI DEĞER",
        "bm_node_market": "Pazar",
        "bm_node_market_small": "Ticaret gerçekleşir",
        "bm_node_payments": "Ödemeler",
        "bm_node_payments_small": "Para hareket eder",
        "bm_node_operations": "Operasyon",
        "bm_node_operations_small": "Sipariş ilerler",
        "bm_node_software": "Yazılım",
        "bm_node_software_small": "İşletme büyür",
        "bm_calc_title": "Modelin tepki verdiğini izleyin.",
        "bm_calc_desc": "Senaryo her 1,35 saniyede otomatik değişir. Kendi karışımınızı keşfetmek için bir kontrolü hareket ettirin; panelden ayrıldığınızda canlı gösterim devam eder.",
        "bm_auto_running": "Otomatik senaryo çalışıyor",
        "bm_scenario_1": "Başlangıç",
        "bm_scenario_2": "Büyüyen pazar",
        "bm_scenario_3": "Bölgesel ölçek",
        "bm_scenario_4": "Bağlantılı ağ",
        "bm_control_gmv": "Aylık ticaret hacmi",
        "bm_control_merchants": "Bağlantılı işletme hesapları",
        "bm_control_orders": "Aylık tamamlanan siparişler",
        "bm_result_label": "Örnek aylık platform değeri",
        "bm_result_note": "Seçilen senaryoya dayalı şeffaf bir örnektir; finansal tahmin değildir.",
        "bm_breakdown_market": "Ticaret",
        "bm_breakdown_software": "Yazılım",
        "bm_breakdown_operations": "Operasyon",
        "bm_story_badge": "Tek bağlantılı yolculuk",
        "bm_story_title": "Her adımda kullanışlı, tek sistem olarak değerli.",
        "bm_story_desc": "İş modeli, ilgisiz ücretlerin bir toplamı değildir. Her yetenek aynı müşteri yolculuğunu destekler ve bir sonraki adımı kolaylaştırır.",
        "bm_story_1_title": "Satış başlar",
        "bm_story_1_desc": "Keşif, ilanlar ve açık artırmalar talep ile arzı buluşturur.",
        "bm_story_2_title": "Ödeme bağlı kalır",
        "bm_story_2_desc": "İşlem yolculuğu cüzdan, korumalı bekletme ve mutabakatla devam eder.",
        "bm_story_3_title": "Sipariş ilerlemeye devam eder",
        "bm_story_3_desc": "Operasyon araçları satışı hazırlık ve teslimatla bağlar.",
        "bm_story_4_title": "İşletme büyür",
        "bm_story_4_desc": "Bağlantılı yazılım, satıcıların sistem değiştirmeden daha fazla hareketi yönetmesine yardımcı olur.",
        // Fintech Page
        "fintech_badge": "Mazad Cash ile Tanışın",
        "fintech_hero_title": "Para, Tek Bir Bağlantılı Deneyimde Hareket Ediyor",
        "fintech_hero_desc": "Ödeme, korunan işlem ve mutabakatı Mazad ekosistemi içinde bir araya getiren dijital cüzdan deneyimini keşfedin.",
        
        "fintech_sim_badge": "Etkileşimli Simülatör",
        "fintech_sim_title": "Escrow Kasa Yaşam Döngüsü",
        "fintech_sim_desc": "Alıcı ödemelerinin ürün kontrolü ve teslimat doğrulanana kadar tarafsız banka kasasında nasıl kilitlendiğini simüle edin.",

        "fintech_feat_badge": "Kurumsal Düzey",
        "fintech_feat_title": "Temel Ödeme Altyapısı",
        "fintech_feat_desc": "Gelişmekte olan MENA pazarlarında sıfır güven riskine karşı maksimum işlem güvenliği sağlamak için tasarlandı.",
        "fintech_f1_title": "Akıllı Escrow Kasaları",
        "fintech_f1_desc": "Alıcı ödemeleri, ürün teslimatı doğrulanana kadar tarafsız banka kasasında kilitli tutulur.",
        "fintech_f2_title": "Çoklu Para Birimi Takası",
        "fintech_f2_desc": "USD, TRY, IQD, SAR ve AED arasında anında çevirim ve transfer.",
        "fintech_f3_title": "Dolandırıcılık Koruması & KYC",
        "fintech_f3_desc": "Biyometrik kimlik doğrulama ve anlık AML dolandırıcılık tespiti.",
        "cash_eyebrow": "Mazad ekosisteminin para katmanı",
        "cash_promise_title": "Tek akış. Ödemeden mutabakata.",
        "cash_promise_desc": "Mazad Cash; cüzdan, korumalı bekletme ve mutabakatı tek bir görsel yolculukta birleştirerek Mazad ticaretindeki finansal deneyimi tanıtır.",
        "cash_promise_1": "Bağlantılı dijital cüzdan deneyimi",
        "cash_promise_2": "Korumalı işlem yolculuğu",
        "cash_promise_3": "Operasyona bağlı mutabakat",
        "cash_wallet_status": "BAĞLANTILI PARA AKIŞI",
        "cash_flow_label": "İŞLEM YOLCULUĞU",
        "cash_flow_title": "Ödemeden tahsilata kadar koruma",
        "cash_flow_buyer": "ALICI ÖDER",
        "cash_flow_hold": "GÜVENLİ BEKLETME",
        "cash_flow_seller": "SATICI ÖDENİR",
        "cash_for_label": "İşlemin her tarafı için tasarlandı",
        "cash_for_title": "Üç bakış açısı. Ortak bir para yolculuğu.",
        "cash_for_desc": "Mazad Cash’in aynı bağlantılı işlem deneyimini alıcı, satıcı ve işletmelere nasıl sunduğunu keşfedin.",
        "cash_buyer_label": "ALICILAR İÇİN",
        "cash_buyer_title": "Net bir ödeme deneyimi.",
        "cash_buyer_desc": "Ödemenin cüzdandan Mazad işlem yolculuğuna nasıl geçtiğini takip edin.",
        "cash_seller_label": "SATICILAR İÇİN",
        "cash_seller_title": "Bağlantılı bir tahsilat yolculuğu.",
        "cash_seller_desc": "Siparişin ödeme aşamasından serbest bırakma ve mutabakata nasıl ilerlediğini görün.",
        "cash_business_label": "İŞLETMELER İÇİN",
        "cash_business_title": "Para hareketinin tek görünümü.",
        "cash_business_desc": "Cüzdan hareketlerini ve işlem aşamalarını daha geniş Mazad operasyonuna taşıyın.",
        "cash_journey_label": "Mazad Cash nasıl çalışır?",
        "cash_journey_title": "İşlemin hareketini izleyin.",
        "cash_journey_desc": "Gösterim dört aşamada otomatik ilerler; durdurup incelemek için imleci üzerine getirin.",
        "cash_step_1_title": "Ödeme oluşturulur",
        "cash_step_1_desc": "Alıcı desteklenen ödeme yöntemini seçer ve siparişi onaylar.",
        "cash_step_2_title": "Para korunur",
        "cash_step_2_desc": "Satıcı siparişi hazırlarken tutar güvenli biçimde ayrılır.",
        "cash_step_3_title": "İşlem adımı onaylanır",
        "cash_step_3_desc": "Teslimat veya kararlaştırılan işlem koşulu onaylanır.",
        "cash_step_4_title": "Mutabakat tamamlanır",
        "cash_step_4_desc": "Para serbest bırakılır ve işlem kaydı sistemlerle eşleştirilir.",
        "cash_cap_label": "Temel ihtiyaçlar",
        "cash_cap_title": "Günlük ticaret için tek para katmanı.",
        "cash_cap_desc": "Bugün ihtiyaç duyduğunuz yetenekleri kullanın; operasyonunuz büyüdükçe Mazad ekosisteminin daha fazlasını bağlayın.",
        "cash_cap_wallet_title": "Bağlantılı Cüzdan",
        "cash_cap_wallet_desc": "Gelen, ayrılan, serbest bırakılan ve iade edilen bakiyeleri tek yerde görün.",
        "cash_cap_hold_title": "Güvenli Bekletme",
        "cash_cap_hold_desc": "İşlem koşulu tamamlanana kadar parayı alıcı ile satıcı arasında koruyun.",
        "cash_cap_currency_title": "Bölgesel Para Akışı",
        "cash_cap_currency_desc": "Tahsilat ve mutabakatı pazarınızın kullandığı para birimlerine göre yapılandırın.",
        "cash_cap_records_title": "Birleşik Kayıtlar",
        "cash_cap_records_desc": "Ödeme durumunu siparişlere, faturalara ve operasyonel raporlara aktarın.",
        // Countries Page
        "countries_badge": "Bölgesel Varlık",
        "countries_hero_title": "MENA Bölgesinde 22+ Pazarı Birleştiriyoruz",
        "countries_hero_desc": "İstanbul'daki genel merkezimizden Bağdat, Erbil, Riyad, Dubai ve Kahire'deki operasyonel merkezlerimize.",
        "country_hq": "Genel Merkez",
        "country_hub": "Bölgesel Merkez",
        "country_active": "Aktif Pazar",
        "countries_trade_badge": "Küresel Ticaret Koridoru",
        "countries_trade_title": "Sınırları Aşan Dijital Ticaret Köprüsü",
        "countries_trade_desc": "Mazad yalnızca farklı ülkelerde faaliyet gösteren bir şirket değildir; Türkiye, Irak, Körfez ve Kuzey Afrika arasındaki ticareti, lojistiği, ödeme hatlarını, üreticileri ve tüketicileri tek bir ortak çatı altında birleştiren canlı bir köprüdür.",
        "countries_roof_tag": "MAZAD BİRLEŞİK ÇATI & KÖPRÜ ÇEKİRDEĞİ",
        "countries_partner_btn": "Ülkenizde Mazad ile ortaklık kurun",
        "world_badge": "Mazad Dünyasını Keşfedin",
        "world_title": "Dünyayı çevirin. Ağı keşfedin.",
        "world_desc": "Mazad’ın MENA yolculuğunu şekillendiren pazarları, geçitleri ve bölgesel bağlantıları gösteren canlı bir görünüm.",
        "world_hint": "ÇEVİRMEK İÇİN SÜRÜKLE • PARLAYAN NOKTAYI SEÇ",
        "world_selected_label": "Seçilen ağ noktası",
        "world_region_label": "Bölge",
        "world_focus_label": "Ağın odağı",
        "world_contact_button": "Bu pazarla bağlantı kurun",
        "world_card_1_title": "Keşfedebileceğiniz bir dünya",
        "world_card_1_desc": "Küreyi özgürce çevirin ve istediğiniz Mazad pazarını görünür hale getirin.",
        "world_card_2_title": "Tek deneyimle bağlanan pazarlar",
        "world_card_2_desc": "Her nokta daha geniş ticaret ağı içindeki rolünü tanıtır.",
        "world_card_3_title": "Hareket halindeki bölgesel hikâye",
        "world_card_3_desc": "Küre, gelişmeye devam eden bir ağı yansıtmak için hareketini sürdürür.",

        // Ecosystem Page
        "eco_badge": "Hepsi Bir Arada Mimari",
        "eco_hero_title": "İşletmenizin İhtiyacı Olan Her Şey. Birbirine Bağlı.",
        "eco_hero_desc": "Satıştan ödemeye, operasyondan içerik üretimine ve teslimata kadar büyümenizi destekleyen tek bir ekosistem.",
        "eco_promise_title": "Tek bir ihtiyaçla başlayın. Sistem değiştirmeden büyüyün.",
        "eco_promise_desc": "İlk müşterinizi bulmaktan ödemeyi almaya, stoğu yönetmekten siparişi teslim etmeye kadar Mazad her adımı tek işletim sisteminde birbirine bağlar.",
        "eco_chip_merchants": "SATICILAR İÇİN",
        "eco_chip_buyers": "ALICILAR İÇİN",
        "eco_chip_enterprise": "KURUMLAR İÇİN",
        "eco_core_label": "BAĞLANTILI MERKEZ",
        "eco_orbit_hint": "SÜRÜKLE • AÇMAK İÇİN TIKLA",
        "eco_capabilities_label": "İşletmenizin ihtiyacı olan her şey",
        "eco_capabilities_title": "Tek yolculuk. Birbirine bağlı altı yetenek.",
        "eco_capabilities_desc": "Her çözüm tek başına çalışır. Birlikte kullanıldığında veri tekrarını, kopuk süreçleri ve operasyonel kör noktaları ortadan kaldırır.",
        "eco_one_action": "Bir kez doğrulayın. Müşterilerinize ve ekiplerinize tek kimlikle tüm Mazad hizmetlerine güvenli erişim sağlayın.",
        "eco_one_result_1": "Tüm ekosistemde tek giriş",
        "eco_one_result_2": "Doğrulanmış alıcı ve işletme profilleri",
        "eco_market_action": "Mağaza veya açık artırma başlatın, doğrulanmış alıcılara ulaşın ve ilanları tek pazaryerinden siparişe dönüştürün.",
        "eco_market_result_1": "B2B, B2C ve C2C satış",
        "eco_market_result_2": "Sabit fiyat ve canlı açık artırma",
        "eco_cash_action": "Ödeme alın, parayı güvenli hesapta koruyun ve işlemleri bölgesel para birimleriyle sonuçlandırın.",
        "eco_cash_result_1": "Cüzdan, transfer ve güvenli ödeme akışları",
        "eco_cash_result_2": "Şeffaf mutabakat ve işlem kayıtları",
        "eco_erp_action": "Siparişler ilerlerken katalog, stok, fatura ve muhasebe kayıtlarını eş zamanlı yönetin.",
        "eco_erp_result_1": "Gerçek zamanlı stok ve sipariş kontrolü",
        "eco_erp_result_2": "Otomatik faturalama ve raporlama",
        "eco_ai_action": "Ürün içeriklerini daha hızlı üretin; müşterilerinize Arapça, Türkçe ve İngilizce doğal destek verin.",
        "eco_ai_result_1": "Kampanya ve ürün görseli üretimi",
        "eco_ai_result_2": "Kesintisiz çok dilli müşteri desteği",
        "eco_logistics_action": "Teklif alın, sevkiyatı başlatın, takip edin ve teslimatı ödeme sonrasında görünürlüğü kaybetmeden tamamlayın.",
        "eco_logistics_result_1": "Bağlantılı bölgesel taşıyıcı ağı",
        "eco_logistics_result_2": "Tüm sistemlere aktarılan teslimat durumu",
        "eco_index_identity": "01 / KİMLİK",
        "eco_index_commerce": "02 / TİCARET",
        "eco_index_payments": "03 / ÖDEME",
        "eco_index_operations": "04 / OPERASYON",
        "eco_index_growth": "05 / BÜYÜME",
        "eco_index_delivery": "06 / TESLİMAT",
        "eco_flow_discover": "Keşfet",
        "eco_flow_discover_sub": "Bul veya listele",
        "eco_flow_verify": "Doğrula",
        "eco_flow_verify_sub": "Kimliğe güven",
        "eco_flow_pay": "Öde",
        "eco_flow_pay_sub": "Parayı koru",
        "eco_flow_operate": "Yönet",
        "eco_flow_operate_sub": "İşletmeyi senkronize et",
        "eco_flow_deliver": "Teslim Et",
        "eco_flow_deliver_sub": "Yolculuğu tamamla",
        "eco_spotlight_title": "Entegre Ticaret Mimarisi",

        // Contact Page
        "contact_badge": "Destek & İletişim",
        "contact_hero_title": "Küresel Ekibimizle İletişime Geçin",
        "contact_hero_desc": "İstanbul genel merkezimiz veya MENA bölgesindeki operasyonel merkezlerimizle doğrudan bağlantı kurun.",
        "contact_form_name": "Ad Soyad",
        "contact_form_email": "E-Posta Adresi",
        "contact_form_subject": "Konu",
        "contact_form_msg": "Mesajınız",
        "contact_btn_send": "Mesaj Gönder",

        // Yaman AI Assistant
        "yaman_title": "Yaman AI Asistanı",
        "yaman_status": "Çevrimiçi & Hazır",
        "yaman_greeting": "Merhaba! Ben Yaman AI, Mazad Global dijital asistanınızım. Ekosistemimizi keşfetmenize nasıl yardımcı olabilirim?",
        "yaman_placeholder": "Yaman AI'ye bir soru sorun...",
        "yaman_quick_1": "⚡ Mazad Ekosistemi Nedir?",
        "yaman_quick_2": "💳 Mazad Cash Nasıl Çalışır?",
        "yaman_quick_3": "🗺️ Faaliyet Gösterilen Ülkeler?",

        // Footer
        "footer_rights": "Tüm hakları saklıdır.",
        "footer_tagline": "MENA ticaretini yüksek hızlı yapay zeka ve dijital açık artırmalarla birleştiriyor."
    },
    ar: {
        // Navigation
        "nav_home": "الرئيسية",
        "nav_about": "من نحن",
        "nav_projects": "مشاريعنا",
        "nav_ecosystem": "النظام البيئي",
        "nav_business": "نموذج الأعمال",
        "nav_fintech": "التكنولوجيا المالية",
        "nav_countries": "الدول",
        "nav_contact": "اتصل بنا",
        "nav_platform": "المنصة",
        "nav_for_business": "للأعمال",
        "nav_markets": "الأسواق",
        "nav_company": "الشركة",
        "nav_sell": "بِع على مزاد",

        // Hero & Home General
        "hero_badge": "تطبيق واحد، سوق لا محدود",
        "hero_title": "مستقبل التجارة في الشرق الأوسط وشمال أفريقيا",
        "hero_desc": "تجمع مزاد الأسواق المجزأة في الشرق الأوسط وشمال أفريقيا في نظام بيئي رقمي موحد وسلس يجمع بين المزادات والتجارة الإلكترونية.",
        "btn_watch_demo": "شاهد العرض",
        "stat_population": "السكان",
        "stat_vendors": "التجار",
        "stat_countries": "الدول",

        // About Page
        "about_badge": "من نحن",
        "about_hero_title": "إعادة تعريف التجارة في الشرق الأوسط وشمال أفريقيا",
        "about_hero_desc": "تأسست شركة مزاد جلوبال في قلب الشرق الأوسط كشركة تكنولوجيا تهدف إلى توحيد الأسواق المجزأة في اقتصاد رقمي موحد ومبتكر.",
        "stat_founded": "التأسيس",
        "stat_countries_label": "الدول النشطة",
        "stat_population_label": "عدد السكان",
        "stat_products_label": "منتجات النظام",

        "about_origin_label": "أصلنا",
        "about_origin_title": "من إسطنبول إلى العالم",
        "about_origin_desc": "تأسست مزاد جلوبال في إسطنبول وجذورها متأصلة في المنطقة العربية، انطلاقاً من إدراك أن أكثر من 500 مليون نسمة يستحقون سوقاً رقمية موحدة تفهم ثقافتهم ولغتهم وطبيعة تجارتهم.",
        "about_mission_label": "مهمتنا",
        "about_mission_block_title": "تطبيق واحد. سوق لا محدود.",
        "about_mission_block_desc": "نحن نبني نظام التشغيل للتجارة في الشرق الأوسط — نجمع بين المزادات المباشرة، الجملة B2B، التداول C2C، الذكاء الاصطناعي، والمدفوعات الرقمية في نظام واحد سلس.",
        "about_vision_label": "رؤيتنا",
        "about_vision_title": "مستقبل رقمي بلا حدود",
        "about_vision_desc": "بحلول عام 2028، نهدف إلى التواجد في أكثر من 22 دولة، وخدمة ملايين المستخدمين النشطين، ومعالجة مليارات الدولارات في أحجام الضمان المالي.",

        "about_hq_title": "المقر الرئيسي",
        "about_hq_desc": "إسطنبول، تركيا — مع عمليات تشغيلية نشطة تشمل العراق ودول الخليج وشمال أفريقيا.",
        "about_tech_title": "التكنولوجيا",
        "about_tech_desc": "معمارية معززة بالذكاء الاصطناعي تشغل Yaman Copilot و Mazad Studio والمزايدة الذكية.",
        "about_fintech_card_title": "التكنولوجيا المالية",
        "about_fintech_card_desc": "يوفر Mazad Cash محافط رقمية مؤسسية، وحماية الضمان، تسوية متعددة العملات.",

        "about_values_badge": "ما يحركنا",
        "about_values_title": "قيمنا الأساسية",
        "about_values_desc": "المبادئ التي تشكل كل منتج وكل شراكة وكل سطر برمجيات نكتبه.",
        "about_val_trust_title": "الثقة والأمان",
        "about_val_trust_desc": "أنظمة تشفير وضمان مالي لحماية كل معاملة على المنصة بنسبة 100٪.",
        "about_val_local_title": "التركيز المحلي",
        "about_val_local_desc": "الفهم الثقافي العميق لمنطقة الشرق الأوسط يوجه كل قرار منتج نتخذه.",
        "about_val_innov_title": "الابتكار",
        "about_val_innov_desc": "ميزات الذكاء الاصطناعي، العقود الذكية، وتجربة المستخدم الحديثة تحدد كل ما نقدمه.",
        "about_val_comm_title": "المجتمع",
        "about_val_comm_desc": "ننمو معاً مع التجار والمشترين وشركاء النظام البيئي بالكامل.",

        // Business Model Page
        "biz_badge": "محرك النمو المستدام",
        "biz_hero_title": "نموذج إيرادات متعدد المستويات",
        "biz_hero_desc": "تعتمد مزاد جلوبال نموذج إيرادات متنوع يشمل عمولات المزادات، رسوم معاملات السوق، معالجة المدفوعات، واشتراكات ERP للمؤسسات.",

        "biz_layer1_badge": "الطبقة 01 — التجارة الأمامية",
        "biz_layer1_title": "السوق الموحد والمزادات",
        "biz_layer1_desc": "تدفق معاملات B2B و B2C و C2C ومحركات التمديد التلقائي.",
        "biz_layer2_badge": "الطبقة 02 — الدفع والتسوية",
        "biz_layer2_title": "الحفظ المالي وحسابات الضمان",
        "biz_layer2_desc": "محافظ متعددة العملات، سجلات تلقائية، وودائع آمنة.",
        "biz_layer3_badge": "الطبقة 03 — الذكاء والأدوات",
        "biz_layer3_title": "المساعد الذكي والاستوديو الإبداعي",
        "biz_layer3_desc": "تصوير المنتجات التلقائي، وصف المنتجات بالذكاء الاصطناعي، وتسعير السوق.",
        "biz_layer4_badge": "الطبقة 04 — البنية التحتية للمؤسسات",
        "biz_layer4_title": "حزمة اشتراكات SaaS & ERP",
        "biz_layer4_desc": "إدارة مخزون المستودعات، مزامنة متعددة القنوات، وموديولات مالية.",

        "biz_rev_header_badge": "مصادر الإيرادات",
        "biz_rev_header_title": "كيف تحقق مزاد قيمة مستدامة؟",
        "biz_rev_header_desc": "استراتيجية إيرادات متعددة المسارات مصممة للنمو التراكمي طويل الأجل.",
        "biz_rev1_title": "عمولات المزادات",
        "biz_rev1_desc": "رسوم ديناميكية على المزادات الناجحة بين الشركات والمستهلكين.",
        "biz_rev2_title": "رسوم السوق الرقمي",
        "biz_rev2_desc": "رسوم المعاملات وترويج القوائم المميزة.",
        "biz_rev3_title": "خدمات الضمان والمدفوعات",
        "biz_rev3_desc": "رسوم التحقق والضمان المالي عبر Mazad Cash.",
        "biz_rev4_title": "أنظمة ERP للمؤسسات",
        "biz_rev4_desc": "اشتراكات برمجية شهرية وسنوية للشركات الإقليمية.",
        "bm_new_badge": "معاملة واحدة. لحظات قيمة متعددة.",
        "bm_new_title": "ينمو مزاد كلما استمرت التجارة في الحركة.",
        "bm_new_desc": "يكتشف العميل ويدفع ويستلم. يبيع التاجر ويدير وينمو. يربط مزاد هذه الرحلة ويخلق القيمة في اللحظات التي تساعد فيها المنصة.",
        "bm_principle_1": "مدفوع بالمعاملات",
        "bm_principle_2": "مدعوم بالخدمات",
        "bm_principle_3": "معزز بالبرمجيات",
        "bm_principle_4": "مصمم للتوسع",
        "bm_core_label": "قيمة مترابطة",
        "bm_node_market": "السوق",
        "bm_node_market_small": "تحدث التجارة",
        "bm_node_payments": "المدفوعات",
        "bm_node_payments_small": "تتحرك الأموال",
        "bm_node_operations": "العمليات",
        "bm_node_operations_small": "تتحرك الطلبات",
        "bm_node_software": "البرمجيات",
        "bm_node_software_small": "تنمو الشركات",
        "bm_calc_title": "شاهد استجابة النموذج.",
        "bm_calc_desc": "يتغير السيناريو تلقائياً كل 1.35 ثانية. حرّك أداة تحكم لاستكشاف مزيجك؛ ويستأنف العرض الحي عند مغادرة اللوحة.",
        "bm_auto_running": "السيناريو التلقائي يعمل",
        "bm_scenario_1": "البداية",
        "bm_scenario_2": "سوق نامٍ",
        "bm_scenario_3": "نطاق إقليمي",
        "bm_scenario_4": "شبكة مترابطة",
        "bm_control_gmv": "حجم التجارة الشهري",
        "bm_control_merchants": "حسابات الأعمال المتصلة",
        "bm_control_orders": "الطلبات الشهرية المكتملة",
        "bm_result_label": "قيمة شهرية توضيحية للمنصة",
        "bm_result_note": "مثال شفاف مبني على السيناريو المختار، وليس توقعاً مالياً.",
        "bm_breakdown_market": "التجارة",
        "bm_breakdown_software": "البرمجيات",
        "bm_breakdown_operations": "العمليات",
        "bm_story_badge": "رحلة واحدة مترابطة",
        "bm_story_title": "مفيد في كل خطوة، وقيّم كنظام واحد.",
        "bm_story_desc": "نموذج الأعمال ليس مجموعة من الرسوم غير المترابطة. كل قدرة تدعم رحلة العميل نفسها وتجعل الخطوة التالية أسهل.",
        "bm_story_1_title": "تبدأ عملية البيع",
        "bm_story_1_desc": "يجمع الاكتشاف والقوائم والمزادات بين العرض والطلب.",
        "bm_story_2_title": "يبقى الدفع متصلاً",
        "bm_story_2_desc": "تستمر رحلة المعاملة عبر المحفظة والحجز المحمي والتسوية.",
        "bm_story_3_title": "يواصل الطلب حركته",
        "bm_story_3_desc": "تربط أدوات العمليات البيع بالتنفيذ والتسليم.",
        "bm_story_4_title": "ينمو العمل",
        "bm_story_4_desc": "تساعد البرمجيات المتصلة التجار على إدارة نشاط أكبر دون تغيير الأنظمة.",
        // Fintech Page
        "fintech_badge": "تعرّف على مزاد كاش",
        "fintech_hero_title": "الأموال تتحرك ضمن تجربة واحدة مترابطة",
        "fintech_hero_desc": "اكتشف تجربة المحفظة الرقمية التي تجمع الدفع والمعاملة المحمية والتسوية داخل منظومة مزاد.",
        
        "fintech_sim_badge": "محاكي تفاعلي",
        "fintech_sim_title": "دورة حياة خزينة الضمان",
        "fintech_sim_desc": "محاكاة كيفية قفل أموال المشتري بأمان في حساب محايد حتى التأكد من فحص المنتج والتسليم.",

        "fintech_feat_badge": "درجة مؤسسية",
        "fintech_feat_title": "البنية التحتية الأساسية للمدفوعات",
        "fintech_feat_desc": "مصممة لتوفير أقصى قدر من أمان المعاملات عبر أسواق الشرق الأوسط الناشئة.",
        "fintech_f1_title": "خzائن الضمان الذكية",
        "fintech_f1_desc": "تأمين أموال المشتري في حساب محايد حتى التحقق من تسليم المنتج.",
        "fintech_f2_title": "تسوية متعددة العملات",
        "fintech_f2_desc": "تحويل واستبدال فوري بين USD و TRY و IQD و SAR و AED.",
        "fintech_f3_title": "حماية ضد الاحتيال",
        "fintech_f3_desc": "تحقق حيوي من الهوية وكشف الاحتيال المباشر.",
        "cash_eyebrow": "طبقة الأموال في منظومة مزاد",
        "cash_promise_title": "تدفق واحد. من الدفع إلى التسوية.",
        "cash_promise_desc": "يقدم مزاد كاش التجربة المالية في تجارة مزاد من خلال جمع المحفظة والحجز المحمي والتسوية في رحلة بصرية واحدة.",
        "cash_promise_1": "تجربة محفظة رقمية متصلة",
        "cash_promise_2": "رحلة معاملة محمية",
        "cash_promise_3": "تسوية متصلة بالعمليات",
        "cash_wallet_status": "تدفق مالي متصل",
        "cash_flow_label": "رحلة المعاملة",
        "cash_flow_title": "حماية من الدفع حتى التحويل",
        "cash_flow_buyer": "المشتري يدفع",
        "cash_flow_hold": "حجز آمن",
        "cash_flow_seller": "دفع للبائع",
        "cash_for_label": "مصمم لكل أطراف المعاملة",
        "cash_for_title": "ثلاث وجهات نظر. رحلة مالية مشتركة.",
        "cash_for_desc": "اكتشف كيف يقدم مزاد كاش تجربة المعاملة المتصلة نفسها للمشترين والبائعين والشركات.",
        "cash_buyer_label": "للمشترين",
        "cash_buyer_title": "تجربة دفع واضحة.",
        "cash_buyer_desc": "تابع انتقال الدفع من المحفظة إلى رحلة المعاملة في مزاد.",
        "cash_seller_label": "للبائعين",
        "cash_seller_title": "رحلة تحويل مترابطة.",
        "cash_seller_desc": "شاهد انتقال الطلب من مرحلة الدفع إلى التحويل والتسوية.",
        "cash_business_label": "للشركات",
        "cash_business_title": "رؤية واحدة لحركة الأموال.",
        "cash_business_desc": "أدخل نشاط المحفظة ومراحل المعاملة ضمن عمليات مزاد الأوسع.",
        "cash_journey_label": "كيف يعمل مزاد كاش",
        "cash_journey_title": "شاهد حركة المعاملة.",
        "cash_journey_desc": "يتقدم العرض تلقائياً عبر أربع مراحل؛ مرر المؤشر فوقه للإيقاف والاستكشاف.",
        "cash_step_1_title": "إنشاء الدفع",
        "cash_step_1_desc": "يختار المشتري طريقة دفع مدعومة ويؤكد الطلب.",
        "cash_step_2_title": "حماية الأموال",
        "cash_step_2_desc": "يُحجز المبلغ بينما يجهز البائع الطلب.",
        "cash_step_3_title": "تأكيد المرحلة",
        "cash_step_3_desc": "يتم تأكيد التسليم أو شرط المعاملة المتفق عليه.",
        "cash_step_4_title": "اكتمال التسوية",
        "cash_step_4_desc": "تُحوّل الأموال وتتم مزامنة سجل المعاملة.",
        "cash_cap_label": "الأساسيات",
        "cash_cap_title": "طبقة مالية واحدة للتجارة اليومية.",
        "cash_cap_desc": "استخدم القدرات التي تحتاجها اليوم واربط المزيد من منظومة مزاد مع نمو عملياتك.",
        "cash_cap_wallet_title": "محفظة متصلة",
        "cash_cap_wallet_desc": "شاهد الأرصدة الواردة والمحجوزة والمحوّلة والمستردة في مكان واحد.",
        "cash_cap_hold_title": "حجز محمي",
        "cash_cap_hold_desc": "احفظ الأموال بين المشتري والبائع حتى تحقق شرط المعاملة.",
        "cash_cap_currency_title": "تدفق العملات الإقليمية",
        "cash_cap_currency_desc": "نظّم التحصيل والتسوية حسب العملات المستخدمة في سوقك.",
        "cash_cap_records_title": "سجلات موحدة",
        "cash_cap_records_desc": "أعد حالة الدفع إلى الطلبات والفواتير والتقارير التشغيلية.",
        // Countries Page
        "countries_badge": "التواجد الإقليمي",
        "countries_hero_title": "ربط أكثر من 22 سوقاً في الشرق الأوسط",
        "countries_hero_desc": "من مقرنا الرئيسي في إسطنبول إلى مراكزنا التشغيلية في بغداد وأربيل والرياض ودبي والقاهرة.",
        "country_hq": "المقر الرئيسي",
        "country_hub": "مركز إقليمي",
        "country_active": "سوق نشط",
        "countries_trade_badge": "ممر التجارة العالمي",
        "countries_trade_title": "جسر التجارة الرقمية عبر الحدود",
        "countries_trade_desc": "مزاد ليست مجرد كيان تشغيلي في دول مختلفة؛ بل هي جسر حي يربط التجارة والخدمات اللوجستية وممرات الدفع والمصنعين والمشترين عبر تركيا والعراق والخليج وشمال أفريقيا تحت سقف واحد.",
        "countries_roof_tag": "سقف مزاد الموحد ونواة الجسر",
        "countries_partner_btn": "شارك مع مزاد في بلدك",
        "world_badge": "استكشف عالم مزاد",
        "world_title": "أدر العالم. واكتشف الشبكة.",
        "world_desc": "مشهد حي للأسواق والبوابات والاتصالات الإقليمية التي تشكل رحلة مزاد عبر منطقة الشرق الأوسط وشمال أفريقيا.",
        "world_hint": "اسحب للتدوير • اختر نقطة متوهجة",
        "world_selected_label": "نقطة الشبكة المختارة",
        "world_region_label": "المنطقة",
        "world_focus_label": "تركيز الشبكة",
        "world_contact_button": "تواصل مع هذا السوق",
        "world_card_1_title": "عالم يمكنك استكشافه",
        "world_card_1_desc": "أدر الكرة بحرية وأظهر أي سوق من أسواق مزاد.",
        "world_card_2_title": "أسواق متصلة بتجربة واحدة",
        "world_card_2_desc": "تقدم كل نقطة دورها داخل شبكة التجارة الأوسع.",
        "world_card_3_title": "قصة إقليمية متحركة",
        "world_card_3_desc": "تواصل الكرة حركتها لتعكس شبكة مصممة للاستمرار في التطور.",

        // Ecosystem Page
        "eco_badge": "معمارية متكاملة",
        "eco_hero_title": "كل ما يحتاجه عملك. متصل في مكان واحد.",
        "eco_hero_desc": "بع، استلم المدفوعات، أدر العمليات، أنشئ المحتوى وسلّم الطلبات من خلال منظومة واحدة تنمو معك.",
        "eco_promise_title": "ابدأ باحتياج واحد. وتوسّع دون تغيير الأنظمة.",
        "eco_promise_desc": "من العثور على أول عميل واستلام الدفع إلى إدارة المخزون وتسليم الطلب، يربط مزاد كل خطوة ضمن نظام تشغيل واحد.",
        "eco_chip_merchants": "للتجار",
        "eco_chip_buyers": "للمشترين",
        "eco_chip_enterprise": "للشركات",
        "eco_core_label": "المركز المتصل",
        "eco_orbit_hint": "اسحب • انقر للفتح",
        "eco_capabilities_label": "كل ما يحتاجه عملك",
        "eco_capabilities_title": "رحلة واحدة. ست قدرات مترابطة.",
        "eco_capabilities_desc": "تعمل كل قدرة بشكل مستقل، وتعمل معاً لإزالة تكرار البيانات وانقطاع العمليات ونقاط الغموض التشغيلية.",
        "eco_one_action": "تحقق مرة واحدة وامنح عملاءك وفرقك وصولاً آمناً إلى جميع خدمات مزاد بهوية واحدة.",
        "eco_one_result_1": "تسجيل دخول واحد عبر المنظومة",
        "eco_one_result_2": "ملفات مشترين وشركات موثقة",
        "eco_market_action": "أطلق متجراً أو مزاداً، وصل إلى مشترين موثوقين وحوّل القوائم إلى طلبات من سوق واحد.",
        "eco_market_result_1": "بيع للشركات والأفراد وبين الأفراد",
        "eco_market_result_2": "سعر ثابت ومزادات مباشرة",
        "eco_cash_action": "استلم المدفوعات، احمِ الأموال بالضمان وسوِّ المعاملات بالعملات الإقليمية.",
        "eco_cash_result_1": "محفظة وتحويلات وتدفقات ضمان",
        "eco_cash_result_2": "سجلات واضحة للتسوية والمعاملات",
        "eco_erp_action": "زامن الكتالوج والمخزون والفواتير والحسابات أثناء انتقال الطلبات عبر أعمالك.",
        "eco_erp_result_1": "تحكم فوري بالمخزون والطلبات",
        "eco_erp_result_2": "فواتير وتقارير آلية",
        "eco_ai_action": "أنشئ محتوى المنتجات بسرعة وقدّم دعماً طبيعياً للعملاء بالعربية والتركية والإنجليزية.",
        "eco_ai_result_1": "إنشاء حملات وتصاميم للمنتجات",
        "eco_ai_result_2": "مساعدة متعددة اللغات على مدار الساعة",
        "eco_logistics_action": "احصل على عرض، أرسل، تتبع وأكد التسليم دون فقدان الرؤية بعد الدفع.",
        "eco_logistics_result_1": "شبكة ناقلين إقليمية مترابطة",
        "eco_logistics_result_2": "حالة الشحنة متاحة لكل الأنظمة",
        "eco_index_identity": "01 / الهوية",
        "eco_index_commerce": "02 / التجارة",
        "eco_index_payments": "03 / المدفوعات",
        "eco_index_operations": "04 / العمليات",
        "eco_index_growth": "05 / النمو",
        "eco_index_delivery": "06 / التسليم",
        "eco_flow_discover": "اكتشف",
        "eco_flow_discover_sub": "ابحث أو اعرض",
        "eco_flow_verify": "تحقق",
        "eco_flow_verify_sub": "هوية موثوقة",
        "eco_flow_pay": "ادفع",
        "eco_flow_pay_sub": "احمِ الأموال",
        "eco_flow_operate": "أدر",
        "eco_flow_operate_sub": "زامن العمل",
        "eco_flow_deliver": "سلّم",
        "eco_flow_deliver_sub": "أكمل الرحلة",
        "eco_spotlight_title": "معمارية التجارة المتكاملة",

        // Contact Page
        "contact_badge": "الدعم والاستفسارات",
        "contact_hero_title": "تواصل مع فريقنا العالمي",
        "contact_hero_desc": "تواصل مع مقرنا الإداري في إسطنبول أو مراكزنا التشغيلية الإقليمية.",
        "contact_form_name": "الاسم الكامل",
        "contact_form_email": "البريد الإلكتروني",
        "contact_form_subject": "الموضوع",
        "contact_form_msg": "رسالتك",
        "contact_btn_send": "إرسال الرسالة",

        // Yaman AI Assistant
        "yaman_title": "يمان المساعد الذكي",
        "yaman_status": "متصل وجاهز",
        "yaman_greeting": "مرحباً! أنا يمان، مساعدك الذكي في مزاد جلوبال. كيف يمكنني مساعدتك في استكشاف نظامنا اليوم؟",
        "yaman_placeholder": "اسأل يمان أي شيء...",
        "yaman_quick_1": "⚡ ما هو نظام مزاد البيئي؟",
        "yaman_quick_2": "💳 كيف يعمل مزاد كاش؟",
        "yaman_quick_3": "🗺️ ما هي الدول المغطاة؟",

        // Footer
        "footer_rights": "جميع الحقوق محفوظة.",
        "footer_tagline": "ربط تجارة الشرق الأوسط بالذكاء الاصطناعي والمزادات الرقمية عالية السرعة."
    }
};

/**
 * Page-wide content that was originally authored directly in the HTML.
 * Each row is [English, Turkish, Arabic]. Brand names, email addresses,
 * currency codes and numeric values intentionally remain language-neutral.
 */
const automaticContentTranslations = [
    // Page titles and shared navigation
    ["MAZAD GLOBAL", "MAZAD GLOBAL", "مزاد جلوبال"],
    ["About Us — MAZAD GLOBAL", "Hakkımızda — MAZAD GLOBAL", "من نحن — مزاد جلوبال"],
    ["Business Model — MAZAD GLOBAL", "İş Modeli — MAZAD GLOBAL", "نموذج الأعمال — مزاد جلوبال"],
    ["Contact Us — MAZAD GLOBAL", "Bize Ulaşın — MAZAD GLOBAL", "اتصل بنا — مزاد جلوبال"],
    ["Global Presence — MAZAD GLOBAL", "Küresel Varlık — MAZAD GLOBAL", "الحضور العالمي — مزاد جلوبال"],
    ["Ecosystem — MAZAD GLOBAL", "Ekosistem — MAZAD GLOBAL", "النظام البيئي — مزاد جلوبال"],
    ["Fintech — MAZAD GLOBAL", "Fintech — MAZAD GLOBAL", "التكنولوجيا المالية — مزاد جلوبال"],
    ["Mazad Ecosystem", "Mazad Ekosistemi", "نظام مزاد البيئي"],
    ["E-Commerce & Auctions", "E-Ticaret ve Açık Artırmalar", "التجارة الإلكترونية والمزادات"],
    ["Unified Identity & SSO", "Birleşik Kimlik ve SSO", "الهوية الموحدة وتسجيل الدخول الموحد"],
    ["Digital Wallet & Fintech", "Dijital Cüzdan ve Fintech", "المحفظة الرقمية والتكنولوجيا المالية"],
    ["Yaman Copilot & Studio", "Yaman Copilot ve Studio", "يمان المساعد والاستوديو"],
    ["Creative AI Suite", "Yaratıcı Yapay Zekâ Paketi", "حزمة الذكاء الاصطناعي الإبداعية"],
    ["Enterprise Resource Planning", "Kurumsal Kaynak Planlama", "تخطيط موارد المؤسسات"],
    ["About Us", "Hakkımızda", "من نحن"],
    ["Quick Links", "Hızlı Bağlantılar", "روابط سريعة"],
    ["Building next-generation digital products, fintech platforms, and enterprise solutions for global markets.", "Küresel pazarlar için yeni nesil dijital ürünler, fintech platformları ve kurumsal çözümler geliştiriyoruz.", "نبني منتجات رقمية من الجيل التالي ومنصات تكنولوجيا مالية وحلولاً مؤسسية للأسواق العالمية."],
    ["Istanbul, Turkey", "İstanbul, Türkiye", "إسطنبول، تركيا"],
    ["© 2026 MAZAD GLOBAL. All rights reserved.", "© 2026 MAZAD GLOBAL. Tüm hakları saklıdır.", "© 2026 مزاد جلوبال. جميع الحقوق محفوظة."],
    ["Join the Movement", "Harekete Katılın", "انضم إلى مسيرتنا"],
    ["Ready to Build the Future", "Geleceği İnşa Etmeye Hazır mısınız", "هل أنت مستعد لبناء المستقبل"],
    ["with", "ile", "مع"],
    ["Mazad Global?", "Mazad Global ile?", "مزاد جلوبال؟"],
    ["Whether you are a merchant, investor, or technology partner — the Mazad ecosystem has a place for you. Let's shape the future of digital commerce together.", "İster satıcı, ister yatırımcı, ister teknoloji ortağı olun — Mazad ekosisteminde sizin için bir yer var. Dijital ticaretin geleceğini birlikte şekillendirelim.", "سواء كنت تاجراً أو مستثمراً أو شريكاً تقنياً، فهناك مكان لك في نظام مزاد. لنرسم معاً مستقبل التجارة الرقمية."],
    ["Get in Touch", "Bize Ulaşın", "تواصل معنا"],
    ["Back to Home", "Ana Sayfaya Dön", "العودة إلى الرئيسية"],

    // Project dropdown
    ["Mazad Market", "Mazad Market", "مزاد ماركت"],
    ["Mazad One", "Mazad One", "مزاد ون"],
    ["Mazad Cash", "Mazad Cash", "مزاد كاش"],
    ["Mazad AI", "Mazad AI", "مزاد للذكاء الاصطناعي"],
    ["Mazad Studio", "Mazad Studio", "استوديو مزاد"],
    ["Mazad ERP", "Mazad ERP", "نظام مزاد لتخطيط الموارد"],
    ["MAZAD", "MAZAD", "مزاد"],
    ["GLOBAL", "GLOBAL", "جلوبال"],
    ["MAZAD MARKET", "MAZAD MARKET", "مزاد ماركت"],
    ["MAZAD ONE", "MAZAD ONE", "مزاد ون"],
    ["MAZAD STUDIO", "MAZAD STUDIO", "استوديو مزاد"],
    ["MAZAD ERP", "MAZAD ERP", "نظام مزاد لتخطيط الموارد"],
    ["MAZAD CASH", "MAZAD CASH", "مزاد كاش"],
    ["MAZAD AI", "MAZAD AI", "مزاد للذكاء الاصطناعي"],

    // Home page
    ["Enter Website", "Siteye Geç", "الدخول إلى الموقع"],
    ["Watch Demo", "Demoyu İzle", "شاهد العرض"],
    ["Watch Again", "Tekrar İzle", "شاهد مرة أخرى"],
    ["Go To The Website", "Web Sitesine Git", "الانتقال إلى الموقع"],
    ["Websitesine Devam Et", "Web Sitesine Devam Et", "متابعة الدخول إلى الموقع"],
    ["The Future of", "MENA Bölgesinde", "مستقبل"],
    ["Commerce in MENA", "Ticaretin Geleceği", "التجارة في الشرق الأوسط وشمال أفريقيا"],
    ["Unlimited requests and revisions", "Sınırsız talep ve revizyon", "طلبات وتعديلات غير محدودة"],
    ["1-3 day average delivery", "Ortalama 1–3 günde teslimat", "متوسط تسليم من يوم إلى 3 أيام"],
    ["Dedicated Dashboard", "Size Özel Kontrol Paneli", "لوحة تحكم مخصصة"],
    ["7-day 100% money back guarantee", "7 gün %100 para iade garantisi", "ضمان استرداد كامل خلال 7 أيام"],
    ["TECHNOLOGY", "TEKNOLOJİ", "التكنولوجيا"],
    ["Ecosystem Core", "Ekosistem Çekirdeği", "نواة النظام البيئي"],
    ["MAZAD PLATFORM", "MAZAD PLATFORMU", "منصة مزاد"],
    ["A unified digital gateway integrating real-time auctions, B2B wholesale hubs, and hyper-local commercial transactions.", "Canlı açık artırmaları, B2B toptan satış merkezlerini ve hiper yerel ticari işlemleri birleştiren tek bir dijital ağ geçidi.", "بوابة رقمية موحدة تجمع المزادات الفورية ومراكز الجملة بين الشركات والمعاملات التجارية المحلية."],
    ["Fintech Grid", "Fintech Ağı", "شبكة التكنولوجيا المالية"],
    ["SECURE ESCROW", "GÜVENLİ ESCROW", "ضمان مالي آمن"],
    ["Equipped with bank-grade security protocols, automated bidder settlement accounts, and multi-currency compliance.", "Banka düzeyinde güvenlik protokolleri, otomatik teklif sahibi hesapları ve çoklu para birimi uyumluluğuyla donatılmıştır.", "مجهز ببروتوكولات أمان مصرفية وحسابات تسوية آلية للمزايدين وتوافق متعدد العملات."],
    ["Why Choose Mazad?", "Neden Mazad?", "لماذا تختار مزاد؟"],
    ["The Complete Ecosystem for", "Eksiksiz Ekosistem", "النظام البيئي المتكامل من أجل"],
    ["Modern Digital Life", "Modern Dijital Yaşam İçin", "الحياة الرقمية الحديثة"],
    ["Discover how Mazad unifies commerce, finance, and creative technology into a single, high-performance platform tailored for the MENA region.", "Mazad'ın ticaret, finans ve yaratıcı teknolojiyi MENA bölgesine özel, yüksek performanslı tek bir platformda nasıl birleştirdiğini keşfedin.", "اكتشف كيف توحد مزاد التجارة والتمويل والتقنيات الإبداعية في منصة واحدة عالية الأداء مصممة لمنطقة الشرق الأوسط وشمال أفريقيا."],
    ["Unified Identity & Security", "Birleşik Kimlik ve Güvenlik", "الهوية والأمان الموحدان"],
    ["Say goodbye to fragmented profiles. Mazad One links your identity, security credentials, business info, and personal settings across the entire ecosystem. Sign in once and navigate securely with bank-grade encryption.", "Parçalı profillere veda edin. Mazad One; kimliğinizi, güvenlik bilgilerinizi, işletme verilerinizi ve kişisel ayarlarınızı tüm ekosistemde birleştirir. Bir kez giriş yapın ve banka düzeyinde şifrelemeyle güvenle ilerleyin.", "ودّع الملفات الشخصية المتفرقة. يربط مزاد ون هويتك وبيانات الأمان ومعلومات عملك وإعداداتك الشخصية عبر النظام بأكمله. سجّل الدخول مرة واحدة وتنقّل بأمان بتشفير مصرفي."],
    ["Hybrid E-Commerce & Auctions", "Hibrit E-Ticaret ve Açık Artırmalar", "التجارة الإلكترونية الهجينة والمزادات"],
    ["Unifying B2B, B2C, and C2C commerce into one space. Explore premium product stores, launch local auctions, or bid on region-wide listings. Integrated smart contracts guarantee transparent bidding and secure logistics.", "B2B, B2C ve C2C ticareti tek alanda buluşturur. Seçkin mağazaları keşfedin, yerel açık artırma başlatın veya bölgesel ilanlara teklif verin. Entegre akıllı sözleşmeler şeffaf teklif ve güvenli lojistik sağlar.", "تجمع تجارة الشركات والمستهلكين والأفراد في مساحة واحدة. استكشف المتاجر المميزة أو أطلق مزادات محلية أو زايد على قوائم إقليمية. تضمن العقود الذكية المدمجة مزايدة شفافة وخدمات لوجستية آمنة."],
    ["Frictionless Local Payments", "Sorunsuz Yerel Ödemeler", "مدفوعات محلية سلسة"],
    ["Mazad Cash provides fully compliant digital wallet services built specifically for Iraq and regional currencies. Execute lightning-fast payments, send bank transfers, check detailed invoices, and handle escrow balances effortlessly.", "Mazad Cash, Irak ve bölgesel para birimleri için tamamen uyumlu dijital cüzdan hizmetleri sunar. Hızlı ödeme yapın, banka transferi gönderin, faturaları inceleyin ve Escrow bakiyelerini kolayca yönetin.", "يوفر مزاد كاش خدمات محفظة رقمية متوافقة مصممة للعراق والعملات الإقليمية. نفّذ المدفوعات بسرعة وأرسل التحويلات وراجع الفواتير وأدر أرصدة الضمان بسهولة."],
    ["MAZAD AI & STUDIO", "MAZAD AI & STUDIO", "مزاد للذكاء الاصطناعي والاستوديو"],
    ["AI-Powered Creativity & Support", "Yapay Zekâ Destekli Yaratıcılık ve Destek", "إبداع ودعم بالذكاء الاصطناعي"],
    ["Harness custom generative intelligence. Create high-conversion marketing graphics and product mockups instantly with Mazad Studio. Plus, communicate naturally with Mazad AI, an assistant trained specifically on Iraqi cultural and dialect variations.", "Özel üretken zekâdan yararlanın. Mazad Studio ile yüksek dönüşümlü pazarlama görselleri ve ürün maketleri oluşturun. Irak kültürü ve lehçeleri için eğitilmiş Mazad AI ile doğal biçimde iletişim kurun.", "استفد من الذكاء التوليدي المخصص. أنشئ رسومات تسويقية ونماذج منتجات فوراً عبر استوديو مزاد، وتواصل بطبيعية مع مساعد مزاد المدرب على الثقافة واللهجات العراقية."],
    ["Yaman Copilot", "Yaman Copilot", "يمان المساعد"],
    ["Welcome! I am Yaman, your intelligent co-pilot.", "Merhaba! Ben Yaman, akıllı dijital asistanınızım.", "مرحباً! أنا يمان، مساعدك الذكي."],
    ["Hi there! I'm Yaman, your co-pilot. I speak Iraqi Arabic, English, and Turkish to help manage your trades. 🤖✨", "Merhaba! Ben dijital asistanınız Yaman. Ticaretinizi yönetmenize yardımcı olmak için Irak Arapçası, İngilizce ve Türkçe konuşuyorum. 🤖✨", "مرحباً! أنا يمان، مساعدك الذكي. أتحدث العربية العراقية والإنجليزية والتركية لمساعدتك في إدارة تجارتك. 🤖✨"],
    ["I design high-conversion marketing graphics inside Mazad Studio in seconds. Just give me the prompt! 🎨", "Mazad Studio'da etkili pazarlama görsellerini saniyeler içinde tasarlarım. Bana yalnızca ne istediğinizi söyleyin! 🎨", "أصمم رسومات تسويقية عالية التحويل داخل استوديو مزاد خلال ثوانٍ. فقط أخبرني بما تريد! 🎨"],
    ["I watch bids, auto-submit counter-offers, and secure your transactions 24/7, even while you sleep! 💼⚡", "Teklifleri izler, karşı teklifleri otomatik gönderir ve siz uyurken bile işlemlerinizi 7/24 güvence altına alırım! 💼⚡", "أراقب المزايدات وأرسل العروض المضادة تلقائياً وأؤمّن معاملاتك على مدار الساعة حتى أثناء نومك! 💼⚡"],
    ["Yaman Online", "Yaman Çevrimiçi", "يمان متصل"],
    ["Studio Scanning", "Studio Tarıyor", "الاستوديو يفحص"],
    ["Iraqi & Regional Dialect Friendly", "Irak ve Bölge Lehçelerine Uyumlu", "يدعم اللهجات العراقية والإقليمية"],
    ["Specifically trained on regional Iraqi slang, dialects, and English to answer questions, guide buyers, and handle client inquiries like a local.", "Soruları yanıtlamak, alıcılara rehberlik etmek ve müşteri taleplerini yerel biri gibi yönetmek için Irak argosu, lehçeleri ve İngilizce üzerine özel olarak eğitildi.", "مدرب خصيصاً على العامية واللهجات العراقية والإنجليزية للإجابة عن الأسئلة وإرشاد المشترين والتعامل مع استفسارات العملاء كخبير محلي."],
    ["Creative Studio Engine", "Yaratıcı Stüdyo Motoru", "محرك الاستوديو الإبداعي"],
    ["Generate customized high-conversion marketing graphics, background removals, and product mockup layouts instantly inside Mazad Studio.", "Mazad Studio'da özel pazarlama görselleri, arka plan kaldırma işlemleri ve ürün maketleri anında oluşturun.", "أنشئ فوراً رسومات تسويقية مخصصة وأزل الخلفيات وصمّم نماذج المنتجات داخل استوديو مزاد."],
    ["Autopilot Bidding Agent", "Otomatik Teklif Asistanı", "وكيل المزايدة الآلي"],
    ["Let AI watch auctions, auto-submit smart counters, alert you to pricing anomalies, and handle settlements even while you are offline.", "Yapay zekâ açık artırmaları izlesin, akıllı karşı teklifler versin, fiyat anomalilerini bildirsin ve çevrimdışıyken bile mutabakatları yönetsin.", "دع الذكاء الاصطناعي يراقب المزادات ويقدّم عروضاً مضادة ذكية وينبهك إلى تغيرات الأسعار ويدير التسويات حتى أثناء عدم اتصالك."],
    ["Active", "Aktif", "نشط"],
    ["Autopilot Trade", "Otomatik Ticaret", "التجارة الآلية"],
    ["Future Horizons", "Gelecek Ufukları", "آفاق المستقبل"],
    ["Our Vision &", "Vizyonumuz ve", "رؤيتنا و"],
    ["Upcoming Milestones", "Yaklaşan Kilometre Taşları", "المحطات القادمة"],
    ["We are building a borderless digital future. Here is a look at the milestones we aim to achieve as we scale the Mazad ecosystem.", "Sınırları olmayan dijital bir gelecek kuruyoruz. Mazad ekosistemini büyütürken ulaşmayı hedeflediğimiz kilometre taşlarına göz atın.", "نبني مستقبلاً رقمياً بلا حدود. إليك أبرز المحطات التي نهدف إلى تحقيقها مع توسع نظام مزاد."],
    ["Regional Countries", "Bölgesel Ülkeler", "دول المنطقة"],
    ["Expanding our cross-border logistics and payment pipelines to bring local markets under a single trading network.", "Yerel pazarları tek bir ticaret ağında buluşturmak için sınır ötesi lojistik ve ödeme hatlarımızı genişletiyoruz.", "نوسع مسارات الخدمات اللوجستية والمدفوعات العابرة للحدود لضم الأسواق المحلية إلى شبكة تجارية واحدة."],
    ["GCC Expansion", "Körfez Genişlemesi", "التوسع في دول الخليج"],
    ["North Africa", "Kuzey Afrika", "شمال أفريقيا"],
    ["Active Users", "Aktif Kullanıcılar", "المستخدمون النشطون"],
    ["Connecting millions of buyers, sellers, and creators with personalized feeds, automated offers, and secure verification.", "Milyonlarca alıcıyı, satıcıyı ve üreticiyi kişiselleştirilmiş akışlar, otomatik teklifler ve güvenli doğrulamayla buluşturuyoruz.", "نربط ملايين المشترين والبائعين والمبدعين بمحتوى مخصص وعروض آلية وتحقق آمن."],
    ["B2B Merchants", "B2B Satıcıları", "تجار الشركات"],
    ["SSO Profiles", "SSO Profilleri", "ملفات الدخول الموحد"],
    ["Fintech Volume", "Fintech Hacmi", "حجم التكنولوجيا المالية"],
    ["Processing secure payments and local escrow trades directly through the unified digital wallet infrastructure of Mazad Cash.", "Güvenli ödemeleri ve yerel Escrow işlemlerini doğrudan Mazad Cash'in birleşik dijital cüzdan altyapısı üzerinden gerçekleştiriyoruz.", "نعالج المدفوعات الآمنة وعمليات الضمان المحلية مباشرة عبر بنية المحفظة الرقمية الموحدة لمزاد كاش."],
    ["Escrow Auditing", "Escrow Denetimi", "تدقيق الضمان"],
    ["Settlements", "Mutabakatlar", "التسويات"],
    ["AI-Driven Sales", "Yapay Zekâ Destekli Satışlar", "مبيعات مدعومة بالذكاء الاصطناعي"],
    ["Using smart AI assistants to generate product mockups automatically and manage bids with minimal manual intervention.", "Akıllı yapay zekâ asistanlarıyla ürün maketlerini otomatik oluşturuyor ve teklifleri minimum manuel müdahaleyle yönetiyoruz.", "نستخدم مساعدين أذكياء لإنشاء نماذج المنتجات تلقائياً وإدارة المزايدات بأقل تدخل يدوي."],
    ["Smart Price Guide", "Akıllı Fiyat Rehberi", "دليل الأسعار الذكي"],
    ["Auto-Bidding", "Otomatik Teklif", "المزايدة الآلية"],

    // About page additions
    ["The Ecosystem", "Ekosistem", "النظام البيئي"],
    ["Six Products.", "Altı Ürün.", "ستة منتجات."],
    ["One Platform.", "Tek Platform.", "منصة واحدة."],
    ["B2B, B2C, and C2C commerce in one space. Smart contracts, secure bidding, and seamless logistics.", "B2B, B2C ve C2C ticaret tek alanda. Akıllı sözleşmeler, güvenli teklifler ve kesintisiz lojistik.", "تجارة الشركات والمستهلكين والأفراد في مكان واحد، مع عقود ذكية ومزايدة آمنة وخدمات لوجستية سلسة."],
    ["Single sign-on, bank-grade credentials, and identity linked across the entire ecosystem.", "Tek oturum açma, banka düzeyinde kimlik bilgileri ve tüm ekosisteme bağlı kimlik.", "تسجيل دخول موحد وبيانات اعتماد مصرفية وهوية مترابطة عبر النظام بأكمله."],
    ["Fully compliant digital wallets, lightning-fast transfers, and escrow — built for Iraq & MENA.", "Irak ve MENA için geliştirilmiş uyumlu dijital cüzdanlar, çok hızlı transferler ve Escrow.", "محافظ رقمية متوافقة وتحويلات فائقة السرعة وضمان مالي مصمم للعراق والمنطقة."],
    ["Yaman — Your Copilot", "Yaman — Dijital Asistanınız", "يمان — مساعدك الذكي"],
    ["Dialect-trained AI assistant for buyers, sellers, and business queries. Autopilot bidding included.", "Alıcı, satıcı ve işletme soruları için lehçe eğitimi almış yapay zekâ asistanı. Otomatik teklif özelliği dâhil.", "مساعد ذكي مدرب على اللهجات لخدمة المشترين والبائعين واستفسارات الأعمال، مع مزايدة آلية."],
    ["AI-Powered Creative Suite", "Yapay Zekâ Destekli Yaratıcı Paket", "حزمة إبداعية بالذكاء الاصطناعي"],
    ["Generate marketing graphics, remove backgrounds, and create product mockups in seconds.", "Pazarlama görselleri üretin, arka planları kaldırın ve saniyeler içinde ürün maketleri oluşturun.", "أنشئ رسومات تسويقية وأزل الخلفيات وصمّم نماذج منتجات خلال ثوانٍ."],
    ["Inventory, procurement, logistics, and analytics — all integrated in one enterprise-grade system.", "Envanter, satın alma, lojistik ve analiz — tümü kurumsal düzeyde tek sistemde.", "المخزون والمشتريات والخدمات اللوجستية والتحليلات، كلها مدمجة في نظام مؤسسي واحد."],

    // Contact page additions
    ["General Inquiries", "Genel Sorular", "الاستفسارات العامة"],
    ["WhatsApp Direct Chat", "WhatsApp Doğrudan Sohbet", "محادثة واتساب مباشرة"],
    ["+90 (530) 000 0000 (Click)", "+90 (530) 000 0000 (Tıklayın)", "+90 (530) 000 0000 (اضغط هنا)"],
    ["Instant Live WhatsApp Support (Active 24/7)", "Anında Canlı WhatsApp Desteği (7/24 Aktif)", "دعم واتساب مباشر وفوري على مدار الساعة"],
    ["Turkey Headquarters", "Türkiye Genel Merkezi", "المقر الرئيسي في تركيا"],
    ["Mazad Global Teknoloji A.Ş.", "Mazad Global Teknoloji A.Ş.", "شركة مزاد جلوبال للتكنولوجيا"],
    ["e.g. Yaman AI", "örn. Yaman AI", "مثال: يمان"],
    ["e.g. user@domain.com", "örn. kullanici@alanadi.com", "مثال: user@domain.com"],
    ["General Support / Partnership / Dev Queries", "Genel Destek / Ortaklık / Yazılım Soruları", "الدعم العام / الشراكة / الاستفسارات التقنية"],
    ["Message Content", "Mesaj İçeriği", "محتوى الرسالة"],
    ["How can we help your business build digital trade channels?", "İşletmenizin dijital ticaret kanalları kurmasına nasıl yardımcı olabiliriz?", "كيف يمكننا مساعدة شركتك في بناء قنوات تجارة رقمية؟"],
    ["Submit Contact Request", "İletişim Talebini Gönder", "إرسال طلب التواصل"],
    ["Message Transmitted!", "Mesaj Gönderildi!", "تم إرسال الرسالة!"],
    ["Your support ticket has been successfully routed to Mazad Help Desk. Our regional team will respond within 24 hours.", "Destek talebiniz Mazad Yardım Masasına başarıyla iletildi. Bölgesel ekibimiz 24 saat içinde yanıt verecektir.", "تم توجيه طلب الدعم بنجاح إلى مكتب مساعدة مزاد. سيرد فريقنا الإقليمي خلال 24 ساعة."],
    ["Send Another Message", "Başka Bir Mesaj Gönder", "إرسال رسالة أخرى"],

    // Shared site footer
    ["The first and only unified market in MENA connecting B2B, B2C, and C2C, marketplace, wallet, and logistics.", "MENA bölgesinde B2B, B2C ve C2C ticareti; pazar yerini, cüzdanı ve lojistiği birleştiren ilk ve tek bütünleşik platform.", "السوق الموحد الأول والوحيد في منطقة الشرق الأوسط وشمال أفريقيا، ويربط تجارة الشركات والمستهلكين والأفراد بالسوق والمحفظة والخدمات اللوجستية."],
    ["Platform", "Platform", "المنصة"],
    ["Auctions & Market", "Açık Artırmalar ve Pazar", "المزادات والسوق"],
    ["Ecosystem", "Ekosistem", "النظام البيئي"],
    ["Fintech & Wallet", "Fintech ve Cüzdan", "التكنولوجيا المالية والمحفظة"],
    ["Global Presence", "Küresel Varlık", "الحضور العالمي"],
    ["Company", "Şirket", "الشركة"],
    ["Contact Us", "Bize Ulaşın", "اتصل بنا"],
    ["Careers", "Kariyer", "الوظائف"],
    ["Support", "Destek", "الدعم"],
    ["Help Center", "Yardım Merkezi", "مركز المساعدة"],
    ["Privacy Policy", "Gizlilik Politikası", "سياسة الخصوصية"],
    ["Terms of Service", "Hizmet Şartları", "شروط الخدمة"],
    ["Powered by Mazad Türkiye HQ.", "Mazad Türkiye Genel Merkezi tarafından desteklenmektedir.", "بدعم من المقر الرئيسي لمزاد تركيا."],

    // Shared Yaman assistant
    ["YAMAN AI", "YAMAN AI", "يمان للذكاء الاصطناعي"],
    ["Live Copilot Active", "Canlı Copilot Aktif", "المساعد المباشر نشط"],
    ["ONLINE", "ÇEVRİMİÇİ", "متصل"],
    ["Mazad Smart Commerce & Product Assistant", "Mazad Akıllı Ticaret & Ürün Asistanı", "مساعد مزاد الذكي للتجارة والمنتجات"],
    ["Hello! I am", "Merhaba! Ben", "مرحباً! أنا"],
    [". 👋", ". 👋", ". 👋"],
    ["You can ask me anything about Mazad!", "Mazad hakkında her şeyi bana sorabilirsin!", "يمكنك أن تسألني عن أي شيء يخص مزاد!"],
    ["Ask me anything about Mazad auctions, escrow payment security, logistics routes, or countries!", "Mazad açık artırmaları, Escrow ödeme güvenliği, lojistik rotaları veya ülkeler hakkında bana dilediğini sorabilirsin!", "يمكنك أن تسألني عن مزادات مزاد أو أمان مدفوعات الضمان أو مسارات الشحن أو الدول!"],
    ["Ask me anything about Mazad auctions, escrow payment security, logistics routes, or contact channels!", "Mazad açık artırmaları, Escrow ödeme güvenliği, lojistik rotaları veya iletişim kanalları hakkında bana dilediğini sorabilirsin!", "يمكنك أن تسألني عن مزادات مزاد أو أمان مدفوعات الضمان أو مسارات الشحن أو قنوات التواصل!"],
    ["Ask me anything about Mazad Fintech, escrow payments, and the digital wallet!", "Mazad Fintech, Escrow ödemeler ve dijital cüzdan hakkında her şeyi sorabilirsin!", "يمكنك أن تسألني عن مزاد للتكنولوجيا المالية ومدفوعات الضمان والمحفظة الرقمية!"],
    ["Ask me anything about Mazad countries, regional offices, escrow payments, and auction opportunities!", "Mazad ülkeleri, bölgesel ofisler, Escrow ödemeleri ve açık artırma fırsatları hakkında bana dilediğini sorabilirsin!", "يمكنك أن تسألني عن دول مزاد ومكاتبه الإقليمية ومدفوعات الضمان وفرص المزادات!"],
    ["Ask me anything about Mazad's business model and revenue channels!", "Mazad'ın iş modeli ve gelir kanalları hakkında her şeyi sorabilirsin!", "يمكنك أن تسألني عن نموذج أعمال مزاد وقنوات إيراداته!"],
    ["Ask me anything about the Mazad Ecosystem!", "Mazad Ekosistemi hakkında her şeyi bana sorabilirsin!", "يمكنك أن تسألني عن أي شيء يخص نظام مزاد البيئي!"],
    ["🚀 How do auctions work?", "🚀 Açık artırma nasıl çalışır?", "🚀 كيف يعمل المزاد؟"],
    ["💳 Escrow Security", "💳 Escrow Güvenliği", "💳 أمان الضمان المالي"],
    ["💳 Escrow", "💳 Escrow", "💳 الضمان المالي"],
    ["💼 Careers & Openings", "💼 Kariyer & İlanlar", "💼 الوظائف والإعلانات"],
    ["💼 Careers", "💼 Kariyer", "💼 الوظائف"],
    ["🏢 About Mazad", "🏢 Mazad hakkında", "🏢 حول مزاد"],
    ["🌐 Ecosystem", "🌐 Ekosistem", "🌐 النظام البيئي"],
    ["💼 Business Model", "💼 İş Modeli", "💼 نموذج الأعمال"],
    ["👔 Careers", "👔 Kariyer", "👔 الوظائف"],
    ["💰 Mazad Cash", "💰 Mazad Cash", "💰 مزاد كاش"],
    ["Ask Yaman AI...", "Yaman AI'a sorun...", "اسأل يمان..."],
    ["Yaman AI: Your question was processed successfully. You can find detailed information about the Mazad ecosystem and services in the main menu.", "Yaman AI: Sorunuz başarıyla işlendi. Mazad ekosistemi ve hizmetler için ana menüden detaylı bilgi alabilirsiniz.", "يمان: تمت معالجة سؤالك بنجاح. يمكنك الحصول على معلومات تفصيلية حول نظام مزاد وخدماته من القائمة الرئيسية."],
    ["Mazad Live Auction:", "Mazad Canlı Açık Artırma:", "مزاد المباشر:"],
    ["Thanks to Yaman Copilot's pricing algorithms and real-time bidding engine, buyers in Turkey and the Middle East meet in live auctions under fully fair and transparent conditions.", "Yaman Copilot fiyat algoritmaları ve anlık teklif motoru sayesinde Türkiye ve Orta Doğu'daki alıcıları canlı mezatlarda %100 adil ve şeffaf şartlarda buluşturur.", "يجمع يمان المشترين في تركيا والشرق الأوسط في مزادات مباشرة عادلة وشفافة بالكامل بفضل خوارزميات الأسعار ومحرك العروض الفوري."],
    ["Escrow Security:", "Escrow Güvenliği:", "أمان الضمان المالي:"],
    ["Mazad Cash locks the buyer's payment in a neutral escrow vault. The money is not transferred to the seller until the product is delivered and approved. It is fully protected.", "Mazad Cash, alıcının ödemesini tarafsız banka kasasında (Escrow) kilitler. Ürün teslim edilip onaylanana kadar para satıcıya aktarılmaz. %100 korumalıdır.", "يحجز مزاد كاش دفعة المشتري في خزينة ضمان محايدة، ولا يحول المبلغ إلى البائع حتى تسليم المنتج والموافقة عليه. الحماية كاملة."],
    ["Careers & Openings:", "Kariyer ve İlanlar:", "الوظائف والإعلانات:"],
    ["We have active positions in Software, Artificial Intelligence, Fintech, and Logistics.", "Yazılım, Yapay Zekâ, Fintech ve Lojistik alanlarında aktif pozisyonlarımız mevcuttur.", "لدينا وظائف متاحة في البرمجيات والذكاء الاصطناعي والتكنولوجيا المالية والخدمات اللوجستية."],
    ["from the Careers Page", "Kariyer Sayfasından", "عبر صفحة الوظائف"],
    ["You can send your CV!", "CV'nizi gönderebilirsiniz!", "يمكنك إرسال سيرتك الذاتية!"],
    ["Active Countries:", "Aktif Ülkeler:", "الدول النشطة:"],
    ["We are active in Turkey (HQ), Iraq, Saudi Arabia, UAE, Kuwait, Qatar, Egypt, Bahrain, Algeria, and Libya.", "Türkiye (HQ), Irak, Suudi Arabistan, BAE, Kuveyt, Katar, Mısır, Bahreyn, Cezayir ve Libya pazarlarında aktifiz.", "نعمل في أسواق تركيا (المقر)، والعراق، والسعودية، والإمارات، والكويت، وقطر، ومصر، والبحرين، والجزائر، وليبيا."],

    // Business model page additions
    ["Transaction Commission", "İşlem Komisyonu", "عمولة المعاملات"],
    ["Unified Marketplace Auctions", "Birleşik Pazar Yeri Açık Artırmaları", "مزادات السوق الموحد"],
    ["We collect scalable transaction commissions on B2B wholesale volumes, public auction sales, and standard vendor listings. Real-time auto-extension alerts maximize pricing power and transaction velocity.", "B2B toptan satış hacimleri, açık artırma satışları ve standart satıcı ilanlarından ölçeklenebilir işlem komisyonları alıyoruz. Gerçek zamanlı otomatik uzatma uyarıları fiyatlama gücünü ve işlem hızını artırır.", "نحصّل عمولات قابلة للتوسع على أحجام الجملة بين الشركات ومبيعات المزادات العامة وقوائم البائعين. تزيد تنبيهات التمديد التلقائي الفوري من قوة التسعير وسرعة المعاملات."],
    ["Primary Revenue", "Ana Gelir", "الإيراد الرئيسي"],
    ["2.5% – 7.5% Fees", "%2,5 – %7,5 Ücret", "رسوم 2.5% – 7.5%"],
    ["Target User Segment", "Hedef Kullanıcı Segmenti", "شريحة المستخدمين المستهدفة"],
    ["Verified Merchants", "Doğrulanmış Satıcılar", "التجار الموثقون"],
    ["Simple & Seamless", "Basit ve Kesintisiz", "بسيط وسلس"],
    ["How Mazad Works", "Mazad Nasıl Çalışır?", "كيف تعمل مزاد؟"],
    ["From discovery to delivery, we handle every step of the journey.", "Keşiften teslimata kadar sürecin her adımını yönetiyoruz.", "ندير كل خطوة من الاكتشاف حتى التسليم."],
    ["Discover", "Keşfet", "اكتشف"],
    ["Browse millions of items or join live auctions.", "Milyonlarca ürünü inceleyin veya canlı açık artırmalara katılın.", "تصفح ملايين المنتجات أو انضم إلى المزادات المباشرة."],
    ["Order", "Sipariş Ver", "اطلب"],
    ["Add to cart or place your winning bid.", "Sepete ekleyin veya kazandıran teklifinizi verin.", "أضف إلى السلة أو قدّم عرضك الفائز."],
    ["Pay", "Öde", "ادفع"],
    ["Secure payment via wallet, card, or COD.", "Cüzdan, kart veya kapıda ödemeyle güvenle ödeme yapın.", "ادفع بأمان عبر المحفظة أو البطاقة أو الدفع عند الاستلام."],
    ["Deliver", "Teslim Et", "التوصيل"],
    ["Fast cross-border or local delivery.", "Hızlı sınır ötesi veya yerel teslimat.", "توصيل محلي أو عابر للحدود بسرعة."],
    ["Receive", "Teslim Al", "استلم"],
    ["Inspect and enjoy your purchase.", "Satın aldığınız ürünü kontrol edin ve keyfini çıkarın.", "افحص مشترياتك واستمتع بها."],
    ["📊 Interactive Simulator", "📊 Etkileşimli Simülatör", "📊 محاكي تفاعلي"],
    ["Ecosystem Revenue Estimator", "Ekosistem Gelir Tahminleyicisi", "حاسبة إيرادات النظام البيئي"],
    ["Estimate Mazad Global's scaling margins. Drag the sliders to simulate transacting GMV, active SaaS subscribers, and logistics shipments to see real-time projected revenues.", "Mazad Global'in ölçeklenme marjlarını tahmin edin. Gerçek zamanlı gelir projeksiyonlarını görmek için işlem hacmi, aktif SaaS aboneleri ve lojistik gönderi kaydırıcılarını ayarlayın.", "قدّر هوامش توسع مزاد جلوبال. حرّك المؤشرات لمحاكاة حجم المعاملات ومشتركي SaaS النشطين والشحنات اللوجستية ورؤية الإيرادات المتوقعة فورياً."],
    ["Monthly Transaction Volume (GMV)", "Aylık İşlem Hacmi (GMV)", "حجم المعاملات الشهري"],
    ["Active SaaS Vendors (Tier Subscriptions)", "Aktif SaaS Satıcıları (Paket Abonelikleri)", "بائعو SaaS النشطون حسب فئة الاشتراك"],
    ["2,500 Merchants", "2.500 Satıcı", "2,500 تاجر"],
    ["Monthly Cross-Border Shipments", "Aylık Sınır Ötesi Gönderiler", "الشحنات الشهرية العابرة للحدود"],
    ["45,000 Shipments", "45.000 Gönderi", "45,000 شحنة"],
    ["Projected Monthly Platform Revenue", "Tahmini Aylık Platform Geliri", "إيراد المنصة الشهري المتوقع"],
    ["Auctions (3.5%)", "Açık Artırmalar (%3,5)", "المزادات (3.5%)"],
    ["SaaS ($49 avg)", "SaaS (ortalama $49)", "SaaS (متوسط 49$)"],
    ["Freight ($2 margin)", "Nakliye ($2 marj)", "الشحن (هامش 2$)"],
    ["KYC Escrow Lock Ratio", "KYC Escrow Kilit Oranı", "نسبة حجز الضمان مع التحقق"],
    ["Simulated proportion of secure transaction liquidity settled via regulated custody vault logs.", "Düzenlemeye tabi saklama kasası kayıtları üzerinden sonuçlandırılan güvenli işlem likiditesinin simüle edilmiş oranı.", "النسبة المحاكية لسيولة المعاملات الآمنة التي تتم تسويتها عبر سجلات حفظ منظمة."],
    ["Revenue Model", "Gelir Modeli", "نموذج الإيرادات"],
    ["Diversified Revenue Streams", "Çeşitlendirilmiş Gelir Kanalları", "مصادر إيرادات متنوعة"],
    ["Multiple revenue channels ensuring sustainable growth and profitability", "Sürdürülebilir büyüme ve kârlılık sağlayan çoklu gelir kanalları", "قنوات إيرادات متعددة تضمن النمو المستدام والربحية"],
    ["Unifying B2B, B2C, and C2C trade under a unified catalog featuring over 500 million products. Real-time live auctions with transparent mechanics like auto-extensions and reserve pricing generate highly scalable transaction fees.", "500 milyondan fazla ürünü içeren birleşik katalogda B2B, B2C ve C2C ticareti buluşturuyoruz. Otomatik uzatma ve rezerv fiyat gibi şeffaf mekanizmalara sahip canlı açık artırmalar ölçeklenebilir işlem gelirleri oluşturur.", "نوحد تجارة الشركات والمستهلكين والأفراد ضمن كتالوج يضم أكثر من 500 مليون منتج. تولد المزادات المباشرة بآليات شفافة مثل التمديد التلقائي والسعر الاحتياطي رسوماً قابلة للتوسع."],
    ["2.5% – 7.5% Marketplace Fees", "%2,5 – %7,5 Pazar Yeri Ücreti", "رسوم سوق 2.5% – 7.5%"],
    ["Fintech Wallet & Custody Escrow", "Fintech Cüzdanı ve Saklama Escrow'u", "محفظة مالية وضمان محفوظ"],
    ["A secure multi-currency digital wallet supporting USD, TRY, SAR, and IQD. Escrow protection locks reserve deposits during bids, while strict regulatory adherence (KYC/AML, GDPR) secures payments until successful delivery.", "USD, TRY, SAR ve IQD destekleyen güvenli çoklu para birimli dijital cüzdan. Escrow koruması teklif sırasında rezerv depozitolarını kilitler; KYC/AML ve GDPR uyumu ödemeleri başarılı teslimata kadar güvenceye alır.", "محفظة رقمية آمنة متعددة العملات تدعم الدولار والليرة والريال والدينار. يحجز الضمان الودائع أثناء المزايدة، ويؤمّن الالتزام الصارم بالتحقق ومكافحة غسل الأموال وGDPR المدفوعات حتى التسليم."],
    ["0.5% – 1.0% Settlement Margins", "%0,5 – %1,0 Mutabakat Marjı", "هوامش تسوية 0.5% – 1.0%"],
    ["Cross-Border Express Logistics", "Sınır Ötesi Ekspres Lojistik", "خدمات لوجستية سريعة عابرة للحدود"],
    ["Consolidated micro-freight pipelines from Turkey directly to MENA region capitals inside 3-7 days. Smart customs clearance automation and partnerships with global shipping lines optimize route tariffs.", "Türkiye'den MENA başkentlerine 3–7 günde doğrudan konsolide mikro nakliye hatları. Akıllı gümrük otomasyonu ve küresel taşıma ortaklıkları rota maliyetlerini optimize eder.", "مسارات شحن صغيرة مجمعة من تركيا مباشرة إلى عواصم المنطقة خلال 3–7 أيام. تعمل أتمتة التخليص الذكية والشراكات مع خطوط الشحن العالمية على تحسين تكاليف المسارات."],
    ["Consolidated Freight Margins", "Konsolide Nakliye Marjları", "هوامش الشحن المجمّع"],
    ["Merchant SaaS Subscriptions", "Satıcı SaaS Abonelikleri", "اشتراكات SaaS للتجار"],
    ["Tier-based SaaS dashboard access for over 100,000 verified regional suppliers. Modules include multi-tenant stock syncer, automatic customs invoicing slips, VIP buyer bidding, and business ERP interfaces.", "100.000'den fazla doğrulanmış bölgesel tedarikçi için paket bazlı SaaS panel erişimi. Modüller; çok kiracılı stok senkronizasyonu, otomatik gümrük faturaları, VIP alıcı teklifleri ve ERP arayüzlerini içerir.", "وصول متدرج إلى لوحة SaaS لأكثر من 100 ألف مورد إقليمي موثق. تشمل الوحدات مزامنة المخزون متعددة العملاء وفواتير الجمارك الآلية ومزايدات كبار المشترين وواجهات ERP."],
    ["Tiers starting at $29/Month", "Aylık $29'dan Başlayan Paketler", "فئات تبدأ من 29$ شهرياً"],
    ["Connect With Us", "Bizimle Bağlantı Kurun", "تواصل معنا"],
    ["Discover Partner Integration", "Ortaklık Entegrasyonunu Keşfedin", "اكتشف تكامل الشركاء"],
    ["Mazad Global.", "Mazad Global.", "مزاد جلوبال."],
    ["Become a verified distributor, logistics partner, or digital payment vendor inside our network. Let's scale commerce together.", "Ağımızda doğrulanmış distribütör, lojistik ortağı veya dijital ödeme sağlayıcısı olun. Ticareti birlikte büyütelim.", "كن موزعاً موثقاً أو شريكاً لوجستياً أو مزود مدفوعات رقمية في شبكتنا. لنعمل معاً على توسيع التجارة."],

    // Fintech page additions
    ["Run Escrow Settlement Check", "Escrow Mutabakat Kontrolünü Çalıştır", "تشغيل فحص تسوية الضمان"],
    ["Simulate how bid reserves convert currencies and secure buyer-seller transactions under digital check validations.", "Teklif rezervlerinin para birimlerini nasıl dönüştürdüğünü ve dijital kontrollerle alıcı-satıcı işlemlerini nasıl güvenceye aldığını simüle edin.", "حاكِ كيفية تحويل احتياطيات المزايدة للعملات وتأمين معاملات المشتري والبائع عبر التحقق الرقمي."],
    ["Deposit Bid Amount", "Teklif Tutarını Yatırın", "إيداع مبلغ المزايدة"],
    ["Convert & Deposit Escrow", "Dönüştür ve Escrow'a Yatır", "تحويل وإيداع الضمان"],
    ["> Awaiting conversion command inputs...", "> Dönüştürme komutu bekleniyor...", "> بانتظار أمر التحويل..."],
    ["Local Payout Rails", "Yerel Ödeme Kanalları", "قنوات الصرف المحلية"],
    ["Direct connection channels to regional payment gateways, ZainCash, AsiaCell lines, and Cash-on-Delivery collections.", "Bölgesel ödeme ağ geçitlerine, ZainCash ve AsiaCell hatlarına ve kapıda ödeme tahsilatlarına doğrudan bağlantı kanalları.", "قنوات اتصال مباشرة ببوابات الدفع الإقليمية وزين كاش وآسيا سيل وتحصيلات الدفع عند الاستلام."],

    // Ecosystem page additions
    ["User Auth", "Kullanıcı Kimlik Doğrulama", "مصادقة المستخدم"],
    ["Product Catalog", "Ürün Kataloğu", "كتالوج المنتجات"],
    ["Live Auctions", "Canlı Açık Artırmalar", "المزادات المباشرة"],
    ["Compliance Sweep", "Uyumluluk Taraması", "فحص الامتثال"],
    ["Escrow Deposit", "Escrow Depozitosu", "إيداع الضمان"],
    ["Trust Rules", "Güven Kuralları", "قواعد الثقة"],
    ["Ledger Sync", "Defter Senkronizasyonu", "مزامنة السجل"],
    ["Cargo Assign", "Kargo Atama", "تعيين الشحنة"],
    ["GCC Express", "Körfez Ekspres", "الخليج السريع"],
    ["Payout Settled", "Ödeme Tamamlandı", "تمت تسوية الدفعة"],
    ["+IDENTITY", "+KİMLİK", "+الهوية"],
    ["+TRUST", "+GÜVEN", "+الثقة"],
    ["+TELEMETRY", "+TELEMETRİ", "+القياس عن بعد"],
    ["+COMPLIANCE", "+UYUMLULUK", "+الامتثال"],
    ["+ESCROW LOCK", "+ESCROW KİLİDİ", "+حجز الضمان"],
    ["+AUTOMATION", "+OTOMASYON", "+الأتمتة"],
    ["+INVOICE", "+FATURA", "+الفاتورة"],
    ["+LOGISTICS", "+LOJİSTİK", "+الخدمات اللوجستية"],
    ["+SETTLED", "+TAMAMLANDI", "+تمت التسوية"],
    ["⚡ Run Simulation Mode", "⚡ Simülasyon Modunu Çalıştır", "⚡ تشغيل وضع المحاكاة"],
    ["> System initialized. Mazad Core Hub ONLINE.", "> Sistem başlatıldı. Mazad Core Hub ÇEVRİMİÇİ.", "> تمت تهيئة النظام. مركز مزاد الأساسي متصل."],
    ["> Syncing multi-tenant databases...", "> Çok kiracılı veritabanları eşitleniyor...", "> جارٍ مزامنة قواعد البيانات متعددة العملاء..."],
    ["> [ONE] Single Sign-On initialized. Ready for connections.", "> [ONE] Tek Oturum Açma başlatıldı. Bağlantılara hazır.", "> تمت تهيئة تسجيل الدخول الموحد [ONE]. جاهز للاتصالات."],
    ["Mazad One Core", "Mazad One Çekirdeği", "نواة مزاد ون"],
    ["Mazad One provides unified Single Sign-On (SSO) credentials, linking digital wallets, auction logs, and business identities seamlessly across the MENA region.", "Mazad One; dijital cüzdanları, açık artırma kayıtlarını ve işletme kimliklerini MENA genelinde birleştiren Tek Oturum Açma bilgileri sağlar.", "يوفر مزاد ون بيانات تسجيل دخول موحدة تربط المحافظ الرقمية وسجلات المزادات وهويات الأعمال بسلاسة عبر المنطقة."],
    ["Ecosystem Modules", "Ekosistem Modülleri", "وحدات النظام البيئي"],
    ["Hover over any component card to visually connect it with the Core Hub above and access live diagnostic feeds.", "Herhangi bir bileşen kartının üzerine gelerek onu yukarıdaki Core Hub'a bağlayın ve canlı tanılama akışlarına erişin.", "مرر المؤشر فوق أي بطاقة مكوّن لربطها بصرياً بالمركز الأساسي والوصول إلى بيانات التشخيص المباشرة."],
    ["Module 01", "Modül 01", "الوحدة 01"],
    ["Module 02", "Modül 02", "الوحدة 02"],
    ["Module 03", "Modül 03", "الوحدة 03"],
    ["Module 04", "Modül 04", "الوحدة 04"],
    ["Module 05", "Modül 05", "الوحدة 05"],
    ["Module 06", "Modül 06", "الوحدة 06"],
    ["SSO Integrated", "SSO Entegre", "تسجيل الدخول الموحد مدمج"],
    ["Auctions Ready", "Açık Artırmalar Hazır", "المزادات جاهزة"],
    ["Fintech Secured", "Fintech Güvenli", "التكنولوجيا المالية مؤمّنة"],
    ["Studio & AI", "Studio ve Yapay Zekâ", "الاستوديو والذكاء الاصطناعي"],
    ["Harness custom generative intelligence. Create high-conversion marketing graphics and product mockups instantly with Mazad Studio. Plus, communicate naturally with Mazad AI, an assistant trained specifically on Iraqi variations.", "Özel üretken zekâdan yararlanın. Mazad Studio ile etkili pazarlama görselleri ve ürün maketleri oluşturun; Irak'a özgü dil farklılıklarıyla eğitilmiş Mazad AI ile doğal iletişim kurun.", "استفد من الذكاء التوليدي المخصص. أنشئ رسومات تسويقية ونماذج منتجات فوراً عبر استوديو مزاد وتواصل مع مساعد مزاد المدرب على التنوعات العراقية."],
    ["AI Generation", "Yapay Zekâ Üretimi", "توليد بالذكاء الاصطناعي"],
    ["Multi-tenant business ERP managing catalog directories, inventory syncing, automated invoice files, multi-currency flows, and ledger analytics. Built to streamline backend business operations for regional companies.", "Katalog dizinlerini, stok senkronizasyonunu, otomatik faturaları, çoklu para birimi akışlarını ve defter analizlerini yöneten çok kiracılı ERP. Bölgesel şirketlerin arka ofis operasyonlarını kolaylaştırır.", "نظام ERP متعدد العملاء يدير أدلة الكتالوج ومزامنة المخزون والفواتير الآلية وتدفقات العملات وتحليلات السجل، ومصمم لتبسيط عمليات الشركات الإقليمية."],
    ["Enterprise Sync", "Kurumsal Senkronizasyon", "مزامنة المؤسسات"],
    ["Smart Shipping", "Akıllı Gönderim", "الشحن الذكي"],
    ["Fully integrated regional delivery pipelines. Connect with international parcel carriers to guarantee secure, geo-tracked cross-border transport. Deliver from central hubs to destinations across the GCC in 3-7 days.", "Tam entegre bölgesel teslimat hatları. Güvenli ve konum takibi yapılan sınır ötesi taşıma için uluslararası kargo şirketleriyle bağlantı kurar. Merkezlerden Körfez genelindeki noktalara 3–7 günde teslim eder.", "مسارات توصيل إقليمية متكاملة تربط شركات الشحن الدولية لضمان نقل آمن ومتتبع جغرافياً عبر الحدود، مع توصيل من المراكز إلى دول الخليج خلال 3–7 أيام."],
    ["Logistics Active", "Lojistik Aktif", "الخدمات اللوجستية نشطة"],

    // Countries page additions
    ["Our local entities operate under shared playbooks, ensuring a consistent yet localized experience across the region.", "Yerel şirketlerimiz ortak çalışma standartlarıyla faaliyet göstererek bölge genelinde tutarlı ve yerelleştirilmiş bir deneyim sağlar.", "تعمل كياناتنا المحلية وفق أدلة تشغيل مشتركة لضمان تجربة متسقة ومحلية في أنحاء المنطقة."],
    ["Iraq", "Irak", "العراق"],
    ["Saudi Arabia", "Suudi Arabistan", "المملكة العربية السعودية"],
    ["Kuwait", "Kuveyt", "الكويت"],
    ["Qatar", "Katar", "قطر"],
    ["Egypt", "Mısır", "مصر"],
    ["Bahrain", "Bahreyn", "البحرين"],
    ["Algeria", "Cezayir", "الجزائر"],
    ["UAE", "BAE", "الإمارات"],
    ["Libya", "Libya", "ليبيا"],
    ["Syria", "Suriye", "سوريا"],
    ["Jordan", "Ürdün", "الأردن"],
    ["+ More coming", "+ Daha fazlası yakında", "+ المزيد قريباً"],
    ["1. Smart Logistics Corridor", "1. Akıllı Lojistik Koridoru", "1. ممر الخدمات اللوجستية الذكي"],
    ["Products leaving factories in Turkey reach buyers in Iraq and the Gulf countries through express cargo routes that overcome customs barriers.", "Türkiye fabrikalarından çıkan ürünler, gümrük engelleri aşılarak Irak ve Körfez ülkelerindeki alıcılara ekspres kargo rotalarıyla ulaştırılır.", "تُنقل المنتجات من المصانع التركية إلى المشترين في العراق ودول الخليج عبر مسارات شحن سريع تتجاوز العوائق الجمركية."],
    ["2. Integrated Fintech & Escrow", "2. Entegre Fintech & Escrow", "2. التكنولوجيا المالية والضمان المتكامل"],
    ["Payments across currencies and countries are protected at a full bank-grade level through ZainCash, Mada, K-Net, and the escrow vault.", "ZainCash, Mada, K-Net ve Escrow kasası ile farklı para birimleri ve ülkeler arasındaki ödemeler %100 banka düzeyinde koruma altındadır.", "تتم حماية المدفوعات بين العملات والدول بمستوى مصرفي كامل عبر زين كاش ومدى وK-Net وخزينة الضمان."],
    ["3. Manufacturer & Merchant Bridge", "3. Üretici & Tüccar Köprüsü", "3. جسر المصنعين والتجار"],
    ["Local sellers and global manufacturers meet directly in the Mazad auction system without intermediaries and grow their trade.", "Yerel satıcılar ve küresel üreticiler aracı olmadan doğrudan Mazad açık artırma sisteminde buluşur ve ticaretlerini büyütür.", "يلتقي البائعون المحليون والمصنعون العالميون مباشرة في نظام مزاد دون وسطاء لتوسيع تجارتهم."],
    ["4. Shared Global Community", "4. Ortak Küresel Topluluk", "4. مجتمع عالمي مشترك"],
    ["Buyers speaking different languages (Turkish, Arabic, and English) meet on the same live auction floor under fair and transparent conditions.", "Farklı dillerdeki (Türkçe, Arapça, İngilizce) alıcılar aynı canlı açık artırma katında adil ve şeffaf şartlarda buluşur.", "يلتقي المشترون الناطقون بالتركية والعربية والإنجليزية في ساحة مزاد مباشرة واحدة بشروط عادلة وشفافة."],
    ["Operational HQ & R&D", "Operasyonel HQ & Ar-Ge", "المقر التشغيلي والبحث والتطوير"],
    ["Turkey (Headquarters & R&D)", "Türkiye (Genel Merkez & Ar-Ge)", "تركيا (المقر الرئيسي والبحث والتطوير)"],
    ["Office & Company Address", "Ofis & Şirket Adresi", "عنوان المكتب والشركة"],
    ["Maslak Plaza, Floor 18, Maslak/Şişli, Istanbul, Turkey", "Maslak Plaza, Kat:18, Maslak/Şişli, İstanbul, Türkiye", "بلازا مسلك، الطابق 18، مسلك/شيشلي، إسطنبول، تركيا"],
    ["Contact Information", "İletişim Bilgileri", "معلومات التواصل"],
    ["Activities & Operations in This Country", "O Ülkedeki Faaliyetler & Operasyonlar", "الأنشطة والعمليات في تلك الدولة"],
    ["Software engineering, Yaman Copilot AI core, consolidated manufacturer dispatch, and global financial treasury management.", "Yazılım mühendisliği, Yaman Copilot yapay zeka çekirdeği, konsolide üretici sevkiyatı ve global finansal hazine yönetimi.", "هندسة البرمجيات ونواة يمان للذكاء الاصطناعي وشحنات المصنعين المجمعة وإدارة الخزانة المالية العالمية."],
    ["Live Auction", "Canlı İhale", "مزاد مباشر"],
    ["Active Merchant", "Aktif Tüccar", "تاجر نشط"],
    ["Monthly Volume", "Aylık Hacim", "الحجم الشهري"],
    ["View the Dedicated Country Landing Page", "Özel Ülke Landing Page'ini Gör", "عرض صفحة الدولة المخصصة"],
    ["Close", "Kapat", "إغلاق"],
    ["MAZAD TURKEY LANDING PAGE", "MAZAD TÜRKİYE LANDING PAGE", "صفحة مزاد تركيا"],
    ["Official Mazad Regional Enterprise Portal", "Resmî Mazad Bölgesel Kurumsal Portalı", "بوابة مزاد الإقليمية الرسمية للمؤسسات"],
    ["Back to Country Selection", "Ülke Seçimine Dön", "العودة إلى اختيار الدولة"],
    ["HQ & Product Development Core", "Genel Merkez ve Ürün Geliştirme Çekirdeği", "المقر الرئيسي ونواة تطوير المنتجات"],
    ["Mazad Turkey:", "Mazad Türkiye:", "مزاد تركيا:"],
    ["Directly from Manufacturer to the Global Market", "Üreticiden Doğrudan Küresel Pazara", "من المصنع مباشرة إلى السوق العالمي"],
    ["Our Istanbul Maslak headquarters directly integrates manufacturers and factories in Turkey with Iraq, Saudi Arabia, the UAE, and all MENA markets.", "İstanbul Maslak HQ merkezimiz, Türkiye'deki tüm üretici ve fabrikaları doğrudan Irak, Suudi Arabistan, BAE ve tüm MENA pazarlarına entegre eder.", "يربط مقرنا في مسلك بإسطنبول المصنعين والمصانع في تركيا مباشرة بالعراق والسعودية والإمارات وجميع أسواق المنطقة."],
    ["Become a Turkey Seller / Supplier", "Türkiye Satıcısı / Tedarikçisi Ol", "كن بائعاً أو مورداً من تركيا"],
    ["Explore the Map", "Haritayı Keşfet", "استكشف الخريطة"],
    ["Local Market Statistics", "Yerel Pazar İstatistikleri", "إحصاءات السوق المحلية"],
    ["Currency:", "Para Birimi:", "العملة:"],
    ["Active Auctions:", "Aktif İhaleler:", "المزادات النشطة:"],
    ["Registered Merchants:", "Kayıtlı Tüccarlar:", "التجار المسجلون:"],
    ["Monthly Volume:", "Aylık Hacim:", "الحجم الشهري:"],
    ["Global Network Directory", "Küresel Ağ Dizini", "دليل الشبكة العالمية"],
    ["Connecting regional hubs, corporate centers, and local logistics gateways across MENA.", "MENA genelindeki bölgesel merkezleri, kurumsal merkezleri ve yerel lojistik ağ geçitlerini birbirine bağlıyoruz.", "نربط المراكز الإقليمية ومراكز الشركات وبوابات الخدمات اللوجستية المحلية في أنحاء المنطقة."],
    ["HQ & Product", "Genel Merkez ve Ürün", "المقر والمنتجات"],
    ["Mazad Türkiye HQ", "Mazad Türkiye Genel Merkezi", "المقر الرئيسي لمزاد تركيا"],
    ["Maslak Plaza, No:12, Şişli, Istanbul, Turkey. Core software engineering, catalog database hosting, and manufacturer consolidation dispatch.", "Maslak Plaza, No:12, Şişli, İstanbul, Türkiye. Temel yazılım mühendisliği, katalog veritabanı barındırma ve konsolide üretici sevkiyatı.", "بلازا مسلك، رقم 12، شيشلي، إسطنبول، تركيا. هندسة البرمجيات الأساسية واستضافة قاعدة بيانات الكتالوج وشحنات المصنعين المجمعة."],
    ["Contact:", "İletişim:", "التواصل:"],
    ["Hub Status:", "Merkez Durumu:", "حالة المركز:"],
    ["Operational HQ", "Operasyonel Genel Merkez", "مقر تشغيلي"],
    ["High Volume Hub", "Yüksek Hacimli Merkez", "مركز عالي الحجم"],
    ["Mazad Iraq", "Mazad Irak", "مزاد العراق"],
    ["Empire World, Erbil / Karrada District, Baghdad. Local operations, customer service, ZainCash/AsiaCell gateway checks, and regional logistics network.", "Empire World, Erbil / Karrada Bölgesi, Bağdat. Yerel operasyonlar, müşteri hizmetleri, ZainCash/AsiaCell ağ geçidi kontrolleri ve bölgesel lojistik ağı.", "إمباير وورلد، أربيل / حي الكرادة، بغداد. العمليات المحلية وخدمة العملاء وفحوصات بوابات زين كاش وآسيا سيل وشبكة الخدمات اللوجستية الإقليمية."],
    ["Active Hub", "Aktif Merkez", "مركز نشط"],
    ["GCC Central Hub", "Körfez Merkez Üssü", "المركز الرئيسي للخليج"],
    ["Mazad Saudi Arabia", "Mazad Suudi Arabistan", "مزاد السعودية"],
    ["King Fahd Road, Al Olaya, Riyadh. Fintech wallet integration, Mada card payment clearing, and GCC fulfillment operations.", "Kral Fahd Yolu, Al Olaya, Riyad. Fintech cüzdan entegrasyonu, Mada kart ödeme takası ve Körfez sipariş operasyonları.", "طريق الملك فهد، العليا، الرياض. تكامل المحفظة المالية وتسوية بطاقات مدى وعمليات تنفيذ الطلبات في الخليج."],
    ["GCC Sorting Node", "Körfez Ayrıştırma Noktası", "مركز فرز الخليج"],
    ["Mazad UAE", "Mazad BAE", "مزاد الإمارات"],
    ["Marina Plaza, Level 28, Dubai Marina, Dubai. GCC logistics gateway management, cargo routing, and financial operations.", "Marina Plaza, Kat 28, Dubai Marina, Dubai. Körfez lojistik ağ geçidi yönetimi, kargo rotalama ve finansal operasyonlar.", "مارينا بلازا، الطابق 28، دبي مارينا. إدارة بوابة الخدمات اللوجستية الخليجية وتوجيه الشحنات والعمليات المالية."],
    ["Planned GCC Hub", "Planlanan Körfez Merkezi", "مركز خليجي مخطط"],
    ["North Africa East", "Kuzey Afrika Doğu", "شرق شمال أفريقيا"],
    ["Mazad Egypt", "Mazad Mısır", "مزاد مصر"],
    ["Nile City Towers, Floor 18, Cairo. Regional commercial listings and domestic logistics routing portals.", "Nile City Towers, Kat 18, Kahire. Bölgesel ticari ilanlar ve yurt içi lojistik yönlendirme portalları.", "أبراج نايل سيتي، الطابق 18، القاهرة. قوائم التجارة الإقليمية وبوابات توجيه الخدمات اللوجستية المحلية."],
    ["Planned Hub", "Planlanan Merkez", "مركز مخطط"],
    ["Cargo Hub", "Kargo Merkezi", "مركز شحن"],
    ["Mazad Qatar", "Mazad Katar", "مزاد قطر"],
    ["West Bay Towers, Floor 14, Doha. Synchronized regional catalogs and domestic delivery routing portals.", "West Bay Towers, Kat 14, Doha. Senkronize bölgesel kataloglar ve yurt içi teslimat yönlendirme portalları.", "أبراج ويست باي، الطابق 14، الدوحة. كتالوجات إقليمية متزامنة وبوابات توجيه التوصيل المحلي."],
    ["Active Cargo Sync", "Aktif Kargo Senkronizasyonu", "مزامنة شحن نشطة"],
    ["Logistics Gate", "Lojistik Kapısı", "بوابة لوجستية"],
    ["Mazad Kuwait", "Mazad Kuveyt", "مزاد الكويت"],
    ["Al Hamra Tower, floor 32, Kuwait City. Sorting center pipelines dispatching parcels directly to final buyers.", "Al Hamra Tower, Kat 32, Kuveyt Şehri. Paketleri doğrudan nihai alıcılara gönderen ayrıştırma merkezi hatları.", "برج الحمراء، الطابق 32، مدينة الكويت. مسارات مركز فرز ترسل الطرود مباشرة إلى المشترين النهائيين."],
    ["Logistics Active", "Lojistik Aktif", "الخدمات اللوجستية نشطة"],
    ["GCC Financial Gateway", "Körfez Finansal Ağ Geçidi", "البوابة المالية للخليج"],
    ["Mazad Bahrain", "Mazad Bahreyn", "مزاد البحرين"],
    ["Bahrain Financial Harbour, West Tower, Manama. Local listings and escrow vault protection clearance.", "Bahrain Financial Harbour, West Tower, Manama. Yerel ilanlar ve Escrow kasa koruma işlemleri.", "مرفأ البحرين المالي، البرج الغربي، المنامة. القوائم المحلية وإجراءات حماية خزينة الضمان."],
    ["North Africa West", "Kuzey Afrika Batı", "غرب شمال أفريقيا"],
    ["Mazad Algeria", "Mazad Cezayir", "مزاد الجزائر"],
    ["Didouche Mourad St, Algiers. Local merchant onboarding, cargo pipelines, and North Africa gateway.", "Didouche Mourad Caddesi, Cezayir. Yerel satıcı katılımı, kargo hatları ve Kuzey Afrika ağ geçidi.", "شارع ديدوش مراد، الجزائر. ضم التجار المحليين ومسارات الشحن وبوابة شمال أفريقيا."],
    ["Market Expansion", "Pazar Genişlemesi", "توسع السوق"],
    ["North Africa Central", "Kuzey Afrika Merkez", "وسط شمال أفريقيا"],
    ["Mazad Libya", "Mazad Libya", "مزاد ليبيا"],
    ["Sugar District Plaza, Tripoli. North African retail expansion node, logistics routing and regional payments integration.", "Sugar District Plaza, Trablus. Kuzey Afrika perakende genişleme noktası, lojistik yönlendirme ve bölgesel ödeme entegrasyonu.", "بلازا حي السكر، طرابلس. مركز توسع التجزئة في شمال أفريقيا وتوجيه الخدمات اللوجستية وتكامل المدفوعات الإقليمية."],
    ["Levant Market", "Levant Pazarı", "سوق بلاد الشام"],
    ["Mazad Syria", "Mazad Suriye", "مزاد سوريا"],
    ["Abu Rummaneh, Damascus. Local supplier catalog listings and domestic freight sorting hubs.", "Abu Rummaneh, Şam. Yerel tedarikçi katalog ilanları ve yurt içi kargo ayrıştırma merkezleri.", "أبو رمانة، دمشق. قوائم كتالوج الموردين المحليين ومراكز فرز الشحن المحلي."],
    ["Levant Hub", "Levant Merkezi", "مركز بلاد الشام"],
    ["Mazad Jordan", "Mazad Ürdün", "مزاد الأردن"],
    ["Zara Towers, Amman. Regional logistics gateway connecting Turkish factories directly to local retail markets in Jordan.", "Zara Towers, Amman. Türk fabrikalarını doğrudan Ürdün'deki yerel perakende pazarlarına bağlayan bölgesel lojistik ağ geçidi.", "أبراج زارا، عمّان. بوابة لوجستية إقليمية تربط المصانع التركية مباشرة بأسواق التجزئة المحلية في الأردن."]
];

const languageColumn = { en: 0, tr: 1, ar: 2 };
const automaticTranslationIndex = new Map();

function normalizeTranslationSource(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
}

function registerAutomaticTranslation(entry) {
    entry.forEach(value => {
        const normalized = normalizeTranslationSource(value);
        if (normalized && !automaticTranslationIndex.has(normalized)) {
            automaticTranslationIndex.set(normalized, entry);
        }
    });
}

// Reuse every named translation as an automatic translation too. This makes
// desktop/mobile navigation and repeated footer text behave consistently even
// where older HTML does not yet contain a data-i18n attribute.
Object.keys(i18nDictionary.en).forEach(key => {
    registerAutomaticTranslation([
        i18nDictionary.en[key],
        i18nDictionary.tr[key],
        i18nDictionary.ar[key]
    ]);
});
automaticContentTranslations.forEach(registerAutomaticTranslation);

function translatedAutomaticValue(value, langCode) {
    const normalized = normalizeTranslationSource(value);
    const entry = automaticTranslationIndex.get(normalized);
    return entry ? entry[languageColumn[langCode]] : null;
}

function replacePreservingOuterWhitespace(rawValue, translatedValue) {
    const leading = rawValue.match(/^\s*/)?.[0] || '';
    const trailing = rawValue.match(/\s*$/)?.[0] || '';
    return `${leading}${translatedValue}${trailing}`;
}

function translateAutomaticContent(langCode, root = document.body) {
    if (!root) return;

    // Translate document titles.
    const translatedTitle = translatedAutomaticValue(document.title, langCode);
    if (translatedTitle && translatedTitle !== document.title) {
        document.title = translatedTitle;
    }

    // Translate text nodes without disturbing nested icons, spans or styling.
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) textNodes.push(node);

    textNodes.forEach(textNode => {
        const parent = textNode.parentElement;
        if (!parent || parent.closest('script, style, noscript, svg, [data-i18n]')) return;

        const translated = translatedAutomaticValue(textNode.nodeValue, langCode);
        if (!translated) return;

        const nextValue = replacePreservingOuterWhitespace(textNode.nodeValue, translated);
        if (nextValue !== textNode.nodeValue) textNode.nodeValue = nextValue;
    });

    // Translate visible control hints and accessibility labels.
    root.querySelectorAll('[placeholder], [title], [aria-label], img[alt]').forEach(element => {
        ['placeholder', 'title', 'aria-label', 'alt'].forEach(attribute => {
            if (!element.hasAttribute(attribute)) return;
            const currentValue = element.getAttribute(attribute);
            const translated = translatedAutomaticValue(currentValue, langCode);
            if (translated && translated !== currentValue) {
                element.setAttribute(attribute, translated);
            }
        });
    });
}

let automaticTranslationObserver;
let automaticTranslationScheduled = false;

function startAutomaticTranslationObserver() {
    if (automaticTranslationObserver || !document.body) return;

    automaticTranslationObserver = new MutationObserver(() => {
        if (automaticTranslationScheduled) return;
        automaticTranslationScheduled = true;
        requestAnimationFrame(() => {
            automaticTranslationScheduled = false;
            translateAutomaticContent(currentLang);
        });
    });

    automaticTranslationObserver.observe(document.body, {
        childList: true,
        characterData: true,
        subtree: true
    });
}

/**
 * Current language state ('en', 'tr', 'ar')
 */
function readMazadLanguage() {
    const queryLanguage = new URLSearchParams(window.location.search).get('lang');
    if (i18nDictionary[queryLanguage]) return queryLanguage;

    try {
        const stored = window.localStorage?.getItem('mazad_lang');
        if (i18nDictionary[stored]) return stored;
    } catch (_) {}

    const cookieMatch = document.cookie.match(/(?:^|;\s*)mazad_lang=(en|tr|ar)(?:;|$)/);
    return cookieMatch?.[1] || 'en';
}

function persistMazadLanguage(langCode) {
    try {
        window.localStorage?.setItem('mazad_lang', langCode);
    } catch (_) {}
    document.cookie = `mazad_lang=${langCode}; path=/; max-age=31536000; SameSite=Lax`;
}

window.getMazadLanguage = readMazadLanguage;

let currentLang = readMazadLanguage();

function syncInternalLanguageLinks(langCode) {
    document.querySelectorAll('a[href]').forEach(link => {
        const rawHref = link.getAttribute('href');
        if (!rawHref || rawHref.startsWith('#') || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:')) return;

        let url;
        try {
            url = new URL(rawHref, window.location.href);
        } catch (_) {
            return;
        }
        if (url.origin !== window.location.origin || !/\.html$/.test(url.pathname)) return;

        url.searchParams.set('lang', langCode);
        link.setAttribute('href', `${url.pathname.split('/').pop()}${url.search}${url.hash}`);
    });
}

// Apply the saved language before the page renders. This keeps every page in
// the same language and prevents a brief fallback to the HTML default.
document.documentElement.lang = currentLang;
document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

/**
 * Switch language dynamically
 * @param {string} langCode - 'en', 'tr', or 'ar'
 */
function setLanguage(langCode) {
    if (!i18nDictionary[langCode]) return;
    
    currentLang = langCode;
    persistMazadLanguage(langCode);

    // Update HTML root attributes
    document.documentElement.lang = langCode;
    document.documentElement.dir = (langCode === 'ar') ? 'rtl' : 'ltr';

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nDictionary[langCode][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = i18nDictionary[langCode][key];
            } else {
                el.innerHTML = i18nDictionary[langCode][key];
            }
        }
    });

    translateAutomaticContent(langCode);
    startAutomaticTranslationObserver();
    syncInternalLanguageLinks(langCode);

    // Update language switcher active buttons
    updateLanguageButtonsUI(langCode);

    // Dispatch event for dynamic components (Yaman AI, Canvas, etc.)
    window.dispatchEvent(new CustomEvent('mazadLanguageChanged', { detail: { lang: langCode } }));
}

// Make setLanguage available globally on window object
window.setLanguage = setLanguage;

/**
 * Highlights the active language button (TR | AR | EN) across both BROWSER desktop and BROWSER mobile view
 */
function updateLanguageButtonsUI(langCode) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const targetLang = btn.getAttribute('data-lang');
        const isMobile = btn.closest('#mobile-menu') !== null;
        
        if (isMobile) {
            if (targetLang === langCode) {
                btn.className = "lang-btn text-brand-orange font-bold text-sm px-3 py-2 bg-white/5 rounded-lg border border-brand-orange/30 transition";
            } else {
                btn.className = "lang-btn text-white/70 hover:text-white font-medium text-sm px-3 py-2 bg-white/5 rounded-lg border border-transparent transition";
            }
        } else {
            if (targetLang === langCode) {
                btn.className = "lang-btn text-brand-orange font-bold text-xs xl:text-sm px-2.5 py-1 rounded-md bg-brand-orange/10 border border-brand-orange/50 transition drop-shadow-[0_0_8px_#FF841A]";
            } else {
                btn.className = "lang-btn text-white/70 hover:text-white font-medium text-xs xl:text-sm px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition";
            }
        }
    });
}

function consolidateEcosystemNavigation() {
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href') || '';
        const isBusinessModel = /(^|\/)business-model\.html(?:$|[?#])/.test(href);
        const isFintech = /(^|\/)fintech\.html(?:$|[?#])/.test(href);
        if (!isBusinessModel && !isFintech) return;

        if (link.closest('nav, #mobile-menu')) {
            link.hidden = true;
            link.setAttribute('aria-hidden', 'true');
            link.setAttribute('tabindex', '-1');
        } else {
            link.setAttribute('href', isBusinessModel ? 'ecosystem.html#business-model' : 'ecosystem.html#fintech');
        }
    });
}

// Automatically apply language on DOM Load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        consolidateEcosystemNavigation();
        setLanguage(currentLang);
    });
} else {
    consolidateEcosystemNavigation();
    setLanguage(currentLang);
}
