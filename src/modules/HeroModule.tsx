"use client";

import React from "react";
import Link from "next/link";
import { siteData } from "@/config/siteData";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Sparkles, Shield, Cpu, Cloud, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export const HeroModule: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-hero-glow">
      {/* Background Animated Particle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Ambient Glowing Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-cyan/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center"
            >
              <Badge variant="cyan" className="py-1.5 px-4 shadow-lg shadow-brand-cyan/10">
                <Sparkles className="h-3.5 w-3.5 text-brand-cyan animate-pulse" />
                <span>{siteData.company.motto}</span>
              </Badge>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.1]"
            >
              Architecting <br />
              <span className="bg-gradient-to-r from-brand-cyan via-teal-300 to-sky-400 bg-clip-text text-transparent">
                Cloud Intelligence
              </span>{" "}
              & AI Pipelines
            </motion.h1>

            {/* Sub-text Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-slate-400 dark:text-slate-400 light:text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {siteData.company.tagline}
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link href="/services" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto" icon={<ArrowRight className="h-4 w-4" />}>
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Schedule Technical Audit
                </Button>
              </Link>
            </motion.div>

            {/* Key Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10"
            >
              {siteData.company.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {stat.label} <span className="text-brand-cyan font-semibold">({stat.suffix})</span>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Vercel/Linear Style Visual Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl border border-white/15 dark:bg-alpine-900/90 light:bg-white p-6 shadow-2xl backdrop-blur-2xl overflow-hidden group">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="h-3.5 w-3.5 text-brand-cyan" />
                  <span>himnova-cloud-v2.4.0</span>
                </div>
              </div>

              {/* Console / Pipeline Mock Content */}
              <div className="py-6 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-alpine-850/80 border border-white/5">
                  <div className="flex items-center gap-3">
                    <Cloud className="h-5 w-5 text-brand-cyan animate-bounce-slow" />
                    <div>
                      <p className="font-semibold text-white">Kubernetes Autoscaler</p>
                      <p className="text-[10px] text-slate-400">AWS us-east-1 & Kathmandu Node</p>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                    ACTIVE
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-alpine-850/80 border border-white/5">
                  <div className="flex items-center gap-3">
                    <Cpu className="h-5 w-5 text-purple-400" />
                    <div>
                      <p className="font-semibold text-white">LangGraph Agent Pipeline</p>
                      <p className="text-[10px] text-slate-400">RAG Vector Search (Qdrant)</p>
                    </div>
                  </div>
                  <span className="text-brand-cyan font-semibold px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/30">
                    98.4% ACC
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-alpine-850/80 border border-white/5">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-cyan-400" />
                    <div>
                      <p className="font-semibold text-white">Zero-Trust Audit Engine</p>
                      <p className="text-[10px] text-slate-400">SOC2 Compliance Monitor</p>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                    SECURED
                  </span>
                </div>
              </div>

              {/* Glowing Bottom Status */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-brand-cyan/20 to-brand-teal/10 border border-brand-cyan/30 flex items-center justify-between">
                <span className="text-xs font-semibold text-white">Global Cloud Export Hub</span>
                <span className="text-[11px] font-bold text-brand-cyan tracking-wider uppercase">Kathmandu, Nepal</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
