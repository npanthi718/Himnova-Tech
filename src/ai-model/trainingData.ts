import { siteData, ServiceItem, ProjectItem, CareerItem } from "@/config/siteData";
import { nicheProducts, NicheProduct } from "@/data/nicheProducts";
import { blogPosts } from "@/data/blogs/blogPosts";
import { BlogPost } from "@/data/blogs/types";

export interface AIKnowledgeBase {
  company: typeof siteData.company;
  director: typeof siteData.directorMessage;
  visionMission: typeof siteData.visionMission;
  services: ServiceItem[];
  products: NicheProduct[];
  projects: ProjectItem[];
  careers: CareerItem[];
  blogs: BlogPost[];
  allProductNames: string[];
  allServiceNames: string[];
  techStacks: {
    frontend: string[];
    backend: string[];
    mobile: string[];
    cloudDevops: string[];
    aiMl: string[];
    database: string[];
  };
  guarantees: {
    sourceCode: string;
    sla: string;
    warranty: string;
    security: string;
    lockin: string;
  };
}

/**
 * Dynamically compiles and trains the live knowledge base of Himnova Technologies.
 * Automatically stays synchronized in real time with any future updates across the codebase.
 */
export function loadTrainedKnowledge(): AIKnowledgeBase {
  return {
    company: siteData.company,
    director: siteData.directorMessage,
    visionMission: siteData.visionMission,
    services: siteData.services,
    products: nicheProducts,
    projects: siteData.projects,
    careers: siteData.careers,
    blogs: blogPosts,
    allProductNames: nicheProducts.map((p) => p.title),
    allServiceNames: siteData.services.map((s) => s.title),
    techStacks: {
      frontend: ["Next.js 14", "React 19", "TypeScript", "TailwindCSS", "Framer Motion", "Vue 3", "Nuxt"],
      backend: ["Node.js", "NestJS", "Python (FastAPI / Django)", "Go (Golang)", "Express.js", "GraphQL"],
      mobile: ["Flutter", "React Native", "iOS Swift", "Android Kotlin"],
      cloudDevops: ["AWS (ECS, EKS, Lambda, RDS)", "Google Cloud Platform", "Docker", "Kubernetes", "Terraform", "CI/CD GitHub Actions"],
      aiMl: ["Bland AI", "Vapi.ai", "OpenAI GPT-4o", "Google Gemini 1.5 Pro", "PyTorch", "LangChain", "LlamaIndex", "Whisper", "ElevenLabs"],
      database: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma ORM", "Supabase"],
    },
    guarantees: {
      sourceCode: "100% full unencumbered source code ownership transferred on final milestone delivery.",
      sla: "99.99% high-availability production cloud SLA with active health checks.",
      warranty: "6 months complimentary post-deployment warranty and bug-fix maintenance included with every project.",
      security: "OWASP Top-10 compliant architecture, encrypted at rest and in transit, with role-based access control (RBAC).",
      lockin: "Zero proprietary lock-in. Built on open, enterprise-grade industry standards.",
    },
  };
}

/**
 * High-density prompt representation of the entire company for deep contextual retrieval.
 */
export function getTrainedSystemPrompt(): string {
  const trained = loadTrainedKnowledge();
  const company = trained.company;
  const director = trained.director;

  const servicesList = trained.services
    .map(
      (s, i) =>
        `[SERVICE ${i + 1}] ID: "${s.id}" | Title: "${s.title}"
  - Scope: ${s.shortDescription}
  - Full: ${s.fullDetails}
  - Price: NPR ${s.priceRange.npr} / USD ${s.priceRange.usd} (${s.priceRange.model})
  - Turnaround SLA: ${s.priceRange.turnaround}
  - Features: ${s.features.join("; ")}`
    )
    .join("\n\n");

  const productsList = trained.products
    .map(
      (p, i) =>
        `[PRODUCT ${i + 1}] ID: "${p.id}" | Title: "${p.title}" | Category: "${p.category}"
  - Tagline: ${p.tagline}
  - Description: ${p.description}
  - Price: NPR ${p.priceRange.localEstimated} / USD ${p.priceRange.usd} (${p.priceRange.model})
  - Delivery SLA: ${p.deliveryTime}
  - Target Market: ${p.targetMarket}
  - Tech Stack: ${p.techStack.join(", ")}
  - Features: ${p.keyFeatures.join("; ")}
  - Deliverables: ${p.deliverables.join("; ")}`
    )
    .join("\n\n");

  return `
# OFFICIAL TRAINED KNOWLEDGE REPOSITORY — HIMNOVA TECHNOLOGIES PRIVATE LIMITED (himnovatech.com)

## COMPANY INFORMATION:
- Legal Name: ${company.legalName} ("${company.name}")
- Headquarters: ${company.headquarters.address}, ${company.headquarters.landmark}, ${company.headquarters.city} 44600, ${company.headquarters.country}
- Primary Contact & WhatsApp: ${company.contact.phonePrimary}
- Secondary Phone: ${company.contact.phoneSecondary}
- Email: ${company.contact.email} | Sales: ${company.contact.salesEmail} | Careers: ${company.contact.careersEmail}
- Executive Director & Chief Architect: ${director.name} (${director.title})
- Director Directive: "${director.quote}"
- Operating Hours: Monday – Friday: 9:00 AM – 6:00 PM NPT (24/7 Cloud Support SLA)
- Guarantees: 100% Full Source Code Ownership, 99.99% Cloud SLA, Zero Vendor Lock-in, 6 Months Free Warranty.

## 15 SPECIALIZED IT SERVICES:
${servicesList}

## 19 TURNKEY SOFTWARE PRODUCTS:
${productsList}
`;
}
