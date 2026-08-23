const fs = require('fs');
const path = require('path');

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// ----------------------------------------------------
// 1. GENERATE PROJECT SVGS
// ----------------------------------------------------
const projectDir = path.join(__dirname, '..', 'public', 'images', 'projects');
if (!fs.existsSync(projectDir)) fs.mkdirSync(projectDir, { recursive: true });

const projects = [
  {
    slug: 'skillnexus.svg',
    title: 'SkillNexus Marketplace',
    tagline: 'Peer-to-Peer Human Skill Sharing & Real-Time Mentorship',
    category: 'Full-Stack Web App',
    year: '2026',
    stat1Label: 'Mentor Matching',
    stat1Val: 'Sub-2.5s',
    stat2Label: 'Live WebSockets',
    stat2Val: 'Active',
    color1: '#06B6D4',
    color2: '#3B82F6',
    iconText: 'LEARN',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'WebSockets'],
  },
  {
    slug: 'algocare.svg',
    title: 'AlgoCare ER Queueing',
    tagline: 'Intelligent Hospital Triage & Emergency Room Resource Allocation',
    category: 'Full-Stack Web App',
    year: '2026',
    stat1Label: 'Triage Time Reduction',
    stat1Val: '-45.8%',
    stat2Label: 'SLA Reliability',
    stat2Val: '99.99%',
    color1: '#10B981',
    color2: '#06B6D4',
    iconText: 'TRIAGE',
    tech: ['React', 'Socket.io', 'Node.js', 'Bcrypt', 'MUI'],
  },
  {
    slug: 'emotion-tracker.svg',
    title: 'Emotion Health Tracker',
    tagline: 'Empathetic Mental Wellness Risk Assessment & Behavioral Trends',
    category: 'Frontend Web App',
    year: '2025',
    stat1Label: 'Client-Side Privacy',
    stat1Val: '100% Encrypted',
    stat2Label: 'Trend Accuracy',
    stat2Val: '96.4%',
    color1: '#EC4899',
    color2: '#8B5CF6',
    iconText: 'MOOD',
    tech: ['React', 'TypeScript', 'Recharts', 'Material UI'],
  },
  {
    slug: 'lumbinicare.svg',
    title: 'LumbiniCare Hospital Suite',
    tagline: 'Regional EHR, Pharmacy Stock & Pathology Test Management',
    category: 'Full-Stack Web App',
    year: '2025',
    stat1Label: 'OPD Patients / Day',
    stat1Val: '1,200+',
    stat2Label: 'Pharmacy Sync',
    stat2Val: 'Real-Time',
    color1: '#0EA5E9',
    color2: '#10B981',
    iconText: 'HOSPITAL',
    tech: ['MERN Stack', 'Express', 'React', 'MongoDB', 'REST'],
  },
  {
    slug: 'sushilgpt.svg',
    title: 'SushilGPT AI Platform',
    tagline: 'Full-Stack Conversational LLM with Server-Sent Events Streaming',
    category: 'Full-Stack Web App',
    year: '2025',
    stat1Label: 'Streaming Latency',
    stat1Val: 'Sub-85ms',
    stat2Label: 'Multi-Thread State',
    stat2Val: 'MongoDB',
    color1: '#8B5CF6',
    color2: '#06B6D4',
    iconText: 'AI CHAT',
    tech: ['Next.js', 'OpenAI API', 'SSE Stream', 'Node.js'],
  },
  {
    slug: 'facemark.svg',
    title: 'FaceMark Attendance AI',
    tagline: 'Computer Vision Facial Feature Extraction & Anti-Spoofing',
    category: 'AI & Computer Vision',
    year: '2024',
    stat1Label: 'Face Match Speed',
    stat1Val: '0.12s',
    stat2Label: 'Spoof Detection',
    stat2Val: 'Active',
    color1: '#F59E0B',
    color2: '#EF4444',
    iconText: 'VISION',
    tech: ['Python 3.9', 'OpenCV 4.x', 'Face Recog', 'Tkinter'],
  },
  {
    slug: 'stocksmart.svg',
    title: 'StockSmart ERP & POS',
    tagline: 'Barcode Inventory Tracking, Auto-Reorder & GST/VAT Invoicing',
    category: 'Enterprise ERP',
    year: '2024',
    stat1Label: 'SKU Inventory Cap',
    stat1Val: '50,000+',
    stat2Label: 'Barcode Checkout',
    stat2Val: 'Sub-1 Sec',
    color1: '#06B6D4',
    color2: '#10B981',
    iconText: 'ERP POS',
    tech: ['MERN Stack', 'Node.js', 'MongoDB', 'Thermal ESC'],
  },
  {
    slug: 'studenttrack.svg',
    title: 'StudentTrack SIS & LMS',
    tagline: 'Django Academic Administration, GPA Analytics & Parent Portal',
    category: 'Full-Stack Web App',
    year: '2024',
    stat1Label: 'Enrolled Students',
    stat1Val: '3,500+',
    stat2Label: 'Auto GPA Engine',
    stat2Val: 'Relational',
    color1: '#3B82F6',
    color2: '#8B5CF6',
    iconText: 'EDUTRACK',
    tech: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS'],
  },
];

