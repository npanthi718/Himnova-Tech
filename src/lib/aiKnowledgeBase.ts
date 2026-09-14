import { siteData, ServiceItem, ProjectItem, CareerItem } from "@/config/siteData";
import { nicheProducts, NicheProduct } from "@/data/nicheProducts";
import { blogPosts } from "@/data/blogs/blogPosts";
import { BlogPost } from "@/data/blogs/types";

export interface RetrievedKnowledge {
  companyInfo: string;
  matchedServices: ServiceItem[];
  matchedProducts: NicheProduct[];
  matchedProjects: ProjectItem[];
  matchedCareers: CareerItem[];
  matchedBlogs: BlogPost[];
  matchedTopic?: string;
  summaryContext: string;
}

/**
 * Dynamically builds comprehensive, live system knowledge from the active codebase.
 * Any edits to siteData, nicheProducts, or blogPosts are immediately reflected here.
 */
export function getLiveSystemKnowledge(): string {
  const company = siteData.company;
  const director = siteData.directorMessage;
  const vision = siteData.visionMission;

  const servicesText = siteData.services
    .map(
      (s, idx) =>
        `${idx + 1}. **${s.title}** (ID: \`${s.id}\`)
   - Overview: ${s.shortDescription}
   - Full Scope: ${s.fullDetails}
   - Focus Area: ${s.focusArea}
   - Value Created: ${s.valueCreated}
   - Pricing: NPR ${s.priceRange.npr} (USD ${s.priceRange.usd}) [Model: ${s.priceRange.model}]
   - Turnaround SLA: ${s.priceRange.turnaround}
   - Key Features: ${s.features.join("; ")}
   - SLA Performance Metric: ${s.metrics}`
    )
    .join("\n\n");

  const productsText = nicheProducts
    .map(
      (p, idx) =>
        `${idx + 1}. **${p.title}** (ID: \`${p.id}\` | Category: ${p.category})
   - Tagline: ${p.tagline}
   - Description: ${p.description}
   - Target Market: ${p.targetMarket}
   - Pricing: NPR ${p.priceRange.localEstimated} (USD ${p.priceRange.usd}) [Model: ${p.priceRange.model}]
   - Delivery Timeline: ${p.deliveryTime}
   - Key Features: ${p.keyFeatures.join("; ")}
   - Tech Stack: ${p.techStack.join(", ")}
   - Architecture: ${p.fullArchitecture}
   - Deliverables: ${p.deliverables.join("; ")}
   - Included: ${p.included.join("; ")}
   - Add-Ons: ${p.addOns.join("; ")}`
    )
    .join("\n\n");

  return `
# OFFICIAL LIVE KNOWLEDGE BASE — HIMNOVA TECHNOLOGIES PRIVATE LIMITED (himnovatech.com)

## COMPANY OVERVIEW
- **Legal Entity Name**: ${company.legalName} ("${company.name}")
- **Established**: ${company.establishedYear}
- **Motto**: "${company.motto}"
- **Headquarters Address**: ${company.headquarters.address}, ${company.headquarters.landmark}, ${company.headquarters.city} 44600, ${company.headquarters.country}
- **Primary Phone / WhatsApp**: ${company.contact.phonePrimary}
- **Secondary Phone / India**: ${company.contact.phoneSecondary}
- **Official Emails**: General: ${company.contact.email} | Sales: ${company.contact.salesEmail} | Careers: ${company.contact.careersEmail}
- **Website**: https://www.himnovatech.com

## EXECUTIVE LEADERSHIP
- **Executive Director & Chairman**: ${director.name} (${director.title})
- **Director's Vision**: "${director.quote}"

## 15 SPECIALIZED SERVICES
${servicesText}

## 19 TURNKEY NICHE PRODUCTS
${productsText}
`;
}

/**
 * Intelligent semantic query search with precise token matching.
 */
