"use client";

import React from "react";
import { siteData } from "@/config/siteData";
import { Card } from "@/components/ui/Card";
import { Eye, Target, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const VisionMission: React.FC = () => {
  const { vision, mission } = siteData.visionMission;

  return (
    <section className="py-24 relative overflow-hidden dark:bg-alpine-950 light:bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
            Enterprise Pillars
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white dark:text-white light:text-slate-900">
            Guided by Purpose, Driven by Precision
          </p>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Our strategic direction balances bold global ambition with absolute technical integrity.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full p-8 sm:p-10 flex flex-col justify-between border-brand-cyan/20">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3">
                  <div className="rounded-2xl bg-brand-cyan/15 border border-brand-cyan/30 p-3.5 text-brand-cyan">
                    <Eye className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white dark:text-white light:text-slate-900">
                    {vision.title}
                  </h3>
                </div>

                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base sm:text-lg font-medium">
                  &quot;{vision.statement}&quot;
                </p>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  {vision.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full p-8 sm:p-10 flex flex-col justify-between border-brand-teal/20">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3">
                  <div className="rounded-2xl bg-brand-teal/15 border border-brand-teal/30 p-3.5 text-brand-teal">
                    <Target className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white dark:text-white light:text-slate-900">
                    {mission.title}
                  </h3>
                </div>

                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base sm:text-lg font-medium">
                  &quot;{mission.statement}&quot;
                </p>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  {mission.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