projects.forEach((p) => {
  const safeId = p.slug.replace(/[^a-zA-Z0-9]/g, '');
  const techPills = p.tech
    .map(
      (t, i) => `
    <rect x="${i * 120}" y="0" width="110" height="34" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)"/>
    <text x="${i * 120 + 55}" y="22" fill="#CBD5E1" font-family="monospace" font-size="12" font-weight="600" text-anchor="middle">${escapeXml(t)}</text>`
    )
    .join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="100%" height="100%">
  <defs>
    <linearGradient id="bg_${safeId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F19" />
      <stop offset="60%" stop-color="#111827" />
      <stop offset="100%" stop-color="#070A10" />
    </linearGradient>
    <linearGradient id="grad_${safeId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${p.color1}" />
      <stop offset="100%" stop-color="${p.color2}" />
    </linearGradient>
    <radialGradient id="glow_${safeId}" cx="85%" cy="20%" r="55%">
      <stop offset="0%" stop-color="${p.color1}" stop-opacity="0.3" />
      <stop offset="100%" stop-color="${p.color1}" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid_${safeId}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="url(#bg_${safeId})" />
  <rect width="1200" height="630" fill="url(#grid_${safeId})" />
  <circle cx="950" cy="180" r="380" fill="url(#glow_${safeId})" />

  <rect x="40" y="40" width="1120" height="550" rx="28" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.08)" stroke-width="2" />

  <g transform="translate(80, 80)">
    <rect x="0" y="0" width="220" height="38" rx="19" fill="rgba(6, 182, 212, 0.12)" stroke="rgba(6, 182, 212, 0.4)" stroke-width="1.5" />
    <text x="110" y="24" fill="#06B6D4" font-family="sans-serif" font-size="12" font-weight="800" letter-spacing="1.5" text-anchor="middle">${escapeXml(p.category)}</text>

    <rect x="235" y="0" width="120" height="38" rx="19" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.5)" stroke-width="1.5" />
    <text x="295" y="24" fill="#10B981" font-family="sans-serif" font-size="12" font-weight="800" letter-spacing="1" text-anchor="middle">COMPLETED</text>

    <rect x="365" y="0" width="80" height="38" rx="19" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1.5" />
    <text x="405" y="24" fill="#94A3B8" font-family="monospace" font-size="12" font-weight="700" text-anchor="middle">${escapeXml(p.year)}</text>
  </g>

  <g transform="translate(900, 140)">
    <rect x="0" y="0" width="180" height="180" rx="36" fill="rgba(255,255,255,0.03)" stroke="url(#grad_${safeId})" stroke-width="2.5" />
    <circle cx="90" cy="90" r="60" fill="url(#grad_${safeId})" fill-opacity="0.1" />
    <text x="90" y="100" fill="url(#grad_${safeId})" font-family="sans-serif" font-size="24" font-weight="900" text-anchor="middle" letter-spacing="1">${escapeXml(p.iconText)}</text>
  </g>

  <text x="80" y="220" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="900" letter-spacing="-1">${escapeXml(p.title)}</text>
  <text x="80" y="270" fill="#94A3B8" font-family="sans-serif" font-size="20" font-weight="500">${escapeXml(p.tagline)}</text>

  <g transform="translate(80, 320)">
    <rect x="0" y="0" width="280" height="90" rx="16" fill="rgba(30, 41, 59, 0.7)" stroke="rgba(6, 182, 212, 0.3)" stroke-width="1.5" />
    <text x="24" y="36" fill="#94A3B8" font-family="sans-serif" font-size="13" font-weight="600">${escapeXml(p.stat1Label)}</text>
    <text x="24" y="72" fill="#06B6D4" font-family="sans-serif" font-size="26" font-weight="800">${escapeXml(p.stat1Val)}</text>

    <rect x="305" y="0" width="280" height="90" rx="16" fill="rgba(30, 41, 59, 0.7)" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1.5" />
    <text x="329" y="36" fill="#94A3B8" font-family="sans-serif" font-size="13" font-weight="600">${escapeXml(p.stat2Label)}</text>
    <text x="329" y="72" fill="#10B981" font-family="sans-serif" font-size="26" font-weight="800">${escapeXml(p.stat2Val)}</text>
  </g>

  <g transform="translate(80, 450)">
    <text x="0" y="-12" fill="#64748B" font-family="sans-serif" font-size="12" font-weight="700" letter-spacing="1">TECHNOLOGY STACK</text>
    ${techPills}
  </g>

  <text x="80" y="540" fill="#64748B" font-family="sans-serif" font-size="13" font-weight="600">Himnova Technologies Production Case Study • www.himnovatech.com</text>
