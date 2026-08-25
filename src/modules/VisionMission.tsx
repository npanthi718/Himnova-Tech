"use client";

import React, { useState } from "react";
import { siteData } from "@/config/siteData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Eye,
  Target,
  Gem,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Cpu,
  Sparkles,
  Lock,
  Zap,
  Code2,
  Award,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { ParallaxBackground } from "@/components/animations/ParallaxLayer";

export const VisionMission: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"vision" | "mission" | "values">("vision");
  const { vision, mission } = siteData.visionMission;

  const coreValues = [
    {
      title: "100% Unencumbered Source Code Ownership",
      description: "Upon project completion, clients receive full, unencumbered Git commit history, database schemas, and intellectual property. No obfuscation or code sequestration.",
      icon: Code2,
      badge: "IP Transparency",
    },
    {
      title: "Zero-Trust Security & Data Sovereignty",
      description: "Client datasets are encrypted using AES-256 and TLS 1.3. We never harvest, monetize, or transfer enterprise data to third-party ad networks.",
      icon: Lock,
      badge: "Sovereign Control",
    },
    {
      title: "Himalayan Tech Export Benchmark",
      description: "Rooted in Kathmandu, our R&D labs engineer high-concurrency microservices and agentic AI systems that rival Silicon Valley delivery standards.",
      icon: Globe2,
      badge: "Global Quality",
    },
    {
      title: "99.99% Operational Uptime & 4-Hour Response",
      description: "Production workloads are backed by rigorous Service Level Agreements (SLAs), automated daily offsite snapshots, and 24/7 dedicated engineering triage.",
      icon: Zap,
      badge: "SLA Commitment",
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-slate-50 dark:bg-alpine-950 border-t border-slate-200 dark:border-white/5">
      {/* Background Glow */}
      <ParallaxBackground
        speed={0.12}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-brand-cyan/10 rounded-full blur-[170px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-12">
          <Badge variant="cyan" className="uppercase tracking-widest px-4 py-1">
            ENTERPRISE PILLARS & CORE VALUES
          </Badge>
          <h2 className="section-heading">
            Guided by Purpose, <span className="text-brand-cyan">Engineered for Excellence</span>
          </h2>
          <p className="section-subtext">
            Our strategic vision combines Himalayan engineering talent with global cloud standards. Toggle through our vision, operational mission, and core values.
          </p>
        </RevealOnScroll>

        {/* Interactive Tab Switcher Toggle */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 p-1.5 rounded-2xl bg-slate-200/80 dark:bg-alpine-900/90 border border-slate-300 dark:border-white/10 max-w-2xl mx-auto backdrop-blur-md">
          <button
            onClick={() => setActiveTab("vision")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 ${
              activeTab === "vision"
                ? "bg-brand-cyan text-white shadow-lg shadow-brand-cyan/25 scale-[1.02]"
                : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5"
            }`}
          >
            <Eye className="h-4 w-4" />
            <span>Vision 2030</span>
          </button>

          <button
            onClick={() => setActiveTab("mission")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 ${
              activeTab === "mission"
                ? "bg-brand-teal text-white shadow-lg shadow-brand-teal/25 scale-[1.02]"
                : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5"
            }`}
          >
            <Target className="h-4 w-4" />
            <span>Mission & SLA</span>
          </button>

          <button
            onClick={() => setActiveTab("values")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 ${
              activeTab === "values"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25 scale-[1.02]"
                : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5"
            }`}
          >
            <Gem className="h-4 w-4" />
            <span>Core Values</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === "vision" && (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="p-8 sm:p-12 border-brand-cyan/40 bg-white dark:bg-alpine-900/90 shadow-2xl space-y-8 relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-brand-cyan/15 border border-brand-cyan/30 p-3.5 text-brand-cyan">
                      <Eye className="h-8 w-8" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider">
                        STRATEGIC DIRECTION
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                        {vision.title}
                      </h3>
                    </div>
                  </div>
                  <span className="px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide rounded-full bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
                    2030 Target
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-slate-900 dark:text-white">
                  <p className="text-base sm:text-xl font-medium leading-relaxed italic text-slate-800 dark:text-slate-200">
                    &quot;{vision.statement}&quot;
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Strategic Execution Benchmarks
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {vision.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-start gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-brand-cyan shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2 text-brand-cyan font-bold">
                    <Globe2 className="h-4 w-4" /> Global Tech Export Standard
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-emerald-400" /> Kathmandu R&D Innovation Hub
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {activeTab === "mission" && (
            <motion.div
              key="mission"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="p-8 sm:p-12 border-brand-teal/40 bg-white dark:bg-alpine-900/90 shadow-2xl space-y-8 relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-brand-teal/15 border border-brand-teal/30 p-3.5 text-brand-teal">
                      <Target className="h-8 w-8" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-brand-teal uppercase tracking-wider">
                        OPERATIONAL DIRECTIVE
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                        {mission.title}
                      </h3>
                    </div>
                  </div>
                  <span className="px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide rounded-full bg-brand-teal/20 text-brand-teal border border-brand-teal/30">
                    Daily Operational SLA
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-slate-900 dark:text-white">
                  <p className="text-base sm:text-xl font-medium leading-relaxed italic text-slate-800 dark:text-slate-200">
                    &quot;{mission.statement}&quot;
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Daily Engineering Standards
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mission.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-start gap-3"
                      >
                        <ShieldCheck className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2 text-brand-teal font-bold">
                    <Cpu className="h-4 w-4" /> 99.99% Uptime SLA Commitment
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-brand-cyan" /> Zero-Trust Security Standard
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {activeTab === "values" && (
            <motion.div
              key="values"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreValues.map((val, idx) => {
                  const IconComp = val.icon;
                  return (
                    <Card
                      key={idx}
                      className="p-6 sm:p-7 bg-white dark:bg-alpine-900/90 border-slate-200 dark:border-white/10 hover:border-purple-500/50 hover:shadow-xl transition-all space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="rounded-xl bg-purple-500/15 border border-purple-500/30 p-3 text-purple-400">
                          <IconComp className="h-6 w-6" />
                        </div>
                        <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          {val.badge}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold font-display text-slate-900 dark:text-white leading-snug">
                        {val.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {val.description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
