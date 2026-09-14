"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Bot,
  Mic,
  MicOff,
  PhoneCall,
  PhoneOff,
  Send,
  X,
  Sparkles,
  Volume2,
  VolumeX,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Globe,
  Radio,
  Copy,
  Check,
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  audioText?: string;
  timestamp: string;
  suggestedActions?: string[];
}

export const HimnovaAIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "voice" | "whatsapp">("chat");
  const [languageMode, setLanguageMode] = useState<"en" | "ne" | "hi">("en");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "ai",
      text: "👋 **Namaste & Welcome to Himnova Technologies!**\n\nI am your **24/7 Live AI Voice & Messaging Assistant**, trained on our 15 IT services, 19 turnkey software products, exact pricing in NPR & USD, and engineering architectures.\n\nAsk me anything in **English, Nepali (नेपाली), or Hindi (हिन्दी)** below, or switch to **Voice Call** for hands-free live conversation!",
      audioText:
        "Namaste and welcome to Himnova Technologies! I am your 24/7 AI Voice and Messaging Assistant. How can I assist your project today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      suggestedActions: [
        "AI Voice Calling Rates",
        "15 IT Services & Pricing",
        "19 Turnkey Products",
        "Er. Sushil Panthi (Director)",
        "Office Location & Map",
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Voice Call State
  const [isCalling, setIsCalling] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [speakerEnabled, setSpeakerEnabled] = useState(true);
  const [callDuration, setCallDuration] = useState(0);
  const [voiceStatusText, setVoiceStatusText] = useState("Ready to start live AI voice conversation");
  const [liveUserTranscript, setLiveUserTranscript] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const isRecognitionRunningRef = useRef(false);
  const silenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const callTimerRef = useRef<NodeJS.Timeout | null>(null);
  const ttsSafetyTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isCallingRef = useRef(false);
  const isSpeakingRef = useRef(false);
  const isMutedRef = useRef(false);
  const isLoadingRef = useRef(false);
  const hasGreetedCallRef = useRef(false);

  // Synchronize dynamic refs
  useEffect(() => {
    isCallingRef.current = isCalling;
  }, [isCalling]);

  useEffect(() => {
    isSpeakingRef.current = isSpeaking;
  }, [isSpeaking]);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    isLoadingRef.current = isLoading;
  }, [isLoading]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (activeTab === "chat") {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, activeTab, isLoading]);

  // Voice Call Duration Timer
  useEffect(() => {
    if (isCalling) {
      callTimerRef.current = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    } else {
      if (callTimerRef.current) clearInterval(callTimerRef.current);
      setCallDuration(0);
    }
    return () => {
      if (callTimerRef.current) clearInterval(callTimerRef.current);
    };
  }, [isCalling]);

  // Safe Speech Recognition Starter (Eliminates InvalidStateError)
  const startRecognitionSafely = useCallback(() => {
    if (
      typeof window === "undefined" ||
      !recognitionRef.current ||
      !isCallingRef.current ||
      isSpeakingRef.current ||
      isMutedRef.current ||
      isLoadingRef.current
    ) {
      return;
    }

    if (isRecognitionRunningRef.current) {
      return;
    }

    try {
      recognitionRef.current.lang =
        languageMode === "ne" ? "ne-NP" : languageMode === "hi" ? "hi-IN" : "en-US";
      recognitionRef.current.start();
      isRecognitionRunningRef.current = true;
      setIsListening(true);
      setVoiceStatusText("Listening... Speak your question freely 🎙️");
    } catch {
      // Retry safely on state transition
      setTimeout(() => {
        if (
          !isRecognitionRunningRef.current &&
          isCallingRef.current &&
          !isSpeakingRef.current &&
          !isMutedRef.current &&
          !isLoadingRef.current
        ) {
          try {
            recognitionRef.current.start();
            isRecognitionRunningRef.current = true;
            setIsListening(true);
          } catch {}
        }
      }, 200);
    }
  }, [languageMode]);

  // Stop Speech Recognition cleanly
  const stopRecognitionSafely = useCallback(() => {
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
    if (recognitionRef.current && isRecognitionRunningRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {}
      isRecognitionRunningRef.current = false;
      setIsListening(false);
    }
  }, []);

  // End Voice Call function
  const endVoiceCall = useCallback(() => {
    setIsCalling(false);
    isCallingRef.current = false;
    setIsListening(false);
    setIsSpeaking(false);
    isSpeakingRef.current = false;
    hasGreetedCallRef.current = false;
    stopRecognitionSafely();

    if (typeof window !== "undefined") {
      window.speechSynthesis.cancel();
    }
    setVoiceStatusText("Call ended");
    setLiveUserTranscript("");
  }, [stopRecognitionSafely]);

  // Text-to-Speech (TTS) Engine with Chromium Garbage Collection Fix
  const speakText = useCallback(
    (text: string, onDone?: () => void, isFarewellCall?: boolean) => {
      if (typeof window === "undefined" || !speakerEnabled) {
        if (onDone) onDone();
        if (isFarewellCall) endVoiceCall();
        return;
      }

      // Stop speech recognition while AI is speaking so it doesn't hear itself
      stopRecognitionSafely();

      window.speechSynthesis.cancel();
      if (ttsSafetyTimerRef.current) clearTimeout(ttsSafetyTimerRef.current);

      const cleanText = text
        .replace(/[*_#`[\]()]/g, "")
        .replace(/https?:\/\/\S+/g, "")
        .replace(/\|/g, ", ")
        .replace(/NPR/g, "NPR ")
        .replace(/USD/g, "USD ");

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      // Retain utterance on window to prevent Chrome garbage collection bug
      (window as any)._himnovaActiveUtterance = utterance;

      const hasDevanagari = /[\u0900-\u097F]/.test(cleanText);
      const voices = window.speechSynthesis.getVoices();

      if (hasDevanagari) {
        utterance.lang = languageMode === "ne" ? "ne-NP" : "hi-IN";
        const regionalVoice = voices.find(
          (v) =>
            v.lang.includes("ne") ||
            v.lang.includes("hi") ||
            v.name.includes("Hindi") ||
            v.name.includes("India")
        );
        if (regionalVoice) utterance.voice = regionalVoice;
      } else {
        utterance.lang = "en-US";
        const preferredVoice = voices.find(
          (v) =>
            v.name.includes("Natural") ||
            v.name.includes("Google") ||
            v.name.includes("Samantha") ||
            v.name.includes("Karen") ||
            v.lang.includes("en-US")
        );
        if (preferredVoice) utterance.voice = preferredVoice;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        isSpeakingRef.current = true;
        setVoiceStatusText("Himnova Voice AI speaking... 🔊");
      };

      const handleSpeechEnd = () => {
        if (ttsSafetyTimerRef.current) clearTimeout(ttsSafetyTimerRef.current);
        setIsSpeaking(false);
        isSpeakingRef.current = false;
        (window as any)._himnovaActiveUtterance = null;

        if (isFarewellCall) {
          setVoiceStatusText("Call ended • Thank you! 👋");
          setTimeout(() => {
            endVoiceCall();
          }, 800);
          return;
        }

        if (onDone) {
          onDone();
        } else if (isCallingRef.current && !isMutedRef.current) {
          setVoiceStatusText("Listening... Speak freely in English, नेपाली, or हिन्दी 🎙️");
          setLiveUserTranscript("");
          startRecognitionSafely();
        } else {
          setVoiceStatusText("Connected");
        }
      };

      utterance.onend = handleSpeechEnd;
      utterance.onerror = handleSpeechEnd;

      // Safety timeout in case browser drops onend
      const estimatedDurationMs = Math.max(2500, (cleanText.length / 14) * 1000 + 3000);
      ttsSafetyTimerRef.current = setTimeout(handleSpeechEnd, estimatedDurationMs);

      window.speechSynthesis.speak(utterance);
    },
    [speakerEnabled, languageMode, stopRecognitionSafely, startRecognitionSafely, endVoiceCall]
  );

  // Process User Input (Chat & Voice Handlers)
  const handleSendMessage = useCallback(
    async (textToSend?: string) => {
      const query = textToSend || inputValue;
      if (!query || !query.trim() || isLoadingRef.current) return;

      const userMsg: Message = {
        id: `user-${Date.now()}`,
        sender: "user",
        text: query.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInputValue("");
      setIsLoading(true);
      isLoadingRef.current = true;
      setLiveUserTranscript("");

      if (isCallingRef.current) {
        setVoiceStatusText(`Analyzing question: "${query.trim()}"...`);
      }

      try {
        const response = await fetch("/api/ai-agent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: query.trim(),
            history: messages.slice(-6).map((m) => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text,
            })),
            mode: activeTab,
          }),
        });

        const data = await response.json();

        const aiMsg: Message = {
          id: `ai-${Date.now()}`,
          sender: "ai",
          text:
            data.reply ||
            "Himnova Technologies provides 15 IT services and 19 turnkey software products with 100% full source code ownership. How may I assist your project?",
          audioText: data.audioText,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          suggestedActions: data.suggestedActions || [],
        };

        setMessages((prev) => [...prev, aiMsg]);

        // If in Voice Call mode, speak out response and then auto-resume listening hands-free
        if (isCallingRef.current) {
          speakText(
            data.audioText || data.reply,
            () => {
              if (isCallingRef.current && !isMutedRef.current && !data.isFarewell) {
                setVoiceStatusText("Listening... Speak freely in English, नेपाली, or हिन्दी 🎙️");
                setLiveUserTranscript("");
                startRecognitionSafely();
              }
            },
            Boolean(data.isFarewell)
          );
        }
      } catch {
        const errorMsg: Message = {
          id: `err-${Date.now()}`,
          sender: "ai",
          text: "Connect directly with **Er. Sushil Panthi** and our engineering team at **+977 9823009467** on WhatsApp.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          suggestedActions: ["WhatsApp Direct", "Call Office", "Explore 15 Services"],
        };
        setMessages((prev) => [...prev, errorMsg]);

        if (isCallingRef.current) {
          speakText(
            "You can connect directly with our engineering team at 9823009467 on WhatsApp.",
            () => {
              if (isCallingRef.current && !isMutedRef.current) {
                startRecognitionSafely();
              }
            }
          );
        }
      } finally {
        setIsLoading(false);
        isLoadingRef.current = false;
      }
    },
    [inputValue, messages, activeTab, speakText, startRecognitionSafely]
  );

  // Initialize Speech Recognition instance with silence buffer for complete questions
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang =
          languageMode === "ne" ? "ne-NP" : languageMode === "hi" ? "hi-IN" : "en-US";

        recognition.onstart = () => {
          isRecognitionRunningRef.current = true;
          setIsListening(true);
          setVoiceStatusText("Listening... Speak your question freely 🎙️");
        };

        let accumulatedTranscript = "";

        recognition.onresult = (event: any) => {
          let currentInterim = "";

          for (let i = event.resultIndex; i < event.results.length; ++i) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              accumulatedTranscript += " " + transcript;
            } else {
              currentInterim += transcript;
            }
          }

          const fullCurrentSpoken = (accumulatedTranscript + " " + currentInterim).trim();

          if (fullCurrentSpoken) {
            setLiveUserTranscript(fullCurrentSpoken);
            setVoiceStatusText(`Hearing: "${fullCurrentSpoken}"`);

            // Debounce silence timer (1.4s): ensures user finished speaking whole question
            if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);

            silenceTimerRef.current = setTimeout(() => {
              if (fullCurrentSpoken.trim()) {
                stopRecognitionSafely();
                accumulatedTranscript = "";
                handleSendMessage(fullCurrentSpoken.trim());
              }
            }, 1400);
          }
        };

        recognition.onerror = (event: any) => {
          isRecognitionRunningRef.current = false;
          setIsListening(false);

          if (event.error === "not-allowed") {
            setVoiceStatusText("Microphone permission denied. Please allow microphone in your browser.");
            return;
          }

          // Restart listening smoothly on no-speech or network glitch
          if (
            isCallingRef.current &&
            !isSpeakingRef.current &&
            !isMutedRef.current &&
            !isLoadingRef.current
          ) {
            setTimeout(() => {
              startRecognitionSafely();
            }, 300);
          }
        };

        recognition.onend = () => {
          isRecognitionRunningRef.current = false;
          setIsListening(false);

          // Auto-resume listening hands-free
          if (
            isCallingRef.current &&
            !isSpeakingRef.current &&
            !isMutedRef.current &&
            !isLoadingRef.current
          ) {
            setTimeout(() => {
              startRecognitionSafely();
            }, 250);
          }
        };

        recognitionRef.current = recognition;
      }
    }
  }, [languageMode, startRecognitionSafely, stopRecognitionSafely, handleSendMessage]);

  // Start Voice Call (Completely Autonomous Hands-Free)
  const startVoiceCall = () => {
    setIsCalling(true);
    isCallingRef.current = true;
    setActiveTab("voice");
    setVoiceStatusText("Connecting to Himnova Voice AI Engine...");
    setLiveUserTranscript("");

    setTimeout(() => {
      const welcomeVoice =
        languageMode === "ne"
          ? "नमस्ते! म हिमभोभा एआई भ्वाइस असिस्टेन्ट हुँ। सफ्टवेयर, भ्वाइस कलिङ वा मूल्य बारे सोध्न सक्नुहुन्छ।"
          : languageMode === "hi"
          ? "नमस्ते! मैं हिमभोभा एआई वॉइस असिस्टेंट हूँ। आप सॉफ्टवेयर डेवलपमेंट, एआई कॉलिंग या प्राइसिंग के बारे में कुछ भी पूछ सकते हैं।"
          : "Hello! I am your Himnova AI Voice Assistant. How can I assist your software, voice calling, or cloud project today?";

      hasGreetedCallRef.current = true;
      speakText(welcomeVoice, () => {
        if (isCallingRef.current && !isMutedRef.current) {
          setVoiceStatusText("Listening... Speak your question freely 🎙️");
          setLiveUserTranscript("");
          startRecognitionSafely();
        }
      });
    }, 350);
  };

  const handleCopyText = (id: string, text: string) => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const whatsappUrl = `https://wa.me/9779823009467?text=${encodeURIComponent(
    "Hello Himnova Technologies! I am exploring your software and AI voice calling services on himnovatech.com and would like to connect."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end pointer-events-auto select-none font-sans">
      {/* Interactive Main Popup Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 30 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="mb-3 w-[94vw] sm:w-[440px] h-[610px] max-h-[86vh] overflow-hidden rounded-3xl border border-brand-cyan/35 bg-slate-950/95 shadow-2xl shadow-brand-cyan/20 backdrop-blur-2xl flex flex-col text-slate-100 ring-1 ring-white/10"
          >
            {/* Header with Mode Tabs */}
            <div className="bg-gradient-to-r from-slate-900 via-alpine-900 to-slate-900 border-b border-brand-cyan/20 p-4 pb-3">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-cyan to-blue-600 shadow-md shadow-brand-cyan/25">
                    <Bot className="h-5 w-5 text-slate-950 font-black animate-pulse" />
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm tracking-tight text-white flex items-center gap-1.5 font-display">
                      Himnova AI Assistant
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-brand-cyan/15 border border-brand-cyan/40 text-brand-cyan font-mono font-bold tracking-wider">
                        24/7 LIVE
                      </span>
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium">
                      Dynamic Question Analyzer & Live Voice AI
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  {/* Language Selector Switcher (EN / नेपाली / हिन्दी) */}
                  <button
                    onClick={() => {
                      const nextLang =
                        languageMode === "en" ? "ne" : languageMode === "ne" ? "hi" : "en";
                      setLanguageMode(nextLang);
                    }}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-[11px] font-bold text-brand-cyan transition-all border border-brand-cyan/30 hover:scale-105 active:scale-95 shadow-sm"
                    title="Toggle Language (English / नेपाली / हिन्दी)"
                  >
                    <Globe className="h-3.5 w-3.5 text-brand-cyan" />
                    <span>
                      {languageMode === "en" ? "EN" : languageMode === "ne" ? "नेपाली" : "हिन्दी"}
                    </span>
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-all"
                    aria-label="Close Assistant"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Top Mode Selection Switcher */}
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-white/10 text-xs font-bold">
                <button
                  onClick={() => setActiveTab("chat")}
                  className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg transition-all ${
                    activeTab === "chat"
                      ? "bg-brand-cyan text-slate-950 shadow-md font-extrabold"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>AI Chat</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab("voice");
                    if (!isCalling) startVoiceCall();
                  }}
                  className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg transition-all ${
                    activeTab === "voice"
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md font-extrabold"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>Voice Call</span>
                </button>

                <button
                  onClick={() => setActiveTab("whatsapp")}
                  className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg transition-all ${
                    activeTab === "whatsapp"
                      ? "bg-emerald-500 text-white shadow-md font-extrabold"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 fill-current" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

            {/* TAB 1: AI Chat Interface */}
            {activeTab === "chat" && (
              <div className="flex-1 flex flex-col justify-between overflow-hidden bg-slate-950/90">
                {/* Scrollable Message List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-sm">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-[92%] rounded-2xl p-3.5 leading-relaxed shadow-md relative group ${
                          msg.sender === "user"
                            ? "bg-gradient-to-tr from-cyan-400 to-brand-cyan text-slate-950 font-semibold rounded-tr-none shadow-brand-cyan/20"
                            : "bg-slate-900/95 border border-slate-800 text-slate-200 rounded-tl-none shadow-black/40"
                        }`}
                      >
                        <div
                          className="text-xs sm:text-[13px] leading-relaxed select-text"
                          dangerouslySetInnerHTML={{
                            __html: renderStructuredMarkdown(msg.text),
                          }}
                        />

                        {/* Top action icons on AI messages (Listen Voice / Copy Text) */}
                        {msg.sender === "ai" && (
                          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-800/80 text-[10px] text-slate-400">
                            <button
                              onClick={() => speakText(msg.audioText || msg.text)}
                              className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-brand-cyan transition-all"
                              title="Listen to this answer"
                            >
                              <Volume2 className="h-3 w-3" />
                              <span>Listen</span>
                            </button>

                            <button
                              onClick={() => handleCopyText(msg.id, msg.text)}
                              className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all"
                              title="Copy response"
                            >
                              {copiedId === msg.id ? (
                                <>
                                  <Check className="h-3 w-3 text-emerald-400" />
                                  <span className="text-emerald-400">Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3 w-3" />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </div>

                      <span className="text-[10px] text-slate-500 px-1 mt-1 font-mono">
                        {msg.timestamp}
                      </span>

                      {/* Suggested Action Chips */}
                      {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                          {msg.suggestedActions.map((action, aIdx) => (
                            <button
                              key={aIdx}
                              onClick={() => handleSendMessage(action)}
                              className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-900/90 hover:bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 transition-all hover:scale-105 active:scale-95 text-left shadow-sm"
                            >
                              {action} ↗
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex items-center gap-2.5 p-3.5 max-w-[70%] rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 text-xs shadow-md">
                      <Sparkles className="h-4 w-4 text-brand-cyan animate-spin" />
                      <span className="font-mono text-brand-cyan font-bold">
                        Analyzing question & drafting response...
                      </span>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Chat Input Bar */}
                <div className="p-3 border-t border-slate-800/80 bg-slate-900/90 backdrop-blur-md">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage();
                    }}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="text"
                      placeholder={
                        languageMode === "ne"
                          ? "तपाईंको प्रश्न यहाँ लेख्नुहोस्..."
                          : languageMode === "hi"
                          ? "अपना प्रश्न यहाँ लिखें..."
                          : "Type your question here (pricing, features, delivery)..."
                      }
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      disabled={isLoading}
                      className="flex-1 rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan shadow-inner"
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !inputValue.trim()}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-cyan text-slate-950 font-bold hover:brightness-110 active:scale-95 disabled:opacity-40 transition-all shadow-md shadow-brand-cyan/20"
                      aria-label="Send message"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* TAB 2: Live AI Voice Calling Agent (Continuous Hands-Free Conversation with Auto-Hangup) */}
            {activeTab === "voice" && (
              <div className="flex-1 flex flex-col justify-between p-6 bg-gradient-to-b from-slate-950 via-alpine-950 to-slate-950 relative overflow-hidden">
                {/* Glowing Ambient Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />

                {/* Top Call Info */}
                <div className="text-center space-y-2 relative z-10 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                    Hands-Free Voice Session • {formatTimer(callDuration)}
                  </span>
                  <h4 className="text-base font-extrabold text-white font-display flex items-center justify-center gap-2">
                    <span>Himnova Autonomous Voice AI</span>
                    <Radio className="h-4 w-4 text-brand-cyan animate-pulse" />
                  </h4>
                  <p className="text-xs text-slate-300 min-h-[38px] px-4 font-medium transition-all">
                    {voiceStatusText}
                  </p>
                </div>

                {/* Live Transcript / Hearing Bubble */}
                {liveUserTranscript && (
                  <div className="relative z-10 px-4 py-2 my-2 rounded-2xl bg-cyan-950/40 border border-cyan-400/30 text-cyan-200 text-xs text-center backdrop-blur-md animate-fade-in shadow-md">
                    <span className="font-mono font-bold text-brand-cyan block text-[10px] uppercase">Hearing Question</span>
                    &ldquo;{liveUserTranscript}&rdquo;
                  </div>
                )}

                {/* Visual Animated Equalizer Waves */}
                <div className="flex flex-col items-center justify-center my-auto py-3 relative z-10">
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border-2 border-brand-cyan/40 shadow-2xl shadow-cyan-500/30">
                    {isSpeaking || isListening ? (
                      <div className="flex items-center gap-1.5 h-12">
                        {[0.4, 0.9, 0.6, 1.0, 0.7, 0.4, 0.8].map((scale, i) => (
                          <motion.span
                            key={i}
                            animate={{ scaleY: [0.3, scale, 0.3] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.08 }}
                            className="w-1.5 rounded-full bg-gradient-to-t from-brand-cyan to-sky-400"
                            style={{ height: "100%" }}
                          />
                        ))}
                      </div>
                    ) : (
                      <Bot className="h-12 w-12 text-brand-cyan" />
                    )}
                  </div>

                  <p className="text-[11px] font-mono text-slate-400 mt-4 text-center">
                    Speak questions freely • Say &quot;Thank you / Bye&quot; to end call
                  </p>
                </div>

                {/* Bottom Call Controls */}
                <div className="flex items-center justify-center gap-4 relative z-10 pb-2">
                  <button
                    onClick={() => {
                      setIsMuted(!isMuted);
                      if (isMuted) {
                        setVoiceStatusText("Microphone unmuted");
                        startRecognitionSafely();
                      } else {
                        setVoiceStatusText("Microphone muted");
                        stopRecognitionSafely();
                      }
                    }}
                    className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all ${
                      isMuted
                        ? "bg-red-500/20 border-red-500/40 text-red-400"
                        : "bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800"
                    }`}
                    title={isMuted ? "Unmute Mic" : "Mute Mic"}
                  >
                    {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                  </button>

                  <button
                    onClick={() => setSpeakerEnabled(!speakerEnabled)}
                    className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all ${
                      !speakerEnabled
                        ? "bg-yellow-500/20 border-yellow-500/40 text-yellow-400"
                        : "bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800"
                    }`}
                    title={speakerEnabled ? "Mute Speaker" : "Unmute Speaker"}
                  >
                    {speakerEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                  </button>

                  <button
                    onClick={endVoiceCall}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/30 hover:bg-red-500 active:scale-95 transition-all"
                    title="End Call"
                  >
                    <PhoneOff className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}

            {/* TAB 3: WhatsApp Direct Line */}
            {activeTab === "whatsapp" && (
              <div className="flex-1 flex flex-col justify-between p-6 bg-slate-950 text-slate-200">
                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4 space-y-2.5 shadow-md">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                      <WhatsAppIcon className="h-4 w-4 fill-current" />
                      <span>Official Direct WhatsApp Desk</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Prefer direct human chat with our lead architects? Connect instantly with **Er. Sushil Panthi** and the engineering leadership team on WhatsApp.
                    </p>
                    <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400 font-mono">
                      <Clock className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Typical response time: &lt; 15 mins</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-400">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Instant Quotations & Architecture Proposals</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Voice AI Calling Live Walkthroughs</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>24/7 Priority Emergency Support Triage</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <WhatsAppIcon className="h-5 w-5 fill-white" />
                    <span>Open WhatsApp Chat</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 text-center font-mono">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Official Verified Number: +977 9823009467</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Global Status Footnote */}
            <div className="px-4 py-2 border-t border-slate-900 bg-slate-950 text-[10px] text-slate-500 flex items-center justify-between font-mono">
              <span>Himnova Dynamic Neural Engine v5.0</span>
              <span>Kathmandu, Nepal</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen && activeTab === "voice" && !isCalling) {
            startVoiceCall();
          }
        }}
        className={`group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full shadow-2xl transition-all duration-300 focus:outline-none ${
          isOpen
            ? "bg-slate-900 text-white border-2 border-brand-cyan shadow-brand-cyan/30"
            : "bg-gradient-to-tr from-brand-cyan via-sky-500 to-blue-600 text-slate-950 shadow-brand-cyan/40 hover:shadow-brand-cyan/60"
        }`}
        aria-label="Toggle Himnova AI Assistant"
      >
        {/* Animated Neon Pulse Halo */}
        {!isOpen && (
          <>
            <span className="absolute -inset-1 rounded-full bg-brand-cyan/30 blur-md animate-ping pointer-events-none" />
            <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-brand-cyan/40 via-emerald-400/30 to-blue-500/40 blur-xl opacity-75 animate-pulse pointer-events-none" />
          </>
        )}

        {isOpen ? (
          <X className="h-6 w-6 text-brand-cyan" />
        ) : (
          <div className="relative flex items-center justify-center">
            <Bot className="h-7 w-7 sm:h-8 sm:w-8 text-slate-950" />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-slate-950" />
            </span>
          </div>
        )}
      </motion.button>
    </div>
  );
};

/**
 * Premium structured Markdown HTML renderer supporting headers, bullet points,
 * bold highlights, prices, and code tags with clean glassmorphic styling.
 */
function renderStructuredMarkdown(text: string): string {
  const lines = text.split("\n");
  const processedLines = lines.map((line) => {
    let l = line;

    // Headers
    if (l.startsWith("### ")) {
      return `<h4 class="font-bold text-[13px] sm:text-sm text-brand-cyan mt-2 mb-1">${l.replace("### ", "")}</h4>`;
    }
    if (l.startsWith("## ")) {
      return `<h3 class="font-extrabold text-sm sm:text-base text-white mt-2.5 mb-1.5 border-b border-brand-cyan/20 pb-1">${l.replace("## ", "")}</h3>`;
    }

    // Bullet points
    if (l.startsWith("- ") || l.startsWith("• ")) {
      const content = l.replace(/^[-•]\s*/, "");
      return `<div class="flex items-start gap-1.5 my-1"><span class="text-brand-cyan font-bold text-xs">•</span><span>${content}</span></div>`;
    }

    // Numbered lists
    if (/^\d+\.\s/.test(l)) {
      const numMatch = l.match(/^(\d+)\.\s*(.*)/);
      if (numMatch) {
        return `<div class="flex items-start gap-1.5 my-1"><span class="font-mono text-[10px] font-bold px-1.5 py-0.2 rounded bg-brand-cyan/20 text-brand-cyan shrink-0">${numMatch[1]}</span><span>${numMatch[2]}</span></div>`;
      }
    }

    return l;
  });

  let html = processedLines.join("<br/>");

  // Format Bold, Italics, Code tags
  html = html
    .replace(/\*\*(.*?)\*\*/g, "<strong class='text-white font-semibold'>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em class='text-slate-300 italic'>$1</em>")
    .replace(/`([^`]+)`/g, "<code class='bg-slate-800 text-brand-cyan px-1.5 py-0.5 rounded font-mono text-[11px] border border-slate-700'>$1</code>")
    .replace(/(<br\/>){3,}/g, "<br/><br/>");

  return html;
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
