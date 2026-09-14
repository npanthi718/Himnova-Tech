export interface NicheProduct {
  id: string;
  title: string;
  tagline: string;
  category: "E-Commerce & SaaS" | "Hospitality & Food" | "Healthcare & Wellness" | "Enterprise & ERP" | "FinTech & Real Estate" | "EdTech & Services";
  description: string;
  fullArchitecture: string;
  priceRange: {
    usd: string;
    localEstimated: string;
    conversionRateNote: string;
    model: "One-Time Custom Setup + AMC" | "Turnkey Deployment" | "Monthly / Annual SaaS";
  };
  deliveryTime: string;
  targetMarket: string;
  keyFeatures: string[];
  techStack: string[];
  deliverables: string[];
  included: string[];
  excluded: string[];
  addOns: string[];
  imagePlaceholder: string;
  iconName:
    | "ShoppingCart"
    | "Hotel"
    | "Utensils"
    | "Stethoscope"
    | "Building2"
    | "GraduationCap"
    | "Compass"
    | "Truck"
    | "Dumbbell"
    | "Banknote"
    | "Boxes"
    | "Wrench"
    | "Bot"
    | "Car"
    | "Briefcase"
    | "Pill"
    | "Ticket"
    | "HeartHandshake";
  badge?: string;
}

