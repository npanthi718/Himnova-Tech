"use client";

import React from "react";
import { siteData } from "@/config/siteData";
import { Card } from "@/components/ui/Card";
import { Eye, Target, CheckCircle2 } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/animations/RevealOnScroll";
import { ParallaxBackground } from "@/components/animations/ParallaxLayer";

export const VisionMission: React.FC = () => {
  const { vision, mission } = siteData.visionMission;

  return (
    <section id="about" className="section-padding relative overflow-hidden dark:bg-alpine-950 light:bg-slate-50">
      <ParallaxBackground
        speed={0.12}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.08),transparent_50%)]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll className="text-center max-w-3xl mx-auto space-y-5 mb-14 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
            Enterprise Pillars
          </p>
          <h2 className="section-heading">
            Guided by Purpose, Driven by Precision
          </h2>
          <p className="section-subtext">
            Our strategic direction balances bold global ambition with absolute technical integrity.
          </p>
        </RevealOnScroll>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8" stagger={0.12}>
          <StaggerItem>
            <Card className="h-full p-8 sm:p-10 flex flex-col justify-between border-brand-cyan/20">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3">
                  <div className="rounded-2xl bg-brand-cyan/15 border border-brand-cyan/30 p-3.5 text-brand-cyan">
                    <Eye className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                    {vision.title}
                  </h3>
                </div>

                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg font-medium">
                  &quot;{vision.statement}&quot;
                </p>

                <div className="pt-4 border-t border-white/10 light:border-slate-200 space-y-3">
                  {vision.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="h-full p-8 sm:p-10 flex flex-col justify-between border-brand-teal/20">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3">
                  <div className="rounded-2xl bg-brand-teal/15 border border-brand-teal/30 p-3.5 text-brand-teal">
                    <Target className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                    {mission.title}
                  </h3>
                </div>

                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg font-medium">
                  &quot;{mission.statement}&quot;
                </p>

                <div className="pt-4 border-t border-white/10 light:border-slate-200 space-y-3">
                  {mission.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
