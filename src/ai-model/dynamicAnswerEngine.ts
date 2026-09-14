import { loadTrainedKnowledge } from "./trainingData";
import { AnalyzedQuery } from "./queryAnalyzer";

export interface AIResponse {
  reply: string;
  audioText: string;
  suggestedActions: string[];
  isFarewell: boolean;
  language: "en" | "ne" | "hi";
}

function cleanNpr(price: string): string {
  return price.replace(/^NPR\s*/i, "").trim();
}

function cleanUsd(price: string): string {
  return price.replace(/^(\$|USD\s*)/i, "").trim();
}

/**
 * Dynamic AI Answer Engine.
 * Dynamically synthesizes personalized, pinpoint-accurate responses specifically answering
 * what the user asked, with zero generic template dumping.
 */
export function draftDynamicResponse(analyzed: AnalyzedQuery): AIResponse {
  const trained = loadTrainedKnowledge();
  const { company, director } = trained;
  const lang = analyzed.language;

  // -------------------------------------------------------------------------
  // 1. FAREWELL & CONVERSATION CONCLUSION INTENT (Voice Call Auto-Hangup)
  // -------------------------------------------------------------------------
  if (analyzed.isFarewell) {
    if (lang === "ne") {
      return {
        reply: `### 🙏 **धन्यवाद! (Thank you)**\n\nHimnova Technologies सँग कुराकानी गर्नुभएकोमा धन्यवाद। तपाईंलाई भविष्यमा कुनै पनि सफ्टवेयर वा एआई प्रोजेक्टको सहयोग चाहिएमा हामीलाई **${company.contact.phonePrimary}** मा WhatsApp वा फोन गर्न सक्नुहुन्छ। शुभ दिन!`,
        audioText:
          "हिमभोभा टेक्नोलोजिजमा सम्पर्क गर्नुभएकोमा धेरै धेरै धन्यवाद। तपाईंको दिन शुभ रहोस्, नमस्ते!",
        suggestedActions: ["WhatsApp Er. Sushil Panthi", "View 15 Services", "Office Location"],
        isFarewell: true,
        language: lang,
      };
    }

    if (lang === "hi") {
      return {
        reply: `### 🙏 **धन्यवाद! (Thank you)**\n\nHimnova Technologies से बात करने के लिए बहुत-बहुत धन्यवाद। किसी भी समय सहायता या नए प्रोजेक्ट के लिए आप हमें **${company.contact.phonePrimary}** पर WhatsApp कर सकते हैं। आपका दिन शुभ हो!`,
        audioText:
          "हिमभोभा टेक्नोलॉजीज से संपर्क करने के लिए धन्यवाद। आपका दिन शुभ और सफल रहे, नमस्ते!",
        suggestedActions: ["WhatsApp Connect", "Explore Services", "Office Map"],
        isFarewell: true,
        language: lang,
      };
    }

    return {
      reply: `### 🙏 **Thank You for Connecting with Himnova!**\n\nYou're very welcome! If you have any further questions or want to discuss an upcoming software or AI project, feel free to message us on WhatsApp anytime at **${company.contact.phonePrimary}**. Have a wonderful day!`,
      audioText:
        "You are very welcome! Thank you for contacting Himnova Technologies. Have a wonderful and productive day!",
      suggestedActions: ["WhatsApp Connect", "Explore 15 Services", "Office Location"],
      isFarewell: true,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 2. SPECIFIC PRODUCT MATCH (e.g. MedPulse, OmniStore, DineFlow, etc.)
  // -------------------------------------------------------------------------
  if (analyzed.matchedProducts.length > 0) {
    const p = analyzed.matchedProducts[0];
    const npr = cleanNpr(p.priceRange.localEstimated);
    const usd = cleanUsd(p.priceRange.usd);

    // If user asked about pricing/timeline of this product
    if (analyzed.isAskingPricing && !analyzed.isAskingFeatures) {
      if (lang === "ne") {
        return {
          reply: `### 💰 **${p.title} — मूल्य र डेलिभरी समय**

- **लागत (Price)**: **NPR ${npr}** (USD **$${usd}**) [${p.priceRange.model}]
- **तयारी समय (Turnaround)**: **${p.deliveryTime}** (Turnkey Deployment)
- **समावेश**: १००% Full Source Code Ownership, ६ महिनाको नि:शुल्क सपोर्ट, र Deployment Setup.`,
          audioText: `${p.title} को मूल्य एनपीआर ${npr} वा ${usd} डलर रहेको छ र यो ${p.deliveryTime} भित्र तयार हुन्छ। यसमा पूर्ण सोर्स कोड स्वामित्व समावेश छ।`,
          suggestedActions: [`Demo of ${p.title.split(" ")[0]}`, "Request Quotation", "WhatsApp Connect"],
          isFarewell: false,
          language: lang,
        };
      }

      if (lang === "hi") {
        return {
          reply: `### 💰 **${p.title} — लागत और डिलीवरी समय**

- **अनुमानित मूल्य**: **NPR ${npr}** (USD **$${usd}**) [${p.priceRange.model}]
- **डिलीवरी समय**: **${p.deliveryTime}**
- **गारंटी**: १००% Full Source Code Ownership और ६ महीने की मुफ्त SLA वारंटी।`,
          audioText: `${p.title} की कीमत एनपीआर ${npr} या ${usd} डॉलर है और यह ${p.deliveryTime} में पूरी तरह तैयार हो जाता है।`,
          suggestedActions: [`Demo: ${p.title.split(" ")[0]}`, "Request Quotation", "WhatsApp Chat"],
          isFarewell: false,
          language: lang,
        };
      }

      return {
        reply: `### 💰 **${p.title} — Investment & Turnaround SLA**

- **Estimated Investment**: **NPR ${npr}** (USD **$${usd}**) [${p.priceRange.model}]
- **Delivery Timeline**: **${p.deliveryTime}** (Fast Turnkey Setup)
- **Included**: 100% Full Source Code Ownership, Zero-Lock-In, 6 Months Free SLA Warranty & Deployment.`,
        audioText: `${p.title} is available at NPR ${npr} or ${usd} dollars with a ${p.deliveryTime} turnaround time, including complete source code ownership.`,
        suggestedActions: [`Demo of ${p.title.split(" ")[0]}`, "Request Quotation", "WhatsApp Connect"],
        isFarewell: false,
        language: lang,
      };
    }

    // Full Targeted Overview for Product
    return {
      reply: `### 🚀 **${p.title}** (Turnkey Product: \`${p.id}\`)

- **Category**: ${p.category}
- **Tagline**: *${p.tagline}*
- **Target Market**: ${p.targetMarket}

💰 **Investment & SLA**:
- **Price**: **NPR ${npr}** (USD **$${usd}**) [${p.priceRange.model}]
- **Delivery Timeline**: **${p.deliveryTime}**

✨ **Core Capabilities**:
${p.keyFeatures.map((f) => `- ${f}`).join("\n")}

🛠️ **Tech Stack**: ${p.techStack.join(", ")}
📦 **Deliverables**: Multi-tier app suite, admin portal, cloud deployment, and 100% full source code ownership.`,
      audioText: `${p.title} is available at NPR ${npr} or ${usd} dollars, delivered in ${p.deliveryTime} with full source code ownership and 6 months warranty.`,
      suggestedActions: [`Demo of ${p.title.split(" ")[0]}`, "Request Quotation", "View 19 Products", "WhatsApp Connect"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 3. SPECIFIC SERVICE MATCH (e.g. Mobile Apps, AI Voice Calling, Custom Software)
  // -------------------------------------------------------------------------
  if (analyzed.matchedServices.length > 0) {
    const s = analyzed.matchedServices[0];
    const npr = cleanNpr(s.priceRange.npr);
    const usd = cleanUsd(s.priceRange.usd);

    if (analyzed.isAskingPricing || analyzed.isAskingTimeline) {
      return {
        reply: `### 💰 **${s.title} — Pricing & Delivery SLA**

- **Nepal Market Rate**: **NPR ${npr}**
- **Global Rate**: **USD $${usd}** (${s.priceRange.model})
- **Turnaround SLA**: **${s.priceRange.turnaround}**
- **Performance SLA**: ${s.metrics}

✨ **Key Deliverables Included**:
${s.features.slice(0, 4).map((f) => `- ${f}`).join("\n")}
✅ **Guaranteed**: 100% Unencumbered Source Code Ownership, Zero-Lock-In, 6 Months Warranty.`,
        audioText: `${s.title} starts at NPR ${npr} or ${usd} dollars with a turnaround of ${s.priceRange.turnaround}, including complete source code ownership.`,
        suggestedActions: [`Get Quote: ${s.title.split(" ")[0]}`, "Explore 15 Services", "WhatsApp Chat"],
        isFarewell: false,
        language: lang,
      };
    }

    return {
      reply: `### 🛠️ **${s.title}** (\`${s.id}\`)

${s.fullDetails}

- **Strategic Focus**: ${s.focusArea}
- **Value Created**: ${s.valueCreated}

💰 **Pricing & SLA**:
- **Rates**: **NPR ${npr}** / **USD $${usd}** (${s.priceRange.model})
- **Timeline**: **${s.priceRange.turnaround}**

✨ **Engineering Capabilities**:
${s.features.map((f) => `- ${f}`).join("\n")}

✅ **Himnova Standard**: 100% Source Code Ownership, 99.99% Cloud SLA, 6 Months Free Warranty.`,
      audioText: `${s.title} starts at NPR ${npr} or ${usd} dollars with a turnaround of ${s.priceRange.turnaround}. How can we tailor it for your project?`,
      suggestedActions: [`Get Quote: ${s.title.split(" ")[0]}`, "Explore 15 Services", "WhatsApp Chat"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 4. LEADERSHIP & FOUNDER INQUIRY (Er. Sushil Panthi)
  // -------------------------------------------------------------------------
  if (analyzed.isAskingLeadership) {
    if (lang === "ne") {
      return {
        reply: `### 👤 **${director.name}** — ${director.title}
**Himnova Technologies Private Limited**

Er. Sushil Panthi ले काठमाडौं, नेपालबाट Silicon Valley मापदण्डको क्लाउड आर्किटेक्चर, डिस्ट्रिब्युटेड सिस्टम्स र Generative AI सोलुसनहरूको नेतृत्व गरिरहनुभएको छ।

💬 **उहाँको भनाइ**:
*"${director.quote}"*

- **सम्पर्क / WhatsApp**: **${company.contact.phonePrimary}**
- **ईमेल**: **${company.contact.email}**
- **मुख्य कार्यालय**: बानेश्वर-३१, काठमाडौं (देउराली क्लब अगाडि)`,
        audioText:
          "हिमभोभा टेक्नोलोजिजका कार्यकारी निर्देशक ईन्जिनियर सुशील पन्थी हुनुहुन्छ। उहाँलाई सन्तानब्बे अन्ठानब्बे तेइस शून्य शून्य नौ सय छयालीस मा सम्पर्क गर्न सक्नुहुन्छ।",
        suggestedActions: ["WhatsApp Er. Sushil Panthi", "Office Location", "15 Services"],
        isFarewell: false,
        language: lang,
      };
    }

    if (lang === "hi") {
      return {
        reply: `### 👤 **${director.name}** — ${director.title}
**Himnova Technologies Private Limited**

Er. Sushil Panthi काठमांडू, नेपाल से आधुनिक क्लाउड आर्किटेक्चर और जनरेटिव एआई (Generative AI) सॉल्यूशंस का नेतृत्व कर रहे हैं।

- **डायरेक्टर विजन**: *"${director.quote}"*
- **डायरेक्ट लाइन / WhatsApp**: **${company.contact.phonePrimary}**
- **ईमेल**: **${company.contact.email}**
- **ऑफिस**: बानेश्वर-३१, काठमांडू`,
        audioText:
          "हिमभोभा टेक्नोलॉजीज के चेयरमैन और डायरेक्टर इंजीनियर सुशील पंथी हैं। आप उन्हें +977 9823009467 पर संपर्क कर सकते हैं।",
        suggestedActions: ["WhatsApp Er. Sushil Panthi", "Office Location", "15 Services"],
        isFarewell: false,
        language: lang,
      };
    }

    return {
      reply: `### 👤 **${director.name}**
**${director.title}** — Himnova Technologies Private Limited

Er. Sushil Panthi leads Himnova Technologies with a mission to engineer Silicon Valley-grade cloud intelligence, agentic AI workflows, and resilient distributed platforms out of Kathmandu, Nepal.

> *"${director.quote}"*

- **Role**: Executive Leadership, Systems Architect & Head of R&D
- **Direct Desk Line / WhatsApp**: **${company.contact.phonePrimary}**
- **Email**: **${company.contact.email}**
- **Headquarters**: Baneshwor-31, Kathmandu 44600, Nepal *(Opposite Deurali Club)*`,
      audioText:
        "Er. Sushil Panthi is the Chairman, Executive Director, and Chief Architect of Himnova Technologies. You can reach him directly at +977 9823009467.",
      suggestedActions: ["WhatsApp Er. Sushil Panthi", "Office Location", "Explore Services"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 5. LOCATION, DIRECTIONS & MAP INQUIRY
  // -------------------------------------------------------------------------
  if (analyzed.isAskingLocation) {
    if (lang === "ne") {
      return {
        reply: `### 📍 **Himnova Technologies — मुख्य कार्यालय ठेगाना**

- **ठेगाना**: **${company.headquarters.address}, ${company.headquarters.city} ४४६००, ${company.headquarters.country}** *(देउराली क्लब अगाडि)*
- **सम्पर्क फोन / WhatsApp**: **${company.contact.phonePrimary}**
- **कार्यालय समय**: सोमबार – शुक्रबार: 9:00 AM – 6:00 PM NPT (24/7 Cloud Support SLA)

🗺️ **नक्सा र बाटो**: हाम्रो वेबसाइटमा रहेको **"Get Directions"** बटन थिचेर तपाईं सिधै कार्यालय आइपुग्ने बाटो Google Maps मा हेर्न सक्नुहुन्छ!`,
        audioText:
          "हाम्रो मुख्य कार्यालय बानेश्वर एकतीस, काठमाडौंमा देउराली क्लबको अगाडि अवस्थित छ। सम्पर्क नम्बर +977 9823009467 हो।",
        suggestedActions: ["Get Google Maps Route", "WhatsApp Message", "Call Office"],
        isFarewell: false,
        language: lang,
      };
    }

    if (lang === "hi") {
      return {
        reply: `### 📍 **Himnova Technologies — ऑफिस लोकेशन**

- **पता (Address)**: **${company.headquarters.address}, ${company.headquarters.city} ४४६००, ${company.headquarters.country}** *(देउराली क्लब के सामने)*
- **फोन / WhatsApp**: **${company.contact.phonePrimary}**
- **ऑफिस का समय**: सोमवार – शुक्रवार: 9:00 AM – 6:00 PM NPT

🗺️ **Google Maps**: आप हमारी वेबसाइट के 'Get Directions' बटन से सीधे नेविगेशन रूट पा सकते हैं।`,
        audioText:
          "हमारा ऑफिस बानेश्वर-३१, काठमांडू, नेपाल में देउराली क्लब के सामने स्थित है। फोन नंबर +977 9823009467 है।",
        suggestedActions: ["Open Google Maps", "WhatsApp Message", "Call Office"],
        isFarewell: false,
        language: lang,
      };
    }

    return {
      reply: `### 📍 **Himnova Technologies Corporate Headquarters**

- **Address**: **${company.headquarters.address}, ${company.headquarters.city} 44600, ${company.headquarters.country}** *(Opposite Deurali Club)*
- **Primary Phone / WhatsApp**: **${company.contact.phonePrimary}**
- **Secondary Line**: **${company.contact.phoneSecondary}**
- **Email**: **${company.contact.email}**
- **Working Hours**: Monday – Friday: 9:00 AM – 6:00 PM NPT (24/7 Production SLA)

You can click **"Get Directions"** on our website to open turn-by-turn navigation in Google Maps!`,
      audioText:
        "Himnova Technologies is located in Baneshwor-31, Kathmandu, Nepal, opposite Deurali Club. Our phone and WhatsApp number is +977 9823009467.",
      suggestedActions: ["Open Google Maps", "WhatsApp Chat", "Call Office"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 6. CONTACT & PHONE / WHATSAPP INQUIRY
  // -------------------------------------------------------------------------
  if (analyzed.isAskingContact) {
    return {
      reply: `### 📞 **Official Contact Channels — Himnova Technologies**

- 📱 **Primary Phone / WhatsApp**: **${company.contact.phonePrimary}**
- ☎️ **Secondary Phone**: **${company.contact.phoneSecondary}**
- ✉️ **General Inquiries**: \`${company.contact.email}\`
- 💼 **Sales & Custom Quotes**: \`${company.contact.salesEmail}\`
- 📍 **Office**: ${company.headquarters.address}, ${company.headquarters.city} 44600, Nepal

Connect with us anytime on WhatsApp for instant software consultation and architecture planning!`,
      audioText: `You can reach Himnova Technologies on phone or WhatsApp at +977 9823009467, or email us at ${company.contact.email}.`,
      suggestedActions: ["WhatsApp Direct", "Call Primary Line", "Office Map"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 7. GUARANTEES, SOURCE CODE OWNERSHIP & SLA
  // -------------------------------------------------------------------------
  if (analyzed.isAskingGuarantees || analyzed.isAskingDeliverables) {
    const g = trained.guarantees;
    return {
      reply: `### 🛡️ **Himnova Uncompromising Engineering Guarantees**

1. 📦 **100% Full Source Code Ownership**:
   ${g.sourceCode} No recurring licensing fees or IP lock-in.

2. ⏱️ **99.99% Production Cloud SLA**:
   ${g.sla}

3. 🛠️ **6 Months Complimentary Warranty**:
   ${g.warranty}

4. 🔒 **Enterprise Security**:
   ${g.security}

5. 🔓 **Zero Vendor Lock-In**:
   ${g.lockin}`,
      audioText:
        "Every project at Himnova includes 100% full source code ownership, zero vendor lock-in, a 99.99% cloud SLA, and 6 months of complimentary warranty.",
      suggestedActions: ["Start a Project", "View 15 Services", "WhatsApp Er. Sushil Panthi"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 8. TECH STACK & FRAMEWORKS INQUIRY
  // -------------------------------------------------------------------------
  if (analyzed.isAskingTechStack) {
    const ts = trained.techStacks;
    return {
      reply: `### 🛠️ **Himnova Enterprise Technology Stack**

- 🌐 **Frontend**: ${ts.frontend.join(", ")}
- ⚡ **Backend & APIs**: ${ts.backend.join(", ")}
- 📱 **Mobile**: ${ts.mobile.join(", ")}
- ☁️ **Cloud & DevOps**: ${ts.cloudDevops.join(", ")}
- 🧠 **AI & Voice**: ${ts.aiMl.join(", ")}
- 🗄️ **Databases**: ${ts.database.join(", ")}

✅ All architectures follow OWASP security standards, zero-lock-in modularity, and automated CI/CD pipelines.`,
      audioText:
        "Himnova engineers modern platforms using Next.js, React, Node.js, Python, Flutter, AWS, and advanced AI voice systems.",
      suggestedActions: ["Custom Software Scope", "AI Voice Calling", "WhatsApp Architect"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 9. GENERAL PRICING INQUIRY
  // -------------------------------------------------------------------------
  if (analyzed.isAskingPricing) {
    if (lang === "ne") {
      return {
        reply: `### 💰 **Himnova Technologies — आधिकारिक पारदर्शी सेवा दरहरू**:

1. 🎙️ **AI Voice Calling & Agents**: **NPR 45,000 – 1,45,000** ($290 – $935) • *१-३ हप्ता*
2. 💻 **Custom Software Development**: **NPR 95,000 – 2,90,000** ($615 – $1,870) • *३-६ हप्ता*
3. 🌐 **Web Applications & SaaS**: **NPR 65,000 – 1,95,000** ($420 – $1,260) • *२-५ हप्ता*
4. 📱 **Mobile Apps (iOS & Android)**: **NPR 85,000 – 2,60,000** ($550 – $1,680) • *३-६ हप्ता*
5. 🎨 **Corporate Website & SEO**: **NPR 25,000 – 65,000** ($160 – $420) • *१-२ हप्ता*
6. 🚀 **19 Pre-Built Turnkey Products**: **NPR 40,000 – 1,98,000** ($260 – $1,280)

✅ **सबैमा समावेश**: १००% Source Code Ownership, ९९.९९% Cloud SLA, र ६ महिनाको वारेन्टी।`,
        audioText:
          "हिमभोभाका सेवा दरहरू पारदर्शी छन्। एआई भ्वाइस एजेन्ट पैँतालीस हजार, वेबसाइट पच्चीस हजार, र मोबाइल एप पचासी हजार एनपीआरबाट सुरु हुन्छ।",
        suggestedActions: ["AI Voice Calling", "Mobile Apps", "Custom Software", "WhatsApp Quote"],
        isFarewell: false,
        language: lang,
      };
    }

    if (lang === "hi") {
      return {
        reply: `### 💰 **Himnova Technologies — पारदर्शी सेवा दरें (Transparent Rates)**:

1. 🎙️ **AI Voice Calling & Agents**: **NPR 45,000 – 1,45,000** ($290 – $935) • *१-३ सप्ताह*
2. 💻 **Custom Software Development**: **NPR 95,000 – 2,90,000** ($615 – $1,870) • *३-६ सप्ताह*
3. 🌐 **Web Applications & SaaS**: **NPR 65,000 – 1,95,000** ($420 – $1,260) • *२-५ सप्ताह*
4. 📱 **Mobile Apps (iOS & Android)**: **NPR 85,000 – 2,60,000** ($550 – $1,680) • *३-६ सप्ताह*
5. 🎨 **Corporate Website & SEO**: **NPR 25,000 – 65,000** ($160 – $420) • *१-२ सप्ताह*
6. 🚀 **19 Turnkey Pre-Built Products**: **NPR 40,000 – 1,98,000** ($260 – $1,280)

✅ **गारंटी**: १००% Full Source Code Ownership और ६ महीने का मुफ्त सपोर्ट।`,
        audioText:
          "हिमभोभा की दरें पारदर्शी हैं। एआई कॉलिंग पैंतालीस हजार, वेबसाइट पच्चीस हजार और मोबाइल ऐप पचासी हजार एनपीआर से शुरू होता है।",
        suggestedActions: ["AI Voice Calling", "Mobile Apps", "Custom Software", "WhatsApp Quote"],
        isFarewell: false,
        language: lang,
      };
    }

    return {
      reply: `### 💰 **Transparent Rate Card & Pricing Standards at Himnova**

- 🎙️ **AI Voice Calling & Agents**: **NPR 45,000 – 1,45,000** ($290 – $935) • *1 – 3 Weeks*
- 💻 **Custom Enterprise Software**: **NPR 95,000 – 2,90,000** ($615 – $1,870) • *3 – 6 Weeks*
- 🌐 **Web Applications & SaaS MVPs**: **NPR 65,000 – 1,95,000** ($420 – $1,260) • *2 – 5 Weeks*
- 📱 **Mobile Apps (Flutter / React Native)**: **NPR 85,000 – 2,60,000** ($550 – $1,680) • *3 – 6 Weeks*
- 🎨 **Corporate Website & SEO**: **NPR 25,000 – 65,000** ($160 – $420) • *1 – 2 Weeks*
- 🚀 **19 Turnkey Pre-Built Platforms**: **NPR 40,000 – 1,98,000** ($260 – $1,280) • *1 – 3 Weeks*

✅ Every project includes **100% full source code ownership** and **6 months free warranty**.`,
      audioText:
        "Our pricing is fully transparent with complete source code ownership. AI voice agents start at 45,000 NPR, websites at 25,000 NPR, and mobile apps at 85,000 NPR.",
      suggestedActions: ["Request Custom Quote", "Explore 19 Products", "WhatsApp Inquiry"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 10. ALL 19 PRODUCTS CATALOG
  // -------------------------------------------------------------------------
  if (analyzed.isAskingAllProducts) {
    return {
      reply: `### 🚀 **19 Turnkey Pre-Built Industry Platforms (Ready to Deploy in 1–3 Weeks)**

${trained.products
  .map(
    (p, i) =>
      `${i + 1}. **${p.title}** (${p.category}) — **NPR ${cleanNpr(p.priceRange.localEstimated)}** ($${cleanUsd(p.priceRange.usd)}) • *${p.deliveryTime}*`
  )
  .join("\n")}

*Ask me about any product above to get its complete architecture, live demo details, and feature list!*`,
      audioText:
        "Himnova offers 19 turnkey software products including VoxNova AI, Hospital EHR, Hotel PMS, School ERP, and E-commerce platforms, ready to deploy in 1 to 3 weeks.",
      suggestedActions: ["VoxNova AI Platform", "MedPulse Hospital EHR", "OmniStore E-Commerce", "WhatsApp Demo"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 11. ALL 15 SERVICES CATALOG
  // -------------------------------------------------------------------------
  if (analyzed.isAskingAllServices) {
    return {
      reply: `### 🛠️ **15 Enterprise IT & Cloud Engineering Services at Himnova**

${trained.services
  .map(
    (s, i) =>
      `${i + 1}. **${s.title}** — **NPR ${cleanNpr(s.priceRange.npr)}** ($${cleanUsd(s.priceRange.usd)}) • *SLA: ${s.priceRange.turnaround}*\n   *${s.shortDescription}*`
  )
  .join("\n\n")}

*Ask me about any service to see its complete technical scope and custom pricing!*`,
      audioText:
        "Himnova provides 15 specialized services including AI voice agents, custom software, mobile apps, DevOps, and cloud hosting.",
      suggestedActions: ["AI Voice Calling", "Mobile App Development", "Custom Software", "WhatsApp Inquiry"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 12. CAREERS & HIRING
  // -------------------------------------------------------------------------
  if (analyzed.isAskingCareers) {
    return {
      reply: `### 👥 **Active Engineering Openings at Himnova Technologies**

We are actively hiring engineering talent for our Kathmandu labs and remote teams:

${trained.careers
  .map(
    (c) =>
      `- **${c.role}** (\`${c.department}\` | ${c.locationType})\n  - **Salary Range**: ${c.salaryRange}\n  - **Experience**: ${c.experience}\n  - **Requirements**: ${c.requirements.slice(0, 3).join("; ")}`
  )
  .join("\n\n")}

📩 **How to Apply**: Send your CV and GitHub to \`${company.contact.careersEmail}\` or apply on our Careers page.`,
      audioText:
        "Himnova Technologies is hiring for engineering roles including Cloud Architects and Full Stack Engineers. Apply at careers dot himnovatech at gmail dot com.",
      suggestedActions: ["View Careers Page", "Email Resume", "WhatsApp HR"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 13. DEFAULT CONVERSATIONAL RESPONSE DRAFTER
  // -------------------------------------------------------------------------
  if (lang === "ne") {
    return {
      reply: `नमस्ते! म **Himnova 24/7 AI Assistant** हुँ। Himnova Technologies (काठमाडौं, नेपाल) ले १५ वटा IT सेवाहरू, १९ वटा टर्नकी सफ्टवेयर उत्पादनहरू, र नेपाली/हिन्दी/अंग्रेजी AI Voice Calling Agents उपलब्ध गराउँछ।

तपाईंले सोध्नुभएको: *"**${analyzed.rawQuery}**"* को बारेमा हामी तपाईंलाई कसरी सहयोग गर्न सक्छौं?
- 🎙️ **AI Voice Calling Agents & Pricing**
- 💻 **कस्टम सफ्टवेयर र मोबाइल एप्स (iOS/Android)**
- 💰 **पारदर्शी सेवा दरहरू र डेलिभरी समय**
- 📍 **कार्यालय (बानेश्वर-३१) वा सम्पर्क (+977 9823009467)**`,
      audioText:
        "नमस्ते! म हिमभोभा एआई असिस्टेन्ट हुँ। तपाईँलाई हाम्रो सफ्टवेयर, भ्वाइस कलिङ वा क्लाउड सेवाको बारेमा के जानकारी चाहिन्छ?",
      suggestedActions: ["AI Voice Calling Rates", "15 IT Services", "19 Turnkey Products", "Office Location"],
      isFarewell: false,
      language: lang,
    };
  }

  if (lang === "hi") {
    return {
      reply: `नमस्ते! मैं **Himnova 24/7 AI Assistant** हूँ। Himnova Technologies (काठमांडू, नेपाल) से कस्टम सॉफ्टवेयर, मोबाइल ऐप्स, और एआई वॉइस कॉलिंग एजेंट्स प्रदान करता है।

आपकी पूछताछ: *"**${analyzed.rawQuery}**"* के संदर्भ में:
- 🎙️ **AI Voice Calling Agents & Rates**
- 💻 **कस्टम सॉफ्टवेयर और मोबाइल ऐप्स**
- 💰 **पारदर्शी रेट्स और डिलीवरी टाइमलाइन**
- 📍 **ऑफिस लोकेशन (बानेश्वर-३१) और व्हाट्सएप (+977 9823009467)**`,
      audioText:
        "नमस्ते! मैं हिमभोभा एआई असिस्टेंट हूँ। आप सॉफ्टवेयर डेवलपमेंट, एआई वॉइस कॉलिंग या प्राइसिंग के बारे में कुछ भी पूछ सकते हैं।",
      suggestedActions: ["AI Voice Calling Rates", "15 IT Services", "19 Turnkey Products", "Office Location"],
      isFarewell: false,
      language: lang,
    };
  }

  return {
    reply: `Hello! I am the **Himnova 24/7 AI Assistant**, trained on all services, turnkey products, and engineering capabilities of **Himnova Technologies Private Limited** (Kathmandu, Nepal).

Regarding your inquiry: *"**${analyzed.rawQuery}**"*:
- 🎙️ **AI Voice Calling Agents & VoxNova Platform** (Sub-400ms latency)
- 💻 **Custom Enterprise Software & Web Apps** (100% full source code ownership)
- 📱 **Mobile Apps for iOS & Android** (Flutter / React Native)
- 🚀 **19 Pre-Built Turnkey Platforms** (Deploy in 1–3 weeks)
- 💰 **Transparent Rate Cards in NPR & USD**

How may our engineering architects assist your project today? Connect on WhatsApp at **${company.contact.phonePrimary}** anytime!`,
    audioText:
      "Hello! I am the Himnova AI Assistant. I can help you with AI voice calling agents, custom software development, mobile apps, or pricing estimates.",
    suggestedActions: ["AI Voice Calling Specs", "15 IT Services", "19 Turnkey Products", "WhatsApp Direct"],
    isFarewell: false,
    language: lang,
  };
}
