const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'blogs');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

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

blogs.forEach(b => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${b.icon}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B0F19" />
      <stop offset="50%" stop-color="#111827" />
      <stop offset="100%" stop-color="#070A10" />
    </linearGradient>
    <linearGradient id="grad-${b.icon}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${b.color1}" />
      <stop offset="100%" stop-color="${b.color2}" />
    </linearGradient>
    <radialGradient id="glow-${b.icon}" cx="80%" cy="20%" r="60%">
      <stop offset="0%" stop-color="${b.color1}" stop-opacity="0.25" />
      <stop offset="100%" stop-color="${b.color1}" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid-${b.icon}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="url(#bg-${b.icon})" />
  <rect width="1200" height="630" fill="url(#grid-${b.icon})" />
  <circle cx="900" cy="150" r="350" fill="url(#glow-${b.icon})" />

  <rect x="50" y="50" width="1100" height="530" rx="24" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.08)" stroke-width="2" />

  <rect x="90" y="90" width="280" height="44" rx="22" fill="rgba(6, 182, 212, 0.12)" stroke="rgba(6, 182, 212, 0.35)" stroke-width="1.5" />
  <text x="115" y="118" fill="#06B6D4" font-family="sans-serif" font-size="14" font-weight="bold" letter-spacing="2">HIMNOVA TECH INSIGHTS</text>

  <g transform="translate(930, 210)">
    <circle cx="80" cy="80" r="80" fill="rgba(255,255,255,0.03)" stroke="url(#grad-${b.icon})" stroke-width="2" />
    <text x="80" y="92" fill="${b.color1}" font-family="sans-serif" font-size="32" font-weight="900" text-anchor="middle">${b.icon}</text>
  </g>

  <text x="90" y="260" fill="#FFFFFF" font-family="sans-serif" font-size="44" font-weight="900" letter-spacing="-1">${b.title}</text>
  <text x="90" y="315" fill="#94A3B8" font-family="sans-serif" font-size="22" font-weight="500">${b.subtitle}</text>

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

  fs.writeFileSync(path.join(dir, b.slug), svg);
});
console.log('Created 16 blog SVG assets successfully in public/images/blogs');
