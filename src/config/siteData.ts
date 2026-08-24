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
  priceRange: {
    usd: string;
    npr: string;
    model: string;
    turnaround: string;
  };
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
    title: "Himnova Technologies | Top IT Company, Custom Software & Cloud Solutions",
    description:
      "Himnova Technologies (www.himnovatech.com) is a premier IT company and software development firm delivering enterprise custom software, cloud DevOps, web platforms, mobile apps, and AI engineering.",
    keywords: [
      "Himnova Technologies",
      "Himnova Tech",
      "www.himnovatech.com",
      "Technology Company",
      "Software Development Company",
      "Custom Software Development",
      "IT Company Nepal",
      "IT Services Kathmandu",
      "Web Application Development",
      "Mobile App Development",
      "Cloud Computing Solutions",
      "DevOps Automation",
      "Agentic AI Engineering",
      "Enterprise IT Solutions",
    ],
    ogImage: "/images/office-hero.png",
    url: "https://www.himnovatech.com",
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
      priceRange: {
        usd: "$615 – $1,870",
        npr: "NPR 95,000 – 2,90,000",
        model: "Milestone Sprint",
        turnaround: "3 – 6 Weeks",
      },
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
      priceRange: {
        usd: "$420 – $1,260",
        npr: "NPR 65,000 – 1,95,000",
        model: "Agile Delivery",
        turnaround: "2 – 5 Weeks",
      },
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
      priceRange: {
        usd: "$160 – $420",
        npr: "NPR 25,000 – 65,000",
        model: "Fixed Turnkey Setup",
        turnaround: "1 – 2 Weeks",
      },
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
      priceRange: {
        usd: "$550 – $1,680",
        npr: "NPR 85,000 – 2,60,000",
        model: "Cross-Platform Sprint",
        turnaround: "3 – 6 Weeks",
      },
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
      priceRange: {
        usd: "$225 – $615 setup + $25–$80/mo",
        npr: "NPR 35,000 – 95,000 setup",
        model: "Monthly / Annual SaaS",
        turnaround: "1 – 2 Weeks",
      },
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
      priceRange: {
        usd: "$120 – $355/mo",
        npr: "NPR 18,000 – 55,000/mo",
        model: "Monthly Growth Retainer",
        turnaround: "Ongoing Campaign",
      },
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
      priceRange: {
        usd: "$100 – $290/mo",
        npr: "NPR 15,000 – 45,000/mo",
        model: "Monthly Editorial Retainer",
        turnaround: "Weekly Publishing",
      },
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
      priceRange: {
        usd: "$100 – $270/mo",
        npr: "NPR 15,000 – 42,000/mo",
        model: "24/7 SLA Helpdesk Retainer",
        turnaround: "Sub-15m Emergency SLA",
      },
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
      priceRange: {
        usd: "$50 – $180/yr",
        npr: "NPR 8,000 – 28,000/yr",
        model: "Managed Annual Infrastructure",
        turnaround: "24 – 48 Hours",
      },
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
      priceRange: {
        usd: "$260 – $805",
        npr: "NPR 40,000 – 1,25,000",
        model: "DevOps Cloud Sprint",
        turnaround: "1 – 3 Weeks",
      },
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
      priceRange: {
        usd: "$225 – $710/yr",
        npr: "NPR 35,000 – 1,10,000/yr",
        model: "Annual Master AMC Agreement",
        turnaround: "Annual 365-Day SLA",
      },
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
      priceRange: {
        usd: "$105 – $310/mo",
        npr: "NPR 16,000 – 48,000/mo",
        model: "Monthly Channel Retainer",
        turnaround: "Ongoing Growth",
      },
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
      priceRange: {
        usd: "$130 – $390/mo",
        npr: "NPR 20,000 – 60,000/mo",
        model: "Quarterly Performance SOW",
        turnaround: "Monthly Reporting",
      },
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
      priceRange: {
        usd: "$225 – $740",
        npr: "NPR 35,000 – 1,15,000",
        model: "Advisory / Due Diligence",
        turnaround: "1 – 2 Weeks",
      },
    },
  ],
    projects: [
    {
      id: "skillnexus",
      title: "SkillNexus - Real-Time Mentorship & Skill Sharing Marketplace",
      tagline: "Peer-to-peer human knowledge marketplace with real-time video, scheduling & automated escrow.",
      description:
        "SkillNexus is an interactive full-stack learning platform engineered to connect learners directly with verified industry practitioners. Built with a high-concurrency Node.js and MongoDB backend, sub-second WebSocket communication for real-time messaging, and secure multi-currency payment checkout.",
      category: "Full-Stack Web App",
      year: "2026",
      status: "Completed",
      techStack: [
        "React 18",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "JWT / Bcrypt",
        "Tailwind CSS",
      ],
      features: [
        "Sub-2.5s Mentor Discovery & Keyword Matching Algorithm",
        "Real-Time Chat & Session Scheduling via WebSockets",
        "Secure Role-Based Authentication & Encrypted Session Tokens",
        "Interactive Review, Rating & Verified Mentor Badge System",
      ],
      imagePlaceholder: "/images/projects/skillnexus.svg?v=2",
    },
    {
      id: "algocare",
      title: "AlgoCare - Hospital Emergency Triage & Queue Intelligence",
      tagline: "Algorithmic emergency room triage scoring and live bed allocation for critical care.",
      description:
        "AlgoCare transforms hospital emergency departments by applying intelligent triage classification (ESI 1–5). Integrates directly with ER monitors, calculates dynamic acuity scores, and reduces patient wait times for critical interventions by 45.8%.",
      category: "Full-Stack Web App",
      year: "2026",
      status: "Completed",
      techStack: [
        "React",
        "Node.js",
        "Socket.io",
        "MongoDB",
        "Material UI",
        "Chart.js",
        "Docker",
      ],
      features: [
        "Automated ESI Triage Scoring & Real-Time Queue Balancing",
        "Live Audio-Visual Alerts for High-Acuity Patient Deterioration",
        "Doctor & Nursing Workstation Synchronization via WebSockets",
        "Hospital Bed Availability Heatmap & Department Handover Logs",
      ],
      imagePlaceholder: "/images/projects/algocare.svg?v=2",
    },
    {
      id: "emotion-tracker",
      title: "Emotion Health Analytics - Mental Wellness Telemetry",
      tagline: "Client-side encrypted mood telemetry, longitudinal behavioral trends & clinical insights.",
      description:
        "A mental wellness platform designed to track and visualize daily mood fluctuations, stress triggers, and sleep correlations. Features client-side AES encryption ensuring complete privacy, combined with rich longitudinal analytics.",
      category: "Frontend Web App",
      year: "2025",
      status: "Completed",
      techStack: [
        "React 18",
        "TypeScript",
        "Recharts",
        "Material UI",
        "CryptoJS (AES-256)",
        "Vite",
      ],
      features: [
        "End-to-End Client-Side Zero-Knowledge Encryption for Diary Entries",
        "Multi-Variable Longitudinal Mood & Stress Trend Visualizations",
        "Interactive Severity Self-Assessment & Immediate Coping Protocols",
        "Exportable Anonymized Clinical PDF Reports for Psychologists",
      ],
      imagePlaceholder: "/images/projects/emotion-tracker.svg?v=2",
    },
    {
      id: "lumbinicare",
      title: "LumbiniCare Connect - Regional Hospital ERP & Pharmacy",
      tagline: "Comprehensive OPD queue, electronic health records, pathology reports & billing POS.",
      description:
        "LumbiniCare Connect is a multi-department hospital management suite deployed across regional clinics in Nepal. Features OPD queue token generation, computerized physician order entry (CPOE), pathology lab report dispatch, and integrated pharmacy inventory.",
      category: "Enterprise ERP",
      year: "2025",
      status: "Completed",
      techStack: [
        "MERN Stack",
        "Express.js",
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "PDFKit",
      ],
      features: [
        "Daily OPD Patient Flow Management with Live Counter Token Displays",
        "Integrated Pharmacy POS with Batch Number & Expiry Date Alerts",
        "Automated Pathology Report Generation & Direct PDF Download",
        "Role-Based Audit Logging for Doctors, Pharmacists, and Cashiers",
      ],
      imagePlaceholder: "/images/projects/lumbinicare.svg?v=2",
    },
    {
      id: "sushilgpt",
      title: "SushilGPT - Enterprise LLM Streaming & AI Workspace",
      tagline: "Full-stack conversational AI platform with Server-Sent Events (SSE) token streaming.",
      description:
        "A high-speed conversational AI workspace featuring real-time Server-Sent Events (SSE) token streaming, markdown code syntax highlighting, custom prompt persona switching, and persistent conversation branch trees.",
      category: "Full-Stack Web App",
      year: "2025",
      status: "Completed",
      techStack: [
        "Next.js 14",
        "OpenAI API",
        "SSE Token Stream",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      features: [
        "Ultra-Low Latency (< 85ms) Token-by-Token Streaming Architecture",
        "Conversation History Tree with Branching & Context Compression",
        "Syntax-Highlighted Multi-Language Code Blocks with One-Click Copy",
        "Custom System Instructions & Dynamic Agent Persona Presets",
      ],
      imagePlaceholder: "/images/projects/sushilgpt.svg?v=2",
    },
    {
      id: "facemark",
      title: "FaceMark - Computer Vision Automated Attendance AI",
      tagline: "Real-time facial landmark detection, biometric feature extraction & anti-spoofing.",
      description:
        "A desktop and edge computer vision system for contact-free attendance logging. Uses 128-dimensional facial embedding vectors and blink/liveness detection to eliminate proxy clock-ins with 99.4% accuracy under diverse lighting.",
      category: "AI & Computer Vision",
      year: "2024",
      status: "Completed",
      techStack: [
        "Python 3.9",
        "OpenCV 4.x",
        "dlib / Face_Recognition",
        "Tkinter UI",
        "SQLite",
      ],
      features: [
        "Sub-0.12s Face Verification against 5,000+ Enrolled Face Vectors",
        "Real-Time Anti-Spoofing Detection (Photo & Screen Playback Rejection)",
        "Automated Excel / CSV Timesheet Export with Late & Overtime Logs",
        "Offline Edge Operation with Zero Dependency on External Internet",
      ],
      imagePlaceholder: "/images/projects/facemark.svg?v=2",
    },
    {
      id: "stocksmart",
      title: "StockSmart - Retail & Wholesale Inventory ERP Suite",
      tagline: "High-speed barcode checkout, automated supplier purchase orders & VAT invoices.",
      description:
        "An all-in-one inventory and retail billing platform built for trading enterprises in Nepal. Handles barcode scanning, low-stock reorder automation, supplier credit ledgers, and IRD-compliant VAT invoice generation.",
      category: "Enterprise ERP",
      year: "2024",
      status: "Completed",
      techStack: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express",
        "ESC/POS Thermal Driver",
        "Tailwind CSS",
      ],
      features: [
        "Rapid Keyboard-Only POS Checkout for High-Volume Retail Counters",
        "Automatic Low-Stock Email Reorder Notifications to Suppliers",
        "Multi-Warehouse Inventory Transfers & Real-Time Stock Reconciliation",
        "Thermal Receipt Printing & A4 Tax Invoice PDF Generation",
      ],
      imagePlaceholder: "/images/projects/stocksmart.svg?v=2",
    },
    {
      id: "studenttrack",
      title: "StudentTrack - Academic Information & GPA Analytics (SIS)",
      tagline: "Relational student records, automated GPA grading algorithms & parent notification portal.",
      description:
        "An academic administration system built with Python and Django. Manages student admissions, course registrations, semester GPA/CGPA computation, fee receipt ledgers, and automated SMS broadcasts to parents.",
      category: "Full-Stack Web App",
      year: "2024",
      status: "Completed",
      techStack: [
        "Python",
        "Django Framework",
        "PostgreSQL",
        "Bootstrap 5",
        "Sparrow SMS API",
      ],
      features: [
        "Automated Credit-Hour Weighted GPA & Semester Grade Sheet Engine",
        "Fee Collection & Outstanding Balance Ledger with Online Receipts",
        "Student Attendance Tracking with Bulk SMS Broadcasts to Parents",
        "Role-Based Dashboards for Deans, Faculty Members, and Accountants",
      ],
      imagePlaceholder: "/images/projects/studenttrack.svg?v=2",
    },
  ],
  careers: [
    {
      id: "software-sales-specialist",
      role: "Software Sales Specialist / Representative",
      department: "Enterprise Growth & Sales",
      locationType: "Hybrid (Kathmandu)",
      experience: "2+ Years",
      salaryRange: "Negotiable based on experience & knowledge (No salary bar for the right candidate)",
      responsibilities: [
        "Identify and engage prospective enterprise clients across North America, Europe, and Asia-Pacific.",
        "Present Himnova's custom software, cloud automation, and AI pipeline offerings to executive decision makers.",
        "Architect technical proposals and negotiate high-value software contracts.",
        "Build and nurture long-term strategic relationships with key client accounts.",
      ],
      requirements: [
        "Proven track record in B2B IT service sales, software solutions, or technical consulting.",
        "Exceptional communication, presentation, and client relationship management skills.",
        "Understanding of modern software architecture concepts (SaaS, Cloud, DevOps, AI).",
        "Self-driven, goal-oriented mindset with strong negotiation abilities.",
      ],
    },
    {
      id: "fullstack-developer",
      role: "Full-Stack Developer (MERN / Next.js & Go)",
      department: "Core Platform Engineering",
      locationType: "Hybrid (Kathmandu)",
      experience: "3+ Years",
      salaryRange: "Negotiable based on experience & knowledge (No salary bar for the right candidate)",
      responsibilities: [
        "Architect and build high-performance web applications using React, Next.js, Node.js, and Go.",
        "Design scalable relational and NoSQL database schemas in PostgreSQL and MongoDB.",
        "Develop secure RESTful and GraphQL APIs with event-driven microservices architecture.",
        "Collaborate with UI/UX designers and cloud DevOps engineers to deliver production software.",
      ],
      requirements: [
        "Deep proficiency in TypeScript, React, Next.js App Router, Node.js, and database design.",
        "Experience with Docker containerization, REST API security, and state management.",
        "Solid understanding of software engineering best practices, CI/CD, and clean code.",
        "Strong problem-solving capability and passion for scalable web platforms.",
      ],
    },
    {
      id: "marketing-officer",
      role: "Marketing Officer & Digital Strategist",
      department: "Marketing & Brand Growth",
      locationType: "Hybrid (Kathmandu)",
      experience: "2+ Years",
      salaryRange: "Negotiable based on experience & knowledge (No salary bar for the right candidate)",
      responsibilities: [
        "Lead omnichannel digital marketing campaigns across Google Search, LinkedIn, X, and Meta.",
        "Execute technical copywriting, whitepapers, case studies, and brand storytelling.",
        "Analyze conversion funnel data, campaign performance metrics, and lead acquisition costs.",
        "Manage corporate social channels and expand Himnova's international brand footprint.",
      ],
      requirements: [
        "Demonstrated experience in digital marketing, SEO, PPC ad management, and content strategy.",
        "Proficiency with Google Analytics 4, Tag Manager, CRM tools, and graphic design tools.",
        "Excellent written English communication skills for corporate and technical copy.",
        "Data-driven mindset focused on measurable return on ad spend (ROAS).",
      ],
    },
    {
      id: "software-engineering-intern",
      role: "Software Engineering Intern (Frontend / Backend / AI)",
      department: "Himnova R&D Labs",
      locationType: "On-Site",
      experience: "Freshers / Final Year",
      salaryRange: "Stipend + Performance Bonus — Negotiable based on skills",
      responsibilities: [
        "Work alongside senior architects to build production web features using React and Node.js.",
        "Assist in developing RAG pipelines, fine-tuning LLMs, and integrating API endpoints.",
        "Participate in daily standups, code reviews, automated unit testing, and sprint planning.",
        "Gain real-world engineering experience on live deployed enterprise software.",
      ],
      requirements: [
        "Strong foundation in Computer Science fundamentals, Data Structures, and JavaScript/Python.",
        "Familiarity with React, Next.js, Node.js, Git version control, or AI prompt engineering.",
        "Eagerness to learn, write clean code, and adapt to modern fast-paced software tools.",
        "Bachelor's degree or currently pursuing CS/IT/Software Engineering degree.",
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
    { label: "Solutions & Pricing", href: "#solutions" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  footerLinks: {
    company: [
      { label: "About Himnova", href: "#about" },
      { label: "Ready Solutions & Pricing", href: "/solutions" },
      { label: "Delivered Projects", href: "#projects" },
      { label: "Director's Vision", href: "#director" },
      { label: "Technical Blog & Insights", href: "/blog" },
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
