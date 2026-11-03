import { loadTrainedKnowledge } from "./trainingData";
import { ServiceItem, ProjectItem } from "@/config/siteData";
import { NicheProduct } from "@/data/nicheProducts";
import { BlogPost } from "@/data/blogs/types";

export interface AnalyzedQuery {
  rawQuery: string;
  normalizedQuery: string;
  language: "en" | "ne" | "hi";
  isFarewell: boolean;
  isGreeting: boolean;
  isAskingPricing: boolean;
  isAskingTimeline: boolean;
  isAskingFeatures: boolean;
  isAskingTechStack: boolean;
  isAskingDeliverables: boolean;
  isAskingLocation: boolean;
  isAskingContact: boolean;
  isAskingLeadership: boolean;
  isAskingCareers: boolean;
  isAskingGuarantees: boolean;
  isAskingAllServices: boolean;
  isAskingAllProducts: boolean;
  isAskingProjects: boolean;
  isAskingBlogs: boolean;
  matchedProducts: NicheProduct[];
  matchedServices: ServiceItem[];
  matchedProjects: ProjectItem[];
  matchedBlogs: BlogPost[];
  isOutOfScope: boolean;
  extractedTopic: string;
  confidence: number;
}

/**
 * Deep linguistic & semantic analyzer for user queries across English, Nepali, and Hindi.
 * Evaluates live site knowledge with sub-millisecond execution.
 */
