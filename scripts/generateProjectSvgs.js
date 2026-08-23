const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'projects');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

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
  const techPills = p.tech
    .map(
      (t, i) => `
    <rect x="${i * 120}" y="0" width="110" height="34" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)"/>
    <text x="${i * 120 + 55}" y="22" fill="#CBD5E1" font-family="monospace" font-size="12" font-weight="600" text-anchor="middle">${t}</text>`
    )
    .join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${p.slug.replace(/[^a-zA-Z0-9]/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F19" />
      <stop offset="60%" stop-color="#111827" />
      <stop offset="100%" stop-color="#070A10" />
    </linearGradient>
    <linearGradient id="grad-${p.slug.replace(/[^a-zA-Z0-9]/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${p.color1}" />
      <stop offset="100%" stop-color="${p.color2}" />
    </linearGradient>
    <radialGradient id="glow-${p.slug.replace(/[^a-zA-Z0-9]/g, '')}" cx="85%" cy="20%" r="55%">
      <stop offset="0%" stop-color="${p.color1}" stop-opacity="0.3" />
      <stop offset="100%" stop-color="${p.color1}" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid-${p.slug.replace(/[^a-zA-Z0-9]/g, '')}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg-${p.slug.replace(/[^a-zA-Z0-9]/g, '')})" />
  <rect width="1200" height="630" fill="url(#grid-${p.slug.replace(/[^a-zA-Z0-9]/g, '')})" />
  <circle cx="950" cy="180" r="380" fill="url(#glow-${p.slug.replace(/[^a-zA-Z0-9]/g, '')})" />

  <!-- Frame -->
  <rect x="40" y="40" width="1120" height="550" rx="28" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.08)" stroke-width="2" />

  <!-- Top Badges -->
  <g transform="translate(80, 80)">
    <rect x="0" y="0" width="220" height="38" rx="19" fill="rgba(6, 182, 212, 0.12)" stroke="rgba(6, 182, 212, 0.4)" stroke-width="1.5" />
    <text x="110" y="24" fill="#06B6D4" font-family="sans-serif" font-size="12" font-weight="800" letter-spacing="1.5" text-anchor="middle">${p.category}</text>

    <rect x="235" y="0" width="120" height="38" rx="19" fill="rgba(16, 185, 129, 0.15)" stroke="rgba(16, 185, 129, 0.5)" stroke-width="1.5" />
    <text x="295" y="24" fill="#10B981" font-family="sans-serif" font-size="12" font-weight="800" letter-spacing="1" text-anchor="middle">COMPLETED</text>

    <rect x="365" y="0" width="80" height="38" rx="19" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1.5" />
    <text x="405" y="24" fill="#94A3B8" font-family="monospace" font-size="12" font-weight="700" text-anchor="middle">${p.year}</text>
  </g>

  <!-- Central Badge Symbol -->
  <g transform="translate(900, 140)">
    <rect x="0" y="0" width="180" height="180" rx="36" fill="rgba(255,255,255,0.03)" stroke="url(#grad-${p.slug.replace(/[^a-zA-Z0-9]/g, '')})" stroke-width="2.5" />
    <circle cx="90" cy="90" r="60" fill="url(#grad-${p.slug.replace(/[^a-zA-Z0-9]/g, '')})" fill-opacity="0.1" />
    <text x="90" y="100" fill="url(#grad-${p.slug.replace(/[^a-zA-Z0-9]/g, '')})" font-family="sans-serif" font-size="24" font-weight="900" text-anchor="middle" letter-spacing="1">${p.iconText}</text>
  </g>

  <!-- Title & Tagline -->
  <text x="80" y="220" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="900" letter-spacing="-1">${p.title}</text>
  <text x="80" y="270" fill="#94A3B8" font-family="sans-serif" font-size="20" font-weight="500">${p.tagline}</text>

  <!-- Live Metric Boxes -->
  <g transform="translate(80, 320)">
    <rect x="0" y="0" width="280" height="90" rx="16" fill="rgba(30, 41, 59, 0.7)" stroke="rgba(6, 182, 212, 0.3)" stroke-width="1.5" />
    <text x="24" y="36" fill="#94A3B8" font-family="sans-serif" font-size="13" font-weight="600">${p.stat1Label}</text>
    <text x="24" y="72" fill="#06B6D4" font-family="sans-serif" font-size="26" font-weight="800">${p.stat1Val}</text>

    <rect x="305" y="0" width="280" height="90" rx="16" fill="rgba(30, 41, 59, 0.7)" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1.5" />
    <text x="329" y="36" fill="#94A3B8" font-family="sans-serif" font-size="13" font-weight="600">${p.stat2Label}</text>
    <text x="329" y="72" fill="#10B981" font-family="sans-serif" font-size="26" font-weight="800">${p.stat2Val}</text>
  </g>

  <!-- Tech Stack Grid -->
  <g transform="translate(80, 450)">
    <text x="0" y="-12" fill="#64748B" font-family="sans-serif" font-size="12" font-weight="700" letter-spacing="1">TECHNOLOGY STACK</text>
    ${techPills}
  </g>

  <!-- Footer Watermark -->
  <text x="80" y="540" fill="#64748B" font-family="sans-serif" font-size="13" font-weight="600">Himnova Technologies Production Case Study • www.himnovatech.com</text>
</svg>`;

  fs.writeFileSync(path.join(dir, p.slug), svg);
});

console.log('Successfully generated all 8 project SVGs');