</svg>`;

  fs.writeFileSync(path.join(projectDir, p.slug), svg);
});
console.log('Project SVGs regenerated cleanly with XML escaping.');

// ----------------------------------------------------
// 2. GENERATE SOLUTIONS SVGS
// ----------------------------------------------------
const solDir = path.join(__dirname, '..', 'public', 'images', 'solutions');
if (!fs.existsSync(solDir)) fs.mkdirSync(solDir, { recursive: true });

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
  const safeId = s.id.replace(/[^a-zA-Z0-9]/g, '');
  const nodePills = s.nodes
    .map(
      (node, idx) => `
    <rect x="${idx * 135}" y="0" width="125" height="36" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" />
    <text x="${idx * 135 + 62.5}" y="23" fill="#E2E8F0" font-family="monospace" font-size="11" font-weight="600" text-anchor="middle">${escapeXml(node)}</text>`
    )
    .join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="100%" height="100%">
  <defs>
    <linearGradient id="bg_${safeId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F19" />
      <stop offset="50%" stop-color="#111827" />
      <stop offset="100%" stop-color="#070A10" />
    </linearGradient>
    <linearGradient id="grad_${safeId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${s.color1}" />
      <stop offset="100%" stop-color="${s.color2}" />
    </linearGradient>
    <radialGradient id="glow_${safeId}" cx="85%" cy="20%" r="55%">
      <stop offset="0%" stop-color="${s.color1}" stop-opacity="0.3" />
      <stop offset="100%" stop-color="${s.color1}" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid_${safeId}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="url(#bg_${safeId})" />
  <rect width="1200" height="630" fill="url(#grid_${safeId})" />
  <circle cx="950" cy="180" r="380" fill="url(#glow_${safeId})" />

  <rect x="40" y="40" width="1120" height="550" rx="28" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.08)" stroke-width="2" />

  <g transform="translate(80, 80)">
    <rect x="0" y="0" width="230" height="38" rx="19" fill="rgba(6, 182, 212, 0.12)" stroke="rgba(6, 182, 212, 0.4)" stroke-width="1.5" />
    <text x="115" y="24" fill="#06B6D4" font-family="sans-serif" font-size="12" font-weight="800" letter-spacing="1.5" text-anchor="middle">${escapeXml(s.category)}</text>

    <rect x="245" y="0" width="160" height="38" rx="19" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.5)" stroke-width="1.5" />
    <text x="325" y="24" fill="#10B981" font-family="sans-serif" font-size="12" font-weight="800" letter-spacing="1" text-anchor="middle">${escapeXml(s.badge)}</text>
  </g>

  <g transform="translate(900, 140)">
    <rect x="0" y="0" width="180" height="180" rx="36" fill="rgba(255,255,255,0.03)" stroke="url(#grad_${safeId})" stroke-width="2.5" />
    <circle cx="90" cy="90" r="60" fill="url(#grad_${safeId})" fill-opacity="0.1" />
    <text x="90" y="100" fill="url(#grad_${safeId})" font-family="sans-serif" font-size="22" font-weight="900" text-anchor="middle" letter-spacing="1">${escapeXml(s.icon)}</text>
  </g>

  <text x="80" y="220" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="900" letter-spacing="-1">${escapeXml(s.title)}</text>
  <text x="80" y="270" fill="#94A3B8" font-family="sans-serif" font-size="20" font-weight="500">${escapeXml(s.subtitle)}</text>

  <g transform="translate(80, 320)">
    <rect x="0" y="0" width="300" height="90" rx="16" fill="rgba(30, 41, 59, 0.7)" stroke="rgba(6, 182, 212, 0.3)" stroke-width="1.5" />
    <text x="24" y="34" fill="#94A3B8" font-family="sans-serif" font-size="12" font-weight="600">KEY CAPABILITY</text>
    <text x="24" y="68" fill="#06B6D4" font-family="sans-serif" font-size="20" font-weight="800">${escapeXml(s.metric1)}</text>

    <rect x="325" y="0" width="300" height="90" rx="16" fill="rgba(30, 41, 59, 0.7)" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1.5" />
    <text x="349" y="34" fill="#94A3B8" font-family="sans-serif" font-size="12" font-weight="600">INTEGRATION HIGHLIGHT</text>
    <text x="349" y="68" fill="#10B981" font-family="sans-serif" font-size="20" font-weight="800">${escapeXml(s.metric2)}</text>
  </g>

  <g transform="translate(80, 450)">
    <text x="0" y="-12" fill="#64748B" font-family="sans-serif" font-size="12" font-weight="700" letter-spacing="1">ARCHITECTURAL PIPELINE</text>
    ${nodePills}
  </g>

  <text x="80" y="540" fill="#64748B" font-family="sans-serif" font-size="13" font-weight="600">Himnova Ready-to-Deploy Platform • 100% Code Ownership • www.himnovatech.com</text>
</svg>`;

  fs.writeFileSync(path.join(solDir, `${s.id}.svg`), svg);
});
console.log('Solutions SVGs regenerated cleanly with XML escaping.');