export function queryKnowledgeBase(query: string): RetrievedKnowledge {
  const normalized = query.toLowerCase().trim();

  // 1. Search Services with specific match criteria
  const matchedServices = siteData.services.filter((s) => {
    const sId = s.id.toLowerCase();
    const sTitle = s.title.toLowerCase();

    if (normalized.includes(sId)) return true;
    if (normalized.includes(sTitle)) return true;

    if (
      (normalized.includes("voice") || normalized.includes("calling") || normalized.includes("call agent") || normalized.includes("bland") || normalized.includes("vapi") || normalized.includes("भ्वाइस") || normalized.includes("कलिङ") || normalized.includes("कॉलिंग") || normalized.includes("वॉइस")) &&
      sId === "ai-agents-voice-calling"
    )
      return true;

    if (
      (normalized.includes("mobile app") || normalized.includes("mobile") || normalized.includes("ios") || normalized.includes("android") || normalized.includes("flutter") || normalized.includes("react native") || normalized.includes("मोबाइल") || normalized.includes("ऐप") || normalized.includes("एप")) &&
      sId === "mobile-app-development"
    )
      return true;

    if (
      (normalized.includes("web app") || normalized.includes("custom software") || normalized.includes("saas platform") || normalized.includes("सफ्टवेयर") || normalized.includes("सॉफ्टवेयर")) &&
      (sId === "web-app-development" || sId === "custom-software-development")
    )
      return true;

    if (
      (normalized.includes("website design") || normalized.includes("redesign website") || normalized.includes("landing page") || normalized.includes("website") || normalized.includes("वेबसाइट")) &&
      sId === "website-design-development"
    )
      return true;

    if (
      (normalized.includes("cloud hosting") || normalized.includes("hosting") || normalized.includes("server management") || normalized.includes("होस्टिंग") || normalized.includes("सर्वर")) &&
      sId === "cloud-hosting-management"
    )
      return true;

    if (
      (normalized.includes("devops") || normalized.includes("kubernetes") || normalized.includes("ci/cd") || normalized.includes("docker pipeline")) &&
      sId === "devops-cicd-automation"
    )
      return true;

    if (
      (normalized.includes("payment gateway") || normalized.includes("esewa") || normalized.includes("khalti") || normalized.includes("connectips") || normalized.includes("stripe integration") || normalized.includes("पेमेंट")) &&
      sId === "payment-gateway-integration"
    )
      return true;

    if (
      (normalized.includes("cybersecurity") || normalized.includes("security audit") || normalized.includes("pentest") || normalized.includes("सुरक्षा")) &&
      sId === "cybersecurity-audit-compliance"
    )
      return true;

    if (
      (normalized.includes("seo optimization") || normalized.includes("seo growth") || normalized.includes("search engine ranking") || normalized.includes("एसईओ")) &&
      sId === "seo-growth-optimization"
    )
      return true;

    if (
      (normalized.includes("ui/ux") || normalized.includes("ui ux") || normalized.includes("figma design") || normalized.includes("डिजाइन")) &&
      sId === "ui-ux-design-system"
    )
      return true;

    if (
      (normalized.includes("computer vision") || normalized.includes("yolo") || normalized.includes("image recognition")) &&
      sId === "ai-computer-vision"
    )
      return true;

    return false;
  });

  // 2. Search Products with exact product keywords
  const matchedProducts = nicheProducts.filter((p) => {
    const pId = p.id.toLowerCase();
    const pTitle = p.title.toLowerCase();

    if (normalized.includes(pId)) return true;
    if (normalized.includes(pTitle)) return true;

    if (normalized.includes("voxnova") && pId.includes("voxnova")) return true;
    if ((normalized.includes("omnistore") || normalized.includes("ecommerce") || normalized.includes("ई-कमर्स") || normalized.includes("ईकमर्स") || normalized.includes("दुकान")) && pId.includes("ecommerce")) return true;
    if ((normalized.includes("hospital") || normalized.includes("clinic") || normalized.includes("medpulse") || normalized.includes("ehr") || normalized.includes("emr") || normalized.includes("अस्पताल") || normalized.includes("क्लिनिक")) && pId.includes("hospital")) return true;
    if ((normalized.includes("hotel") || normalized.includes("hostel") || normalized.includes("hostelhive") || normalized.includes("staypms") || normalized.includes("होटल") || normalized.includes("हस्टल")) && pId.includes("hotel")) return true;
    if ((normalized.includes("restaurant") || normalized.includes("dineflow") || normalized.includes("table qr") || normalized.includes("रेस्टुरेन्ट") || normalized.includes("रेस्टोरेंट")) && pId.includes("restaurant")) return true;
    if ((normalized.includes("school") || normalized.includes("college") || normalized.includes("educore") || normalized.includes("school lms") || normalized.includes("विद्यालय") || normalized.includes("स्कूल") || normalized.includes("कलेज")) && pId.includes("school")) return true;
    if ((normalized.includes("real estate") || normalized.includes("estatenest") || normalized.includes("property portal") || normalized.includes("घर जग्गा") || normalized.includes("जमीन")) && pId.includes("real-estate")) return true;
    if ((normalized.includes("treksync") || normalized.includes("trekking") || normalized.includes("tour booking") || normalized.includes("ट्रेकिङ") || normalized.includes("टूर")) && pId.includes("travel")) return true;
    if ((normalized.includes("swifttrack") || normalized.includes("courier") || normalized.includes("cargo tracking") || normalized.includes("कुरियर")) && pId.includes("logistics")) return true;
    if ((normalized.includes("fitpulse") || normalized.includes("gym booking") || normalized.includes("fitness club") || normalized.includes("जिम")) && pId.includes("gym")) return true;
    if ((normalized.includes("loanengine") || normalized.includes("micro-lending") || normalized.includes("cooperative banking") || normalized.includes("सहकारी")) && pId.includes("fintech")) return true;
    if ((normalized.includes("stockmaster") || normalized.includes("warehouse pos") || normalized.includes("inventory pos") || normalized.includes("इन्भेन्टरी")) && pId.includes("inventory")) return true;
    if ((normalized.includes("autodesk") || normalized.includes("auto repair") || normalized.includes("garage crm") || normalized.includes("ग्यारेज") || normalized.includes("गैराज")) && pId.includes("auto")) return true;
    if ((normalized.includes("pharmacare") || normalized.includes("pharmacy pos") || normalized.includes("drugstore") || normalized.includes("फार्मेसी") || normalized.includes("औषधि")) && pId.includes("pharmacy")) return true;
    if ((normalized.includes("passport") || normalized.includes("event ticketing") || normalized.includes("qr gate pass") || normalized.includes("टिकट")) && pId.includes("ticketing")) return true;
    if ((normalized.includes("workpulse") || normalized.includes("hr suite") || normalized.includes("payroll suite") || normalized.includes("पेरोल")) && pId.includes("hr")) return true;
    if ((normalized.includes("agrilink") || normalized.includes("agritech") || normalized.includes("farm marketplace") || normalized.includes("कृषि") || normalized.includes("किसान")) && pId.includes("agritech")) return true;
    if ((normalized.includes("lexislaw") || normalized.includes("legal practice") || normalized.includes("law firm") || normalized.includes("कानून") || normalized.includes("वकील")) && pId.includes("legal")) return true;
    if ((normalized.includes("skillstream") || normalized.includes("video course") || normalized.includes("cloud lms") || normalized.includes("कोर्स")) && pId.includes("lms-learning")) return true;

    return false;
  });

  // 3. Search Projects
  const matchedProjects = siteData.projects.filter((proj) => {
    return normalized.includes(proj.id.toLowerCase()) || normalized.includes(proj.title.toLowerCase());
  });

  // 4. Search Careers
  const matchedCareers = siteData.careers.filter((c) => {
    return normalized.includes(c.role.toLowerCase()) || normalized.includes(c.department.toLowerCase());
  });

  // 5. Search Blogs
  const matchedBlogs = blogPosts.filter((b) => {
    return normalized.includes(b.slug.toLowerCase()) || normalized.includes(b.title.toLowerCase());
  });

  const company = siteData.company;
  const companyInfo = `${company.legalName} (${company.headquarters.address}, ${company.headquarters.city}, Nepal). Phone/WhatsApp: ${company.contact.phonePrimary}. Email: ${company.contact.email}. Executive Director: Er. Sushil Panthi.`;

  let summaryContext = `Query: "${query}"\nCompany: ${companyInfo}\n`;

  return {
    companyInfo,
    matchedServices,
    matchedProducts,
    matchedProjects,
    matchedCareers,
    matchedBlogs,
    summaryContext,
  };
}
