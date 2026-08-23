const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'config', 'siteData.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const updatedProjects = `  projects: [
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
      imagePlaceholder: "/images/projects/skillnexus.svg",
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
      imagePlaceholder: "/images/projects/algocare.svg",
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
      imagePlaceholder: "/images/projects/emotion-tracker.svg",
    },
    {
      id: "lumbinicare",
      title: "LumbiniCare Connect - Regional Hospital ERP & Pharmacy",
      tagline: "Comprehensive OPD queue, electronic health records, pathology reports & billing POS.",
      description:
        "LumbiniCare Connect is a multi-department hospital management suite deployed across regional clinics in Nepal. Features OPD queue token generation, computerized physician order entry (CPOE), pathology lab report dispatch, and integrated pharmacy inventory.",
      category: "Full-Stack Web App",
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
      imagePlaceholder: "/images/projects/lumbinicare.svg",
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
      imagePlaceholder: "/images/projects/sushilgpt.svg",
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
      imagePlaceholder: "/images/projects/facemark.svg",
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
      imagePlaceholder: "/images/projects/stocksmart.svg",
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
      imagePlaceholder: "/images/projects/studenttrack.svg",
    },
  ],`;

const projectsRegex = /projects:\s*\[[\s\S]*?\n\s*\],/;
content = content.replace(projectsRegex, updatedProjects);

fs.writeFileSync(filePath, content);
console.log('Successfully updated siteData.ts projects with rich case studies');