// ----------------------------------------------------
// 3. GENERATE BLOG SVGS
// ----------------------------------------------------
const blogDir = path.join(__dirname, '..', 'public', 'images', 'blogs');
if (!fs.existsSync(blogDir)) fs.mkdirSync(blogDir, { recursive: true });

const blogs = [
  { slug: 'agentic-ai-revolution.svg', title: 'Agentic AI Systems', subtitle: 'Autonomous Multi-Agent Orchestration & Vector Memory', color1: '#06B6D4', color2: '#3B82F6', icon: 'BOT' },
  { slug: 'microservices-go-k8s.svg', title: 'Go & Kubernetes', subtitle: 'Next.js 14 RSC, Go Microservices & Cloud-Native Pods', color1: '#0EA5E9', color2: '#06B6D4', icon: 'K8S' },
  { slug: 'zero-trust-security.svg', title: 'Zero-Trust Architecture', subtitle: 'Multi-Tenant Isolation, RLS & Ephemeral mTLS', color1: '#10B981', color2: '#06B6D4', icon: 'SEC' },
  { slug: 'custom-pms-pos-roi.svg', title: 'Custom PMS & POS ROI', subtitle: 'Why Tailored Software Beats Generic SaaS Subscriptions', color1: '#F59E0B', color2: '#EF4444', icon: 'ROI' },
  { slug: 'vector-databases-rag.svg', title: 'Vector DBs & RAG', subtitle: 'Qdrant HNSW Graphs, LangChain & Hybrid Search', color1: '#8B5CF6', color2: '#3B82F6', icon: 'RAG' },
  { slug: 'cross-platform-mobile.svg', title: 'Mobile Dev in 2026', subtitle: 'Flutter Impeller vs React Native Fabric Architecture', color1: '#06B6D4', color2: '#8B5CF6', icon: 'APP' },
  { slug: 'devops-terraform-cicd.svg', title: 'DevOps at Scale', subtitle: 'Terraform IaC, Docker Hardening & Zero-Downtime CI/CD', color1: '#3B82F6', color2: '#10B981', icon: 'OPS' },
  { slug: 'monolith-migration.svg', title: 'Monolith Migration', subtitle: 'Strangler Fig Pattern & Domain-Driven Microservices', color1: '#EC4899', color2: '#8B5CF6', icon: 'MIG' },
  { slug: 'websockets-vs-sse.svg', title: 'Real-Time Streaming', subtitle: 'WebSockets vs Server-Sent Events for Live AI Applications', color1: '#06B6D4', color2: '#10B981', icon: 'SSE' },
  { slug: 'fintech-security.svg', title: 'FinTech & Banking Security', subtitle: 'Double-Entry Accounting, AES-256 & KYC Regulatory Pipelines', color1: '#10B981', color2: '#3B82F6', icon: 'PAY' },
  { slug: 'modern-ui-ux.svg', title: 'Modern UI/UX Systems', subtitle: 'Micro-Interactions, Glassmorphism & Core Web Vitals', color1: '#06B6D4', color2: '#EC4899', icon: 'UI' },
  { slug: 'high-throughput-ecommerce.svg', title: '10,000+ RPS E-Commerce', subtitle: 'High-Concurrency Redis Caching & Distributed Flash Sales', color1: '#F59E0B', color2: '#06B6D4', icon: 'ECOM' },
  { slug: 'ai-healthcare-ehr.svg', title: 'Healthcare AI & EHR', subtitle: 'AlgoCare Emergency Triage & Computer Vision Diagnostics', color1: '#EF4444', color2: '#06B6D4', icon: 'MED' },
  { slug: 'cloud-finops.svg', title: 'Cloud FinOps Strategy', subtitle: 'How We Cut AWS & GCP Cloud Expenditure by 35-50%', color1: '#10B981', color2: '#F59E0B', icon: 'FIN' },
  { slug: 'kathmandu-tech-rise.svg', title: 'Kathmandu Cloud Hub', subtitle: 'Nepal Top 1% Engineering & Global Software Exports', color1: '#06B6D4', color2: '#3B82F6', icon: 'NPL' },
  { slug: 'postgresql-optimization.svg', title: 'PostgreSQL Optimization', subtitle: 'PgBouncer Connection Pooling, GIN Indexes & Query Plans', color1: '#3B82F6', color2: '#06B6D4', icon: 'SQL' }
];

