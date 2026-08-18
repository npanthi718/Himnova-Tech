export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDetails: string;
  focusArea: string;
  valueCreated: string;
  iconName:
    | "Code"
    | "Globe"
    | "Layout"
    | "Smartphone"
    | "CreditCard"
    | "Megaphone"
    | "FileText"
    | "HelpCircle"
    | "Cloud"
    | "Server"
    | "Calendar"
    | "Share2"
    | "BarChart3"
    | "ShieldCheck";
  features: string[];
  metrics: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Full-Stack Web App" | "Frontend Web App" | "AI & Computer Vision" | "Enterprise ERP";
  year: string;
  status: "Completed" | "In Production";
  techStack: string[];
  features: string[];
  imagePlaceholder: string;
}

export interface CareerItem {
  id: string;
  role: string;
  department: string;
  locationType: "Remote" | "Hybrid (Kathmandu)" | "On-Site";
  experience: string;
  salaryRange: string;
  responsibilities: string[];
  requirements: string[];
}

export interface CapabilityItem {
  iconName: ServiceItem["iconName"];
  label: string;
  metric: string;
  unit: string;
}

export interface SiteConfig {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    url: string;
  };
  company: {
    name: string;
    legalName: string;
    motto: string;
    tagline: string;
    establishedYear: number;
    headquarters: {
      city: string;
      country: string;
      address: string;
      landmark: string;
    };
    contact: {
      email: string;
      salesEmail: string;
      careersEmail: string;
      phonePrimary: string;
      phoneSecondary: string;
    };
    social: {
      linkedin: string;
      github: string;
      twitter: string;
      facebook: string;
      instagram?: string;
    };
    stats: Array<{ label: string; value: string; suffix?: string }>;
  };
  directorMessage: {
    name: string;
    title: string;
    avatar: string;
    paragraphs: string[];
    quote: string;
  };
  visionMission: {
    vision: {
      title: string;
      statement: string;
      highlights: string[];
    };
    mission: {
      title: string;
      statement: string;
      highlights: string[];
    };
  };
  services: ServiceItem[];
  projects: ProjectItem[];
  careers: CareerItem[];
  capabilities: CapabilityItem[];
  navLinks: Array<{ label: string; href: string }>;
  footerLinks: {
    company: Array<{ label: string; href: string }>;
    services: Array<{ label: string; href: string }>;
    legal: Array<{ label: string; href: string }>;
  };
}