export const nicheProducts: NicheProduct[] = [
  {
    id: "voxnova-ai-calling-platform",
    imagePlaceholder: "/images/solutions/voxnova-ai-calling-platform.svg?v=1",
    title: "VoxNova AI: Enterprise Voice Calling & Autonomous Agent Suite",
    tagline: "Ultra-low latency bilingual AI voice agents for 24/7 inbound support, outbound lead calls & appointment booking.",
    category: "Enterprise & ERP",
    description:
      "A complete enterprise-grade Voice AI calling and autonomous multi-agent platform. Engineered for healthcare clinics, educational consultancies, real estate agencies, hotels, logistics, and financial institutions. Replaces slow IVRs and expensive manual call centers with natural conversational voice bots fluent in English and Nepali (खस नेपाली).",
    fullArchitecture:
      "WebRTC & SIP Telephony Gateway, Deepgram / Whisper Streaming STT (<150ms), LangGraph & Claude / Llama-3 Agentic Orchestrator, Cartesia / ElevenLabs Neural TTS with custom Nepali voice tuning, PostgreSQL Call Recording & Sentiment Ledger, and automated webhooks for WhatsApp, SMS, Google Calendar, and CRMs.",
    priceRange: {
      usd: "$450 – $1,280",
      localEstimated: "NPR 70,000 – 1,98,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "Turnkey Deployment",
    },
    deliveryTime: "2 – 3 Weeks",
    targetMarket: "Clinics, study abroad consultancies, e-commerce brands, real estate firms, hotels, and customer support desks.",
    keyFeatures: [
      "Ultra-low latency conversational streaming voice (<380ms response time)",
      "Bilingual fluency in English and natural Nepali conversational accents",
      "Automated outbound lead qualification, follow-ups & order confirmation calls",
      "Inbound 24/7 patient & client appointment booking with calendar sync",
      "Live call warm-transfer to human agents with real-time transcript handoff",
      "Instant post-call WhatsApp summaries, SMS booking links & CRM sync",
      "Admin dashboard with live audio playback, transcripts & sentiment analytics",
    ],
    techStack: ["Python FastStream", "LangGraph", "WebRTC / SIP", "Deepgram STT", "Cartesia / ElevenLabs", "Next.js 14", "PostgreSQL", "Redis"],
    deliverables: [
      "Complete Voice AI Pipeline & Custom Agent Prompt Architecture with 100% IP",
      "Admin Web Dashboard with Real-Time Call Telemetry & Audio Recordings",
      "SIP Trunk / VoIP Telephony Gateway Configuration (Twilio / NTC / Ncell / PBX)",
      "CRM, Google Calendar & WhatsApp Notification Automation Webhooks",
      "6 Months SLA Technical Support, Prompt Fine-Tuning & Voice Updates",
    ],
    included: [
      "100% Full Source Code, Prompt Rules & Pipeline Architecture Ownership",
      "Custom Knowledge Base Training on Company FAQ, Services & Catalogs",
      "SIP Trunking / Twilio / Local PBX Inbound & Outbound Integration",
      "Voice Persona Customization (Gender, Tone, Speaking Speed & Dialect)",
      "6 Months Free Warranty, Bug Fixes & Agent Performance Tuning",
      "Staff Training Session & Operational Call Center Guidelines",
    ],
    excluded: [
      "Third-party telephony carrier per-minute charges (billed at direct cost ~$0.01–$0.03/min)",
      "Third-party LLM & TTS token consumption above included initial setup credit",
      "Custom physical hardware PBX servers (cloud deployment included)",
    ],
    addOns: [
      "Local Nepal Telecom (NTC / Ncell) Dedicated SIP Trunk Setup (+$200 / NPR 30,000)",
      "Omnichannel Chatbot Sync (WhatsApp + Messenger + Instagram) (+$250 / NPR 38,000)",
      "Custom Fine-Tuned Local Regional Dialect Voice Model (+$350 / NPR 54,000)",
    ],
    iconName: "Bot",
    badge: "🔥 Top Trending Demand",
  },
  {
    id: "ecommerce-multivendor-saas",
    imagePlaceholder: "/images/solutions/ecommerce-multivendor-saas.svg?v=2",
    title: "OmniStore: Multi-Vendor E-Commerce SaaS Platform",
    tagline: "High-concurrency digital commerce with multi-vendor portals, mobile app & real-time inventory.",
    category: "E-Commerce & SaaS",
    description:
      "A complete enterprise-grade multi-vendor marketplace engine comparable to Amazon / Daraz. Includes automated commission split, multi-currency checkout, vendor self-onboarding portal, and buyer mobile apps.",
    fullArchitecture:
      "Microservices-based Next.js 14 frontend, Node.js / Go checkout engine, Redis session cache, PostgreSQL transactional ledger, Elasticsearch product catalog, and Stripe / eSewa / Khalti payment gateway integrations.",
    priceRange: {
      usd: "$420 – $1,200",
      localEstimated: "NPR 65,000 – 1,85,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "Turnkey Deployment",
    },
    deliveryTime: "2 – 4 Weeks",
    targetMarket: "Retail chains, wholesalers, multi-brand aggregators, fashion & electronics brands.",
    keyFeatures: [
      "Multi-vendor seller onboarding & payout ledger",
      "Real-time order tracking with SMS & WhatsApp alerts",
      "Dynamic discount coupons, flash sales & affiliate engine",
      "Integrated payment gateways (Stripe, PayPal, eSewa, Khalti, Fonepay)",
      "High-speed Elasticsearch auto-complete & filter search",
      "PWA mobile-responsive storefront + Flutter mobile apps",
    ],
    techStack: ["Next.js 14", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS", "Docker"],
    deliverables: [
      "Complete Source Code & Git Repository with 100% IP Ownership",
      "Buyer Storefront + Vendor Admin + Super Admin Portals",
      "AWS / DigitalOcean Cloud Deployment with SSL & CDN",
      "Payment & SMS Gateway Configuration",
      "6 Months SLA Warranty & Bug-Fix Support",
    ],
    included: [
      "100% Full Source Code & Database Schema Ownership",
      "Buyer Web Storefront + Seller Dashboard + Super Admin Panel",
      "Payment Gateway Integration (eSewa, Khalti, Fonepay, Cards)",
      "Cloud Server Setup (AWS / DigitalOcean / Vercel) + Free Wildcard SSL",
      "6 Months Free Warranty, Bug Fixes & Architecture Support",
      "Complete Staff User Training & Technical Manuals",
    ],
    excluded: [
      "Recurring monthly cloud server hosting charges after setup (typically $15–$30/mo paid directly to provider)",
      "Third-party SMS/WhatsApp gateway credit balances",
      "Manual bulk product data entry beyond initial 100 sample items",
      "Google Play ($25 one-time) and Apple ($99/year) developer account registration fees",
    ],
    addOns: [
      "Native iOS & Android App Store Submissions (+$250 / NPR 38,000)",
      "Custom Accounting / Tally ERP Live Sync (+$300 / NPR 45,000)",
      "AI Recommendation Engine & Visual Search (+$350 / NPR 54,000)",
    ],
    iconName: "ShoppingCart",
    badge: "Most Popular",
  },
  {
    id: "hotel-hostel-pms",
    imagePlaceholder: "/images/solutions/hotel-hostel-pms.svg?v=2",
    title: "HostelHive & StayPMS: Property & Booking Management System",
    tagline: "Smart room allocation, online guest check-in, housekeeping scheduler & multi-channel sync.",
    category: "Hospitality & Food",
    description:
      "An all-in-one cloud PMS for hostels, boutique hotels, resorts, and PG accommodations. Automates room availability, online deposits, guest ID capture, cafeteria billing, and housekeeping task assignment.",
    fullArchitecture:
      "React/Next.js multi-tenant dashboard, Node.js REST APIs, PostgreSQL relational booking ledger, automated email/WhatsApp confirmation bots, and QR code check-in scanner.",
    priceRange: {
      usd: "$245 – $615",
      localEstimated: "NPR 38,000 – 95,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "One-Time Custom Setup + AMC",
    },
    deliveryTime: "2 – 3 Weeks",
    targetMarket: "Hostels, boutique hotels, student dormitories, bed & breakfasts, trekking lodges.",
    keyFeatures: [
      "Visual drag-and-drop room & bed allocation calendar",
      "Contactless QR code guest check-in & digital ID upload",
      "Multi-rate plan pricing (seasonal, hourly, dormitory)",
      "Cafeteria, laundry, and amenity POS billing integration",
      "Automated WhatsApp booking confirmations & balance reminders",
      "Daily revenue, occupancy rate (RevPAR) & tax analytics",
    ],
    techStack: ["React.js", "Node.js", "Express", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    deliverables: [
      "Property Owner Cloud Portal + Receptionist POS Screen",
      "Guest Self-Service Web Portal & QR Generator",
      "Thermal Bill Printing Integration",
      "Cloud Server Setup & Automated Nightly Backups",
      "On-site / Remote Staff Training",
    ],
    included: [
      "Lifetime Usage License & Full Codebase",
      "Receptionist Desktop POS + Mobile Room Checker App",
      "Automated Daily Night Audit & Tax Invoice Generator",
      "Integration with USB & Network Thermal Receipt Printers",
      "Cloud VPS Setup with Daily Automated Database Snapshots",
      "6 Months Comprehensive Technical Maintenance",
    ],
    excluded: [
      "Third-party OTA Channel Manager monthly fees if syncing with external Booking.com / Agoda APIs",
      "Thermal printer hardware devices & paper rolls",
      "Domain name renewal costs after year 1",
    ],
    addOns: [
      "Direct Booking Engine Widget for Hotel Website (+$150 / NPR 23,000)",
      "Smart RFID / Magnetic Keycard Lock Integration (+$250 / NPR 38,000)",
      "Multi-Property Chain Management Hub (+$300 / NPR 45,000)",
    ],
    iconName: "Hotel",
    badge: "High Demand",
  },
  {
    id: "restaurant-pos-ordering",
    imagePlaceholder: "/images/solutions/restaurant-pos-ordering.svg?v=2",
    title: "DineFlow: Smart Restaurant POS & Table QR Ordering Suite",
    tagline: "Instant QR table menu, Kitchen Display System (KDS), split billing & automated inventory tracking.",
    category: "Hospitality & Food",
    description:
      "Replaces slow paper menus and legacy offline cash registers. Customers scan a QR code at their table to view digital menus and order directly to kitchen screens, cutting wait times by up to 50%.",
    fullArchitecture:
      "Real-time WebSocket event bus connecting Table QRs, Waiter Tablets, Kitchen Display Systems (KDS), and Cashier Counters with sub-second synchronization.",
    priceRange: {
      usd: "$225 – $550",
      localEstimated: "NPR 35,000 – 85,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "One-Time Custom Setup + AMC",
    },
    deliveryTime: "2 – 3 Weeks",
    targetMarket: "Restaurants, cafes, cloud kitchens, bars, lounge franchises, bakery outlets.",
    keyFeatures: [
      "Interactive Table QR Digital Menu with image showcase",
      "Live Kitchen Display System (KDS) with audio order chime",
      "Waiter tablet app for table order taking & status update",
      "Split bill, discount voucher, VAT/service charge calculation",
      "Ingredient-level raw inventory deduction per recipe",
      "Daily Z-Report, best-seller dishes & cashier shift ledger",
    ],
    techStack: ["Next.js", "Socket.io", "Node.js", "MongoDB", "Tailwind CSS", "ESC/POS Thermal"],
    deliverables: [
      "Cashier Desktop POS + Kitchen Display + Waiter PWA",
      "Table QR Standee Vector Design Files + Generator Engine",
      "Thermal Receipt & KOT Kitchen Printer Integration",
      "Production Deployment & Lifetime License",
    ],
    included: [
      "Table QR Generator Engine + Printable Standee Vector Templates",
      "Kitchen Display Screen (KDS) with Real-Time Audio Order Chimes",
      "Waiter Table-Side Mobile Order App (PWA)",
      "Thermal KOT and Cashier Receipt Printer Driver Integration",
      "Full Ingredient Raw Stock & Recipe Deduction Engine",
      "6 Months Priority Bug-Fix Support & Staff Training",
    ],
    excluded: [
      "Physical hardware (tablets, touchscreens, thermal printers, cash drawers)",
      "SMS gateway balance for sending receipts via SMS",
    ],
    addOns: [
      "Customer Loyalty & Cash-Back Wallet Module (+$150 / NPR 23,000)",
      "Online Food Delivery Web Portal (+$250 / NPR 38,000)",
      "Multi-Branch Central Kitchen Inventory Hub (+$300 / NPR 45,000)",
    ],
    iconName: "Utensils",
    badge: "Trending",
  },
  {
    id: "hospital-clinic-emr",
    imagePlaceholder: "/images/solutions/hospital-clinic-emr.svg?v=2",
    title: "MedPulse: Clinic & Hospital Management EHR/EMR System",
    tagline: "Doctor appointment booking, digital prescriptions, pharmacy stock & HIPAA-ready medical records.",
    category: "Healthcare & Wellness",
    description:
      "Comprehensive healthcare digitization platform for private clinics, diagnostic labs, and regional hospitals. Manages patient OPD/IPD queue, digital health history, lab test results, and pharmacy billing.",
    fullArchitecture:
      "HIPAA-compliant encrypted database schema, role-based access control (Doctor, Nurse, Pharmacist, Lab Tech, Cashier), PDF prescription generator, and SMS patient reminder triggers.",
    priceRange: {
      usd: "$485 – $1,350",
      localEstimated: "NPR 75,000 – 2,10,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "Turnkey Deployment",
    },
    deliveryTime: "3 – 5 Weeks",
    targetMarket: "Polyclinics, private hospitals, dental clinics, diagnostic pathology labs, eye centers.",
    keyFeatures: [
      "Doctor appointment scheduling with live queue token monitor",
      "Digital prescription pad with ICD-10 medical database",
      "Electronic Health Records (EHR) timeline with attachment uploads",
      "Integrated Pharmacy POS with drug expiry warnings",
      "Pathology & Radiology test report publishing portal",
      "IPD bed management, nursing chart & discharge summary",
    ],
    techStack: ["Next.js 14", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Docker"],
    deliverables: [
      "Multi-Department Hospital Suite (OPD, IPD, Lab, Pharmacy)",
      "Patient Online Appointment & Report Download Portal",
      "Secure On-Premise or Cloud Database Deployment",
      "Complete Source Code & Administrator Documentation",
    ],
    included: [
      "Full Multi-Department Suite (OPD, IPD, Pathology Lab, Pharmacy)",
      "Digital Prescription Pad with Preloaded Medicine Database",
      "Patient Online Token & Pathology Report Download Portal",
      "Role-Based Access Control (Doctor, Nurse, Lab, Cashier)",
      "Field-Level Encryption & Automated Database Backups",
      "6 Months Dedicated On-Call SLA Support",
    ],
    excluded: [
      "Medical diagnostic laboratory analyzer hardware interface cables",
      "Monthly server hosting costs (AWS / Local on-premise server hardware)",
    ],
    addOns: [
      "Integrated Telemedicine Video Calling Module (+$300 / NPR 45,000)",
      "DICOM Medical Radiology Imaging Viewer Embed (+$350 / NPR 54,000)",
      "WhatsApp Automated Lab Report PDF Dispatch Bot (+$180 / NPR 28,000)",
    ],
    iconName: "Stethoscope",
    badge: "Enterprise Grade",
  },
  {
    id: "real-estate-portal",
    imagePlaceholder: "/images/solutions/real-estate-portal.svg?v=2",
    title: "EstateNest: Modern Real Estate & Property Listing Portal",
    tagline: "Geo-mapped property search, 360° virtual tour embeds, agent CRM & direct WhatsApp inquiries.",
    category: "FinTech & Real Estate",
    description:
      "A luxury, high-conversion real estate portal designed for property brokers, builders, and housing agencies. Features interactive map filters, mortgage calculators, and direct buyer-agent lead routing.",
    fullArchitecture:
      "Next.js App Router for optimal SEO indexing, Mapbox / Google Maps API integration, Cloudinary media optimization, and lead capture webhooks for CRM sync.",
    priceRange: {
      usd: "$325 – $870",
      localEstimated: "NPR 50,000 – 1,35,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "Turnkey Deployment",
    },
    deliveryTime: "2 – 4 Weeks",
    targetMarket: "Real estate agencies, housing developers, commercial leasing firms, vacation rental portals.",
    keyFeatures: [
      "Interactive map-based location property search with radius filter",
      "Property photo galleries, floor plans & YouTube/Matterport 360 embeds",
      "EMI Mortgage & Loan affordability calculator",
      "Agent profile directory with verified broker badges",
      "Instant WhatsApp & Email lead generation triggers",
      "SEO-optimized property slug generation for top Google ranking",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Google Maps API", "Framer Motion"],
    deliverables: [
      "Public Search Portal + Agent Listing Dashboard + Admin CRM",
      "Automated SEO Metadata & XML Sitemap Generator",
      "Cloud Infrastructure Setup with CDN Asset Caching",
      "6 Months Bug-Fix Warranty",
    ],
    included: [
      "Complete Public Listing Web App + Agent Portal + Master Admin",
      "Interactive Map Search & Radius Filter System",
      "Mortgage EMI Loan Calculator Widget",
      "100% Ownership of Codebase & Database",
      "SEO Schema Optimization for High Google Ranking",
      "6 Months Technical Support",
    ],
    excluded: [
      "Google Maps API usage fees exceeding Google's free $200/month credit",
      "Matterport 360 virtual camera hardware and hosting fees",
    ],
    addOns: [
      "Native Mobile App for iOS & Android (+$300 / NPR 45,000)",
      "Automated CRM Lead Pipeline & Call Tracking (+$200 / NPR 31,000)",
    ],
    iconName: "Building2",
  },
  {
    id: "school-college-lms",
    imagePlaceholder: "/images/solutions/school-college-lms.svg?v=2",
    title: "EduCore: School, College & Learning Management ERP (LMS)",
    tagline: "Student attendance, automated fee receipts, online examinations, parent portal & grade cards.",
    category: "EdTech & Services",
    description:
      "Complete educational institution ERP connecting administration, teachers, students, and parents under a unified, intuitive cloud interface. Generates report cards, tracks bus routes, and automates fee invoicing.",
    fullArchitecture:
      "Role-based multi-user web application with bulk Excel student import, SMS broadcast API, automated GPA calculation algorithm, and digital grade sheet PDF generator.",
    priceRange: {
      usd: "$390 – $1,130",
      localEstimated: "NPR 60,000 – 1,75,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "One-Time Custom Setup + AMC",
    },
    deliveryTime: "3 – 4 Weeks",
    targetMarket: "Schools, high schools, colleges, coaching institutes, online academies, training centers.",
    keyFeatures: [
      "Student admission, ID card generator & biographical database",
      "Fee management with invoice generation & online payment gateway",
      "Teacher timetable, daily biometric / QR attendance tracker",
      "Online exam builder with auto-grading & GPA report cards",
      "Parent mobile portal for attendance, notices & homework logs",
      "Library book issue/return & transport fleet tracking",
    ],
    techStack: ["React.js", "Node.js", "PostgreSQL", "Express", "Tailwind CSS", "PDFKit"],
    deliverables: [
      "Admin ERP Portal + Teacher Dashboard + Parent/Student Web App",
      "Custom Report Card & Fee Receipt Template Setup",
      "Data Migration from Old Excel/Access Databases",
      "1 Year Technical Support & Training",
    ],
    included: [
      "Comprehensive Multi-Role Portals (Admin, Teacher, Accountant, Parent)",
      "Automated GPA & Grade Sheet PDF Report Card Generator",
      "Fee Collection & Invoice Engine with Online Gateway Support",
      "Biometric Machine Attendance Sync Script",
      "1 Year Free Maintenance & Staff Onboarding",
    ],
    excluded: [
      "Biometric fingerprint machine hardware devices",
      "Bulk SMS credit costs for sending notices to parents",
    ],
    addOns: [
      "Parent & Student Mobile Apps (iOS & Android) (+$350 / NPR 54,000)",
      "Live GPS Bus Tracking Module (+$200 / NPR 31,000)",
      "Online Video Class Integration with Zoom/Jitsi (+$180 / NPR 28,000)",
    ],
    iconName: "GraduationCap",
  },
  {
    id: "travel-tour-booking",
    imagePlaceholder: "/images/solutions/travel-tour-booking.svg?v=2",
    title: "TrekSync: Travel, Tour & Trekking Agency Booking Engine",
    tagline: "Dynamic itinerary builder, fixed departure dates, multi-currency payments & guide dispatcher.",
    category: "Hospitality & Food",
    description:
      "A stunning, conversion-focused travel portal built specifically for adventure tour operators, trekking agencies, and travel consultants. Includes interactive itinerary day-by-day tabs, gear checklists, and deposit payments.",
    fullArchitecture:
      "Next.js SSR for global Google search ranking, Stripe / PayPal / Local gateway integration, interactive elevation charts, and automated booking PDF voucher dispatch.",
    priceRange: {
      usd: "$290 – $810",
      localEstimated: "NPR 45,000 – 1,25,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "Turnkey Deployment",
    },
    deliveryTime: "2 – 3 Weeks",
    targetMarket: "Trekking agencies, safari operators, adventure tour companies, city tour guides.",
    keyFeatures: [
      "Day-by-day interactive itinerary builder with altitude charts",
      "Fixed departure group booking calendar with remaining slot counter",
      "Multi-currency conversion & international credit card checkout",
      "Custom package inquiry & tailor-made trip builder",
      "Automated booking confirmation voucher & PDF invoice generator",
      "TripAdvisor & Google Review live feed widget",
    ],
    techStack: ["Next.js 14", "Tailwind CSS", "TypeScript", "Node.js", "MongoDB", "Stripe API"],
    deliverables: [
      "Agency Website + Tour Package CMS Dashboard",
      "International Payment Gateway Setup",
      "Core Web Vitals 95+ Score Performance Guarantee",
      "Free Cloudflare CDN & Domain Configuration",
    ],
    included: [
      "High-Conversion Tour Showcase Website + Admin CMS",
      "Day-by-Day Dynamic Itinerary Builder & Elevation Chart",
      "International Credit Card Checkout (Stripe, PayPal, Local)",
      "Automated Booking Confirmation & PDF Voucher Generator",
      "6 Months Complete Maintenance & SEO Schema Setup",
    ],
    excluded: [
      "Credit card payment processor transaction fees (typically charged directly by Stripe/PayPal)",
      "High-resolution travel stock photos/drone footage licensing",
    ],
    addOns: [
      "Interactive 3D Trek Route Mapbox Integration (+$180 / NPR 28,000)",
      "Tour Guide Allocation & Mobile Itinerary App (+$250 / NPR 38,000)",
    ],
    iconName: "Compass",
  },
  {
    id: "logistics-courier-tracker",
    imagePlaceholder: "/images/solutions/logistics-courier-tracker.svg?v=2",
    title: "SwiftTrack: Courier, Cargo & Logistics Fleet Platform",
    tagline: "Airway bill (AWB) generation, live barcode tracking, driver app & automated customer SMS.",
    category: "Enterprise & ERP",
    description:
      "End-to-end parcel delivery and cargo management system. Manages parcel pickup, sorting hub transfers, branch manifests, last-mile rider assignment, and cash-on-delivery (COD) settlements.",
    fullArchitecture:
      "Real-time GPS tracking stream, barcode thermal label generator, driver mobile PWA, and webhook triggers for e-commerce merchant store integrations.",
    priceRange: {
      usd: "$515 – $1,550",
      localEstimated: "NPR 80,000 – 2,40,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "Turnkey Deployment",
    },
    deliveryTime: "3 – 5 Weeks",
    targetMarket: "Courier companies, freight forwarders, e-commerce delivery networks, warehouse distributors.",
    keyFeatures: [
      "Automated Airway Bill (AWB) number & thermal barcode generation",
      "Public real-time parcel tracking page by tracking ID",
      "Branch-to-hub dispatch manifest & sorting ledger",
      "Delivery rider mobile app for signature & photo proof of delivery (POD)",
      "Cash on Delivery (COD) collection & merchant remittance portal",
      "API endpoints for external e-commerce website integration",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Socket.io", "Docker", "Tailwind CSS"],
    deliverables: [
      "Central Hub Admin + Branch Office Portals + Merchant Portal",
      "Rider Mobile Application (PWA / Android)",
      "Barcode Scanner Hardware Integration Guide",
      "High-Volume Cloud Server Setup",
    ],
    included: [
      "Master Logistics Hub Admin + Branch Manifest Console",
      "Merchant E-Commerce API Portal for Booking Bulk Parcels",
      "Delivery Rider Mobile PWA with Proof of Delivery (POD)",
      "Public Live Tracking Page by Tracking Number",
      "Thermal Barcode Label & Manifest PDF Generator",
      "6 Months Dedicated Technical Maintenance",
    ],
    excluded: [
      "Physical barcode scanner guns and thermal printers",
      "SMS gateway provider credit balances",
    ],
    addOns: [
      "Native Android Rider App with Background GPS (+$300 / NPR 45,000)",
      "Shopify & WooCommerce Auto-Fulfillment Plugins (+$250 / NPR 38,000)",
    ],
    iconName: "Truck",
    badge: "Enterprise",
  },
  {
    id: "gym-salon-booking",
    imagePlaceholder: "/images/solutions/gym-salon-booking.svg?v=2",
    title: "FitPulse: Gym, Fitness & Salon Appointment Suite",
    tagline: "Membership plans, trainer/stylist slot booking, automated WhatsApp reminders & QR check-in.",
    category: "Healthcare & Wellness",
    description:
      "Streamlined booking and customer management system for fitness clubs, luxury spas, yoga studios, and hair salons. Eliminates no-shows with automated WhatsApp notifications and tracks recurring membership subscriptions.",
    fullArchitecture:
      "Mobile-first React client, calendar scheduling engine with conflict prevention, automated cron job for subscription expiry alerts, and QR pass generator.",
    priceRange: {
      usd: "$180 – $485",
      localEstimated: "NPR 28,000 – 75,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "Turnkey Deployment",
    },
    deliveryTime: "1 – 2 Weeks",
    targetMarket: "Gyms, CrossFit boxes, luxury salons, beauty clinics, yoga studios, personal trainers.",
    keyFeatures: [
      "Online stylist/trainer appointment booking with time slots",
      "Membership package management (Monthly, Quarterly, Annual)",
      "Member digital QR card for entry turnstile / desk check-in",
      "Automated WhatsApp & SMS expiry & appointment reminders",
      "Service & retail product POS billing with invoice printing",
      "Staff commission & monthly trainer payout calculator",
    ],
    techStack: ["React.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    deliverables: [
      "Receptionist Desktop POS + Member Self-Booking Portal",
      "WhatsApp Notification Gateway Integration",
      "Setup on High-Speed Cloud VPS",
      "Staff Training Video Tutorials",
    ],
    included: [
      "Client Appointment Booking Portal with Slot Selection",
      "Reception POS with Product & Service Billing",
      "Member Digital QR Pass Generator for Check-In",
      "Automated Membership Renewal Alerts",
      "6 Months Free Warranty & Bug-Fix Support",
    ],
    excluded: [
      "Physical turnstile access gate hardware",
      "WhatsApp Cloud API per-conversation message fees charged by Meta",
    ],
    addOns: [
      "Trainer Workout & Diet Plan Mobile App (+$200 / NPR 31,000)",
      "Biometric Turnstile Controller Integration (+$200 / NPR 31,000)",
    ],
    iconName: "Dumbbell",
  },
  {
    id: "fintech-micro-lending",
    imagePlaceholder: "/images/solutions/fintech-micro-lending.svg?v=2",
    title: "LoanEngine: FinTech Micro-Lending & Cooperative ERP",
    tagline: "KYC verification, loan amortization calculation, daily deposit collection & audit ledger.",
    category: "FinTech & Real Estate",
    description:
      "A banking-grade lending and cooperative management platform designed for microfinance institutions, savings cooperatives, and private credit providers. Maintains double-entry accounting and regulatory compliance.",
    fullArchitecture:
      "Strict double-entry accounting ledger with immutable audit logs, AES-256 field-level data encryption, role-based approval hierarchies, and automated loan schedule generators.",
    priceRange: {
      usd: "$775 – $2,325",
      localEstimated: "NPR 1,20,000 – 3,60,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "Turnkey Deployment",
    },
    deliveryTime: "4 – 6 Weeks",
    targetMarket: "Savings cooperatives, micro-lending startups, peer-to-peer lenders, credit unions.",
    keyFeatures: [
      "Member KYC registration with identity document verification",
      "Configurable loan schemes (Flat, Reducing balance, EMI, Daily installment)",
      "Daily savings & recurring deposit collector mobile app",
      "Automated penalty calculation for overdue payments",
      "Full double-entry general ledger, balance sheet & trial balance",
      "Comprehensive audit trail & export to regulatory Excel/XML formats",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Docker", "Redis"],
    deliverables: [
      "Banker Management ERP + Field Collector Mobile App",
      "Automated Financial Accounting Engine",
      "Zero-Trust Security & Encrypted Backup Infrastructure",
      "Complete Compliance & Security Audit Document",
    ],
    included: [
      "Banking-Grade Double-Entry General Ledger & Trial Balance",
      "Configurable Loan Amortization (EMI / Reducing / Flat)",
      "Field Deposit Collector Mobile App with Offline Storage",
      "AES-256 Field Encryption & Daily Encrypted Cloud Backups",
      "1 Year Priority SLA Maintenance & Regulatory Audit Support",
    ],
    excluded: [
      "Regulatory central bank licensing fees",
      "On-premise physical server hardware if choosing on-site installation",
    ],
    addOns: [
      "Member Mobile Banking App with QR Payment (+$550 / NPR 85,000)",
      "AI Credit Scoring & Default Risk Engine (+$400 / NPR 62,000)",
    ],
    iconName: "Banknote",
    badge: "Banking Grade",
  },
  {
    id: "inventory-warehouse-erp",
    imagePlaceholder: "/images/solutions/inventory-warehouse-erp.svg?v=2",
    title: "StockForge: Multi-Branch Inventory & Warehouse ERP",
    tagline: "Real-time stock sync, barcode scanning, purchase order automation & batch expiry alerts.",
    category: "Enterprise & ERP",
    description:
      "A robust enterprise inventory and supply chain system for trading firms, distributors, and manufacturing units. Tracks stock movement across multiple warehouses with automated reorder thresholds.",
    fullArchitecture:
      "High-throughput transactional database architecture with optimistic locking, barcode scanner compatibility, batch/lot tracking, and profit margin analytics.",
    priceRange: {
      usd: "$355 – $1,000",
      localEstimated: "NPR 55,000 – 1,55,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "Turnkey Deployment",
    },
    deliveryTime: "2 – 4 Weeks",
    targetMarket: "Wholesale traders, hardware stores, FMCG distributors, manufacturing plants, chain stores.",
    keyFeatures: [
      "Multi-branch & multi-warehouse real-time inventory ledger",
      "Barcode scanning for lightning-fast stock in/out and sales",
      "Purchase Order (PO) generation & supplier ledger management",
      "Batch number & product expiry tracking with advance warnings",
      "GST / VAT compliant sales invoices & thermal receipts",
      "Gross profit, dead stock & inventory turnover analytics",
    ],
    techStack: ["React.js", "Node.js", "PostgreSQL", "Express", "Tailwind CSS", "Chart.js"],
    deliverables: [
      "Full Warehouse ERP Suite with Multi-Location Support",
      "Thermal & A4 Invoice Template Customization",
      "Data Import Wizard for Existing Stock Items",
      "6 Months Dedicated Maintenance",
    ],
    included: [
      "Multi-Warehouse Inventory Balance & Transfer Manifests",
      "Barcode Label Printing & Scanner Integration",
      "Supplier Purchase Order (PO) & Vendor Ledger",
      "GST/VAT Compliant Invoicing with Thermal & A4 Formats",
      "6 Months Free Warranty & Excel Bulk Import Assistance",
    ],
    excluded: [
      "Physical barcode thermal printers and handheld scanners",
      "Data entry of historical physical paper receipts",
    ],
    addOns: [
      "Warehouse Worker Barcode Scanner Android App (+$220 / NPR 34,000)",
      "B2B Wholesale Customer Ordering Portal (+$280 / NPR 43,000)",
    ],
    iconName: "Boxes",
  },
  {
    id: "on-demand-service-app",
    imagePlaceholder: "/images/solutions/on-demand-service-app.svg?v=2",
    title: "Servicely: On-Demand Home & Professional Services Platform",
    tagline: "Uber-for-services platform with real-time technician matching, escrow payments & live chat.",
    category: "EdTech & Services",
    description:
      "A two-sided marketplace connecting homeowners and businesses with vetted service providers (electricians, plumbers, cleaners, appliance repair). Includes GPS matching, in-app chat, and review systems.",
    fullArchitecture:
      "React Native / Flutter cross-platform mobile apps for Customers & Service Providers, paired with a Next.js administrative dashboard and real-time Socket.io dispatch engine.",
    priceRange: {
      usd: "$615 – $1,800",
      localEstimated: "NPR 95,000 – 2,80,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "Turnkey Deployment",
    },
    deliveryTime: "3 – 5 Weeks",
    targetMarket: "Home service startups, maintenance agencies, freelance contractor networks, cleaning companies.",
    keyFeatures: [
      "Geo-location based nearby service provider matching",
      "Customer booking flow with instant booking or scheduled slots",
      "Service provider app for accepting jobs, navigation & bill creation",
      "Secure digital payment with platform commission deduction",
      "In-app chat & masked phone calling between customer and provider",
      "Customer ratings, reviews & service warranty tracking",
    ],
    techStack: ["React Native", "Flutter", "Next.js", "Node.js", "MongoDB", "Socket.io"],
    deliverables: [
      "Customer Mobile App + Provider Mobile App (iOS & Android)",
      "Admin Super-Dashboard & Dispute Resolution Console",
      "Google Maps & Payment Gateway Integration",
      "App Store & Google Play Store Submission Assistance",
    ],
    included: [
      "Customer Mobile App + Provider Partner App (iOS & Android)",
      "Super Admin Management & Commission Settlement Console",
      "Real-Time Geo-Location Matching Engine",
      "In-App Chat and Rating System",
      "6 Months Comprehensive Technical Support",
    ],
    excluded: [
      "Google Maps API usage charges exceeding free limits",
      "App Store ($99/yr) & Play Store ($25 one-time) developer fees",
    ],
    addOns: [
      "In-App Video Calling for Remote Diagnostic Quotes (+$250 / NPR 38,000)",
      "Subscription Membership Package for Repeat Customers (+$200 / NPR 31,000)",
    ],
    iconName: "Wrench",
  },
  {
    id: "enterprise-ai-chatbot",
    imagePlaceholder: "/images/solutions/enterprise-ai-chatbot.svg?v=2",
    title: "Himnova AgentAI: Enterprise RAG Chatbot & Support Copilot",
    tagline: "Private AI assistant trained on your company data, integrated with WhatsApp & Web.",
    category: "E-Commerce & SaaS",
    description:
      "An intelligent conversational AI assistant that ingests your PDFs, product manuals, FAQs, and database to provide 24/7 instant, human-like customer support with seamless agent escalation.",
    fullArchitecture:
      "Retrieval-Augmented Generation (RAG) pipeline built with LangChain, Qdrant Vector Database, OpenAI / Claude / Local LLM endpoints, and WhatsApp Cloud API integration.",
    priceRange: {
      usd: "$290 – $870",
      localEstimated: "NPR 45,000 – 1,35,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "Turnkey Deployment",
    },
    deliveryTime: "1 – 2 Weeks",
    targetMarket: "E-commerce stores, banks, educational institutes, SaaS startups, corporate support desks.",
    keyFeatures: [
      "Direct ingestion of company PDFs, websites, Notion docs & databases",
      "Zero hallucinations with strict citation-backed answers",
      "Omnichannel support: Website floating widget, WhatsApp & Telegram",
      "Human handover mode when customer requests live agent",
      "Lead generation forms embedded directly inside chat messages",
      "Sentiment analysis & unanswered question analytics dashboard",
    ],
    techStack: ["Python", "FastAPI", "Next.js", "Qdrant", "LangChain", "OpenAI API", "Docker"],
    deliverables: [
      "Custom Trained AI Pipeline & Knowledge Base Embeddings",
      "Embeddable Website Chat Widget + WhatsApp Integration",
      "Analytics & Human Escalation Dashboard",
      "Ongoing Model Optimization & Knowledge Updates",
    ],
    included: [
      "Document Vectorization Pipeline (PDFs, FAQs, Databases)",
      "Website Floating Chat Widget + WhatsApp Cloud API Bot",
      "Human Agent Live Takeover Dashboard",
      "Hallucination Prevention Guardrails & Exact Source Citations",
      "6 Months Architecture Maintenance & Re-Embedding Updates",
    ],
    excluded: [
      "Direct LLM token usage bills (paid to OpenAI / Anthropic or self-hosted GPU)",
      "WhatsApp Business API per-message conversation charges by Meta",
    ],
    addOns: [
      "Self-Hosted Private Local LLM on On-Premise GPU (+$450 / NPR 70,000)",
      "Voice Calling Phone Agent Integration with Twilio (+$400 / NPR 62,000)",
    ],
    iconName: "Bot",
    badge: "AI Powered",
  },
  {
    id: "car-rental-fleet",
    imagePlaceholder: "/images/solutions/car-rental-fleet.svg?v=2",
    title: "DriveSync: Car Rental & Vehicle Fleet Management System",
    tagline: "Self-drive & chauffeur car booking, vehicle availability calendar, fuel logs & damage inspections.",
    category: "Hospitality & Food",
    description:
      "Automates vehicle rental operations from online booking and driver license validation to security deposit management, odometer tracking, and vehicle maintenance schedules.",
    fullArchitecture:
      "Next.js web portal with digital agreement signing, driver license photo OCR capture, vehicle calendar timeline, and GPS tracking API integration.",
    priceRange: {
      usd: "$260 – $710",
      localEstimated: "NPR 40,000 – 1,10,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "Turnkey Deployment",
    },
    deliveryTime: "2 – 3 Weeks",
    targetMarket: "Car rental agencies, luxury chauffeur services, bike rental shops, commercial fleet operators.",
    keyFeatures: [
      "Online vehicle reservation calendar with real-time fleet availability",
      "Customer driver license & passport upload with identity verification",
      "Digital rental contract with on-screen signature capture",
      "Security deposit hold & automated refund calculation",
      "Vehicle maintenance, servicing & insurance renewal alerts",
      "Fuel log, toll charge, and odometer tracking per rental",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    deliverables: [
      "Customer Booking Website + Fleet Manager Dashboard",
      "Digital Rental Agreement Template Setup",
      "Cloud Deployment with Automated Backups",
      "6 Months Technical Support",
    ],
    included: [
      "Online Customer Vehicle Booking Website + Admin Fleet Console",
      "Digital Agreement Signature & Driver License Capture",
      "Security Deposit Ledger & Refund Tracking",
      "Vehicle Maintenance & Insurance Expiry Scheduler",
      "6 Months Technical Support",
    ],
    excluded: [
      "Vehicle OBD-II GPS hardware devices",
      "Customer driving license verification government API fees",
    ],
    addOns: [
      "Driver Chauffeur Mobile App (+$200 / NPR 31,000)",
      "Live GPS Vehicle Tracker Integration (+$180 / NPR 28,000)",
    ],
    iconName: "Car",
  },
  {
    id: "job-board-recruitment-ats",
    imagePlaceholder: "/images/solutions/job-board-recruitment-ats.svg?v=2",
    title: "HireNexus: Job Board & Applicant Tracking System (ATS)",
    tagline: "Employer hiring subscriptions, candidate resume parser, job alert emails & video interviews.",
    category: "EdTech & Services",
    description:
      "A modern job portal and hiring software where companies post jobs, purchase recruiter subscriptions, and manage candidates through Kanban hiring pipelines.",
    fullArchitecture:
      "SEO-optimized Next.js architecture for high Google Jobs indexing, resume PDF text parser, automated email notification queue, and Stripe / Local payment subscriptions.",
    priceRange: {
      usd: "$310 – $840",
      localEstimated: "NPR 48,000 – 1,30,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "Turnkey Deployment",
    },
    deliveryTime: "2 – 4 Weeks",
    targetMarket: "Recruitment agencies, industry niche job boards, HR consultancies, regional job networks.",
    keyFeatures: [
      "Employer membership packages & paid featured job slots",
      "Candidate profile builder with resume PDF upload & parser",
      "Visual Kanban pipeline for applicant tracking (Applied, Screened, Interview, Offered)",
      "Automated job alert emails based on candidate skills and location",
      "Integration with Google for Jobs structured schema for top search ranking",
      "Recruiter team collaboration with interview rating notes",
    ],
    techStack: ["Next.js 14", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis"],
    deliverables: [
      "Public Job Board + Employer ATS Portal + Super Admin Console",
      "Payment Gateway Integration for Job Posting Credits",
      "SEO Schema Optimization for Google Jobs",
      "Complete Codebase & Cloud Deployment",
    ],
    included: [
      "Public Job Search Portal + Employer ATS Dashboard + Super Admin",
      "Resume PDF Parser & Candidate Profile Builder",
      "Visual Kanban Candidate Hiring Pipeline",
      "Google Jobs Structured Data SEO Markup",
      "6 Months Comprehensive Warranty",
    ],
    excluded: [
      "Third-party transactional email provider charges beyond free tiers",
    ],
    addOns: [
      "Candidate Video Interview Recording Engine (+$250 / NPR 38,000)",
      "AI Resume-to-Job Matching Score (+$300 / NPR 45,000)",
    ],
    iconName: "Briefcase",
  },
  {
    id: "pharmacy-medical-pos",
    imagePlaceholder: "/images/solutions/pharmacy-medical-pos.svg?v=2",
    title: "PharmaCare: Pharmacy Billing, Stock & Drug Expiry System",
    tagline: "Generic drug substitution, barcode billing, batch expiry warnings & VAT invoice printing.",
    category: "Healthcare & Wellness",
    description:
      "Specialized retail and wholesale pharmacy software engineered to prevent expired medicine losses, track scheduled drug sales, and accelerate counter checkout times.",
    fullArchitecture:
      "Lightning-fast local/cloud hybrid architecture with offline caching, thermal printer support, generic salt mapping database, and supplier purchase orders.",
    priceRange: {
      usd: "$205 – $515",
      localEstimated: "NPR 32,000 – 80,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "Turnkey Deployment",
    },
    deliveryTime: "1 – 2 Weeks",
    targetMarket: "Retail pharmacies, hospital dispensaries, pharmaceutical distributors, wholesale chemists.",
    keyFeatures: [
      "Quick barcode counter checkout with keyboard-only shortcut support",
      "Preloaded drug database with Generic composition lookup",
      "Near-expiry color coded warning alerts (30/60/90 days)",
      "Doctor prescription record & scheduled drug audit register",
      "Supplier Purchase Order (PO) & return-to-vendor management",
      "Daily cash register reconciliation & tax reports",
    ],
    techStack: ["React.js", "Node.js", "SQLite / PostgreSQL", "Tailwind CSS", "ESC/POS"],
    deliverables: [
      "Pharmacy POS Application + Admin Cloud Portal",
      "Thermal Receipt & Barcode Label Setup",
      "Drug Master Database Preloaded",
      "Lifetime Usage License & Staff Training",
    ],
    included: [
      "Counter POS with Rapid Barcode Scanner & Keyboard Shortcuts",
      "Preloaded Master Pharmaceutical Drug Database",
      "30/60/90 Day Expiry Alert Warning Engine",
      "Doctor Prescription Ledger & Thermal Billing",
      "Lifetime Code Ownership & 6 Months Maintenance",
    ],
    excluded: [
      "Physical barcode scanner gun and thermal printer hardware",
    ],
    addOns: [
      "Online Prescription Upload & Delivery Web App (+$180 / NPR 28,000)",
      "Multi-Store Central Drug Warehouse Sync (+$250 / NPR 38,000)",
    ],
    iconName: "Pill",
  },
  {
    id: "event-qr-ticketing",
    imagePlaceholder: "/images/solutions/event-qr-ticketing.svg?v=2",
    title: "PassGate: Event Management & QR Ticketing Engine",
    tagline: "Event landing pages, seat selection, tier ticket sales & high-speed mobile gate scanner app.",
    category: "EdTech & Services",
    description:
      "A turnkey event ticketing platform comparable to Eventbrite. Enables organizers to sell VIP/Early Bird tickets, accept online payments, and validate attendee QR codes at the entrance gate in under 1 second.",
    fullArchitecture:
      "High-traffic event ticketing queue engine with encrypted anti-counterfeit QR codes, mobile scanner camera PWA, and real-time live attendance analytics.",
    priceRange: {
      usd: "$245 – $615",
      localEstimated: "NPR 38,000 – 95,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "Turnkey Deployment",
    },
    deliveryTime: "2 – 3 Weeks",
    targetMarket: "Concert organizers, tech conferences, sports tournaments, exhibition centers, nightlife clubs.",
    keyFeatures: [
      "High-conversion event landing page with ticket tier checkout",
      "Encrypted anti-counterfeiting QR ticket generated in PDF & Apple Wallet",
      "Mobile gate scanner app (works online and offline)",
      "Instant ticket delivery via Email, SMS & WhatsApp",
      "Promoter discount promo codes & affiliate tracking",
      "Live check-in counter & total revenue analytics dashboard",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "ZXing Barcode Engine"],
    deliverables: [
      "Event Ticket Sales Website + Organizer Management Portal",
      "Entrance Gate Scanner Mobile App",
      "Payment Gateway Integration",
      "Cloud Infrastructure Setup with DDoS Protection",
    ],
    included: [
      "Event Ticket Sales Web Portal + Tier Pricing Checkout",
      "Encrypted Anti-Counterfeit PDF QR Ticket Generator",
      "Mobile Camera Gate Scanner App (Fast sub-1s check-in)",
      "Payment Gateway Integration with Zero Commission on Your Tickets",
      "6 Months Comprehensive Warranty",
    ],
    excluded: [
      "Payment processor transaction fees (eSewa / Khalti / Stripe)",
      "Physical badge printing hardware",
    ],
    addOns: [
      "Interactive Seat Map Selection Canvas (+$220 / NPR 34,000)",
      "NFC Wristband Event Cashless Pay Integration (+$300 / NPR 45,000)",
    ],
    iconName: "Ticket",
  },
  {
    id: "crowdfunding-donation-platform",
    imagePlaceholder: "/images/solutions/crowdfunding-donation-platform.svg?v=2",
    title: "HopeRaise: Crowdfunding & Non-Profit Donation Platform",
    tagline: "Cause campaign pages, live progress bars, donor receipts & transparent fund ledger.",
    category: "FinTech & Real Estate",
    description:
      "Empowers non-profits, NGOs, charities, and creative startups to launch crowdfunding campaigns, accept global donations, and share transparent project milestones with supporters.",
    fullArchitecture:
      "Next.js SSR for maximum social media shareability (OpenGraph previews), multi-currency donation checkout, automated 80G/tax-deductible PDF receipts, and recurring donor subscriptions.",
    priceRange: {
      usd: "$355 – $935",
      localEstimated: "NPR 55,000 – 1,45,000",
      conversionRateNote: "Standard Nepal market baseline rate (@ NPR 155 / USD conversion)",
      model: "Turnkey Deployment",
    },
    deliveryTime: "2 – 4 Weeks",
    targetMarket: "NGOs, non-profit foundations, social enterprises, medical emergency campaigns, creative projects.",
    keyFeatures: [
      "Engaging campaign storytelling pages with video embeds & live progress bars",
      "One-time & monthly recurring donation subscription support",
      "Multi-currency payments (Stripe, PayPal, Local Mobile Wallets)",
      "Automated tax-exemption donation PDF receipt generation",
      "Campaign updates & milestone timeline blog section",
      "Donor wall with public or anonymous donation options",
    ],
    techStack: ["Next.js 14", "TypeScript", "Node.js", "PostgreSQL", "Stripe API", "Tailwind CSS"],
    deliverables: [
      "Public Crowdfunding Portal + Campaign Creator Dashboard",
      "Automated Donor Receipt Dispatcher",
      "Social Media Sharing OpenGraph Optimization",
      "3 Months Dedicated Support",
    ],
    included: [
      "Cause Campaign Web App + Public Donor Wall + Admin Ledger",
      "Recurring Monthly Donation Subscription Engine",
      "Automated Tax-Deductible PDF Receipt Generator",
      "OpenGraph Viral Social Sharing Previews",
      "6 Months Free Warranty & Support",
    ],
    excluded: [
      "Payment gateway standard processing deductions",
    ],
    addOns: [
      "Donor Impact Milestone Mobile App (+$200 / NPR 31,000)",
      "Corporate CSR Match-Funding Module (+$180 / NPR 28,000)",
    ],
    iconName: "HeartHandshake",
  },
];
