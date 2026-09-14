import { loadTrainedKnowledge } from "./trainingData";
import { ServiceItem } from "@/config/siteData";
import { NicheProduct } from "@/data/nicheProducts";

export type IntentType =
  | "specific-product"
  | "specific-service"
  | "leadership"
  | "office-location"
  | "contact-info"
  | "careers-hiring"
  | "all-products"
  | "all-services"
  | "pricing-general"
  | "tech-stack"
  | "guarantee-ownership"
  | "delivery-timeline"
  | "projects-portfolio"
  | "general-help";

export interface RetrievedIntent {
  type: IntentType;
  matchedProduct?: NicheProduct;
  matchedService?: ServiceItem;
  language: "en" | "ne" | "hi";
  confidence: number;
  extractedQuery: string;
}

/**
 * Ultra-High Accuracy Multilingual Semantic Knowledge Retriever.
 * Evaluates semantic intents and resolves exact entities from live training data.
 */
export function retrieveIntentAndKnowledge(query: string): RetrievedIntent {
  const trained = loadTrainedKnowledge();
  const trimmed = query.trim();
  const lower = trimmed.toLowerCase();
  const hasDevanagari = /[\u0900-\u097F]/.test(query);

  // 1. Language Detection (English / Nepali / Hindi including Romanized versions)
  const isHindi =
    /\b(namaste|aap|aapka|aapki|aapke|kitna|kitne|hoga|hogi|lagega|kharcha|banaane|kaise|kaha hai|kaha pe|bataiye|chahiye|kya hai|kya kya|kaun hai|karo|karte|kripya|batao|bataiye|dijiye)\b/i.test(
      query
    ) ||
    (hasDevanagari &&
      (query.includes("कहाँ है") ||
        query.includes("कितना") ||
        query.includes("खर्चा") ||
        query.includes("लागत") ||
        query.includes("बताइए") ||
        query.includes("चाहिए") ||
        query.includes("सेवाएं") ||
        query.includes("कौन हैं") ||
        query.includes("नमस्ते")));

  const isNepali =
    /\b(namaste|tapai|tapaiko|tapaika|kati|parcha|lagcha|garne|banauna|kaha cha|kata ho|cha|chha|thik|dhanyabad|kasari|kasto|lincha|garnuhos|milcha|hunchha|huncha|bhandinus|garnu)\b/i.test(
      query
    ) ||
    (hasDevanagari &&
      (query.includes("कहाँ छ") ||
        query.includes("कति पर्छ") ||
        query.includes("खर्च लाग्छ") ||
        query.includes("बनाउन") ||
        query.includes("हुनुहुन्छ") ||
        query.includes("ठेगाना") ||
        query.includes("सम्पर्क") ||
        query.includes("कार्यालय") ||
        query.includes("गर्नुहोस्")));

  const language: "en" | "ne" | "hi" = isHindi ? "hi" : isNepali ? "ne" : "en";

  // 2. Priority 1: Leadership / Founder / Director Message
  if (
    lower.includes("director") ||
    lower.includes("founder") ||
    lower.includes("ceo") ||
    lower.includes("chairman") ||
    lower.includes("sushil") ||
    lower.includes("panthi") ||
    lower.includes("who owns") ||
    lower.includes("who is running") ||
    lower.includes("leadership") ||
    (hasDevanagari &&
      (query.includes("निर्देशक") ||
        query.includes("संस्थापक") ||
        query.includes("सुशील") ||
        query.includes("मालिक") ||
        query.includes("डायरेक्टर") ||
        query.includes("सीईओ")))
  ) {
    return { type: "leadership", language, confidence: 0.99, extractedQuery: trimmed };
  }

  // 3. Priority 2: Office Location, Working Hours, Address & Map Navigation
  if (
    lower.includes("location") ||
    lower.includes("address") ||
    lower.includes("office") ||
    lower.includes("headquarter") ||
    lower.includes("kaha cha") ||
    lower.includes("kaha hai") ||
    lower.includes("kaha pe") ||
    lower.includes("kata ho") ||
    lower.includes("baneshwor") ||
    lower.includes("deurali") ||
    lower.includes("google map") ||
    lower.includes("map") ||
    lower.includes("direction") ||
    lower.includes("working hours") ||
    lower.includes("office hours") ||
    (hasDevanagari &&
      (query.includes("ठेगाना") ||
        query.includes("कहाँ छ") ||
        query.includes("कहाँ है") ||
        query.includes("कार्यालय") ||
        query.includes("अफिस") ||
        query.includes("ऑफिस") ||
        query.includes("कार्यालय समय") ||
        query.includes("नक्सा") ||
        query.includes("बानेश्वर") ||
        query.includes("कहाँ अवस्थित")))
  ) {
    return { type: "office-location", language, confidence: 0.98, extractedQuery: trimmed };
  }

  // 4. Priority 3: Contact Channels, Phone, WhatsApp, Email, Support
  if (
    lower.includes("contact") ||
    lower.includes("phone") ||
    lower.includes("email") ||
    lower.includes("number") ||
    lower.includes("whatsapp") ||
    lower.includes("call number") ||
    lower.includes("reach out") ||
    (hasDevanagari &&
      (query.includes("सम्पर्क") ||
        query.includes("फोन") ||
        query.includes("नम्बर") ||
        query.includes("ईमेल") ||
        query.includes("ह्वाट्सएप")))
  ) {
    return { type: "contact-info", language, confidence: 0.98, extractedQuery: trimmed };
  }

  // 5. Priority 4: Source Code Ownership, Guarantees, Warranty & Security
  if (
    lower.includes("source code") ||
    lower.includes("ownership") ||
    lower.includes("warranty") ||
    lower.includes("guarantee") ||
    lower.includes("lock-in") ||
    lower.includes("lock in") ||
    lower.includes("why choose") ||
    lower.includes("why himnova") ||
    (hasDevanagari &&
      (query.includes("सोर्स कोड") ||
        query.includes("स्वामित्व") ||
        query.includes("वारेन्टी") ||
        query.includes("वारंटी") ||
        query.includes("गारंटी") ||
        query.includes("सुरक्षा")))
  ) {
    return { type: "guarantee-ownership", language, confidence: 0.96, extractedQuery: trimmed };
  }

  // 6. Priority 5: Tech Stack & Architecture Frameworks
  if (
    lower.includes("tech stack") ||
    lower.includes("technologies") ||
    lower.includes("technology") ||
    lower.includes("frameworks") ||
    lower.includes("programming language") ||
    lower.includes("stack") ||
    (hasDevanagari && (query.includes("प्रविधि") || query.includes("टेक स्टैक") || query.includes("टेक्नोलॉजी")))
  ) {
    return { type: "tech-stack", language, confidence: 0.95, extractedQuery: trimmed };
  }

  // 7. Priority 6: Delivery Timeline, Turnaround & SLA
  if (
    lower.includes("how long") ||
    lower.includes("timeline") ||
    lower.includes("turnaround") ||
    lower.includes("delivery time") ||
    lower.includes("time frame") ||
    lower.includes("how fast") ||
    (hasDevanagari &&
      (query.includes("कति समय") ||
        query.includes("कति दिन") ||
        query.includes("कितना समय") ||
        query.includes("कितने दिन") ||
        query.includes("डेलिभरी समय")))
  ) {
    return { type: "delivery-timeline", language, confidence: 0.95, extractedQuery: trimmed };
  }

  // 8. Priority 7: Portfolio, Case Studies, Proven Experience
  if (
    lower.includes("portfolio") ||
    lower.includes("past projects") ||
    lower.includes("case study") ||
    lower.includes("clients") ||
    lower.includes("previous work") ||
    (hasDevanagari && (query.includes("पोर्टफोलियो") || query.includes("कामहरू") || query.includes("प्रोजेक्ट")))
  ) {
    return { type: "projects-portfolio", language, confidence: 0.95, extractedQuery: trimmed };
  }

  // 9. Priority 8: Careers, Hiring, Vacancies, Jobs
  if (
    lower.includes("job") ||
    lower.includes("career") ||
    lower.includes("vacancy") ||
    lower.includes("hiring") ||
    lower.includes("internship") ||
    lower.includes("apply") ||
    (hasDevanagari &&
      (query.includes("जागिर") ||
        query.includes("भ्याकेन्सी") ||
        query.includes("आवेदन") ||
        query.includes("नौकरी") ||
        query.includes("जब")))
  ) {
    return { type: "careers-hiring", language, confidence: 0.95, extractedQuery: trimmed };
  }

  // 10. Priority 9: All 19 Turnkey Products Catalog
  if (
    /(\b(all|every|19)\b.*(products|turnkey|solutions)|product\s+catalog|list\s+of\s+.*products|what.*products)/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("सबै उत्पादन") || query.includes("सम्पूर्ण उत्पादन") || query.includes("सारे प्रोडक्ट्स")))
  ) {
    return { type: "all-products", language, confidence: 0.95, extractedQuery: trimmed };
  }

  // 11. Priority 10: All 15 Services Catalog
  if (
    /(\b(all|every|15)\b.*(services|offerings)|service\s+catalog|list\s+of\s+.*services|what\s+services|what.*offer)/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("सबै सेवा") || query.includes("सम्पूर्ण सेवा") || query.includes("सारी सर्विसेज")))
  ) {
    return { type: "all-services", language, confidence: 0.95, extractedQuery: trimmed };
  }

  // 12. Priority 11: Explicit Specific Turnkey Product Match
  const productMatch = trained.products.find((p) => {
    const pId = p.id.toLowerCase();
    const pTitle = p.title.toLowerCase();

    if (lower.includes(pId)) return true;
    if (lower.includes(pTitle.split(":")[0].toLowerCase())) return true;

    if (lower.includes("voxnova") && pId.includes("voxnova")) return true;
    if (
      (lower.includes("omnistore") ||
        lower.includes("ecommerce") ||
        lower.includes("e-commerce") ||
        lower.includes("multivendor") ||
        lower.includes("online shop") ||
        lower.includes("ईकमर्स") ||
        lower.includes("दुकान")) &&
      pId.includes("ecommerce")
    )
      return true;
    if (
      (lower.includes("medpulse") ||
        lower.includes("hospital") ||
        lower.includes("clinic") ||
        lower.includes("ehr") ||
        lower.includes("emr") ||
        lower.includes("अस्पताल")) &&
      pId.includes("hospital")
    )
      return true;
    if (
      (lower.includes("hostelhive") ||
        lower.includes("staypms") ||
        lower.includes("hotel") ||
        lower.includes("hostel") ||
        lower.includes("होटल") ||
        lower.includes("होस्टल")) &&
      pId.includes("hotel")
    )
      return true;
    if (
      (lower.includes("dineflow") ||
        lower.includes("restaurant") ||
        lower.includes("table qr") ||
        lower.includes("रेस्टुरेन्ट") ||
        lower.includes("रेस्टोरेंट")) &&
      pId.includes("restaurant")
    )
      return true;
    if (
      (lower.includes("educore") ||
        lower.includes("school") ||
        lower.includes("college") ||
        lower.includes("school lms") ||
        lower.includes("विद्यालय") ||
        lower.includes("स्कूल")) &&
      pId.includes("school")
    )
      return true;
    if (
      (lower.includes("estatenest") ||
        lower.includes("real estate") ||
        lower.includes("property portal") ||
        lower.includes("ghar jagga") ||
        lower.includes("घर जग्गा")) &&
      pId.includes("real-estate")
    )
      return true;
    if (
      (lower.includes("treksync") ||
        lower.includes("trekking") ||
        lower.includes("tour booking") ||
        lower.includes("travel agency") ||
        lower.includes("ट्रेकिङ")) &&
      pId.includes("travel")
    )
      return true;
    if (
      (lower.includes("swifttrack") ||
        lower.includes("courier") ||
        lower.includes("cargo tracking") ||
        lower.includes("logistics app") ||
        lower.includes("कुरियर")) &&
      pId.includes("logistics")
    )
      return true;
    if (
      (lower.includes("fitpulse") ||
        lower.includes("gym booking") ||
        lower.includes("fitness club") ||
        lower.includes("जिम")) &&
      pId.includes("gym")
    )
      return true;
    if (
      (lower.includes("loanengine") ||
        lower.includes("micro-lending") ||
        lower.includes("cooperative banking") ||
        lower.includes("sahakari") ||
        lower.includes("सहकारी")) &&
      pId.includes("fintech")
    )
      return true;
    if (
      (lower.includes("stockmaster") ||
        lower.includes("warehouse pos") ||
        lower.includes("inventory pos") ||
        lower.includes("इन्भेन्टरी")) &&
      pId.includes("inventory")
    )
      return true;
    if (
      (lower.includes("autodesk") ||
        lower.includes("auto repair") ||
        lower.includes("garage crm") ||
        lower.includes("workshop pos") ||
        lower.includes("ग्यारेज")) &&
      pId.includes("auto")
    )
      return true;
    if (
      (lower.includes("pharmacare") ||
        lower.includes("pharmacy pos") ||
        lower.includes("drugstore") ||
        lower.includes("फार्मेसी") ||
        lower.includes("दवा")) &&
      pId.includes("pharmacy")
    )
      return true;
    if (
      (lower.includes("passport") ||
        lower.includes("event ticketing") ||
        lower.includes("qr gate pass") ||
        lower.includes("टिकट")) &&
      pId.includes("ticketing")
    )
      return true;
    if (
      (lower.includes("workpulse") ||
        lower.includes("hr suite") ||
        lower.includes("payroll suite") ||
        lower.includes("पेरोल")) &&
      pId.includes("hr")
    )
      return true;
    if (
      (lower.includes("agrilink") ||
        lower.includes("agritech") ||
        lower.includes("farm marketplace") ||
        lower.includes("krishi") ||
        lower.includes("कृषि")) &&
      pId.includes("agritech")
    )
      return true;
    if (
      (lower.includes("lexislaw") ||
        lower.includes("legal practice") ||
        lower.includes("law firm") ||
        lower.includes("वकील") ||
        lower.includes("कानून")) &&
      pId.includes("legal")
    )
      return true;
    if (
      (lower.includes("skillstream") ||
        lower.includes("video course") ||
        lower.includes("online lms") ||
        lower.includes("कोर्स")) &&
      pId.includes("lms-learning")
    )
      return true;

    return false;
  });

  if (productMatch) {
    return {
      type: "specific-product",
      matchedProduct: productMatch,
      language,
      confidence: 0.95,
      extractedQuery: trimmed,
    };
  }

  // 13. Priority 12: Explicit Specific Service Match
  const serviceMatch = trained.services.find((s) => {
    const sId = s.id.toLowerCase();
    const sTitle = s.title.toLowerCase();

    if (lower.includes(sId)) return true;
    if (lower.includes(sTitle.toLowerCase())) return true;

    if (
      (lower.includes("voice") ||
        lower.includes("calling") ||
        lower.includes("call agent") ||
        lower.includes("bland") ||
        lower.includes("vapi") ||
        lower.includes("receptionist") ||
        lower.includes("ai phone") ||
        lower.includes("भ्वाइस") ||
        lower.includes("कलिङ") ||
        lower.includes("कॉलिंग") ||
        lower.includes("वॉइस")) &&
      sId === "ai-agents-voice-calling"
    )
      return true;

    if (
      (lower.includes("mobile app") ||
        lower.includes("mobile") ||
        lower.includes("ios") ||
        lower.includes("android") ||
        lower.includes("flutter") ||
        lower.includes("react native") ||
        lower.includes("मोबाइल") ||
        lower.includes("ऐप") ||
        lower.includes("एप")) &&
      sId === "mobile-app-development"
    )
      return true;

    if (
      (lower.includes("web app") ||
        lower.includes("custom software") ||
        lower.includes("saas") ||
        lower.includes("enterprise software") ||
        lower.includes("erp development") ||
        lower.includes("सफ्टवेयर") ||
        lower.includes("सॉफ्टवेयर")) &&
      (sId === "web-app-development" || sId === "custom-software-development")
    )
      return true;

    if (
      (lower.includes("website") ||
        lower.includes("web design") ||
        lower.includes("landing page") ||
        lower.includes("redesign") ||
        lower.includes("वेबसाइट")) &&
      sId === "website-design-development"
    )
      return true;

    if (
      (lower.includes("cloud hosting") ||
        lower.includes("hosting") ||
        lower.includes("server") ||
        lower.includes("aws") ||
        lower.includes("होस्टिंग") ||
        lower.includes("सर्वर")) &&
      sId === "cloud-hosting-management"
    )
      return true;

    if (
      (lower.includes("devops") ||
        lower.includes("kubernetes") ||
        lower.includes("ci/cd") ||
        lower.includes("docker pipeline")) &&
      sId === "devops-cicd-automation"
    )
      return true;

    if (
      (lower.includes("payment gateway") ||
        lower.includes("esewa") ||
        lower.includes("khalti") ||
        lower.includes("connectips") ||
        lower.includes("stripe") ||
        lower.includes("पेमेंट")) &&
      sId === "payment-gateway-integration"
    )
      return true;

    if (
      (lower.includes("cybersecurity") ||
        lower.includes("security audit") ||
        lower.includes("penetration testing") ||
        lower.includes("pentest") ||
        lower.includes("सुरक्षा")) &&
      sId === "cybersecurity-audit-compliance"
    )
      return true;

    if (
      (lower.includes("seo") ||
        lower.includes("search engine") ||
        lower.includes("ranking") ||
        lower.includes("google ranking") ||
        lower.includes("एसईओ")) &&
      sId === "seo-growth-optimization"
    )
      return true;

    if (
      (lower.includes("ui/ux") ||
        lower.includes("ui ux") ||
        lower.includes("figma") ||
        lower.includes("wireframe") ||
        lower.includes("डिजाइन")) &&
      sId === "ui-ux-design-system"
    )
      return true;

    if (
      (lower.includes("computer vision") ||
        lower.includes("yolo") ||
        lower.includes("image recognition") ||
        lower.includes("cctv ai")) &&
      sId === "ai-computer-vision"
    )
      return true;

    return false;
  });

  if (serviceMatch) {
    return {
      type: "specific-service",
      matchedService: serviceMatch,
      language,
      confidence: 0.95,
      extractedQuery: trimmed,
    };
  }

  // 14. Priority 13: General Pricing & Rates
  if (
    lower.includes("price") ||
    lower.includes("pricing") ||
    lower.includes("cost") ||
    lower.includes("rate") ||
    lower.includes("how much") ||
    lower.includes("charge") ||
    lower.includes("kati") ||
    lower.includes("parcha") ||
    lower.includes("lagcha") ||
    lower.includes("kitna") ||
    lower.includes("kharcha") ||
    (hasDevanagari &&
      (query.includes("मूल्य") || query.includes("दर") || query.includes("पैसा") || query.includes("खर्च")))
  ) {
    return { type: "pricing-general", language, confidence: 0.92, extractedQuery: trimmed };
  }

  // 15. General Consultation Fallback
  return { type: "general-help", language, confidence: 0.85, extractedQuery: trimmed };
}
