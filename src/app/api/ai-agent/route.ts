import { NextRequest, NextResponse } from "next/server";
import { executeAIEngine } from "@/ai-model";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    let body: any = {};
    try {
      body = await req.json();
    } catch {
      body = {};
    }

    const { message = "", mode = "chat" } = body;

    const trimmedMsg = typeof message === "string" ? message.trim() : "";
    if (!trimmedMsg) {
      return NextResponse.json(
        {
          reply:
            "Namaste! I am the **Himnova 24/7 AI Voice & Messaging Assistant**.\n\nI am trained live on our 15 IT services, 19 turnkey software products, exact pricing in NPR & USD, and engineering architectures. How may I help your project today?",
          audioText:
            "Hello! I am your Himnova AI Voice Assistant. How can I help you with software development, AI voice calling, or pricing today?",
          suggestedActions: [
            "AI Voice Calling Rates",
            "15 IT Services & Pricing",
            "19 Turnkey Products",
            "Er. Sushil Panthi (Director)",
            "Office Location & Contact",
          ],
          isFarewell: false,
          language: "en",
        },
        { status: 200 }
      );
    }

    // Execute the live trained AI knowledge model
    const aiResponse = executeAIEngine(trimmedMsg);

    return NextResponse.json(
      {
        reply: aiResponse.reply,
        audioText: aiResponse.audioText,
        suggestedActions: aiResponse.suggestedActions,
        isFarewell: aiResponse.isFarewell,
        language: aiResponse.language,
        whatsappUrl: `https://wa.me/9779823009467?text=${encodeURIComponent(
          `Hello Himnova Technologies! Regarding my inquiry: "${trimmedMsg}"`
        )}`,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("AI Agent API Execution Error:", error);
    return NextResponse.json(
      {
        reply:
          "### 🌐 **Himnova Technologies Private Limited**\n\nWe provide 15 IT services and 19 turnkey software products with **100% full source code ownership**.\n\nConnect directly with **Er. Sushil Panthi** and our engineering team on WhatsApp at **+977 9823009467**.",
        audioText:
          "Himnova Technologies is here to help. You can connect with our lead architects directly on WhatsApp at 9823009467.",
        suggestedActions: ["WhatsApp Direct", "15 IT Services", "Office Location"],
        isFarewell: false,
        language: "en",
      },
      { status: 200 }
    );
  }
}