export function analyzeUserQuery(query: string): AnalyzedQuery {
  const trimmed = query.trim();
  const lower = trimmed.toLowerCase();
  const hasDevanagari = /[\u0900-\u097F]/.test(query);
  const trained = loadTrainedKnowledge();

  // 1. Language Detection (English / Nepali / Hindi including Romanized & Devanagari)
  const isHindi =
    /\b(namaste|aap|aapka|aapki|aapke|kitna|kitne|hoga|hogi|lagega|kharcha|banaane|kaise|kaha hai|kaha pe|bataiye|chahiye|kya hai|kya kya|kaun hai|karo|karte|kripya|batao|dijiye|shukriya|alvida|dhanyawad)\b/i.test(
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
        query.includes("शुक्रिया") ||
        query.includes("अलविदा") ||
        query.includes("धन्यवाद")));

  const isNepali =
    /\b(namaste|tapai|tapaiko|tapaika|kati|parcha|lagcha|garne|banauna|kaha cha|kata ho|cha|chha|thik|dhanyabad|kasari|kasto|lincha|garnuhos|milcha|hunchha|huncha|bhandinus|garnu|pugyo|hunchha|bhetla|dherai)\b/i.test(
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
        query.includes("धन्यवाद") ||
        query.includes("पुग्यो") ||
        query.includes("धेरै")));

  const language: "en" | "ne" | "hi" = isHindi ? "hi" : isNepali ? "ne" : "en";

  // 2. Farewell / Exit / Gratitude Intent (Crucial for Voice Call Auto-Hangup)
  const isFarewell =
    /\b(bye|goodbye|see you|thank you|thanks|thank u|tq|ty|dhanyabad|dhanyawad|shukriya|alvida|ok bye|okay bye|call end|end call|hang up|pugyo|enough|exit|quit|stop call|bhetla)\b/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("अलविदा") ||
        query.includes("धन्यवाद") ||
        query.includes("पुग्यो") ||
        query.includes("बन्द गर्नुहोस्") ||
        query.includes("बाई") ||
        query.includes("टाटा")));

  // 3. Greeting Intent
  const isGreeting =
    /^(hi|hello|hey|namaste|namaskar|good morning|good afternoon|good evening|k cha|kaise ho|how are you|kasto cha|what's up|sup)\b/i.test(
      lower
    ) ||
    (hasDevanagari && (query.includes("नमस्ते") || query.includes("नमस्कार") || query.includes("हेलो")));

  // 4. Aspect Flags
  const isAskingPricing =
    /\b(price|pricing|cost|rate|rates|how much|charge|fee|fees|budget|npr|usd|dollar|kati|parcha|lagcha|kitna|kharcha|paisa|charges|quotation|quote|estimate)\b/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("मूल्य") ||
        query.includes("दर") ||
        query.includes("लागत") ||
        query.includes("खर्च") ||
        query.includes("पैसा") ||
        query.includes("कति") ||
        query.includes("कितना")));

  const isAskingTimeline =
    /\b(how long|how fast|time|duration|timeline|turnaround|delivery|days|weeks|months|kati din|kati samay|kitna samay|kitne din|speed|take)\b/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("समय") ||
        query.includes("दिन") ||
        query.includes("हप्ता") ||
        query.includes("अवधि") ||
        query.includes("डेलिभरी")));

  const isAskingFeatures =
    /\b(features|capabilities|modules|what can it do|what does it do|how does it work|specs|functions|k k cha|kya kya hai|included|deliverables)\b/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("विशेषता") || query.includes("सुविधा") || query.includes("फीचर्स") || query.includes("काम गर्छ")));

  const isAskingTechStack =
    /\b(tech stack|technology|technologies|framework|frameworks|database|stack|react|nextjs|flutter|node|python|aws|tools|prabidhi|golang|kubernetes|docker|fastapi)\b/i.test(
      lower
    ) || (hasDevanagari && (query.includes("प्रविधि") || query.includes("टेक स्टैक") || query.includes("टेक्नोलॉजी")));

  const isAskingDeliverables =
    /\b(deliverables|what do i get|source code|ownership|license|github|deploy|handover)\b/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("सोर्स कोड") || query.includes("स्वामित्व") || query.includes("वारेन्टी") || query.includes("वारंटी")));

  const isAskingLocation =
    /\b(location|address|office|headquarter|headquarters|corporate office|branch|branches|where is (your|the|himnova)?\s*(office|company|headquarter|location)|where are you located|where located|google map|directions|visit your office|dillibazar|padmakanya|kaha cha office|kata ho office|thegana)\b/i.test(
      lower
    ) ||
    (/\b(where is|where are you)\b/i.test(lower) && /\b(office|company|himnova|located|hq)\b/i.test(lower)) ||
    (hasDevanagari &&
      (query.includes("ठेगाना") ||
        query.includes("कार्यालय") ||
        query.includes("अफिस कहाँ") ||
        query.includes("ऑफिस कहाँ") ||
        query.includes("नक्सा")));

  const isAskingContact =
    /\b(contact|contact us|phone number|official email|whatsapp|phone|call us|reach out|contact details|samparka|fon number)\b/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("सम्पर्क") || query.includes("फोन नम्बर") || query.includes("ईमेल")));

  const isAskingLeadership =
    /\b(director|founder|ceo|chairman|sushil|panthi|leader|leadership|who owns|who runs|owner|malik|nirdeshak|architect)\b/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("निर्देशक") ||
        query.includes("संस्थापक") ||
        query.includes("सुशील") ||
        query.includes("पन्थी") ||
        query.includes("मालिक") ||
        query.includes("सीईओ")));

  const isAskingCareers =
    /\b(job|career|careers|vacancy|vacancies|hiring|internship|apply|salary|jagir|naukri|opening|openings)\b/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("जागिर") || query.includes("भ्याकेन्सी") || query.includes("आवेदन") || query.includes("नौकरी")));

  const isAskingGuarantees =
    /\b(guarantee|guarantees|warranty|sla|security|owasp|source code ownership|lock-in|why choose|trust|uncompromising)\b/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("गारंटी") || query.includes("सुरक्षा") || query.includes("भरोसा") || query.includes("विश्वास")));

  const isAskingAllServices =
    /(\b(all|every|15|fifteen)\b.*(services|offerings)|service\s+catalog|list\s+of\s+.*services|what\s+services|what.*do\s+you\s+offer)/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("सबै सेवा") || query.includes("सम्पूर्ण सेवा") || query.includes("सारी सर्विसेज")));

  const isAskingAllProducts =
    /(\b(all|every|19|nineteen)\b.*(products|turnkey|solutions)|product\s+catalog|list\s+of\s+.*products|what.*products)/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("सबै उत्पादन") || query.includes("सम्पूर्ण उत्पादन") || query.includes("सारे प्रोडक्ट्स")));

  const isAskingProjects =
    /\b(project|projects|portfolio|case study|case studies|past work|work done|delivered|client projects|skillnexus|algocare|lumbinicare|sushilgpt|facemark|stocksmart|studenttrack)\b/i.test(
      lower
    ) ||
    (hasDevanagari && (query.includes("परियोजना") || query.includes("प्रोजेक्ट") || query.includes("काम")));

  const isAskingBlogs =
    /\b(blog|blogs|article|articles|insight|insights|research|paper|publication|agentic ai revolution|microservices enterprise blueprint|zero-trust cloud security|finops|rag pipelines)\b/i.test(
      lower
    ) ||
    (hasDevanagari && (query.includes("ब्लग") || query.includes("लेख") || query.includes("अनुसन्धान")));

  // 5. Matched Products Resolution (All 19 Turnkey Products)
  const matchedProducts: NicheProduct[] = trained.products.filter((p) => {
    const pId = p.id.toLowerCase();
    const pTitle = p.title.toLowerCase();

    if (lower.includes(pId)) return true;
    if (lower.includes(pTitle.split(":")[0].toLowerCase().trim())) return true;

    // Semantic keyword mapping
    if (
      (lower.includes("voxnova") ||
        lower.includes("voice bot") ||
        lower.includes("calling platform") ||
        lower.includes("ai phone system")) &&
      pId.includes("voxnova")
    )
      return true;

    if (
      (lower.includes("hospital") ||
        lower.includes("clinic") ||
        lower.includes("ehr") ||
        lower.includes("emr") ||
        lower.includes("doctor") ||
        lower.includes("medpulse") ||
        lower.includes("health") ||
        lower.includes("अस्पताल")) &&
      pId.includes("hospital")
    )
      return true;

    if (
      (lower.includes("ecommerce") ||
        lower.includes("e-commerce") ||
        lower.includes("multivendor") ||
        lower.includes("online store") ||
        lower.includes("omnistore") ||
        lower.includes("ईकमर्स") ||
        lower.includes("दुकान")) &&
      pId.includes("ecommerce")
    )
      return true;

    if (
      (lower.includes("hotel") ||
        lower.includes("hostel") ||
        lower.includes("staypms") ||
        lower.includes("hostelhive") ||
        lower.includes("room booking") ||
        lower.includes("होटल")) &&
      pId.includes("hotel")
    )
      return true;

    if (
      (lower.includes("restaurant") ||
        lower.includes("dineflow") ||
        lower.includes("table qr") ||
        lower.includes("kds") ||
        lower.includes("food menu") ||
        lower.includes("dining") ||
        lower.includes("रेस्टुरेन्ट") ||
        lower.includes("रेस्टोरेंट")) &&
      pId.includes("restaurant")
    )
      return true;

    if (
      (lower.includes("school") ||
        lower.includes("college") ||
        lower.includes("educore") ||
        lower.includes("school erp") ||
        lower.includes("student portal") ||
        lower.includes("विद्यालय") ||
        lower.includes("स्कूल")) &&
      pId.includes("school")
    )
      return true;

    if (
      (lower.includes("real estate") ||
        lower.includes("property") ||
        lower.includes("estatenest") ||
        lower.includes("ghar jagga") ||
        lower.includes("घर जग्गा")) &&
      pId.includes("real-estate")
    )
      return true;

    if (
      (lower.includes("travel") ||
        lower.includes("trekking") ||
        lower.includes("tour") ||
        lower.includes("treksync") ||
        lower.includes("ट्रेकिङ")) &&
      pId.includes("travel")
    )
      return true;

    if (
      (lower.includes("courier") ||
        lower.includes("cargo") ||
        lower.includes("logistics") ||
        lower.includes("swifttrack") ||
        lower.includes("कुरियर")) &&
      pId.includes("logistics")
    )
      return true;

    if (
      (lower.includes("gym") ||
        lower.includes("fitness") ||
        lower.includes("fitpulse") ||
        lower.includes("salon") ||
        lower.includes("जिम")) &&
      pId.includes("gym")
    )
      return true;

    if (
      (lower.includes("microfinance") ||
        lower.includes("cooperative") ||
        lower.includes("lending") ||
        lower.includes("loanengine") ||
        lower.includes("sahakari") ||
        lower.includes("सहकारी")) &&
      pId.includes("fintech")
    )
      return true;

    if (
      (lower.includes("warehouse") ||
        lower.includes("inventory pos") ||
        lower.includes("stockmaster") ||
        lower.includes("स्टक")) &&
      pId.includes("inventory")
    )
      return true;

    if (
      (lower.includes("car rental") ||
        lower.includes("fleet") ||
        lower.includes("vehicle rental") ||
        lower.includes("गाडी भाडा")) &&
      pId.includes("rental")
    )
      return true;

    if (
      (lower.includes("pharmacy") ||
        lower.includes("drugstore") ||
        lower.includes("pharmacare") ||
        lower.includes("औषधि") ||
        lower.includes("फार्मेसी")) &&
      pId.includes("pharmacy")
    )
      return true;

    if (
      (lower.includes("ticketing") ||
        lower.includes("gate pass") ||
        lower.includes("events ticket") ||
        lower.includes("qr ticket") ||
        lower.includes("टिकट")) &&
      pId.includes("ticketing")
    )
      return true;

    if (
      (lower.includes("job board") ||
        lower.includes("recruitment") ||
        lower.includes("ats") ||
        lower.includes("hiring portal")) &&
      pId.includes("job-board")
    )
      return true;

    if (
      (lower.includes("crowdfunding") ||
        lower.includes("donation") ||
        lower.includes("charity") ||
        lower.includes("दान")) &&
      pId.includes("crowdfunding")
    )
      return true;

    if (
      (lower.includes("on-demand") ||
        lower.includes("service booking app") ||
        lower.includes("urban service")) &&
      pId.includes("on-demand")
    )
      return true;

    if (
      (lower.includes("enterprise ai chatbot") ||
        lower.includes("rag chatbot") ||
        lower.includes("knowledge bot")) &&
      pId.includes("chatbot")
    )
      return true;

    return false;
  });

  // 6. Matched Services Resolution (All 15 IT Services)
  const matchedServices: ServiceItem[] = trained.services.filter((s) => {
    const sId = s.id.toLowerCase();
    const sTitle = s.title.toLowerCase();

    if (lower.includes(sId)) return true;
    if (lower.includes(sTitle.toLowerCase())) return true;

    if (
      (lower.includes("voice agent") ||
        lower.includes("voice calling") ||
        lower.includes("ai phone") ||
        lower.includes("ai receptionist") ||
        lower.includes("calling agent") ||
        lower.includes("call agent") ||
        lower.includes("bland") ||
        lower.includes("vapi") ||
        lower.includes("भ्वाइस") ||
        lower.includes("कलिङ") ||
        lower.includes("कॉलिंग") ||
        lower.includes("वॉइस")) &&
      sId.includes("voice")
    )
      return true;

    if (
      (lower.includes("mobile app") ||
        lower.includes("mobile application") ||
        lower.includes("ios") ||
        lower.includes("android") ||
        lower.includes("flutter") ||
        lower.includes("react native") ||
        lower.includes("app development") ||
        lower.includes("मोबाइल") ||
        lower.includes("ऐप")) &&
      sId.includes("mobile")
    )
      return true;

    if (
      (lower.includes("custom software") ||
        lower.includes("software development") ||
        lower.includes("enterprise software") ||
        lower.includes("erp development") ||
        lower.includes("सफ्टवेयर") ||
        lower.includes("सॉफ्टवेयर")) &&
      sId.includes("custom-software")
    )
      return true;

    if (
      (lower.includes("web app") ||
        lower.includes("web platform") ||
        lower.includes("saas platform") ||
        lower.includes("saas")) &&
      sId.includes("web-apps")
    )
      return true;

    if (
      (lower.includes("website") ||
        lower.includes("web design") ||
        lower.includes("landing page") ||
        lower.includes("redesign") ||
        lower.includes("वेबसाइट")) &&
      sId.includes("website-design")
    )
      return true;

    if (
      (lower.includes("hosting") ||
        lower.includes("vps") ||
        lower.includes("domain") ||
        lower.includes("server") ||
        lower.includes("होस्टिंग")) &&
      sId.includes("domain-hosting")
    )
      return true;

    if (
      (lower.includes("devops") ||
        lower.includes("kubernetes") ||
        lower.includes("ci/cd") ||
        lower.includes("docker") ||
        lower.includes("cloud deployment")) &&
      (sId.includes("deployment-cloud") || sId.includes("devops"))
    )
      return true;

    if (
      (lower.includes("it support") ||
        lower.includes("maintenance") ||
        lower.includes("helpdesk") ||
        lower.includes("24/7 support") ||
        lower.includes("सपोर्ट")) &&
      sId.includes("it-support")
    )
      return true;

    if (
      (lower.includes("annual subscription") ||
        lower.includes("amc") ||
        lower.includes("yearly support")) &&
      sId.includes("annual-subscription")
    )
      return true;

    if (
      (lower.includes("seo") ||
        lower.includes("ranking") ||
        lower.includes("google search") ||
        lower.includes("analytics") ||
        lower.includes("एसईओ")) &&
      sId.includes("seo-analytics")
    )
      return true;

    if (
      (lower.includes("social media") ||
        lower.includes("smm") ||
        lower.includes("facebook ads") ||
        lower.includes("instagram marketing")) &&
      sId.includes("social-media")
    )
      return true;

    if (
      (lower.includes("digital marketing") ||
        lower.includes("branding") ||
        lower.includes("मार्केटिङ")) &&
      sId.includes("digital-marketing")
    )
      return true;

    if (
      (lower.includes("content creation") ||
        lower.includes("copywriting") ||
        lower.includes("content writing")) &&
      sId.includes("content-creation")
    )
      return true;

    if (
      (lower.includes("consulting") ||
        lower.includes("advisory") ||
        lower.includes("tech consultation") ||
        lower.includes("सलाह")) &&
      sId.includes("consulting")
    )
      return true;

    return false;
  });

  // 7. Matched Delivered Projects (All 8 Projects)
  const matchedProjects: ProjectItem[] = trained.projects.filter((p) => {
    const pId = p.id.toLowerCase();
    const pTitle = p.title.toLowerCase();

    if (lower.includes(pId)) return true;
    if (lower.includes(pTitle.toLowerCase())) return true;
    if (lower.includes("skillnexus") && pId.includes("skillnexus")) return true;
    if (lower.includes("algocare") && pId.includes("algocare")) return true;
    if (lower.includes("emotion") && pId.includes("emotion")) return true;
    if (lower.includes("lumbinicare") && pId.includes("lumbinicare")) return true;
    if (lower.includes("sushilgpt") && pId.includes("sushilgpt")) return true;
    if (lower.includes("facemark") && pId.includes("facemark")) return true;
    if (lower.includes("stocksmart") && pId.includes("stocksmart")) return true;
    if (lower.includes("studenttrack") && pId.includes("studenttrack")) return true;

    return false;
  });

  // 8. Matched Research Blogs (All 16 Blogs)
  const matchedBlogs: BlogPost[] = trained.blogs.filter((b) => {
    const bSlug = b.slug.toLowerCase();
    const bTitle = b.title.toLowerCase();

    if (lower.includes(bSlug)) return true;
    if (lower.includes(bTitle.toLowerCase())) return true;

    if (lower.includes("agentic ai") && bSlug.includes("agentic")) return true;
    if (lower.includes("microservices") && bSlug.includes("microservices")) return true;
    if (lower.includes("zero-trust") && bSlug.includes("zero-trust")) return true;
    if (lower.includes("rag") && bSlug.includes("rag")) return true;
    if (lower.includes("flutter vs react native") && bSlug.includes("cross-platform")) return true;
    if (lower.includes("finops") && bSlug.includes("finops")) return true;
    if (lower.includes("postgres") && bSlug.includes("database")) return true;

    return false;
  });

  // 9. Detect Software / Tech Domain Relevance
  const hasTechKeyword =
    /\b(software|app|application|website|web|cloud|ai|voice|agent|erp|pos|crm|tech|technology|engineering|code|database|developer|development|api|architecture|system|hire|pricing|cost|rate|quote|sushil|panthi|himnova|kathmandu|nepal|dillibazar|warranty|sla|source code|project|career|job|internship)\b/i.test(
      lower
    ) ||
    hasDevanagari;

  // 10. Strict Out-of-Scope Detection
  // If the query is not a greeting, farewell, or any site feature, AND has zero relevance to Himnova / Tech:
  const isDirectlyMatched =
    isFarewell ||
    isGreeting ||
    isAskingLocation ||
    isAskingContact ||
    isAskingLeadership ||
    isAskingCareers ||
    isAskingGuarantees ||
    isAskingAllServices ||
    isAskingAllProducts ||
    isAskingProjects ||
    isAskingBlogs ||
    matchedProducts.length > 0 ||
    matchedServices.length > 0 ||
    matchedProjects.length > 0 ||
    matchedBlogs.length > 0;

  let isOutOfScope = false;
  let extractedTopic = "";

  if (!isDirectlyMatched) {
    if (!hasTechKeyword) {
      isOutOfScope = true;
      extractedTopic = trimmed.replace(/[?!.,]/g, "").slice(0, 80);
    } else if (
      lower.includes("recipe") ||
      lower.includes("weather") ||
      lower.includes("movie") ||
      lower.includes("bitcoin price") ||
      lower.includes("stock market today") ||
      lower.includes("cricket score") ||
      lower.includes("football score") ||
      lower.includes("second hand car") ||
      lower.includes("used bike") ||
      lower.includes("doctor appointment prescription")
    ) {
      isOutOfScope = true;
      extractedTopic = trimmed.replace(/[?!.,]/g, "").slice(0, 80);
    }
  }

  return {
    rawQuery: query,
    normalizedQuery: lower,
    language,
    isFarewell,
    isGreeting,
    isAskingPricing,
    isAskingTimeline,
    isAskingFeatures,
    isAskingTechStack,
    isAskingDeliverables,
    isAskingLocation,
    isAskingContact,
    isAskingLeadership,
    isAskingCareers,
    isAskingGuarantees,
    isAskingAllServices,
    isAskingAllProducts,
    isAskingProjects,
    isAskingBlogs,
    matchedProducts,
    matchedServices,
    matchedProjects,
    matchedBlogs,
    isOutOfScope,
    extractedTopic: extractedTopic || trimmed,
    confidence: isOutOfScope ? 0.1 : 0.95,
  };
}
