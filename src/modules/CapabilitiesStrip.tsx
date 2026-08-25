"use client";

import React from "react";
import { siteData } from "@/config/siteData";
import {
  Code,
  Globe,
  Layout,
  Smartphone,
  CreditCard,
  Megaphone,
  FileText,
  HelpCircle,
  Cloud,
  Server,
  Calendar,
  Share2,
  BarChart3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { ParallaxBackground } from "@/components/animations/ParallaxLayer";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const iconMap = {
  Code,
  Globe,
  Layout,
  Smartphone,
  CreditCard,
  Megaphone,
  FileText,
  HelpCircle,
  Cloud,
  Server,
  Calendar,
  Share2,
  BarChart3,
  ShieldCheck,
};

function CapabilityPill({
  label,
  metric,
  unit,
  iconName,
}: {
  label: string;
  metric: string;
  unit: string;
  iconName: string;
}) {
  const IconComponent = iconMap[iconName as keyof typeof iconMap] || Cloud;

  return (
    <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/90 dark:bg-alpine-900/90 border border-slate-200 dark:border-white/10 shadow-md shadow-slate-200/50 dark:shadow-black/50 backdrop-blur-md shrink-0 hover:border-brand-cyan/60 hover:shadow-xl hover:shadow-brand-cyan/15 transition-all duration-300 group">
      <div className="rounded-xl p-2.5 bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300 shrink-0">
        <IconComponent className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
          {label}
        </p>
        <p className="text-sm sm:text-base font-extrabold font-display text-brand-cyan flex items-baseline gap-1 mt-0.5">
          <span>{metric}</span>
          <span className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400">
            {unit}
          </span>
        </p>
      </div>
    </div>
  );
}

export const CapabilitiesStrip: React.FC = () => {
  const items = siteData.capabilities;
  const row1 = [...items, ...items];
  const row2 = [...items.slice().reverse(), ...items.slice().reverse()];

  return (
    <section className="relative section-padding overflow-hidden bg-slate-50 dark:bg-alpine-950 border-y border-slate-200 dark:border-white/5">
      {/* Background Radial Glow */}
      <ParallaxBackground
        speed={0.2}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-brand-cyan/10 rounded-full blur-[170px] pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <RevealOnScroll className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Enterprise Capabilities</span>
          </div>
          <h2 className="section-heading">
            Built for <span className="text-brand-cyan">Scale</span>, Engineered for Trust
          </h2>
          <p className="section-subtext">
            From cloud infrastructure to AI pipelines — our delivery metrics reflect the precision of a global IT partner.
          </p>
        </RevealOnScroll>
      </div>

      {/* Infinite Horizontal Scrolling Marquee Rows */}
      <div className="relative z-10 space-y-5">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <motion.div
            className="marquee-track animate-marquee hover:[animation-play-state:paused]"
            aria-hidden
          >
            {row1.map((cap, i) => (
              <CapabilityPill key={`r1-${cap.label}-${i}`} {...cap} />
            ))}
          </motion.div>
        </div>

        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <motion.div
            className="marquee-track animate-marquee-reverse hover:[animation-play-state:paused]"
            aria-hidden
          >
            {row2.map((cap, i) => (
              <CapabilityPill key={`r2-${cap.label}-${i}`} {...cap} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Metric Stats Bar */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <RevealOnScroll delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {siteData.company.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel gradient-border p-5 sm:p-6 text-center space-y-1 hover:border-brand-cyan/40 transition-all"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-slate-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {stat.label}
                </p>
                {stat.suffix && (
                  <p className="text-[10px] sm:text-xs font-bold text-brand-cyan uppercase tracking-wider">
                    {stat.suffix}
                  </p>
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
