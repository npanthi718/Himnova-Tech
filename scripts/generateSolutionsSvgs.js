const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'solutions');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const solutions = [
  {
    id: 'ecommerce-multivendor-saas',
    title: 'OmniStore E-Commerce',
    subtitle: 'Multi-Vendor SaaS, Seller Portal & Live Cart Engine',
    category: 'E-Commerce & SaaS',
    color1: '#06B6D4',
    color2: '#3B82F6',
    badge: '10K+ Orders/Day',
    metric1: 'Sub-40ms Cart Sync',
    metric2: 'Multi-Gateway (Stripe/eSewa)',
    icon: 'CART',
    nodes: ['Buyer App', 'Checkout Engine', 'Seller Portal', 'Payment Webhook'],
  },
  {
    id: 'hotel-hostel-pms',
    title: 'HostelHive & StayPMS',
    subtitle: 'Interactive Bed Matrix, Contactless QR & Night Audit',
    category: 'Hospitality & Food',
    color1: '#0EA5E9',
    color2: '#10B981',
    badge: 'RevPAR Optimized',
    metric1: 'Visual Bed Allocation',
    metric2: 'WhatsApp QR Check-In',
    icon: 'HOTEL',
    nodes: ['Room Grid', 'Guest QR', 'Billing POS', 'Night Audit'],
  },
  {
    id: 'restaurant-pos-ordering',
    title: 'DineFlow Restaurant POS',
    subtitle: 'Table QR Ordering, Kitchen Display (KDS) & Split Bill',
    category: 'Hospitality & Food',
    color1: '#F59E0B',
    color2: '#EF4444',
    badge: 'Real-Time KDS',
    metric1: '50% Faster Order Flow',
    metric2: 'Thermal Receipt + KOT',
    icon: 'DINE',
    nodes: ['Table QR', 'Kitchen Screen', 'Cashier POS', 'Raw Stock'],
  },
  {
    id: 'hospital-clinic-emr',
    title: 'MedPulse Hospital EHR',
    subtitle: 'Doctor Prescriptions, Patient OPD Queue & Pharmacy',
    category: 'Healthcare & Wellness',
    color1: '#10B981',
    color2: '#06B6D4',
    badge: 'HIPAA Aligned',
    metric1: 'Encrypted Health History',
    metric2: 'Instant OPD Token',
    icon: 'HEALTH',
    nodes: ['Doctor Desk', 'EHR Ledger', 'Pharmacy POS', 'Lab Reports'],
  },
  {
    id: 'real-estate-portal',
    title: 'EstateNest Property Portal',
    subtitle: 'Geo-Mapped Property Search, 360 Virtual Tours & CRM',
    category: 'FinTech & Real Estate',
    color1: '#8B5CF6',
    color2: '#3B82F6',
    badge: 'Google SEO 100',
    metric1: 'Interactive Radius Search',
    metric2: 'Direct WhatsApp Leads',
    icon: 'ESTATE',
    nodes: ['Map Search', 'Photo 360', 'Agent CRM', 'Mortgage Calc'],
  },
  {
    id: 'school-college-lms',
    title: 'EduCore School & College ERP',
    subtitle: 'Student GPA Engine, Parent Portal & Attendance Sync',
    category: 'EdTech & Services',
    color1: '#3B82F6',
    color2: '#8B5CF6',
    badge: 'Multi-Role SIS',
    metric1: 'Auto GPA Report Cards',
    metric2: 'Biometric Attendance',
    icon: 'EDU',
    nodes: ['Admin ERP', 'Teacher Desk', 'Parent App', 'Exam Engine'],
  },
  {
    id: 'travel-tour-booking',
    title: 'TrekSync Tour Booking',
    subtitle: 'Day-by-Day Dynamic Itinerary, Elevation & Payments',
    category: 'Hospitality & Food',
    color1: '#06B6D4',
    color2: '#10B981',
    badge: 'Global Currency',
    metric1: 'Interactive Elevation Map',
    metric2: 'Instant Voucher PDF',
    icon: 'TREK',
    nodes: ['Itinerary CMS', 'Fixed Departure', 'Card Gateway', 'Guide Desk'],
  },
  {
    id: 'logistics-courier-tracker',
    title: 'SwiftTrack Logistics',
    subtitle: 'Airway Bill (AWB) Generation & Driver Mobile POD',
    category: 'Enterprise & ERP',
    color1: '#10B981',
    color2: '#3B82F6',
    badge: 'Live Barcode GPS',
    metric1: 'Sub-Sec Tracking Query',
    metric2: 'COD Remittance Hub',
    icon: 'TRACK',
    nodes: ['Central Hub', 'Barcode Gun', 'Rider App', 'Merchant API'],
  },
  {
    id: 'gym-salon-booking',
    title: 'FitPulse Gym & Salon',
    subtitle: 'Membership Tiers, Trainer Booking & Digital QR Pass',
    category: 'Healthcare & Wellness',
    color1: '#EC4899',
    color2: '#8B5CF6',
    badge: 'Zero No-Shows',
    metric1: 'Auto WhatsApp Renewal',
    metric2: 'Turnstile QR Pass',
    icon: 'FIT',
    nodes: ['Slot Booking', 'Member Pass', 'POS Register', 'Trainer Desk'],
  },
  {
    id: 'fintech-micro-lending',
    title: 'LoanEngine FinTech ERP',
    subtitle: 'Double-Entry Accounting, Amortization & Field App',
    category: 'FinTech & Real Estate',
    color1: '#10B981',
    color2: '#06B6D4',
    badge: 'Banking Grade',
    metric1: 'Immutable Audit Ledger',
    metric2: 'AES-256 Encryption',
    icon: 'LOAN',
    nodes: ['Loan Calc', 'General Ledger', 'Collector App', 'Audit Trail'],
  },
  {
    id: 'inventory-warehouse-erp',
    title: 'StockForge Inventory ERP',
    subtitle: 'Multi-Warehouse Sync, Barcode Scanner & Batch Expiry',
    category: 'Enterprise & ERP',
    color1: '#06B6D4',
    color2: '#10B981',
    badge: 'Multi-Branch',
    metric1: 'Real-Time Stock Balance',
    metric2: 'GST/VAT Invoicing',
    icon: 'STOCK',
    nodes: ['Multi-Branch', 'Barcode In/Out', 'Purchase Order', 'Tax Reports'],
  },
  {
    id: 'on-demand-service-app',
    title: 'Servicely On-Demand App',
    subtitle: 'Uber-for-Services, Real-Time Tech Match & In-App Chat',
    category: 'EdTech & Services',
    color1: '#3B82F6',
    color2: '#06B6D4',
    badge: 'Cross-Platform',
    metric1: 'Geo-Radius Dispatch',
    metric2: 'Escrow Settlements',
    icon: 'SERV',
    nodes: ['Customer App', 'Geo-Dispatch', 'Provider App', 'Admin Escrow'],
  },
  {
    id: 'enterprise-ai-chatbot',
    title: 'Himnova AgentAI Copilot',
    subtitle: 'Private RAG Vector Ingestion & WhatsApp Cloud Assistant',
    category: 'E-Commerce & SaaS',
    color1: '#8B5CF6',
    color2: '#06B6D4',
    badge: 'Zero Hallucination',
    metric1: 'Qdrant HNSW Vector Search',
    metric2: 'Human Handover Mode',
    icon: 'AI BOT',
    nodes: ['Doc Ingestion', 'Qdrant Vectors', 'LLM Guardrails', 'WhatsApp API'],
  },
  {
    id: 'car-rental-fleet',
    title: 'DriveSync Car Rental',
    subtitle: 'Fleet Availability Calendar, Digital Signatures & OCR',
    category: 'Hospitality & Food',
    color1: '#0EA5E9',
    color2: '#3B82F6',
    badge: 'Digital Contracts',
    metric1: 'License Photo OCR',
    metric2: 'Deposit Refund Ledger',
    icon: 'FLEET',
    nodes: ['Fleet Grid', 'License Verify', 'Digital Contract', 'GPS Logs'],
  },
  {
    id: 'job-board-recruitment-ats',
    title: 'HireNexus ATS Portal',
    subtitle: 'Employer Hiring Subscriptions & Candidate Kanban',
    category: 'EdTech & Services',
    color1: '#06B6D4',
    color2: '#8B5CF6',
    badge: 'Google Jobs Schema',
    metric1: 'Automated Resume Parser',
    metric2: 'Visual Kanban Pipeline',
    icon: 'HIRING',
    nodes: ['Job Board', 'Resume Parser', 'Kanban ATS', 'Stripe Subs'],
  },
  {
    id: 'pharmacy-medical-pos',
    title: 'PharmaCare POS Suite',
    subtitle: 'Generic Salt Lookup, Barcode Counter & Expiry Warnings',
    category: 'Healthcare & Wellness',
    color1: '#10B981',
    color2: '#EF4444',
    badge: 'Sub-Sec Billing',
    metric1: '30/60/90 Day Expiry Alert',
    metric2: 'Scheduled Drug Register',
    icon: 'PHARMA',
    nodes: ['Barcode POS', 'Generic Lookup', 'Expiry Warnings', 'Supplier PO'],
  },
  {
    id: 'event-qr-ticketing',
    title: 'PassGate Event Engine',
    subtitle: 'Tiered Ticket Sales, Mobile Gate Scanner & Anti-Fraud',
    category: 'EdTech & Services',
    color1: '#EC4899',
    color2: '#06B6D4',
    badge: 'Sub-1s Check-In',
    metric1: 'Encrypted QR Tickets',
    metric2: 'Gate Camera Scanner',
    icon: 'TICKET',
    nodes: ['Event Checkout', 'QR Generator', 'Gate Scanner', 'Sales Ledger'],
  },
  {
    id: 'crowdfunding-donation-platform',
    title: 'HopeRaise Crowdfunding',
    subtitle: 'Viral Campaign Pages, Recurring Subscriptions & Receipts',
    category: 'FinTech & Real Estate',
    color1: '#10B981',
    color2: '#F59E0B',
    badge: 'Transparent Ledger',
    metric1: 'Instant 80G Tax PDF',
    metric2: 'Global Currency Checkout',
    icon: 'DONATE',
    nodes: ['Cause Page', 'Live Progress', 'Recurring Donors', 'Tax Receipts'],
  },
];

