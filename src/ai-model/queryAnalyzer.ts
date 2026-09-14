import { loadTrainedKnowledge } from "./trainingData";
import { ServiceItem } from "@/config/siteData";
import { NicheProduct } from "@/data/nicheProducts";

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
  matchedProducts: NicheProduct[];
  matchedServices: ServiceItem[];
  confidence: number;
}

/**
 * Deep linguistic & semantic analyzer for user queries across English, Nepali, and Hindi.
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

  // 2. Farewell / Exit / Gratitude Intent (Crucial for Voice Agent Call Termination)
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
    /^(hi|hello|hey|namaste|namaskar|good morning|good afternoon|good evening|k cha|kaise ho|how are you|kasto cha)\b/i.test(
      lower
    ) ||
    (hasDevanagari && (query.includes("नमस्ते") || query.includes("नमस्कार") || query.includes("हेलो")));

  // 4. Aspect Flags
  const isAskingPricing =
    /\b(price|pricing|cost|rate|rates|how much|charge|fee|fees|budget|npr|usd|dollar|kati|parcha|lagcha|kitna|kharcha|paisa|charges)\b/i.test(
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
    /\b(tech stack|technology|technologies|framework|frameworks|database|stack|react|nextjs|flutter|node|python|aws|tools|prabidhi)\b/i.test(
      lower
    ) || (hasDevanagari && (query.includes("प्रविधि") || query.includes("टेक स्टैक") || query.includes("टेक्नोलॉजी")));

  const isAskingDeliverables =
    /\b(deliverables|what do i get|source code|ownership|license|github|deploy|handover)\b/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("सोर्स कोड") || query.includes("स्वामित्व") || query.includes("वारेन्टी") || query.includes("वारंटी")));

  const isAskingLocation =
    /\b(location|address|office|headquarter|where|map|google map|directions|visit|baneshwor|kaha cha|kaha hai|kata ho|thegana)\b/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("ठेगाना") ||
        query.includes("कार्यालय") ||
        query.includes("अफिस") ||
        query.includes("ऑफिस") ||
        query.includes("कहाँ छ") ||
        query.includes("कहाँ है") ||
        query.includes("नक्सा")));

  const isAskingContact =
    /\b(contact|phone|email|whatsapp|number|call|reach|message|samparka|fon|numbar)\b/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("सम्पर्क") || query.includes("फोन") || query.includes("नम्बर") || query.includes("ईमेल")));

  const isAskingLeadership =
    /\b(director|founder|ceo|chairman|sushil|panthi|leader|leadership|who owns|who runs|owner|malik|nirdeshak)\b/i.test(
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
    /\b(job|career|careers|vacancy|vacancies|hiring|internship|apply|salary|jagir|naukri)\b/i.test(
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
    /(\b(all|every|15)\b.*(services|offerings)|service\s+catalog|list\s+of\s+.*services|what\s+services|what.*do\s+you\s+offer)/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("सबै सेवा") || query.includes("सम्पूर्ण सेवा") || query.includes("सारी सर्विसेज")));

  const isAskingAllProducts =
    /(\b(all|every|19)\b.*(products|turnkey|solutions)|product\s+catalog|list\s+of\s+.*products|what.*products)/i.test(
      lower
    ) ||
    (hasDevanagari &&
      (query.includes("सबै उत्पादन") || query.includes("सम्पूर्ण उत्पादन") || query.includes("सारे प्रोडक्ट्स")));

  // 5. Matched Products Resolution (19 Turnkey Products)
  const matchedProducts: NicheProduct[] = trained.products.filter((p) => {
    const pId = p.id.toLowerCase();
    const pTitle = p.title.toLowerCase();

    if (lower.includes(pId)) return true;
    if (lower.includes(pTitle.split(":")[0].toLowerCase().trim())) return true;

    if (lower.includes("voxnova") && pId.includes("voxnova")) return true;
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
      (lower.includes("garage") ||
        lower.includes("auto repair") ||
        lower.includes("autodesk") ||
        lower.includes("workshop pos") ||
        lower.includes("ग्यारेज")) &&
      pId.includes("auto")
    )
      return true;
    if (
      (lower.includes("pharmacy") ||
        lower.includes("drugstore") ||
        lower.includes("pharmacare") ||
        lower.includes("फार्मेसी")) &&
      pId.includes("pharmacy")
    )
      return true;
    if (
      (lower.includes("ticketing") ||
        lower.includes("gate pass") ||
        lower.includes("events ticket") ||
        lower.includes("passport") ||
        lower.includes("टिकट")) &&
      pId.includes("ticketing")
    )
      return true;
    if (
      (lower.includes("payroll") ||
        lower.includes("attendance") ||
        lower.includes("hr suite") ||
        lower.includes("workpulse") ||
        lower.includes("पेरोल")) &&
      pId.includes("hr")
    )
      return true;
    if (
      (lower.includes("krishi") ||
        lower.includes("agritech") ||
        lower.includes("farm") ||
        lower.includes("agrilink") ||
        lower.includes("कृषि")) &&
      pId.includes("agritech")
    )
      return true;
    if (
      (lower.includes("legal") ||
        lower.includes("law firm") ||
        lower.includes("court") ||
        lower.includes("lexislaw") ||
        lower.includes("वकील")) &&
      pId.includes("legal")
    )
      return true;
    if (
      (lower.includes("course") ||
        lower.includes("lms") ||
        lower.includes("skillstream") ||
        lower.includes("online class") ||
        lower.includes("कोर्स")) &&
      pId.includes("lms-learning")
    )
      return true;

    return false;
  });

  // 6. Matched Services Resolution (15 IT Services)
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
        lower.includes("server") ||
        lower.includes("aws") ||
        lower.includes("cloud hosting") ||
        lower.includes("होस्टिंग")) &&
      sId.includes("cloud-hosting")
    )
      return true;

    if (
      (lower.includes("devops") ||
        lower.includes("kubernetes") ||
        lower.includes("ci/cd") ||
        lower.includes("docker")) &&
      sId.includes("devops")
    )
      return true;

    if (
      (lower.includes("payment") ||
        lower.includes("esewa") ||
        lower.includes("khalti") ||
        lower.includes("connectips") ||
        lower.includes("stripe") ||
        lower.includes("पेमेंट")) &&
      sId.includes("payment")
    )
      return true;

    if (
      (lower.includes("security") ||
        lower.includes("cybersecurity") ||
        lower.includes("pentest") ||
        lower.includes("audit") ||
        lower.includes("सुरक्षा")) &&
      sId.includes("cybersecurity")
    )
      return true;

    if (
      (lower.includes("seo") ||
        lower.includes("google ranking") ||
        lower.includes("search engine") ||
        lower.includes("marketing") ||
        lower.includes("एसईओ")) &&
      sId.includes("marketing")
    )
      return true;

    if (
      (lower.includes("ui/ux") ||
        lower.includes("ui ux") ||
        lower.includes("figma") ||
        lower.includes("design system") ||
        lower.includes("डिजाइन")) &&
      sId.includes("website-design")
    )
      return true;

    return false;
  });

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
    matchedProducts,
    matchedServices,
    confidence: 0.95,
  };
}