blogs.forEach((b) => {
  const safeId = b.slug.replace(/[^a-zA-Z0-9]/g, '');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="100%" height="100%">
  <defs>
    <linearGradient id="bg_${safeId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F19" />
      <stop offset="50%" stop-color="#111827" />
      <stop offset="100%" stop-color="#070A10" />
    </linearGradient>
    <linearGradient id="grad_${safeId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${b.color1}" />
      <stop offset="100%" stop-color="${b.color2}" />
    </linearGradient>
    <radialGradient id="glow_${safeId}" cx="80%" cy="20%" r="60%">
      <stop offset="0%" stop-color="${b.color1}" stop-opacity="0.25" />
      <stop offset="100%" stop-color="${b.color1}" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid_${safeId}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="url(#bg_${safeId})" />
  <rect width="1200" height="630" fill="url(#grid_${safeId})" />
  <circle cx="900" cy="150" r="350" fill="url(#glow_${safeId})" />

  <rect x="50" y="50" width="1100" height="530" rx="24" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.08)" stroke-width="2" />

  <rect x="90" y="90" width="280" height="44" rx="22" fill="rgba(6, 182, 212, 0.12)" stroke="rgba(6, 182, 212, 0.35)" stroke-width="1.5" />
  <text x="115" y="118" fill="#06B6D4" font-family="sans-serif" font-size="14" font-weight="bold" letter-spacing="2">HIMNOVA TECH INSIGHTS</text>

  <g transform="translate(930, 210)">
    <circle cx="80" cy="80" r="80" fill="rgba(255,255,255,0.03)" stroke="url(#grad_${safeId})" stroke-width="2" />
    <text x="80" y="92" fill="${b.color1}" font-family="sans-serif" font-size="32" font-weight="900" text-anchor="middle">${escapeXml(b.icon)}</text>
  </g>

  <text x="90" y="260" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="900" letter-spacing="-1">${escapeXml(b.title)}</text>
  <text x="90" y="315" fill="#94A3B8" font-family="sans-serif" font-size="22" font-weight="500">${escapeXml(b.subtitle)}</text>

  <path d="M 90 380 L 750 380" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
  <g transform="translate(90, 410)">
    <rect x="0" y="0" width="180" height="54" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" />
    <text x="90" y="32" fill="#E2E8F0" font-family="monospace" font-size="14" text-anchor="middle">Next.js 14 RSC</text>

    <path d="M 180 27 L 220 27" stroke="${b.color1}" stroke-width="2" stroke-dasharray="4" />

    <rect x="220" y="0" width="200" height="54" rx="12" fill="rgba(6, 182, 212, 0.15)" stroke="#06B6D4" stroke-width="1.5" />
    <text x="320" y="32" fill="#06B6D4" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">Go / Python Core</text>

    <path d="M 420 27 L 460 27" stroke="${b.color2}" stroke-width="2" stroke-dasharray="4" />

    <rect x="460" y="0" width="200" height="54" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" />
    <text x="560" y="32" fill="#E2E8F0" font-family="monospace" font-size="14" text-anchor="middle">Cloud Native DB</text>
  </g>

  <text x="90" y="525" fill="#64748B" font-family="sans-serif" font-size="14" font-weight="600">www.himnovatech.com • Production Architecture Series</text>
</svg>`;

  fs.writeFileSync(path.join(blogDir, b.slug), svg);
});
console.log('Blog SVGs regenerated cleanly with XML escaping.');
