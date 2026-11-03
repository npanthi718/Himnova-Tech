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
 * Dynamically synthesizes pinpoint-accurate responses drawing from live site data,
 * with immediate sub-second response, comprehensive coverage, and strict out-of-scope guardrail.
 */
export function draftDynamicResponse(analyzed: AnalyzedQuery): AIResponse {
  const trained = loadTrainedKnowledge();
  const { company, director } = trained;
  const lang = analyzed.language;
  const whatsappUrl = `https://wa.me/9779823009467?text=${encodeURIComponent(
    `Hello Himnova Technologies! I am inquiring regarding: "${analyzed.rawQuery}"`
  )}`;

  // -------------------------------------------------------------------------
  // 1. FAREWELL & CONVERSATION CONCLUSION INTENT (Voice Call Auto-Hangup)
  // -------------------------------------------------------------------------
  if (analyzed.isFarewell) {
    if (lang === "ne") {
      return {
        reply: `### 🙏 **धन्यवाद! (Thank You)**\n\nHimnova Technologies सँग कुराकानी गर्नुभएकोमा धन्यवाद। तपाईंलाई भविष्यमा कुनै पनि सफ्टवेयर, एआई वा क्लाउड प्रोजेक्टको सहयोग चाहिएमा हामीलाई **${company.contact.phonePrimary}** मा WhatsApp वा फोन गर्न सक्नुहुन्छ। तपाईंको दिन शुभ रहोस्!`,
        audioText:
          "हिमभोभा टेक्नोलोजिजमा सम्पर्क गर्नुभएकोमा धेरै धेरै धन्यवाद। तपाईंको दिन शुभ रहोस्, नमस्ते!",
        suggestedActions: ["WhatsApp Direct (+977 9823009467)", "15 Services", "Office Location"],
        isFarewell: true,
        language: lang,
      };
    }

    if (lang === "hi") {
      return {
        reply: `### 🙏 **धन्यवाद! (Thank You)**\n\nHimnova Technologies से बात करने के लिए बहुत-बहुत धन्यवाद। किसी भी समय सहायता या नए प्रोजेक्ट के लिए आप हमें **${company.contact.phonePrimary}** पर WhatsApp कर सकते हैं। आपका दिन शुभ और सफल हो!`,
        audioText:
          "हिमभोभा टेक्नोलॉजीज से संपर्क करने के लिए धन्यवाद। आपका दिन शुभ और सफल रहे, नमस्ते!",
        suggestedActions: ["WhatsApp Connect (+977 9823009467)", "15 Services", "Office Location"],
        isFarewell: true,
        language: lang,
      };
    }

    return {
      reply: `### 🙏 **Thank You for Connecting with Himnova!**\n\nYou are very welcome! If you have any further questions or wish to discuss an upcoming software or AI project, feel free to message our engineering team on WhatsApp anytime at **${company.contact.phonePrimary}**.\n\nHave a wonderful day!`,
      audioText:
        "You are very welcome! Thank you for contacting Himnova Technologies. Have a wonderful and productive day!",
      suggestedActions: ["WhatsApp Direct (+977 9823009467)", "15 Services & Pricing", "Office Location"],
      isFarewell: true,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 2. STRICT OUT-OF-SCOPE GUARDRAIL (When Query Is Not Found on Site)
  // -------------------------------------------------------------------------
  if (analyzed.isOutOfScope) {
    const topicLabel = analyzed.extractedTopic ? `"${analyzed.extractedTopic}"` : "this topic";

    if (lang === "ne") {
      return {
        reply: `### ℹ️ **जानकारी उपलब्ध छैन (Topic Not Found)**

माफ गर्नुहोला, तपाईंले सोध्नुभएको **${topicLabel}** सम्बन्धी कुनै पनि जानकारी हाम्रो आधिकारिक हिमभोभा प्लेटफर्म वा वेबसाइटमा उपलब्ध छैन।

Himnova Technologies विशेष रूपमा **कस्टम सफ्टवेयर, क्लाउड आर्किटेक्चर, मोबाइल एप्स, र एआई सोलुसन्स** निर्माणमा केन्द्रित छ।

यदि तपाईंको यो कुनै नयाँ प्रविधि आवश्यकता वा सफ्टवेयर विकास सम्बन्धी हो भने, कृपया सिधै हाम्रो ईन्जिनियरिङ टोलीलाई **WhatsApp (${company.contact.phonePrimary})** मा सम्पर्क गर्नुहोस्।`,
        audioText:
          "माफ गर्नुहोला, यस विषयमा हाम्रो प्लेटफर्ममा कुनै जानकारी उपलब्ध छैन। थप जानकारी वा सफ्टवेयर सम्बन्धी सोधपुछका लागि कृपया हामीलाई ह्वाट्सएपमा ९८२३००९४६७ मा सम्पर्क गर्नुहोस्।",
        suggestedActions: [
          "WhatsApp Team (+977 9823009467)",
          "15 IT Services",
          "19 Turnkey Products",
          "Office Location",
        ],
        isFarewell: false,
        language: lang,
      };
    }

    if (lang === "hi") {
      return {
        reply: `### ℹ️ **जानकारी उपलब्ध नहीं है (Topic Not Found)**

क्षमा करें, आपके द्वारा पूछे गए **${topicLabel}** के संबंध में हमारे आधिकारिक प्लेटफ़ॉर्म पर कोई जानकारी उपलब्ध नहीं है।

Himnova Technologies मुख्य रूप से **कस्टम सॉफ्टवेयर, क्लाउड आर्किटेक्चर, मोबाइल ऐप्स और एआई सॉल्यूशंस** प्रदान करता है।

कस्टम प्रोजेक्ट या तकनीकी सहायता के लिए आप हमारे लीड आर्किटेक्ट से सीधे **WhatsApp पर ${company.contact.phonePrimary}** पर बात कर सकते हैं।`,
        audioText:
          "क्षमा करें, इस विषय की जानकारी हमारे प्लेटफ़ॉर्म पर उपलब्ध नहीं है। कस्टम तकनीकी पूछताछ के लिए आप हमारे टीम से व्हाट्सएप पर ९८२३००९४६७ पर संपर्क कर सकते हैं।",
        suggestedActions: [
          "WhatsApp Connect (+977 9823009467)",
          "15 IT Services",
          "19 Turnkey Products",
          "Office Location",
        ],
        isFarewell: false,
        language: lang,
      };
    }

    return {
      reply: `### ℹ️ **Topic Not Found on Himnova Platform**

I apologize, but we do not currently have information regarding **${topicLabel}** on our official platform or documentation.

Himnova Technologies specializes in **enterprise software engineering, cloud architecture, mobile apps, and agentic AI systems**.

If this inquiry relates to a custom engineering requirement, software development, or technical partnership, our engineering architects would be glad to discuss it directly with you on **WhatsApp at [${company.contact.phonePrimary}](${whatsappUrl})** or via email at \`${company.contact.email}\`.`,
      audioText:
        "I apologize, but we do not have information regarding that topic on our platform. For custom software or technical inquiries, please connect directly with our engineering team on WhatsApp at +977 9823009467.",
      suggestedActions: [
        "WhatsApp Team (+977 9823009467)",
        "15 Specialized Services",
        "19 Turnkey Products",
        "Corporate Office & Map",
      ],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 3. LOCATION, DIRECTIONS & SOLE CORPORATE OFFICE (Dillibazar-30)
  // -------------------------------------------------------------------------
  if (analyzed.isAskingLocation) {
    if (lang === "ne") {
      return {
        reply: `### 📍 **Himnova Technologies — कर्पोरेट कार्यालय ठेगाना**

- **ठेगाना**: **२ तला, डिल्लीबजार-३०, काठमाडौं ४४६००, नेपाल** *(पद्मकन्या विद्याश्रम मा.वि. अगाडि)*
- **शाखा विवरण**: **एकमात्र कर्पोरेट कार्यालय (कुनै अन्य शाखा छैन)**
- **सम्पर्क फोन / WhatsApp**: **${company.contact.phonePrimary}**
- **कार्यालय समय**: सोमबार – शुक्रबार: 9:00 AM – 6:00 PM NPT (24/7 Cloud Support SLA)

🗺️ **नक्सा र बाटो**: हाम्रो वेबसाइटमा रहेको **"Get Directions"** बटन थिचेर तपाईं सिधै कार्यालय आइपुग्ने बाटो Google Maps मा हेर्न सक्नुहुन्छ!`,
        audioText:
          "हाम्रो कर्पोरेट कार्यालय दोस्रो तला, डिल्लीबजार-३०, काठमाडौंमा पद्मकन्या विद्याश्रम अगाडि अवस्थित छ। सम्पर्क नम्बर +977 9823009467 हो।",
        suggestedActions: ["Get Google Maps Route", "WhatsApp Message", "Call Office"],
        isFarewell: false,
        language: lang,
      };
    }

    if (lang === "hi") {
      return {
        reply: `### 📍 **Himnova Technologies — कॉर्पोरेट ऑफिस लोकेशन**

- **पता (Address)**: **द्वितीय तल, डिल्लीबजार-३०, काठमांडू ४४६००, नेपाल** *(पद्मकन्या विद्याश्रम के सामने)*
- **शाखा विवरण**: **एकमात्र कॉर्पोरेट ऑफिस (कोई अन्य शाखा नहीं है)**
- **फोन / WhatsApp**: **${company.contact.phonePrimary}**
- **ऑफिस का समय**: सोमवार – शुक्रवार: 9:00 AM – 6:00 PM NPT

🗺️ **Google Maps**: आप हमारी वेबसाइट के 'Get Directions' बटन से सीधे नेविगेशन रूट पा सकते हैं।`,
        audioText:
          "हमारा कॉर्पोरेट ऑफिस सेकंड फ्लोर, डिल्लीबजार-३०, काठमांडू, नेपाल में पद्मकन्या विद्याश्रम के सामने स्थित है। फोन नंबर +977 9823009467 है।",
        suggestedActions: ["Open Google Maps", "WhatsApp Message", "Call Office"],
        isFarewell: false,
        language: lang,
      };
    }

    return {
      reply: `### 📍 **Himnova Technologies Corporate Office**

- **Address**: **2nd Floor, Dillibazar-30, Kathmandu 44600, Nepal** *(Opposite to Padmakanya Vidhyashram Secondary School)*
- **Branch Notice**: **Sole Corporate Location (No Branch Offices)**
- **Primary Phone / WhatsApp**: **${company.contact.phonePrimary}**
- **Secondary Line**: **${company.contact.phoneSecondary}**
- **Official Email**: \`${company.contact.email}\`
- **Working Hours**: Monday – Friday: 9:00 AM – 6:00 PM NPT (24/7 Cloud Support SLA)

🗺️ You can use the **"Get Directions"** interactive map on our site to navigate directly via Google Maps!`,
      audioText:
        "Himnova Technologies is located at 2nd Floor, Dillibazar-30, Kathmandu, Nepal, opposite to Padmakanya Vidhyashram Secondary School. Our phone and WhatsApp number is +977 9823009467.",
      suggestedActions: ["Open Google Maps", "WhatsApp Chat", "Call Office"],
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
- **मुख्य कार्यालय**: २ तला, डिल्लीबजार-३०, काठमाडौं (पद्मकन्या विद्याश्रम अगाडि)`,
        audioText:
          "हिमभोभा टेक्नोलोजिजका कार्यकारी निर्देशक र प्रमुख आर्किटेक्ट ईन्जिनियर सुशील पन्थी हुनुहुन्छ। उहाँलाई ९८२३००९४६७ मा सिधै सम्पर्क गर्न सक्नुहुन्छ।",
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
- **ऑफिस**: २ तला, डिल्लीबजार-३०, काठमांडू (पद्मकन्या विद्याश्रम के सामने)`,
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
- **Headquarters**: 2nd Floor, Dillibazar-30, Kathmandu 44600, Nepal *(Opposite Padmakanya Vidhyashram Secondary School)* *(Sole Corporate Office — No Branches)*`,
      audioText:
        "Er. Sushil Panthi is the Chairman, Executive Director, and Chief Architect of Himnova Technologies. You can reach him directly at +977 9823009467.",
      suggestedActions: ["WhatsApp Er. Sushil Panthi", "Office Location", "Explore Services"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 5. CONTACT & PHONE / WHATSAPP INQUIRY
  // -------------------------------------------------------------------------
  if (analyzed.isAskingContact) {
    return {
      reply: `### 📞 **Official Contact Channels — Himnova Technologies**

- 📱 **Primary Phone / WhatsApp**: **${company.contact.phonePrimary}**
- ☎️ **Secondary Phone**: **${company.contact.phoneSecondary}**
- ✉️ **General Inquiries**: \`${company.contact.email}\`
- 💼 **Sales & Custom Quotes**: \`${company.contact.salesEmail}\`
- 🏢 **Corporate Office**: 2nd Floor, Opposite to Padmakanya Vidhyashram Secondary School, Dillibazar-30, Kathmandu 44600, Nepal *(Sole Corporate Location — No Branch Offices)*

Connect with us anytime on [WhatsApp (+977 9823009467)](${whatsappUrl}) for instant software consultation and architecture planning!`,
      audioText: `You can reach Himnova Technologies on phone or WhatsApp at +977 9823009467, or email us at ${company.contact.email}.`,
      suggestedActions: ["WhatsApp Direct", "Call Primary Line", "Office Map"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 6. SPECIFIC PRODUCT MATCH (19 Turnkey Products)
  // -------------------------------------------------------------------------
  if (analyzed.matchedProducts.length > 0) {
    const p = analyzed.matchedProducts[0];
    const npr = cleanNpr(p.priceRange.localEstimated);
    const usd = cleanUsd(p.priceRange.usd);

    if (analyzed.isAskingPricing && !analyzed.isAskingFeatures) {
      if (lang === "ne") {
        return {
          reply: `### 💰 **${p.title} — लगानी तथा डेलिभरी समय**

- **अनुमानित लागत (Price)**: **NPR ${npr}** (USD **$${usd}**) [${p.priceRange.model}]
- **तयारी समय (Turnaround)**: **${p.deliveryTime}** (Turnkey Deployment)
- **समावेश**: १००% Full Source Code Ownership, ६ महिनाको नि:शुल्क सपोर्ट, र Deployment Setup.

> 📝 **नोट**: ग्राहकको आवश्यकता, फिचर्सको दायरा, र दुवै पक्षको आपसी सहमति अनुसार मूल्य कम वा बढी हुन सक्छ।`,
          audioText: `${p.title} को मूल्य एनपीआर ${npr} वा ${usd} डलर रहेको छ र यो ${p.deliveryTime} भित्र तयार हुन्छ। यसमा पूर्ण सोर्स कोड स्वामित्व समावेश छ।`,
          suggestedActions: [`Demo of ${p.title.split(" ")[0]}`, "Request Quotation", "WhatsApp Connect"],
          isFarewell: false,
          language: lang,
        };
      }

      return {
        reply: `### 💰 **${p.title} — Investment & Turnaround SLA**

- **Estimated Investment**: **NPR ${npr}** (USD **$${usd}**) [${p.priceRange.model}]
- **Delivery Timeline**: **${p.deliveryTime}** (Fast Turnkey Setup)
- **Included**: 100% Full Source Code Ownership, Zero-Lock-In, 6 Months Free SLA Warranty & Deployment.

> 📝 **Important Note**: *The price range may be lower or higher depending on specific project requirements, custom integrations, feature scope, and mutually agreed terms between both parties.*`,
        audioText: `${p.title} is available at NPR ${npr} or ${usd} dollars with a ${p.deliveryTime} turnaround time, including complete source code ownership.`,
        suggestedActions: [`Demo of ${p.title.split(" ")[0]}`, "Request Quotation", "WhatsApp Connect"],
        isFarewell: false,
        language: lang,
      };
    }

    return {
      reply: `### 🚀 **${p.title}** (Turnkey Product: \`${p.id}\`)

- **Category**: ${p.category}
- **Tagline**: *${p.tagline}*
- **Target Market**: ${p.targetMarket}

💰 **Investment & SLA**:
- **Price Range**: **NPR ${npr}** (USD **$${usd}**) [${p.priceRange.model}]
- **Delivery Timeline**: **${p.deliveryTime}**
*(Note: Final pricing varies based on custom scope, features, and mutual agreement).*

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
  // 7. SPECIFIC SERVICE MATCH (15 IT Services)
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

> 📝 **Important Note**: *The price range may be lower or higher depending on specific project requirements, custom integrations, feature scope, and mutually agreed terms between both parties.*

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
*(Note: Final pricing adapts to client requirements through mutual agreement).*

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
  // 8. DELIVERED PROJECTS & CASE STUDIES MATCH (All 8 Projects)
  // -------------------------------------------------------------------------
  if (analyzed.matchedProjects.length > 0 || analyzed.isAskingProjects) {
    const project = analyzed.matchedProjects[0] || trained.projects[0];
    return {
      reply: `### 🏆 **Case Study: ${project.title}**

- **Category**: ${project.category} (${project.year}) • **Status**: ${project.status}
- **Overview**: ${project.description}
- **Key Capabilities**:
${project.features.map((f) => `  - ${f}`).join("\n")}
- **Enterprise Tech Stack**: ${project.techStack.join(", ")}

Ask me about our other deployed systems: **AlgoCare (Triage AI)**, **LumbiniCare (Hospital ERP)**, **SkillNexus**, or **StockSmart**!`,
      audioText: `We engineered ${project.title}, a ${project.category} built with ${project.techStack.slice(0, 3).join(", ")}. It is currently in active production.`,
      suggestedActions: ["View All Projects", "Request Case Study", "WhatsApp Architect"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 9. TECHNICAL RESEARCH BLOGS MATCH (All 16 Blogs)
  // -------------------------------------------------------------------------
  if (analyzed.matchedBlogs.length > 0 || analyzed.isAskingBlogs) {
    const blog = analyzed.matchedBlogs[0] || trained.blogs[0];
    return {
      reply: `### 📚 **Technical Research: ${blog.title}**

- **Category**: ${blog.category} • *${blog.readTime}* (${blog.publishedDate})
- **Author**: ${blog.author.name} (${blog.author.role})
- **Executive Abstract**: ${blog.excerpt}

📌 **Core Architectural Pillars Covered**:
${blog.tableOfContents.map((t) => `- **${t.title}**`).join("\n")}

You can read the complete publication on our **Technical Blog** page!`,
      audioText: `Our latest research paper, ${blog.title}, explores enterprise architectural patterns. You can explore the full paper on our website.`,
      suggestedActions: ["Read Full Blog", "Technical Insights", "WhatsApp Er. Sushil Panthi"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 10. GUARANTEES, SOURCE CODE OWNERSHIP & SLA
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
  // 11. TECH STACK & FRAMEWORKS INQUIRY
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
  // 12. GENERAL PRICING INQUIRY
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

> 📝 **महत्त्वपूर्ण नोट**: *ग्राहकको आवश्यकता, कामको दायरा, र दुवै पक्षको आपसी सहमति अनुसार मूल्य कम वा बढी हुन सक्छ। सबै कार्य दुवै पक्षको सन्तुष्टिमा गरिन्छ।*

✅ **सबैमा समावेश**: १००% Source Code Ownership, ९९.९९% Cloud SLA, र ६ महिनाको नि:शुल्क वारेन्टी।`,
        audioText:
          "हिमभोभाका सेवा दरहरू पारदर्शी छन्। एआई भ्वाइस एजेन्ट पैँतालीस हजार, वेबसाइट पच्चीस हजार, र मोबाइल एप पचासी हजार एनपीआरबाट सुरु हुन्छ। आवश्यकता अनुसार आपसी सहमतिमा मूल्य समायोजन गरिन्छ।",
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

> 📝 **Important Note on Pricing**: *The price range may be lower or higher than listed depending on specific technical requirements, feature scope, custom third-party integrations, and mutually agreed terms between both parties. Everything is executed with bilateral satisfaction and professional agreement.*

✅ Every project includes **100% full source code ownership** and **6 months free warranty**.`,
      audioText:
        "Our pricing is fully transparent with complete source code ownership. AI voice agents start at 45,000 NPR, websites at 25,000 NPR, and mobile apps at 85,000 NPR. Pricing is tailored based on your exact requirements and mutual agreement.",
      suggestedActions: ["Request Custom Quote", "Explore 19 Products", "WhatsApp Inquiry"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 13. ALL 19 PRODUCTS CATALOG
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

> 📝 *Note: Prices are subject to requirement adjustments through mutual agreement.*`,
      audioText:
        "Himnova offers 19 turnkey software products including VoxNova AI, Hospital EHR, Hotel PMS, School ERP, and E-commerce platforms, ready to deploy in 1 to 3 weeks.",
      suggestedActions: ["VoxNova AI Platform", "MedPulse Hospital EHR", "OmniStore E-Commerce", "WhatsApp Demo"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 14. ALL 15 SERVICES CATALOG
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

> 📝 *Note: Prices can be customized per project specifications under mutual agreement.*`,
      audioText:
        "Himnova provides 15 specialized services including AI voice agents, custom software, mobile apps, DevOps, and cloud hosting.",
      suggestedActions: ["AI Voice Calling", "Mobile App Development", "Custom Software", "WhatsApp Inquiry"],
      isFarewell: false,
      language: lang,
    };
  }

  // -------------------------------------------------------------------------
  // 15. CAREERS & HIRING
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
  // 16. GREETINGS & DEFAULT KNOWLEDGE SUMMARY
  // -------------------------------------------------------------------------
  if (lang === "ne") {
    return {
      reply: `नमस्ते! म **Himnova 24/7 AI Assistant** हुँ। Himnova Technologies (डिल्लीबजार-३०, काठमाडौं) ले १५ वटा IT सेवाहरू, १९ वटा टर्नकी सफ्टवेयर उत्पादनहरू, र नेपाली/हिन्दी/अंग्रेजी AI Voice Calling Agents उपलब्ध गराउँछ।

तपाईंले सोध्नुभएको विषयमा हामी तपाईंलाई कसरी सहयोग गर्न सक्छौं?
- 🎙️ **AI Voice Calling Agents & Rates**
- 💻 **कस्टम सफ्टवेयर र मोबाइल एप्स (iOS/Android)**
- 💰 **पारदर्शी सेवा दरहरू र डेलिभरी समय**
- 📍 **कार्यालय (डिल्लीबजार-३०) वा सम्पर्क (+977 9823009467)**`,
      audioText:
        "नमस्ते! म हिमभोभा एआई असिस्टेन्ट हुँ। तपाईँलाई हाम्रो सफ्टवेयर, भ्वाइस कलिङ वा क्लाउड सेवाको बारेमा के जानकारी चाहिन्छ?",
      suggestedActions: ["AI Voice Calling Rates", "15 IT Services", "19 Turnkey Products", "Office Location"],
      isFarewell: false,
      language: lang,
    };
  }

  if (lang === "hi") {
    return {
      reply: `नमस्ते! मैं **Himnova 24/7 AI Assistant** हूँ। Himnova Technologies (डिल्लीबजार-३०, काठमांडू) से कस्टम सॉफ्टवेयर, मोबाइल ऐप्स, और एआई वॉइस कॉलिंग एजेंट्स प्रदान करता है।

आपकी सेवा में:
- 🎙️ **AI Voice Calling Agents & Rates**
- 💻 **कस्टम सॉफ्टवेयर और मोबाइल ऐप्स**
- 💰 **पारदर्शी रेट्स और डिलीवरी टाइमलाइन**
- 📍 **ऑफिस लोकेशन (डिल्लीबजार-३०) और व्हाट्सएप (+977 9823009467)**`,
      audioText:
        "नमस्ते! मैं हिमभोभा एआई असिस्टेंट हूँ। आप सॉफ्टवेयर डेवलपमेंट, एआई वॉइस कॉलिंग या प्राइसिंग के बारे में कुछ भी पूछ सकते हैं।",
      suggestedActions: ["AI Voice Calling Rates", "15 IT Services", "19 Turnkey Products", "Office Location"],
      isFarewell: false,
      language: lang,
    };
  }

  return {
    reply: `Hello! I am the **Himnova 24/7 AI Assistant**, trained on all live services, turnkey products, and engineering capabilities of **Himnova Technologies Private Limited** (Dillibazar-30, Kathmandu, Nepal).

Regarding your project:
- 🎙️ **AI Voice Calling Agents & VoxNova Platform** (Sub-400ms latency)
- 💻 **Custom Enterprise Software & Web Apps** (100% full source code ownership)
- 📱 **Mobile Apps for iOS & Android** (Flutter / React Native)
- 🚀 **19 Pre-Built Turnkey Platforms** (Deploy in 1–3 weeks)
- 💰 **Transparent Rate Cards in NPR & USD** (Tailored with mutual agreement)

How may our engineering architects assist your project today? Connect on [WhatsApp at ${company.contact.phonePrimary}](${whatsappUrl}) anytime!`,
    audioText:
      "Hello! I am the Himnova AI Assistant. I can help you with AI voice calling agents, custom software development, mobile apps, or pricing estimates.",
    suggestedActions: ["AI Voice Calling Specs", "15 IT Services", "19 Turnkey Products", "WhatsApp Direct"],
    isFarewell: false,
    language: lang,
  };
}
