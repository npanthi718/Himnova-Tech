import { loadTrainedKnowledge } from "./trainingData";
import { RetrievedIntent } from "./knowledgeRetriever";

export interface FormattedAIResponse {
  reply: string;
  audioText: string;
  suggestedActions: string[];
}

function cleanNpr(price: string): string {
  return price.replace(/^NPR\s*/i, "").trim();
}

function cleanUsd(price: string): string {
  return price.replace(/^(\$|USD\s*)/i, "").trim();
}

/**
 * Generates beautifully structured, premium, and 100% accurate responses
 * based on the resolved intent and live trained knowledge base.
 */
export function generateFormattedResponse(intent: RetrievedIntent): FormattedAIResponse {
  const trained = loadTrainedKnowledge();
  const company = trained.company;
  const director = trained.director;
  const lang = intent.language;

  // =========================================================================
  // 1. SPECIFIC PRODUCT (19 Turnkey Platforms)
  // =========================================================================
  if (intent.type === "specific-product" && intent.matchedProduct) {
    const p = intent.matchedProduct;
    const nprFormatted = cleanNpr(p.priceRange.localEstimated);
    const usdFormatted = cleanUsd(p.priceRange.usd);

    if (lang === "ne") {
      return {
        reply: `### 🚀 **${p.title}** (Turnkey Product: \`${p.id}\`)

- **वर्ग (Category)**: ${p.category}
- **ट्यागलाइन**: *${p.tagline}*
- **विवरण**: ${p.description}
- **लक्ष्यित बजार (Target Market)**: ${p.targetMarket}

💰 **लागत र डेलिभरी समय (Pricing & SLA)**:
- **लागत (Price)**: **NPR ${nprFormatted}** (USD **$${usdFormatted}**) [${p.priceRange.model}]
- **तयारी समय (Turnaround)**: **${p.deliveryTime}**

✨ **प्रमुख विशेषताहरू (Key Features)**:
${p.keyFeatures.map((f) => `- ${f}`).join("\n")}

🛠️ **प्रविधि (Tech Stack)**: ${p.techStack.join(", ")}
🏛️ **आर्किटेक्चर**: ${p.fullArchitecture}
📦 **डेलिभरेबल्स**: ${p.deliverables.join("; ")}
✅ **समावेश**: १००% Full Source Code Ownership, ६ महिनाको नि:शुल्क सपोर्ट र Deployment Setup.`,
        audioText: `${p.title} को मूल्य एनपीआर ${nprFormatted} रहेको छ र यो ${p.deliveryTime} भित्र तयार हुन्छ। यसमा पूर्ण सोर्स कोड स्वामित्व र ६ महिनाको सपोर्ट समावेश छ।`,
        suggestedActions: [`Demo of ${p.title.split(" ")[0]}`, "WhatsApp Direct Inquiry", "View All 19 Products"],
      };
    }

    if (lang === "hi") {
      return {
        reply: `### 🚀 **${p.title}** (Turnkey Product: \`${p.id}\`)

- **कैटेगरी**: ${p.category}
- **टैगलाइन**: *${p.tagline}*
- **विवरण**: ${p.description}
- **टारगेट मार्केट**: ${p.targetMarket}

💰 **लागत और डिलीवरी (Pricing & SLA)**:
- **अनुमानित मूल्य**: **NPR ${nprFormatted}** (USD **$${usdFormatted}**) [${p.priceRange.model}]
- **डिलीवरी समय**: **${p.deliveryTime}**

✨ **मुख्य फीचर्स (Key Features)**:
${p.keyFeatures.map((f) => `- ${f}`).join("\n")}

🛠️ **टेक स्टैक**: ${p.techStack.join(", ")}
📦 **डिलीवरेबल्स**: ${p.deliverables.join("; ")}
✅ **गारंटी**: १००% Full Source Code Ownership, ६ महीने की मुफ्त SLA वारंटी और मेंटेनेंस।`,
        audioText: `${p.title} की कीमत एनपीआर ${nprFormatted} या ${usdFormatted} डॉलर है और यह ${p.deliveryTime} में पूरी तरह तैयार हो जाता है।`,
        suggestedActions: [`Demo of ${p.title.split(" ")[0]}`, "WhatsApp Chat", "View 19 Products"],
      };
    }

    return {
      reply: `### 🚀 **${p.title}** (Pre-Built Turnkey Product: \`${p.id}\`)

- **Category**: ${p.category}
- **Tagline**: *${p.tagline}*
- **Target Market**: ${p.targetMarket}

💰 **Investment & Delivery SLA**:
- **Estimated Price**: **NPR ${nprFormatted}** (USD **$${usdFormatted}**) [${p.priceRange.model}]
- **Delivery Timeline**: **${p.deliveryTime}** (Rapid Turnkey Deployment)

✨ **Core Capabilities & Features**:
${p.keyFeatures.map((f) => `- ${f}`).join("\n")}

🛠️ **Technology Stack**: ${p.techStack.join(", ")}
🏛️ **Architecture**: ${p.fullArchitecture}
📦 **Deliverables Included**: ${p.deliverables.join("; ")}
✅ **Himnova Guarantee**: 100% Full Source Code Ownership, Zero-Lock-In, 6 Months Free SLA Warranty.`,
      audioText: `${p.title} is available at NPR ${nprFormatted} or ${usdFormatted} dollars with a ${p.deliveryTime} turnaround time. It includes complete source code ownership.`,
      suggestedActions: [`Demo of ${p.title.split(" ")[0]}`, "Request Quotation", "View 19 Products", "WhatsApp Connect"],
    };
  }

  // =========================================================================
  // 2. SPECIFIC SERVICE (15 IT Services)
  // =========================================================================
  if (intent.type === "specific-service" && intent.matchedService) {
    const s = intent.matchedService;
    const nprFormatted = cleanNpr(s.priceRange.npr);
    const usdFormatted = cleanUsd(s.priceRange.usd);

    if (lang === "ne") {
      return {
        reply: `### 🛠️ **${s.title}** (सेवा ID: \`${s.id}\`)

${s.fullDetails}

- **मुख्य फोकस**: ${s.focusArea}
- **सिर्जना हुने मूल्य**: ${s.valueCreated}

💰 **सेवा शुल्क र समय (Pricing & SLA)**:
- **लागत**: **NPR ${nprFormatted}** (USD **$${usdFormatted}**) [${s.priceRange.model}]
- **समय (Turnaround)**: **${s.priceRange.turnaround}**
- **पर्फर्मेन्स मेट्रिक**: ${s.metrics}

✨ **प्रमुख विशेषताहरू (Key Features)**:
${s.features.map((f) => `- ${f}`).join("\n")}

✅ **हाम्रो प्रतिबद्धता**: १००% Source Code Ownership, ९९.९९% Cloud SLA र ६ महिनाको वारेन्टी।`,
        audioText: `${s.title} को दर एनपीआर ${nprFormatted} वा ${usdFormatted} डलरबाट सुरु हुन्छ र यो ${s.priceRange.turnaround} भित्र सम्पन्न हुन्छ।`,
        suggestedActions: [`Get Quote for ${s.title.split(" ")[0]}`, "Explore 15 Services", "WhatsApp Chat"],
      };
    }

    if (lang === "hi") {
      return {
        reply: `### 🛠️ **${s.title}** (\`${s.id}\`)

${s.fullDetails}

- **रणनीतिक फोकस**: ${s.focusArea}
- **मूल्य लाभ (Value Created)**: ${s.valueCreated}

💰 **लागत और समय (Pricing & SLA)**:
- **नेपाल मार्केट दर**: **NPR ${nprFormatted}**
- **ग्लोबल दर**: **USD $${usdFormatted}** (${s.priceRange.model})
- **टर्नअराउंड समय**: **${s.priceRange.turnaround}**
- **परफॉरमेंस मेट्रिक**: ${s.metrics}

✨ **इंजीनियरिंग क्षमताएं (Key Features)**:
${s.features.map((f) => `- ${f}`).join("\n")}

✅ **गारंटी**: १००% Full Source Code Ownership, ९९.९९% Cloud SLA और ६ महीने की वारंटी।`,
        audioText: `${s.title} की दर NPR ${nprFormatted} या ${usdFormatted} डॉलर से शुरू होती है और यह ${s.priceRange.turnaround} में तैयार होता है।`,
        suggestedActions: [`Quote: ${s.title.split(" ")[0]}`, "Explore All 15 Services", "Connect on WhatsApp"],
      };
    }

    return {
      reply: `### 🛠️ **${s.title}** (\`${s.id}\`)

${s.fullDetails}

- **Strategic Focus Area**: ${s.focusArea}
- **Value Created**: ${s.valueCreated}

💰 **Pricing & Turnaround SLA**:
- **Nepal Market Rate**: **NPR ${nprFormatted}**
- **Global Rate**: **USD $${usdFormatted}** (${s.priceRange.model})
- **Turnaround SLA**: **${s.priceRange.turnaround}**
- **Performance SLA**: ${s.metrics}

✨ **Engineering Capabilities**:
${s.features.map((f) => `- ${f}`).join("\n")}

✅ **Himnova Standards**: 100% Unencumbered Source Code Ownership, Zero Vendor Lock-in, 6 Months Free Warranty.`,
      audioText: `${s.title} starts at NPR ${nprFormatted} or ${usdFormatted} dollars with a delivery timeline of ${s.priceRange.turnaround}.`,
      suggestedActions: [`Quote: ${s.title.split(" ")[0]}`, "Explore All 15 Services", "Connect on WhatsApp"],
    };
  }

  // =========================================================================
  // 3. LEADERSHIP & FOUNDER
  // =========================================================================
  if (intent.type === "leadership") {
    if (lang === "ne") {
      return {
        reply: `### 👤 **${director.name}** — ${director.title}
**Himnova Technologies Private Limited**

Er. Sushil Panthi ले काठमाडौं, नेपालबाट Silicon Valley मापदण्डको क्लाउड आर्किटेक्चर, डिस्ट्रिब्युटेड सिस्टम्स र Generative AI सोलुसनहरूको नेतृत्व गरिरहनुभएको छ।

💬 **निर्देशकको भनाइ**:
*"${director.quote}"*

- **पद**: Chairman, Executive Director & Chief Architect
- **फोन / WhatsApp**: **${company.contact.phonePrimary}**
- **ईमेल**: **${company.contact.email}**
- **कार्यालय**: बानेश्वर-३१, काठमाडौं (देउराली क्लब अगाडि)`,
        audioText:
          "हिमभोभा टेक्नोलोजिजका कार्यकारी निर्देशक र प्रमुख आर्किटेक्ट ईन्जिनियर सुशील पन्थी हुनुहुन्छ।",
        suggestedActions: ["WhatsApp Er. Sushil Panthi", "Office Location", "About Company"],
      };
    }

    if (lang === "hi") {
      return {
        reply: `### 👤 **${director.name}** — ${director.title}
**Himnova Technologies Private Limited**

Er. Sushil Panthi काठमांडू, नेपाल से सिलिकॉन वैली स्तर के क्लाउड आर्किटेक्चर, डिस्ट्रिब्यूटेड सिस्टम्स और जनरेटिव एआई सॉल्यूशंस का नेतृत्व कर रहे हैं।

💬 **डायरेक्टर का विजन**:
*"${director.quote}"*

- **पद**: Chairman, Executive Director & Chief Architect
- **फोन / WhatsApp**: **${company.contact.phonePrimary}**
- **ईमेल**: **${company.contact.email}**
- **ऑफिस**: बानेश्वर-३१, काठमांडू (देउराली क्लब के सामने)`,
        audioText:
          "हिमभोभा टेक्नोलॉजीज के चेयरमैन और एग्जीक्यूटिव डायरेक्टर इंजीनियर सुशील पंथी हैं।",
        suggestedActions: ["WhatsApp Er. Sushil Panthi", "Office Location", "About Company"],
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
        "Er. Sushil Panthi is the Chairman, Executive Director, and Chief Architect of Himnova Technologies, leading enterprise cloud and AI engineering.",
      suggestedActions: ["Connect with Er. Sushil Panthi", "Office Location", "View Vision & Mission"],
    };
  }

  // =========================================================================
  // 4. OFFICE LOCATION, HOURS & MAP
  // =========================================================================
  if (intent.type === "office-location") {
    if (lang === "ne") {
      return {
        reply: `### 📍 **Himnova Technologies Private Limited — मुख्य कार्यालय**

- **ठेगाना**: **${company.headquarters.address}, ${company.headquarters.city} ४४६००, ${company.headquarters.country}** *(देउराली क्लब अगाडि)*
- **फोन / WhatsApp**: **${company.contact.phonePrimary}**
- **ईमेल**: **${company.contact.email}**
- **कार्यालय समय**: सोमबार – शुक्रबार: 9:00 AM – 6:00 PM NPT (24/7 Live Monitoring SLA)

🗺️ **Google Maps**: हाम्रो वेबसाइटमा रहेको नक्सा वा "Get Directions" बटन थिचेर तपाईं सिधै कार्यालय आइपुग्ने बाटो हेर्न सक्नुहुन्छ!`,
        audioText:
          "हाम्रो कार्यालय बानेश्वर एकतीस काठमाडौंमा देउराली क्लबको अगाडि अवस्थित छ। सम्पर्क नम्बर +977 9823009467 हो।",
        suggestedActions: ["Get Google Maps Route", "WhatsApp Message", "Call +977 9823009467"],
      };
    }

    if (lang === "hi") {
      return {
        reply: `### 📍 **Himnova Technologies Corporate Headquarters**

- **पता (Address)**: **${company.headquarters.address}, ${company.headquarters.city} ४४६००, ${company.headquarters.country}** *(देउराली क्लब के सामने)*
- **फोन / WhatsApp**: **${company.contact.phonePrimary}**
- **ईमेल**: **${company.contact.email}**
- **समय**: सोमवार – शुक्रवार: 9:00 AM – 6:00 PM NPT (24/7 Cloud Support SLA)

🗺️ **Google Maps**: आप हमारी साइट पर दिए गए मैप या 'Get Directions' बटन से सीधे ऑफिस का नेविगेशन रूट पा सकते हैं।`,
        audioText:
          "हिमभोभा टेक्नोलॉजीज का मुख्य कार्यालय बानेश्वर-३१, काठमांडू, नेपाल में देउराली क्लब के सामने स्थित है। फोन नंबर +977 9823009467 है।",
        suggestedActions: ["Open Google Maps", "Start WhatsApp Chat", "Call Office"],
      };
    }

    return {
      reply: `### 📍 **Himnova Technologies Corporate Headquarters**

- **Address**: **${company.headquarters.address}, ${company.headquarters.city} 44600, ${company.headquarters.country}** *(Opposite Deurali Club)*
- **Primary Phone / WhatsApp**: **${company.contact.phonePrimary}**
- **Secondary Phone (Nepal/India)**: **${company.contact.phoneSecondary}**
- **Email**: **${company.contact.email}**
- **Business Hours**: Monday – Friday: 9:00 AM – 6:00 PM NPT (24/7 Cloud Support SLA)

You can view our interactive map and get real-time navigation directions on the website or open in Google Maps directly.`,
      audioText:
        "Himnova Technologies is headquartered in Baneshwor-31, Kathmandu, Nepal, opposite Deurali Club. Phone and WhatsApp: +977 9823009467.",
      suggestedActions: ["Open Google Maps", "Start WhatsApp Chat", "Call Office"],
    };
  }

  // =========================================================================
  // 5. CONTACT INFO
  // =========================================================================
  if (intent.type === "contact-info") {
    return {
      reply: `### 📞 **Official Contact Channels — Himnova Technologies**

- 📱 **Primary Phone / WhatsApp**: **${company.contact.phonePrimary}**
- ☎️ **Secondary Phone (Nepal / India)**: **${company.contact.phoneSecondary}**
- ✉️ **General Support**: \`${company.contact.email}\`
- 💼 **Sales & Custom Quotations**: \`${company.contact.salesEmail}\`
- 🎓 **Careers & Hiring**: \`${company.contact.careersEmail}\`
- 📍 **Corporate Office**: ${company.headquarters.address}, ${company.headquarters.city} 44600, Nepal

Connect with us anytime on WhatsApp for instant software consultation and architecture planning!`,
      audioText: `You can reach Himnova Technologies by phone or WhatsApp at +977 9823009467 or email us at ${company.contact.email}.`,
      suggestedActions: ["WhatsApp Direct", "Call Primary Line", "Office Map"],
    };
  }

  // =========================================================================
  // 6. TECH STACK & ENGINEERING FRAMEWORKS
  // =========================================================================
  if (intent.type === "tech-stack") {
    const ts = trained.techStacks;
    return {
      reply: `### 🛠️ **Enterprise Technology Stack & Engineering Standards**

Himnova engineers modern, resilient systems using battle-tested enterprise technologies:

- 🌐 **Frontend**: ${ts.frontend.join(", ")}
- ⚡ **Backend & Microservices**: ${ts.backend.join(", ")}
- 📱 **Mobile Applications**: ${ts.mobile.join(", ")}
- ☁️ **Cloud Infrastructure & DevOps**: ${ts.cloudDevops.join(", ")}
- 🧠 **AI & Voice Intelligence**: ${ts.aiMl.join(", ")}
- 🗄️ **Databases & Caching**: ${ts.database.join(", ")}

✅ All architectures follow OWASP security standards, zero-lock-in modularity, and automated CI/CD deployments.`,
      audioText:
        "Himnova builds modern software using Next.js, React, Node.js, Python, Flutter, AWS, and state-of-the-art AI voice agents like Bland and Vapi.",
      suggestedActions: ["Custom Software Scope", "AI Voice Calling", "DevOps & Cloud", "WhatsApp Architect"],
    };
  }

  // =========================================================================
  // 7. SOURCE CODE OWNERSHIP & GUARANTEES
  // =========================================================================
  if (intent.type === "guarantee-ownership") {
    const g = trained.guarantees;
    return {
      reply: `### 🛡️ **Himnova Uncompromising Engineering Guarantees**

1. 📦 **100% Full Source Code Ownership**:
   ${g.sourceCode} No recurring licensing fees or hidden IP lock-ins.

2. ⏱️ **99.99% Production Cloud SLA**:
   ${g.sla}

3. 🛠️ **6 Months Complimentary Warranty**:
   ${g.warranty}

4. 🔒 **Enterprise-Grade Security**:
   ${g.security}

5. 🔓 **Zero Vendor Lock-In**:
   ${g.lockin}`,
      audioText:
        "At Himnova, you get 100% full source code ownership, zero vendor lock-in, 99.99% cloud SLA, and 6 months of free warranty on every project.",
      suggestedActions: ["Start a Project", "View 15 Services", "WhatsApp Er. Sushil Panthi"],
    };
  }

  // =========================================================================
  // 8. DELIVERY TIMELINE & TURNAROUND
  // =========================================================================
  if (intent.type === "delivery-timeline") {
    return {
      reply: `### ⏱️ **Sprint Delivery Timelines & SLA Standards**

- 🚀 **19 Turnkey Pre-Built Platforms**: **1 – 3 Weeks** (Fast-track deployment)
- 🎙️ **AI Voice Calling Agents**: **1 – 3 Weeks** (Prompt engineering + SIP integration)
- 🎨 **Corporate Websites & Landing Pages**: **1 – 2 Weeks**
- 🌐 **Web Applications & SaaS MVPs**: **2 – 5 Weeks**
- 📱 **Mobile Apps (iOS & Android)**: **3 – 6 Weeks**
- 💻 **Custom Enterprise ERP & Software**: **3 – 6 Weeks**

*All timelines operate on weekly Agile milestone deliverables with transparent demo reviews.*`,
      audioText:
        "Our turnkey platforms deploy in 1 to 3 weeks, websites in 1 to 2 weeks, and custom software or mobile apps in 3 to 6 weeks.",
      suggestedActions: ["Explore 19 Products", "AI Voice Calling", "Request Quotation"],
    };
  }

  // =========================================================================
  // 9. PROJECTS & PORTFOLIO
  // =========================================================================
  if (intent.type === "projects-portfolio") {
    return {
      reply: `### 🏆 **Featured Portfolio & Production Deployments**

${trained.projects
  .map(
    (p, i) =>
      `${i + 1}. **${p.title}** (\`${p.category}\`) — *${p.status}*\n   - ${p.tagline}\n   - **Tech**: ${p.techStack.join(", ")}`
  )
  .join("\n\n")}

*We have delivered mission-critical EHR systems, high-volume e-commerce engines, and real-time AI vision deployments across Nepal, India, and global clients.*`,
      audioText:
        "Himnova has delivered hospital EHR systems, e-commerce engines, hotel management suites, and edge computer vision AI platforms.",
      suggestedActions: ["Hospital EHR Demo", "E-Commerce Demo", "Custom Software Quote"],
    };
  }

  // =========================================================================
  // 10. CAREERS & HIRING
  // =========================================================================
  if (intent.type === "careers-hiring") {
    return {
      reply: `### 👥 **Active Careers & Engineering Openings at Himnova Technologies**

We are actively hiring top-tier engineering talent for our Kathmandu labs and remote roles:

${trained.careers
  .map(
    (c) =>
      `- **${c.role}** (\`${c.department}\` | ${c.locationType})\n  - **Salary Range**: ${c.salaryRange}\n  - **Experience**: ${c.experience}\n  - **Key Requirements**: ${c.requirements.slice(0, 3).join("; ")}`
  )
  .join("\n\n")}

📩 **How to Apply**: Send your CV, GitHub portfolio, and cover letter to \`${company.contact.careersEmail}\` or apply directly on our Careers page.`,
      audioText:
        "Himnova Technologies is hiring for engineering roles including Cloud Architects and Full Stack Engineers. Apply at careers dot himnovatech at gmail dot com.",
      suggestedActions: ["View Careers Page", "Email Resume", "WhatsApp HR"],
    };
  }

  // =========================================================================
  // 11. ALL 19 TURNKEY PRODUCTS
  // =========================================================================
  if (intent.type === "all-products") {
    return {
      reply: `### 🚀 **19 Turnkey Pre-Built Industry Software Products Ready to Deploy**

All products include **100% full source code ownership**, cloud deployment, and 6 months free warranty:

${trained.products
  .map(
    (p, i) =>
      `${i + 1}. **${p.title}** (${p.category}) — **NPR ${cleanNpr(p.priceRange.localEstimated)}** ($${cleanUsd(p.priceRange.usd)}) • *${p.deliveryTime}*`
  )
  .join("\n")}

*Ask me about any specific product above to see its full feature set, tech stack, and live demo details!*`,
      audioText:
        "Himnova offers 19 turnkey software products including VoxNova AI, Hospital EHR, Hotel PMS, School ERP, and E-commerce platforms, ready to deploy in 1 to 3 weeks.",
      suggestedActions: ["VoxNova AI Platform", "MedPulse Hospital EHR", "OmniStore E-Commerce", "WhatsApp Demo"],
    };
  }

  // =========================================================================
  // 12. ALL 15 SERVICES
  // =========================================================================
  if (intent.type === "all-services") {
    return {
      reply: `### 🛠️ **15 Enterprise IT & Cloud Engineering Services at Himnova**

${trained.services
  .map(
    (s, i) =>
      `${i + 1}. **${s.title}** — **NPR ${cleanNpr(s.priceRange.npr)}** ($${cleanUsd(s.priceRange.usd)}) • *SLA: ${s.priceRange.turnaround}*\n   *${s.shortDescription}*`
  )
  .join("\n\n")}

*Ask me about any service to see the complete technical scope, SLA metrics, and architecture!*`,
      audioText:
        "Himnova provides 15 specialized services including AI voice agents, custom software, mobile apps, DevOps, and cloud hosting.",
      suggestedActions: ["AI Voice Calling", "Mobile App Development", "Custom Software", "WhatsApp Inquiry"],
    };
  }

  // =========================================================================
  // 13. GENERAL PRICING & RATE CARD
  // =========================================================================
  if (intent.type === "pricing-general") {
    if (lang === "ne") {
      return {
        reply: `### 💰 **Himnova Technologies का आधिकारिक बजार दरहरू (Transparent Rates)**:

1. 🎙️ **AI Voice Calling & Agents**: **NPR 45,000 – 1,45,000** ($290 – $935) • *१-३ हप्ता*
2. 💻 **Custom Software Development**: **NPR 95,000 – 2,90,000** ($615 – $1,870) • *३-६ हप्ता*
3. 🌐 **Web Applications & SaaS**: **NPR 65,000 – 1,95,000** ($420 – $1,260) • *२-५ हप्ता*
4. 📱 **Mobile Apps (Flutter / React Native)**: **NPR 85,000 – 2,60,000** ($550 – $1,680) • *३-६ हप्ता*
5. 🎨 **Website Design & Branding**: **NPR 25,000 – 65,000** ($160 – $420) • *१-२ हप्ता*
6. ☁️ **Cloud DevOps & Kubernetes**: **NPR 40,000 – 1,25,000** ($260 – $805) • *१-३ हप्ता*
7. 🚀 **Turnkey Pre-Built Products (19 वटा उत्पादनहरू)**: **NPR 40,000 – 1,98,000** ($260 – $1,280)

✅ **हाम्रा फाइदाहरू**: १००% Source Code Ownership, ९९.९९% Cloud SLA, ६ महिनाको नि:शुल्क वारेन्टी।`,
        audioText:
          "हिमभोभाको सेवा दरहरू पारदर्शी छन्। एआई भ्वाइस एजेन्ट पैँतालीस हजार, वेबसाइट पच्चीस हजार, र मोबाइल एप पचासी हजार एनपीआरबाट सुरु हुन्छ।",
        suggestedActions: ["Explore 15 Services", "View 19 Products", "Get Custom Quote"],
      };
    }

    if (lang === "hi") {
      return {
        reply: `### 💰 **Himnova Technologies की पारदर्शी दरें (Transparent Rates)**:

1. 🎙️ **AI Voice Calling & Agents**: **NPR 45,000 – 1,45,000** ($290 – $935) • *१-३ सप्ताह*
2. 💻 **Custom Software Development**: **NPR 95,000 – 2,90,000** ($615 – $1,870) • *३-६ सप्ताह*
3. 🌐 **Web Applications & SaaS**: **NPR 65,000 – 1,95,000** ($420 – $1,260) • *२-५ सप्ताह*
4. 📱 **Mobile Apps (iOS & Android)**: **NPR 85,000 – 2,60,000** ($550 – $1,680) • *३-६ सप्ताह*
5. 🎨 **Website Design & SEO**: **NPR 25,000 – 65,000** ($160 – $420) • *१-२ सप्ताह*
6. ☁️ **Cloud DevOps & Kubernetes**: **NPR 40,000 – 1,25,000** ($260 – $805) • *१-३ सप्ताह*
7. 🚀 **Turnkey Pre-Built Products (19 प्रोडक्ट्स)**: **NPR 40,000 – 1,98,000** ($260 – $1,280)

✅ **गारंटी**: १००% Source Code Ownership, ९९.९९% Cloud SLA और ६ महीने का मुफ्त सपोर्ट।`,
        audioText:
          "हिमभोभा की दरें पारदर्शी हैं। एआई कॉलिंग पैंतालीस हजार, वेबसाइट पच्चीस हजार और मोबाइल ऐप पचासी हजार एनपीआर से शुरू होता है।",
        suggestedActions: ["Explore 15 Services", "View 19 Products", "Get Custom Quote"],
      };
    }

    return {
      reply: `### 💰 **Transparent Rate Card & Pricing Standards at Himnova Technologies**

All services include **100% full source code ownership**, milestone sprints, and **6 months SLA warranty**:

- 🎙️ **AI Agents & Voice Calling**: **NPR 45,000 – 1,45,000** ($290 – $935) • *1 – 3 Weeks*
- 💻 **Custom Software Development**: **NPR 95,000 – 2,90,000** ($615 – $1,870) • *3 – 6 Weeks*
- 🌐 **Web Applications & SaaS**: **NPR 65,000 – 1,95,000** ($420 – $1,260) • *2 – 5 Weeks*
- 📱 **Mobile Apps (iOS & Android)**: **NPR 85,000 – 2,60,000** ($550 – $1,680) • *3 – 6 Weeks*
- 🎨 **Corporate Website & SEO**: **NPR 25,000 – 65,000** ($160 – $420) • *1 – 2 Weeks*
- ☁️ **Cloud DevOps & Kubernetes**: **NPR 40,000 – 1,25,000** ($260 – $805) • *1 – 3 Weeks*
- 🚀 **19 Turnkey Niche Products**: **NPR 40,000 – 1,98,000** ($260 – $1,280) • *1 – 3 Weeks*

*Would you like an itemized proposal for your specific project scope?*`,
      audioText:
        "Our pricing is fully transparent with complete source code ownership. AI voice agents start at 45,000 NPR, websites at 25,000 NPR, and mobile apps at 85,000 NPR.",
      suggestedActions: ["Request Custom Quote", "Explore 19 Products", "WhatsApp Inquiry"],
    };
  }

  // =========================================================================
  // 14. GENERAL DEFAULT CONSULTATION
  // =========================================================================
  if (lang === "ne") {
    return {
      reply: `नमस्ते! म **Himnova AI Assistant** हुँ। Himnova Technologies ले काठमाडौं, नेपालबाट अत्याधुनिक सफ्टवेयर इन्जिनियरिङ, एआई भ्वाइस कलिङ एजेन्ट, मोबाइल एप्स र १९ वटा टर्नकी सफ्टवेयर उत्पादनहरू उपलब्ध गराउँछ।

तपाईं हामीलाई निम्न विषयमा सोध्न सक्नुहुन्छ:
1. 🎙️ **AI Voice Calling Agents (नेपाली, हिन्दी र अंग्रेजी बाइलिङ्ग्वल)**
2. 💻 **कस्टम सफ्टवेयर र वेब एप्लिकेसनहरू**
3. 📱 **मोबाइल एप्स (iOS र Android)**
4. 💰 **पारदर्शी सेवा दरहरू र लागत (NPR र USD मा)**
5. 📍 **कार्यालय ठेगाना (बानेश्वर-३१, काठमाडौं)** वा सम्पर्क नम्बर

तपाईंलाई कुन सेवा वा सफ्टवेयरको बारेमा जानकारी चाहिन्छ?`,
      audioText:
        "नमस्ते! म हिमभोभा एआई असिस्टेन्ट हुँ। तपाईँलाई हाम्रो सफ्टवेयर, भ्वाइस कलिङ वा क्लाउड सेवाको बारेमा के जानकारी चाहिन्छ?",
      suggestedActions: ["AI Voice Calling Rates", "15 IT Services", "19 Turnkey Products", "Office Location"],
    };
  }

  if (lang === "hi") {
    return {
      reply: `नमस्ते! मैं **Himnova AI Assistant** हूँ। Himnova Technologies काठमांडू, नेपाल से कस्टम सॉफ्टवेयर डेवलपमेंट, एआई वॉइस कॉलिंग एजेंट्स, मोबाइल ऐप्स और १९ टर्नकी सॉफ्टवेयर प्रोडक्ट्स प्रदान करता है।

आप हमसे पूछ सकते हैं:
1. 🎙️ **AI Voice Calling Agents (हिंदी, नेपाली और अंग्रेजी)**
2. 💻 **कस्टम सॉफ्टवेयर और वेब एप्लिकेशन्स**
3. 📱 **मोबाइल ऐप्स (iOS और Android)**
4. 💰 **पारदर्शी रेट्स और लागत (NPR और USD में)**
5. 📍 **ऑफिस लोकेशन (बानेश्वर-३१, काठमांडू)** और कांटेक्ट डिटेल्स

आप किस प्रोजेक्ट के बारे में जानकारी चाहते हैं?`,
      audioText:
        "नमस्ते! मैं हिमभोभा एआई असिस्टेंट हूँ। आप सॉफ्टवेयर डेवलपमेंट, एआई वॉइस कॉलिंग या प्राइसिंग के बारे में कुछ भी पूछ सकते हैं।",
      suggestedActions: ["AI Voice Calling Rates", "15 IT Services", "19 Turnkey Products", "Office Location"],
    };
  }

  return {
    reply: `Hello! I am the **Himnova AI Assistant**, trained live on all engineering capabilities and platforms of **Himnova Technologies Private Limited** (Kathmandu, Nepal).

How can I assist you today?
- 🎙️ **Bilingual AI Voice Calling Agents & VoxNova Platform** (Sub-400ms latency)
- 💻 **Custom Enterprise Software & Web Applications**
- 📱 **Native & Cross-Platform Mobile Apps (Flutter / React Native)**
- ☁️ **Cloud DevOps, Kubernetes & 24/7 Hosting**
- 🚀 **19 Pre-Built Turnkey Software Platforms (Deploy in 1–3 weeks)**
- 💰 **Transparent Rate Cards (NPR & USD) with 100% Source Code Ownership**

Feel free to ask any question, or connect directly on WhatsApp at **${company.contact.phonePrimary}**!`,
    audioText:
      "Hello! I am the Himnova AI Assistant. I can help you with AI voice calling agents, custom software development, mobile apps, or pricing estimates.",
    suggestedActions: ["AI Voice Calling Specs", "15 IT Services", "19 Turnkey Products", "WhatsApp Direct"],
  };
}
