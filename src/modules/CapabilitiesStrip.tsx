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

function CapabilityCard({
  label,
  metric,
  unit,
  iconName,
  index,
}: {
  label: string;
  metric: string;
  unit: string;
  iconName: keyof typeof iconMap;
  index: number;
}) {
  const Icon = iconMap[iconName] || Cloud;

  return (
    <div
      className="flex items-center gap-4 mx-3 px-6 py-4 rounded-2xl shrink-0
        bg-white border border-slate-200 shadow-md shadow-slate-200/50
        dark:bg-alpine-900/85 dark:border-white/10 dark:shadow-black/50
        backdrop-blur-md min-w-[280px] sm:min-w-[320px] transition-all hover:scale-105"
    >
      <div
        className="rounded-xl p-3 bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan dark:text-brand-cyan animate-icon-pulse shrink-0"
        style={{ animationDelay: `${index * 0.25}s` }}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{label}</p>
        <p className="text-lg sm:text-xl font-extrabold font-display text-brand-cyan flex items-baseline gap-1 mt-0.5">
          <span>{metric}</span>
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
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
      <ParallaxBackground
        speed={0.2}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12),transparent_60%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
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

      <div className="relative z-10 space-y-5">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <motion.div
            className="marquee-track animate-marquee hover:[animation-play-state:paused]"
            aria-hidden
          >
            {row1.map((cap, i) => (
              <CapabilityCard key={`r1-${cap.label}-${i}`} {...cap} index={i} iconName={cap.iconName} />
            ))}
          </motion.div>
        </div>

        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <motion.div
            className="marquee-track animate-marquee-reverse hover:[animation-play-state:paused]"
            aria-hidden
          >
            {row2.map((cap, i) => (
              <CapabilityCard key={`r2-${cap.label}-${i}`} {...cap} index={i} iconName={cap.iconName} />
            ))}
          </motion.div>
        </div>
      </div>

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
