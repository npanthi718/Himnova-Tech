"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteData, ServiceItem } from "@/config/siteData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
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
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

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

export const ServicesModule: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden dark:bg-alpine-950 light:bg-frost-50">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-cyan/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Matching First Screenshot */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="cyan" className="uppercase tracking-widest px-4 py-1">
            WHAT WE DO
          </Badge>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            <span className="text-brand-cyan">14 Specialized</span> IT Services
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            From custom software and web platforms to cloud deployment, digital marketing, and 24/7 support — click any service to explore what we deliver, our focus, and the value we create.
          </p>
        </div>

        {/* 14 Specialized Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.services.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Cloud;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
              >
                <Card
                  onClick={() => setSelectedService(service)}
                  className="h-full p-6 flex flex-col justify-between cursor-pointer group hover:border-brand-cyan/60 transition-all duration-300"
                >
                  <div className="space-y-4">
                    
                    {/* Top Row: Icon & Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="rounded-xl bg-brand-cyan/10 dark:bg-brand-cyan/15 light:bg-brand-cobalt/10 border border-brand-cyan/30 p-3 text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="text-slate-400 group-hover:text-brand-cyan group-hover:translate-x-1 transition-all">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-snug">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs font-semibold text-brand-cyan dark:text-brand-cyan light:text-brand-cobalt">
                      {service.shortDescription}
                    </p>

                    {/* Detail Snippet */}
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {service.fullDetails}
                    </p>

                  </div>

                  {/* Footer Bar */}
                  <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-bold text-slate-500 group-hover:text-brand-cyan transition-colors">
                    <span>Explore Specifications</span>
                    <Sparkles className="h-3.5 w-3.5 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Service Detail Modal */}
      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
          maxWidth="lg"
        >
          <div className="space-y-6">
            
            {/* Tagline Callout */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-brand-cyan/15 to-brand-teal/10 border border-brand-cyan/30">
              <p className="text-sm font-bold text-brand-cyan dark:text-brand-cyan light:text-brand-cobalt">
                {selectedService.shortDescription}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                SLA Metric: <span className="text-white font-semibold">{selectedService.metrics}</span>
              </p>
            </div>

            {/* Complete Details Paragraph */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Detailed Overview
              </h4>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {selectedService.fullDetails}
              </p>
            </div>

            {/* Strategic Focus & Value Created */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-alpine-850/80 light:bg-slate-100 border border-white/5 light:border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-cyan">
                  <Target className="h-4 w-4" />
                  <span>Strategic Focus</span>
                </div>
                <p className="text-xs text-slate-300 light:text-slate-700 font-medium">
                  {selectedService.focusArea}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-alpine-850/80 light:bg-slate-100 border border-white/5 light:border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <Zap className="h-4 w-4" />
                  <span>Value Created</span>
                </div>
                <p className="text-xs text-slate-300 light:text-slate-700 font-medium">
                  {selectedService.valueCreated}
                </p>
              </div>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Technical Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-alpine-850/80 light:bg-slate-50 border border-white/5 light:border-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 dark:text-slate-200 light:text-slate-800 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/10 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">Want to implement this service for your business?</span>
              <Link href={`/contact?service=${encodeURIComponent(selectedService.id)}`} className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto" icon={<ArrowRight className="h-4 w-4" />}>
                  Request Enterprise Proposal
                </Button>
              </Link>
            </div>

          </div>
        </Modal>
      )}
    </section>
  );
};
