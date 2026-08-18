"use client";

import React from "react";
import Image from "next/image";
import { siteData } from "@/config/siteData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Quote, Award, Sparkles } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { ParallaxBackground } from "@/components/animations/ParallaxLayer";

export const DirectorMessage: React.FC = () => {
  const { name, title, avatar, quote, paragraphs } = siteData.directorMessage;

  return (
    <section id="director" className="section-padding relative overflow-hidden dark:bg-alpine-950 light:bg-slate-50">
      <ParallaxBackground
        speed={0.1}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(14,165,233,0.08),transparent_55%)]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <RevealOnScroll direction="right" className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-cyan via-teal-400 to-brand-cobalt opacity-30 blur-xl animate-pulse-slow" />
              
              <Card className="relative p-6 text-center border-brand-cyan/30">
                <div className="relative mx-auto h-64 w-64 rounded-2xl overflow-hidden mb-6 border-2 border-brand-cyan/40 p-1 bg-alpine-950">
                  <Image
                    src={avatar}
                    alt={name}
                    fill
                    sizes="256px"
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                    {name}
                  </h3>
                  <p className="text-xs font-semibold text-brand-cyan uppercase tracking-wider">
                    {title}
                  </p>
                  <div className="pt-3 inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
                    <Award className="h-4 w-4 text-brand-cyan" />
                    <span>Himnova Executive Directorate</span>
                  </div>
                </div>
              </Card>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="left" delay={0.1} className="lg:col-span-7 space-y-6">
            <Badge variant="cyan">Executive Leadership</Badge>

            <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl">
              Message from the Executive Director
            </h2>

            <div className="relative p-6 sm:p-8 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 backdrop-blur-md">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-brand-cyan/20 pointer-events-none" />
              <p className="relative z-10 text-base sm:text-lg font-medium italic text-slate-800 dark:text-slate-200 leading-relaxed pl-6">
                &quot;{quote}&quot;
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-brand-cyan" />
              <span className="text-xs font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                HIMNOVA R&D LABS • KATHMANDU
              </span>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};
