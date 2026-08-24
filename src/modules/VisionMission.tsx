"use client";

import React from "react";
import { siteData } from "@/config/siteData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Eye, Target, CheckCircle2, Globe2, ShieldCheck, Cpu, ArrowUpRight } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/animations/RevealOnScroll";
import { ParallaxBackground } from "@/components/animations/ParallaxLayer";

export const VisionMission: React.FC = () => {
  const { vision, mission } = siteData.visionMission;

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-slate-50 dark:bg-alpine-950 border-t border-slate-200 dark:border-white/5">
      {/* Cybernetic Glow Backdrop */}
      <ParallaxBackground
        speed={0.12}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-brand-cyan/10 rounded-full blur-[170px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <Badge variant="cyan" className="uppercase tracking-widest px-4 py-1">
            INSTITUTIONAL PILLARS & PURPOSE
          </Badge>
          <h2 className="section-heading">
            Guided by Purpose, <span className="text-brand-cyan">Engineered for Precision</span>
          </h2>
          <p className="section-subtext">
            Our strategic direction bridges Himalayan software innovation with Silicon Valley delivery standards — building autonomous, self-healing cloud ecosystems.
          </p>
        </RevealOnScroll>

        {/* Vision & Mission Twin Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8" stagger={0.12}>
          
          {/* Vision Card */}
          <StaggerItem>
            <Card className="h-full p-8 sm:p-10 flex flex-col justify-between border-brand-cyan/30 bg-white dark:bg-alpine-900/90 hover:border-brand-cyan hover:shadow-2xl hover:shadow-brand-cyan/15 transition-all duration-300 relative overflow-hidden group">
              <div className="space-y-6">
                
                {/* Header Badge & Title */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-3">
                    <div className="rounded-2xl bg-brand-cyan/15 border border-brand-cyan/30 p-3.5 text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300">
                      <Eye className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan">
                        NORTH STAR DIRECTION
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                        {vision.title}
                      </h3>
                    </div>
                  </div>
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 font-mono text-xs font-bold text-brand-cyan border border-cyan-500/20">
                    2030 TARGET
                  </span>
                </div>

                {/* Main Vision Statement */}
                <div className="p-5 rounded-2xl bg-slate-100 dark:bg-alpine-850/80 border border-slate-200 dark:border-white/5">
                  <p className="text-slate-800 dark:text-slate-200 text-base sm:text-lg font-medium leading-relaxed italic">
                    &quot;{vision.statement}&quot;
                  </p>
                </div>

                {/* Vision Key Pillars */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Strategic Execution Pillars
                  </p>
                  {vision.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                      <CheckCircle2 className="h-5 w-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-white/10 mt-6 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-brand-cyan font-bold">
                  <Globe2 className="h-4 w-4" /> Global Tech Export Standard
                </span>
                <span>Kathmandu R&D Lab</span>
              </div>
            </Card>
          </StaggerItem>

          {/* Mission Card */}
          <StaggerItem>
            <Card className="h-full p-8 sm:p-10 flex flex-col justify-between border-brand-teal/30 bg-white dark:bg-alpine-900/90 hover:border-brand-teal hover:shadow-2xl hover:shadow-brand-teal/15 transition-all duration-300 relative overflow-hidden group">
              <div className="space-y-6">
                
                {/* Header Badge & Title */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-3">
                    <div className="rounded-2xl bg-brand-teal/15 border border-brand-teal/30 p-3.5 text-brand-teal group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                      <Target className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-teal">
                        OPERATIONAL DIRECTIVE
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                        {mission.title}
                      </h3>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-xs font-bold text-brand-teal border border-emerald-500/20">
                    DAILY COMMITMENT
                  </span>
                </div>

                {/* Main Mission Statement */}
                <div className="p-5 rounded-2xl bg-slate-100 dark:bg-alpine-850/80 border border-slate-200 dark:border-white/5">
                  <p className="text-slate-800 dark:text-slate-200 text-base sm:text-lg font-medium leading-relaxed italic">
                    &quot;{mission.statement}&quot;
                  </p>
                </div>

                {/* Mission Key Pillars */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Operational Execution Standards
                  </p>
                  {mission.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                      <ShieldCheck className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-white/10 mt-6 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-brand-teal font-bold">
                  <Cpu className="h-4 w-4" /> 99.99% Uptime Commitment
                </span>
                <span>Zero-Trust Security</span>
              </div>
            </Card>
          </StaggerItem>

        </StaggerContainer>

      </div>
    </section>
  );
};
