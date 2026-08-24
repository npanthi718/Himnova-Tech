"use client";

import React from "react";
import Image from "next/image";
import { siteData } from "@/config/siteData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Quote, Award, Sparkles, ShieldCheck, Cpu, Terminal } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { ParallaxBackground } from "@/components/animations/ParallaxLayer";

export const DirectorMessage: React.FC = () => {
  const { name, title, avatar, quote, paragraphs } = siteData.directorMessage;

  return (
    <section id="director" className="section-padding relative overflow-hidden bg-white dark:bg-alpine-950 border-t border-slate-200 dark:border-white/5">
      {/* Background Radial Glow */}
      <ParallaxBackground
        speed={0.1}
        className="absolute top-1/2 right-10 -translate-y-1/2 w-[700px] h-[350px] bg-brand-cyan/10 rounded-full blur-[160px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
          
          {/* Left Avatar Card */}
          <RevealOnScroll direction="right" className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-cyan via-teal-400 to-brand-cobalt opacity-35 blur-xl animate-pulse-slow" />
              
              <Card className="relative p-6 text-center border-brand-cyan/30 bg-white/90 dark:bg-alpine-900/90 shadow-2xl backdrop-blur-md">
                <div className="relative mx-auto h-64 w-64 rounded-2xl overflow-hidden mb-6 border-2 border-brand-cyan/40 p-1 bg-alpine-950 shadow-inner">
                  <Image
                    src={avatar}
                    alt={name}
                    fill
                    sizes="256px"
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                    {name}
                  </h3>
                  <p className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider">
                    {title}
                  </p>
                  
                  <div className="pt-4 flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-white/10 mt-4">
                    <Award className="h-4 w-4 text-brand-cyan" />
                    <span>Executive Board Chairman & Lead Architect</span>
                  </div>
                </div>
              </Card>
            </div>
          </RevealOnScroll>

          {/* Right Message Content */}
          <RevealOnScroll direction="left" delay={0.1} className="lg:col-span-7 space-y-6">
            <Badge variant="cyan" className="uppercase tracking-widest px-4 py-1">
              EXECUTIVE LEADERSHIP DIRECTIVE
            </Badge>

            <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl">
              Message from the <span className="text-brand-cyan">Executive Director</span>
            </h2>

            {/* Quote Callout Box */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md shadow-sm">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-brand-cyan/20 pointer-events-none" />
              <p className="relative z-10 text-base sm:text-lg font-medium italic text-slate-800 dark:text-slate-200 leading-relaxed pl-6">
                &quot;{quote}&quot;
              </p>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Bottom Footer Badge */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 dark:border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2 text-brand-cyan font-bold">
                <Sparkles className="h-4 w-4" /> HIMNOVA R&D LABS • KATHMANDU
              </div>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="h-4 w-4" /> 100% Enterprise SLA Assurance
              </div>
            </div>

          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};