export const siteData: SiteConfig = {
  meta: {
    title: "Himnova Technologies | The Next Era of Cloud Intelligence",
    description:
      "Himnova Technologies Private Limited delivers 14 specialized IT services, enterprise cloud automation, custom software, and real-world deployed projects.",
    keywords: [
      "Himnova Technologies",
      "Cloud Intelligence",
      "Nepal Tech Export",
      "Custom Software Kathmandu",
      "DevOps Automation",
      "Agentic AI",
      "IT Services Nepal",
    ],
    ogImage: "/images/office-hero.png",
    url: "https://himnovatech.com",
  },
  company: {
    name: "Himnova",
    legalName: "Himnova Technologies Private Limited",
    motto: "The Next Era of Cloud Intelligence",
    tagline:
      "From custom software and web platforms to cloud deployment, digital marketing, and 24/7 support — we build and deliver production-ready software systems.",
    establishedYear: 2024,
    headquarters: {
      city: "Kathmandu",
      country: "Nepal",
      address: "Baneshwor-31, Kathmandu 44600",
      landmark: "Oppossite to Deurali Club",
    },
    contact: {
      email: "support.himnovatech@gmail.com",
      salesEmail: "support.himnovatech@gmail.com",
      careersEmail: "support.himnovatech@gmail.com",
      phonePrimary: "+977 9823009467",
      phoneSecondary: "+977 9823009467 / +91 9359029905",
    },
    social: {
      linkedin: "https://www.linkedin.com/in/himnova-technologies-private-limited-06779442a/",
      github: "https://github.com/npanthi718",
      twitter: "https://x.com/himnovatech",
      facebook: "https://www.facebook.com/profile.php?id=61593383187833",
      instagram: "https://www.instagram.com/himnovatech/",
    },
    stats: [
      { label: "Uptime Reliability", value: "99.99%", suffix: "SLA" },
      { label: "IT Services Offered", value: "14", suffix: "Specialized" },
      { label: "Delivered Projects", value: "50+", suffix: "Enterprise" },
      { label: "Engineering Talent", value: "50+", suffix: "Specialists" },
    ],
  },
  directorMessage: {
    name: "Er. Sushil Panthi",
    title: "Chairman, Executive Director & Chief Architect",
    avatar: "/images/director-avatar.png",
    quote:
      "We don't merely adapt to technological shifts; we architect the cloud intelligent paradigms that empower businesses worldwide to transcend boundaries.",
    paragraphs: [
      "At Himnova Technologies, our founding commitment is rooted in absolute engineering precision and relentless innovation. Operating from Kathmandu, we have cultivated a world-class R&D ecosystem capable of rivaling Silicon Valley standards in distributed cloud computing, resilient data engineering, and generative AI orchestration.",
      "As software systems undergo a foundational transformation toward autonomous agentic intelligence, modern enterprises require partners who prioritize zero-downtime reliability, low-latency microservices, and absolute data sovereignty. Every pipeline we deploy and every line of code we write is crafted with this enterprise-grade rigor.",
      "Whether migrating complex legacy clusters to Kubernetes-native architectures or deploying private LLMs trained on proprietary enterprise knowledge, Himnova stands at the vanguard of South Asia's tech export revolution. We welcome you to collaborate with us as we forge the next era of global cloud intelligence.",
    ],
  },
  visionMission: {
    vision: {
      title: "Our Vision",
      statement:
        "To become the world's most trusted cloud intelligence and agentic software architecture laboratory, pioneering transformative digital infrastructure from the heart of the Himalayas.",
      highlights: [
        "Architecting autonomous self-healing cloud networks",
        "Setting global benchmarks for high-throughput software exports from Nepal",
        "Driving ethical enterprise AI integration with zero privacy compromise",
      ],
    },
    mission: {
      title: "Our Mission",
      statement:
        "To empower enterprises worldwide by engineering resilient, hyper-scalable cloud solutions, custom full-stack ecosystems, and AI pipelines that unlock unprecedented operational efficiency.",
      highlights: [
        "Uncompromising adherence to 99.99% uptime and zero-trust security",
        "Cultivating top 1% engineering talent through continuous research",
        "Accelerating client time-to-market with automated DevOps CI/CD pipelines",
      ],
    },
  },
  services: [
    {
      id: "custom-software",
      title: "Custom Software Development",
      shortDescription: "Tailored solutions for your unique business needs.",
      fullDetails:
        "We engineer bespoke software systems — from internal workflows and complex backend engines to scalable domain-driven software architectures. Built with Go, Node.js, and PostgreSQL for high transaction volume.",
      focusArea: "Internal Workflows & High-Throughput Engines",
      valueCreated: "Replaces rigid off-the-shelf software with tailored business logic.",
      iconName: "Code",
      features: [
        "Tailored Domain-Driven Software Logic",
        "Event-Driven Microservices (Node.js / Go)",
        "PostgreSQL & MongoDB High-Concurrency Clusters",
        "RESTful & GraphQL API Architecture",
      ],
      metrics: "Custom Business Process Automation",
    },
    {
      id: "web-apps-platforms",
      title: "Web Applications & Platforms",
      shortDescription: "Interactive platforms that power online business.",
      fullDetails:
        "Our web engineering team builds production-ready platforms with real-time capabilities, seamless user authentication, and high-concurrency database integration using Next.js and MERN stack.",
      focusArea: "Interactive Web SaaS & Portal Engineering",
      valueCreated: "Powers digital business operations with fast, interactive web apps.",
      iconName: "Globe",
      features: [
        "Next.js App Router & React 18 SSR",
        "Real-Time WebSockets & Live Dashboards",
        "Secure JWT / OAuth2 Authentication",
        "Stateful Micro-Frontend Architecture",
      ],
      metrics: "Sub-Second Page Load Performance",
    },
    {
      id: "website-design-dev",
      title: "Website Design & Development",
      shortDescription: "Professional digital presence that converts.",
      fullDetails:
        "We design and develop pixel-perfect websites optimized for Core Web Vitals, user engagement, and SEO visibility. Combining sleek visual hierarchy with mobile-first responsiveness.",
      focusArea: "Corporate Web Branding & Conversion",
      valueCreated: "Elevates brand authority and maximizes visitor-to-client conversion.",
      iconName: "Layout",
      features: [
        "Pixel-Perfect UI/UX Design System",
        "Optimized for Google Core Web Vitals",
        "Framer Motion Micro-Animations",
        "100% Mobile & Tablet Responsive",
      ],
      metrics: "100/100 Lighthouse Performance Score",
    },
    {
      id: "mobile-app-dev",
      title: "Mobile App Development",
      shortDescription: "Native & cross-platform apps for every screen.",
      fullDetails:
        "From consumer-facing apps to enterprise mobility solutions, we deliver 60fps native-grade iOS and Android experiences engineered with React Native and Flutter.",
      focusArea: "Cross-Platform iOS & Android Mobility",
      valueCreated: "Expands customer reach across all smartphone platforms seamlessly.",
      iconName: "Smartphone",
      features: [
        "Flutter & React Native Unified Codebase",
        "Offline-First SQLite Local Synchronization",
        "Biometric Security & Encrypted Keychains",
        "App Store & Google Play Automated CI/CD",
      ],
      metrics: "60 FPS Fluid Interface Animation",
    },
    {
      id: "subscription-software",
      title: "Subscription-Based Software Solutions",
      shortDescription: "Affordable SaaS without heavy upfront costs.",
      fullDetails:
        "We build and host subscription software products — CRM tools, ERP systems, and billing suites offered with transparent recurring pricing and continuous feature updates.",
      focusArea: "Multi-Tenant SaaS & Recurring Utility Tools",
      valueCreated: "Eliminates massive capital expenses through predictable SaaS billing.",
      iconName: "CreditCard",
      features: [
        "Multi-Tenant Database Isolation",
        "Automated Subscription Billing & Invoicing",
        "Role-Based Access Control (RBAC)",
        "Zero-Downtime Rolling Upgrades",
      ],
      metrics: "99.9% Cloud Service Level Agreement",
    },
    {
      id: "digital-marketing-branding",
      title: "Digital Marketing & Branding",
      shortDescription: "Data-driven campaigns with measurable ROI.",
      fullDetails:
        "Our marketing team crafts integrated digital strategies — combining paid media, funnel optimization, and brand identity design to accelerate market acquisition.",
      focusArea: "Brand Strategy & Growth Performance Marketing",
      valueCreated: "Drives qualified enterprise lead generation and market expansion.",
      iconName: "Megaphone",
      features: [
        "Omnichannel Brand Identity Guidelines",
        "Data-Backed PPC & Social Media Campaigns",
        "Conversion Rate Optimization (CRO)",
        "Attribution Modeling & Analytics",
      ],
      metrics: "3.5x Average Return On Ad Spend",
    },
    {
      id: "content-creation-mgmt",
      title: "Content Creation & Management",
      shortDescription: "Engaging content that builds authority.",
      fullDetails:
        "We manage end-to-end content pipelines — from editorial calendars and technical whitepapers to multimedia assets that establish domain leadership.",
      focusArea: "Technical Copywriting & Editorial Operations",
      valueCreated: "Establishes industry thought leadership and organic buyer trust.",
      iconName: "FileText",
      features: [
        "Technical Whitepapers & Blog Publishing",
        "Headless CMS (Strapi / Sanity) Integration",
        "Multilingual Content Management",
        "Social & Video Asset Creation",
      ],
      metrics: "Increased Organic Search Visibility",
    },
    {
      id: "it-support-maintenance",
      title: "IT Support & Maintenance",
      shortDescription: "24/7 reliability for uninterrupted operations.",
      fullDetails:
        "Our support engineers monitor your systems proactively — resolving server incidents, executing security patches, and providing 24/7 technical helpdesk assistance.",
      focusArea: "Proactive Incident Response & 24/7 Helpdesk",
      valueCreated: "Prevents costly downtime with continuous system health monitoring.",
      iconName: "HelpCircle",
      features: [
        "24/7 SLA-Backed Emergency Incident Support",
        "Proactive Vulnerability & Dependency Patching",
        "Automated Health Monitoring & Alerts",
        "Dedicated Technical Account Management",
      ],
      metrics: "Sub-15 Minute Emergency Response SLA",
    },
    {
      id: "domain-hosting-services",
      title: "Domain & Hosting Services",
      shortDescription: "Secure, fast hosting from a single partner.",
      fullDetails:
        "We manage your entire web infrastructure — from domain acquisition and DNS management to high-speed CDN delivery and SSL certificate renewal.",
      focusArea: "Domain Portfolio & Managed Edge Hosting",
      valueCreated: "Simplifies domain operations under a single secure provider.",
      iconName: "Cloud",
      features: [
        "Global Anycast DNS & Edge Caching",
        "Automated Free Wildcard SSL Certificates",
        "DDoS Mitigation & Rate Limiting",
        "Corporate Domain Management",
      ],
      metrics: "100% Edge DNS Uptime SLA",
    },
    {
      id: "deployment-cloud-support",
      title: "Deployment & Cloud Support",
      shortDescription: "AWS, Azure & GCP expertise at scale.",
      fullDetails:
        "Our DevOps team architects cloud environments with infrastructure-as-code (Terraform), Kubernetes container clusters, and automated CI/CD deployment pipelines.",
      focusArea: "Multi-Cloud DevOps & Infrastructure as Code",
      valueCreated: "Standardizes deployments with zero manual release errors.",
      iconName: "Server",
      features: [
        "Terraform & Pulumi Infrastructure Provisioning",
        "Kubernetes (EKS / GKE / AKS) Management",
        "Automated Zero-Downtime GitHub Actions Pipelines",
        "Cloud Cost FinOps Optimization",
      ],
      metrics: "Avg 35% Cloud Infrastructure Savings",
    },
    {
      id: "annual-subscription-maintenance",
      title: "Annual Subscription & Maintenance Plans",
      shortDescription: "Predictable costs, proactive care.",
      fullDetails:
        "Our annual maintenance plans provide comprehensive coverage — software updates, database backups, performance audits, and SLA-backed emergency hours.",
      focusArea: "Predictable Annual AMC & Ecosystem Health",
      valueCreated: "Ensures long-term software stability under predictable annual budgets.",
      iconName: "Calendar",
      features: [
        "Scheduled Monthly Performance Audits",
        "Automated Database Backup & Recovery Drills",
        "Priority Tier-1 Engineering Support",
        "Software Framework Version Upgrades",
      ],
      metrics: "Guaranteed System Longevity",
    },
    {
      id: "social-media-management",
      title: "Social Media Management",
      shortDescription: "Consistent branding across every platform.",
      fullDetails:
        "We handle your complete social presence — content scheduling, community engagement, brand voice alignment, and executive leadership profiling.",
      focusArea: "Corporate Social Channels & Community Growth",
      valueCreated: "Maintains active, professional brand touchpoints across LinkedIn & X.",
      iconName: "Share2",
      features: [
        "LinkedIn & X (Twitter) Channel Growth",
        "Custom Visual Graphics & Micro-Videos",
        "Community Monitoring & Audience Engagement",
        "Monthly Social Analytics Reports",
      ],
      metrics: "Consistent Audience Impressions",
    },
    {
      id: "seo-analytics-services",
      title: "SEO & Analytics Services",
      shortDescription: "Organic growth backed by data.",
      fullDetails:
        "Our SEO specialists optimize your digital properties for search visibility while implementing custom analytics dashboards to track key conversion metrics.",
      focusArea: "Technical SEO & Data Analytics Instrumentation",
      valueCreated: "Uncovers user friction points and drives intent-driven organic traffic.",
      iconName: "BarChart3",
      features: [
        "Technical On-Page & Schema Markup Optimization",
        "Google Analytics 4 & Tag Manager Setup",
        "Keyword Intent & Competitor Gap Analysis",
        "Custom Executive Reporting Dashboards",
      ],
      metrics: "Measurable Rank & Traffic Uplift",
    },
    {
      id: "consulting-advisory",
      title: "Consulting & Advisory (Insurance/IT)",
      shortDescription: "Unbiased guidance for smarter decisions.",
      fullDetails:
        "We provide independent consulting on technology investments, vendor evaluation, architecture audits, and specialized IT compliance for insurance and fintech sectors.",
      focusArea: "Strategic Architecture & FinTech/Insurance Compliance",
      valueCreated: "De-risks multi-million dollar technology investments.",
      iconName: "ShieldCheck",
      features: [
        "Technology Stack Due Diligence & Audits",
        "Insurance & Core Banking System Advisory",
        "Regulatory Compliance & Data Privacy Alignment",
        "CTO-as-a-Service & Technical Roadmap Design",
      ],
      metrics: "100% Independent Strategic Advice",
    },
  ],
  projects: [
    {
      id: "skillnexus",
      title: "SkillNexus - Learn from Humans",
      tagline: "A peer-to-peer learning marketplace where people share real skills.",
      description:
        "SkillNexus is an interactive learning platform connecting students and mentors in real-time. Built with a full-stack JavaScript architecture, secure authentication, and real-time scheduling.",
      category: "Full-Stack Web App",
      year: "2026",
      status: "Completed",
      techStack: [
        "React",
        "Vite",
        "React Router",
        "Axios",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
        "CSS utility classes",
      ],
      features: [
        "Peer-to-Peer Mentor Matching Engine",
        "Real-Time Session Scheduling & Calendar Sync",
        "Secure JWT Session Tokens & Cookie Security",
        "Mongoose Schema Validation & Dynamic Analytics",
      ],
      imagePlaceholder: "/images/projects/skillnexus.svg",
    },
    {
      id: "algocare",
      title: "AlgoCare - Reducing the Wait, Prioritizing the Life",
      tagline: "Intelligent hospital resource and queue management platform.",
      description:
        "AlgoCare optimizes emergency room triage and outpatient queues using intelligent routing algorithms. Integrates WebSocket live updates to reduce patient wait times by up to 45%.",
      category: "Full-Stack Web App",
      year: "2026",
      status: "Completed",
      techStack: [
        "React",
        "Vite",
        "Node.js (ESM)",
        "Express",
        "Socket.io",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Bcrypt",
        "Tailwind/MUI",
      ],
      features: [
        "Automated Patient Triage & Queue Prioritization",
        "Real-Time Socket.io Live Status Stream",
        "Bcrypt Encrypted Records & HIPAA Alignment",
        "Tailwind & Material UI Adaptive Dashboard",
      ],
      imagePlaceholder: "/images/projects/algocare.svg",
    },
    {
      id: "emotion-tracker",
      title: "Emotion-Based Mental Health Tracker",
      tagline: "Emotion-first risk assessment with automatic trend analytics.",
      description:
        "A mental wellness platform tracking emotional patterns over time using visual charts and behavioral triggers. Designed with an empathetic UI and client-side data privacy.",
      category: "Frontend Web App",
      year: "2025",
      status: "Completed",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "Material UI",
        "Recharts",
        "JWT",
        "localStorage",
        "Tailwind CSS",
      ],
      features: [
        "Recharts Interactive Mood Trend Analytics",
        "Client-Side Encrypted Storage & Privacy Mode",
        "Empathetic Light & Dark UI Palette Tokens",
        "Daily Check-in Gamification & Insights",
      ],
      imagePlaceholder: "/images/projects/emotion-tracker.svg",
    },
    {
      id: "lumbinicare",
      title: "LumbiniCare Connect: Lumbini Nepal Hospital",
      tagline: "Full-stack hospital management system tailored for regional health.",
      description:
        "An end-to-end hospital management suite deployed for medical facilities in Lumbini, Nepal. Handles electronic health records (EHR), pharmacy inventory, and lab dispatch.",
      category: "Full-Stack Web App",
      year: "2025",
      status: "Completed",
      techStack: [
        "MERN Stack",
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Material UI",
        "JWT",
        "RESTful APIs",
      ],
      features: [
        "Electronic Health Records (EHR) Database",
        "Integrated Pharmacy & Lab Test Billing",
        "Multi-Role Doctor / Staff / Patient Portals",
        "RESTful API Ledger & Audit Logging",
      ],
      imagePlaceholder: "/images/projects/lumbinicare.svg",
    },
    {
      id: "sushilgpt",
      title: "SushilGPT: Full-Stack AI Chat Platform",
      tagline: "A ChatGPT-inspired conversational AI platform with streaming.",
      description:
        "SushilGPT delivers real-time streaming conversational AI responses backed by fine-tuned LLM APIs, custom system prompts, and multi-thread chat memory management.",
      category: "Full-Stack Web App",
      year: "2025",
      status: "Completed",
      techStack: [
        "MERN Stack",
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Vite",
        "CSS Modules",
        "OpenAI API",
      ],
      features: [
        "Server-Sent Events (SSE) Response Streaming",
        "Conversation History Thread Storage in MongoDB",
        "Custom System Instructions & Parameter Tuning",
        "Markdown & Syntax Highlighting Code Renderer",
      ],
      imagePlaceholder: "/images/projects/sushilgpt.svg",
    },
    {
      id: "facemark",
      title: "FaceMark: Automated Attendance Solution",
      tagline: "Developed a dynamic and efficient attendance system using Python & OpenCV.",
      description:
        "FaceMark automates classroom and office attendance logging using computer vision and facial feature embedding extraction. Operates locally with zero cloud streaming lag.",
      category: "AI & Computer Vision",
      year: "2024",
      status: "Completed",
      techStack: [
        "Python 3.9",
        "OpenCV 4.x",
        "Face Recognition Library",
        "Tkinter",
        "Numpy",
        "Pandas",
      ],
      features: [
        "Real-Time Face Landmark Detection & Matching",
        "Automated Excel / CSV Attendance Reports",
        "Spoofing Prevention via Blink Detection",
        "Desktop Graphical User Interface (Tkinter)",
      ],
      imagePlaceholder: "/images/projects/facemark.svg",
    },
    {
      id: "stocksmart",
      title: "StockSmart: MERN Stack Inventory & Billing",
      tagline: "A robust inventory and billing system with real-time stock tracking.",
      description:
        "StockSmart provides retail and wholesale businesses with barcode scanning, automated reorder thresholds, GST/VAT invoice generation, and revenue reports.",
      category: "Enterprise ERP",
      year: "2024",
      status: "Completed",
      techStack: [
        "MongoDB",
        "Express.js",
        "Node.js",
        "HTML/CSS",
        "JavaScript",
        "MERN Stack",
      ],
      features: [
        "Automated Low-Stock Trigger Notifications",
        "Barcode Scanning & Thermal Receipt Printing",
        "Financial Sales & Profit Ledger Analytics",
        "Multi-Branch Store Inventory Sync",
      ],
      imagePlaceholder: "/images/projects/stocksmart.svg",
    },
    {
      id: "studenttrack",
      title: "StudentTrack: Django-Based Management",
      tagline: "A robust platform for managing student data with academic analytics.",
      description:
        "StudentTrack streamlines academic administration — managing student enrollment, grade transcripts, attendance logs, and automated parent communication notifications.",
      category: "Full-Stack Web App",
      year: "2024",
      status: "Completed",
      techStack: ["Python", "JavaScript", "Django", "HTML/CSS"],
      features: [
        "Django ORM Relational Academic Schema",
        "Automated Grade Point Average (GPA) Calculator",
        "Parent-Teacher Portal & Exam Publishing",
        "Secure Role-Based Permissions (RBAC)",
      ],
      imagePlaceholder: "/images/projects/studenttrack.svg",
    },
  ],
  careers: [
    {
      id: "sr-fullstack-engineer",
      role: "Senior Full-Stack Engineer (MERN + Go)",
      department: "Core Platform Engineering",
      locationType: "Hybrid (Kathmandu)",
      experience: "4+ Years",
      salaryRange: "NPR 180,000 - 280,000 / month",
      responsibilities: [
        "Architect and maintain high-throughput backend services using Go and Node.js.",
        "Lead frontend development utilizing Next.js, TypeScript, and Tailwind CSS.",
        "Design scalable database schemas in PostgreSQL and optimize complex query performance.",
        "Mentor junior engineers and drive code review excellence across sprints.",
      ],
      requirements: [
        "Deep mastery of TypeScript, Node.js, Go, and Next.js App Router.",
        "Solid understanding of REST/GraphQL API design and microservices patterns.",
        "Proficiency with Docker, Kubernetes, and AWS infrastructure basics.",
        "Strong problem-solving skills and passion for high-performance clean code.",
      ],
    },
    {
      id: "ai-ml-engineer",
      role: "AI/ML Engineer (LangGraph / RAG Specialist)",
      department: "Applied AI Research",
      locationType: "Hybrid (Kathmandu)",
      experience: "3+ Years",
      salaryRange: "NPR 200,000 - 320,000 / month",
      responsibilities: [
        "Develop enterprise-grade RAG applications leveraging Python, LangChain, and LangGraph.",
        "Deploy and optimize vector databases (Pinecone, Qdrant) for multi-tenant search.",
        "Fine-tune open-weight LLMs (Llama 3, Mistral) for domain-specific technical tasks.",
        "Implement evaluation pipelines to track LLM hallucination and latency metrics.",
      ],
      requirements: [
        "Strong background in Python, PyTorch/TensorFlow, and HuggingFace ecosystem.",
        "Proven experience building production RAG pipelines and Agentic workflows.",
        "Familiarity with FastAPI, Docker, and GPU cloud provisioning (Modal/RunPod).",
        "Bachelor's or Master's degree in Computer Science, AI, or related field.",
      ],
    },
    {
      id: "product-designer",
      role: "UI/UX Product Designer",
      department: "Design System & Product Experience",
      locationType: "Remote",
      experience: "3+ Years",
      salaryRange: "NPR 140,000 - 220,000 / month",
      responsibilities: [
        "Craft sleek, modern dark/light mode interfaces for complex B2B SaaS applications.",
        "Maintain and evolve Himnova's internal Figma design system tokens and component library.",
        "Conduct user research sessions and translate customer insights into wireframes.",
        "Collaborate closely with frontend engineers to guarantee pixel-perfect implementation.",
      ],
      requirements: [
        "Expertise in Figma, auto-layout, component variants, and interactive prototyping.",
        "Demonstrated portfolio of SaaS, cloud dashboards, or enterprise web software.",
        "Understanding of HTML/CSS/Tailwind primitives for seamless designer-developer alignment.",
        "Eye for micro-animations, typography, and visual hierarchy.",
      ],
    },
  ],
  capabilities: [
    { iconName: "Cloud", label: "Cloud & DevOps", metric: "99.99", unit: "% Uptime SLA" },
    { iconName: "Code", label: "Custom Software", metric: "14", unit: "Service Lines" },
    { iconName: "Server", label: "Infrastructure", metric: "50+", unit: "Projects Delivered" },
    { iconName: "ShieldCheck", label: "Cybersecurity", metric: "24/7", unit: "SOC Monitoring" },
    { iconName: "Smartphone", label: "Mobile Engineering", metric: "12+", unit: "App Launches" },
    { iconName: "BarChart3", label: "Data & Analytics", metric: "3x", unit: "Faster Insights" },
    { iconName: "Globe", label: "Web Platforms", metric: "Sub-1s", unit: "Load Times" },
    { iconName: "HelpCircle", label: "IT Support", metric: "<15m", unit: "Response Time" },
  ],
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  footerLinks: {
    company: [
      { label: "About Himnova", href: "#about" },
      { label: "Delivered Projects", href: "#projects" },
      { label: "Director's Vision", href: "#director" },
      { label: "Careers", href: "#careers" },
    ],
    services: [
      { label: "Custom Software", href: "#services" },
      { label: "Web Applications", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "Cloud & DevOps", href: "#services" },
      { label: "IT Support (24/7)", href: "#services" },
      { label: "Consulting & Advisory", href: "#services" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy-policy" },
      { label: "Terms of Service", href: "#terms-of-service" },
      { label: "Security & Sovereignty", href: "#security-sovereignty" },
      { label: "SLA Commitments", href: "#sla-commitments" },
    ],
  },
};