solutions.forEach((s) => {
  const nodePills = s.nodes
    .map(
      (node, idx) => `
    <rect x="${idx * 135}" y="0" width="125" height="36" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" />
    <text x="${idx * 135 + 62.5}" y="23" fill="#E2E8F0" font-family="monospace" font-size="11" font-weight="600" text-anchor="middle">${node}</text>`
    )
    .join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${s.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F19" />
      <stop offset="50%" stop-color="#111827" />
      <stop offset="100%" stop-color="#070A10" />
    </linearGradient>
    <linearGradient id="grad-${s.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${s.color1}" />
      <stop offset="100%" stop-color="${s.color2}" />
    </linearGradient>
    <radialGradient id="glow-${s.id}" cx="85%" cy="20%" r="55%">
      <stop offset="0%" stop-color="${s.color1}" stop-opacity="0.3" />
      <stop offset="100%" stop-color="${s.color1}" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid-${s.id}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg-${s.id})" />
  <rect width="1200" height="630" fill="url(#grid-${s.id})" />
  <circle cx="950" cy="180" r="380" fill="url(#glow-${s.id})" />

  <!-- Outer Glass Frame -->
  <rect x="40" y="40" width="1120" height="550" rx="28" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.08)" stroke-width="2" />

  <!-- Top Badges -->
  <g transform="translate(80, 80)">
    <rect x="0" y="0" width="230" height="38" rx="19" fill="rgba(6, 182, 212, 0.12)" stroke="rgba(6, 182, 212, 0.4)" stroke-width="1.5" />
    <text x="115" y="24" fill="#06B6D4" font-family="sans-serif" font-size="12" font-weight="800" letter-spacing="1.5" text-anchor="middle">${s.category}</text>

    <rect x="245" y="0" width="160" height="38" rx="19" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.5)" stroke-width="1.5" />
    <text x="325" y="24" fill="#10B981" font-family="sans-serif" font-size="12" font-weight="800" letter-spacing="1" text-anchor="middle">${s.badge}</text>
  </g>

  <!-- Central Symbol Badge -->
  <g transform="translate(900, 140)">
    <rect x="0" y="0" width="180" height="180" rx="36" fill="rgba(255,255,255,0.03)" stroke="url(#grad-${s.id})" stroke-width="2.5" />
    <circle cx="90" cy="90" r="60" fill="url(#grad-${s.id})" fill-opacity="0.1" />
    <text x="90" y="100" fill="url(#grad-${s.id})" font-family="sans-serif" font-size="22" font-weight="900" text-anchor="middle" letter-spacing="1">${s.icon}</text>
  </g>

  <!-- Title & Subtitle -->
  <text x="80" y="220" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="900" letter-spacing="-1">${s.title}</text>
  <text x="80" y="270" fill="#94A3B8" font-family="sans-serif" font-size="20" font-weight="500">${s.subtitle}</text>

  <!-- Live Metrics Box -->
  <g transform="translate(80, 320)">
    <rect x="0" y="0" width="300" height="90" rx="16" fill="rgba(30, 41, 59, 0.7)" stroke="rgba(6, 182, 212, 0.3)" stroke-width="1.5" />
    <text x="24" y="34" fill="#94A3B8" font-family="sans-serif" font-size="12" font-weight="600">KEY CAPABILITY</text>
    <text x="24" y="68" fill="#06B6D4" font-family="sans-serif" font-size="20" font-weight="800">${s.metric1}</text>

    <rect x="325" y="0" width="300" height="90" rx="16" fill="rgba(30, 41, 59, 0.7)" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1.5" />
    <text x="349" y="34" fill="#94A3B8" font-family="sans-serif" font-size="12" font-weight="600">INTEGRATION HIGHLIGHT</text>
    <text x="349" y="68" fill="#10B981" font-family="sans-serif" font-size="20" font-weight="800">${s.metric2}</text>
  </g>

  <!-- Architecture Flow -->
  <g transform="translate(80, 450)">
    <text x="0" y="-12" fill="#64748B" font-family="sans-serif" font-size="12" font-weight="700" letter-spacing="1">ARCHITECTURAL PIPELINE</text>
    ${nodePills}
  </g>

  <!-- Footer Watermark -->
  <text x="80" y="540" fill="#64748B" font-family="sans-serif" font-size="13" font-weight="600">Himnova Ready-to-Deploy Platform • 100% Code Ownership • www.himnovatech.com</text>
</svg>`;

  fs.writeFileSync(path.join(dir, `${s.id}.svg`), svg);
});

console.log('Successfully generated all 18 solutions SVGs');
