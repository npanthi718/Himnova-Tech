"use client";

import React from "react";
import Image from "next/image";
import { siteData } from "@/config/siteData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Quote, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const DirectorMessage: React.FC = () => {
  const { name, title, avatar, quote, paragraphs } = siteData.directorMessage;

  return (
    <section id="director" className="py-24 relative overflow-hidden dark:bg-alpine-950 light:bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Avatar Frame & Signature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
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
                  <h3 className="text-2xl font-bold font-display text-white dark:text-white light:text-slate-900">
                    {name}
                  </h3>
                  <p className="text-xs font-semibold text-brand-cyan uppercase tracking-wider">
                    {title}
                  </p>
                  <div className="pt-3 inline-flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <Award className="h-4 w-4 text-brand-cyan" />
                    <span>Himnova Executive Directorate</span>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Right Column: Statement Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <Badge variant="cyan">Executive Leadership</Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white dark:text-white light:text-slate-900">
              Message from the Executive Director
            </h2>

            {/* Quote Callout */}
            <div className="relative p-6 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 backdrop-blur-md">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-brand-cyan/20 pointer-events-none" />
              <p className="relative z-10 text-base sm:text-lg font-medium italic text-slate-200 dark:text-slate-200 light:text-slate-800 leading-relaxed pl-6">
                &quot;{quote}&quot;
              </p>
            </div>

            {/* 3 Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-brand-cyan" />
              <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                HIMNOVA R&D LABS • KATHMANDU
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
