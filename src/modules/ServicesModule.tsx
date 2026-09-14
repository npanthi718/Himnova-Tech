"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteData, ServiceItem } from "@/config/siteData";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
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
  CheckCircle2,
  ArrowRight,
  Target,
  Zap,
  Bot,
  Cpu,
} from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/animations/RevealOnScroll";
import { ParallaxBackground } from "@/components/animations/ParallaxLayer";

const iconMap: Record<string, React.ElementType> = {
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
  Bot,
  Cpu,
  Zap,
};

interface ServicesModuleProps {
  limit?: number;
  showViewAll?: boolean;
}

export const ServicesModule: React.FC<ServicesModuleProps> = ({ limit, showViewAll }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = ["All Services", "AI & Voice Agents", "Software & Web", "Cloud & Infrastructure", "Marketing & SEO", "Support & Advisory"];
  const allServices = siteData.services;

  const categoryMap: Record<string, string[]> = {
    "All Services": [],
    "AI & Voice Agents": ["ai-agents-voice-calling"],
    "Software & Web": ["custom-software", "web-apps-platforms", "website-design-dev", "mobile-app-dev", "subscription-software"],
    "Cloud & Infrastructure": ["domain-hosting-services", "deployment-cloud-support", "annual-subscription-maintenance"],
    "Marketing & SEO": ["digital-marketing-branding", "content-creation-mgmt", "social-media-management", "seo-analytics-services"],
    "Support & Advisory": ["it-support-maintenance", "consulting-advisory"],
  };

  const filteredServices =
    selectedCategory === "All Services"
      ? allServices
      : allServices.filter((item: ServiceItem) => {
          const matchedIds = categoryMap[selectedCategory] || [];
          return matchedIds.includes(item.id) || item.title.toLowerCase().includes(selectedCategory.toLowerCase());
        });

  const displayedServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-slate-50 dark:bg-alpine-950 border-t border-slate-200 dark:border-white/5">
      {/* Background Glow */}
      <ParallaxBackground
        speed={0.1}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-brand-cyan/10 rounded-full blur-[160px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-12">
          <Badge variant="cyan" className="uppercase tracking-widest px-4 py-1">
            EXPERT IT & ENGINEERING SERVICES
          </Badge>
          <h2 className="section-heading">
            Production-Grade <span className="text-brand-cyan">Software & Cloud</span> Execution
          </h2>
          <p className="section-subtext">
            15 core technology service lines engineered for enterprise scale, zero-downtime performance, and transparent Nepalese market pricing.
          </p>
        </RevealOnScroll>

        {/* Filter Categories */}
        {!limit && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat: string) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-brand-cyan text-white shadow-lg shadow-brand-cyan/25 scale-105"
                    : "bg-white text-slate-700 border border-slate-300 hover:border-brand-cyan/50 dark:bg-alpine-900/80 dark:text-slate-300 dark:border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Services Grid */}
        <StaggerContainer key={selectedCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8" stagger={0.06}>
          {displayedServices.map((service: ServiceItem) => {
            const IconComponent = iconMap[service.iconName] || Cloud;
            return (
              <StaggerItem key={service.id}>
                <Card
                  onClick={() => setSelectedService(service)}
                  className="h-full p-6 sm:p-7 flex flex-col justify-between cursor-pointer group hover:border-brand-cyan/60 hover:shadow-xl hover:shadow-brand-cyan/10 transition-all duration-300"
                >
                  <div className="space-y-4">
                    
                    {/* Top Row: Icon & Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="rounded-xl bg-brand-cyan/15 border border-brand-cyan/30 p-3 text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="text-slate-400 group-hover:text-brand-cyan group-hover:translate-x-1 transition-all">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>

                    {/* Service Title */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold text-brand-cyan mt-1">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* Scope & SLA Indicator Box */}
                    <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-alpine-850/90 border border-slate-200 dark:border-white/5 space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        <span>Delivery SLA</span>
                        <span className="text-slate-900 dark:text-white font-bold">{service.priceRange.turnaround}</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 pt-0.5">
                        <span>Model: <strong>{service.priceRange.model}</strong></span>
                        <span className="text-brand-cyan font-bold flex items-center gap-1">
                          <Sparkles className="h-3 w-3" /> View Rate Card
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {service.fullDetails}
                    </p>

                  </div>

                  {/* Footer Bar */}
                  <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-brand-cyan transition-colors">
                    <span>Explore Scope & Rate Details</span>
                    <ArrowRight className="h-3.5 w-3.5 text-brand-cyan group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* View All Button on Homepage Teaser */}
        {(showViewAll || limit) && (
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Explore All 15 IT & Engineering Services
              </Button>
            </Link>
          </div>
        )}

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
        >
          <div className="space-y-6">
            
            {/* Modal Header & Transparent Rate Card */}
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-alpine-850 border border-slate-200 dark:border-white/10 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Badge variant="cyan">{selectedService.shortDescription}</Badge>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Turnaround SLA: <span className="font-bold text-slate-900 dark:text-white">{selectedService.priceRange.turnaround}</span>
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pt-1">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                    {selectedService.priceRange.usd}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-brand-cyan ml-2">
                    ({selectedService.priceRange.npr})
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  Engagement Model: {selectedService.priceRange.model}
                </span>
              </div>

              <div className="border-t border-brand-cyan/20 pt-2 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                <span>Metric: <strong className="text-slate-900 dark:text-white">{selectedService.metrics}</strong></span>
                <span className="font-medium text-brand-cyan">Commercial Baseline @ 155/USD</span>
              </div>
            </div>

            {/* Complete Details Paragraph */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Detailed Technical Overview
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedService.fullDetails}
              </p>
            </div>

            {/* Strategic Focus & Value Created */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-alpine-850/80 border border-slate-200 dark:border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-cyan">
                  <Target className="h-4 w-4" />
                  <span>Strategic Focus</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  {selectedService.focusArea}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-100 dark:bg-alpine-850/80 border border-slate-200 dark:border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-500">
                  <Zap className="h-4 w-4" />
                  <span>Value Created</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
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
                {selectedService.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-100 dark:bg-alpine-850/80 border border-slate-200 dark:border-white/5">
                    <CheckCircle2 className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-800 dark:text-slate-200 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope & Agreement Disclaimer Notice */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1 text-xs text-slate-700 dark:text-slate-300">
              <span className="font-bold text-amber-500 dark:text-amber-400 flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4" />
                Custom Scope & Mutual Bilateral Agreement
              </span>
              <p className="text-[11px] leading-normal text-slate-600 dark:text-slate-400">
                Turnaround SLA and price ranges represent baseline turnkey benchmarks. Final contractual investments are calculated based on your custom Statement of Work (SOW), technical complexity, and bilateral agreement to guarantee 100% satisfaction.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
              <Button
                variant="secondary"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto"
              >
                Close
              </Button>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  className="w-full sm:w-auto"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Request Proposal & Custom Quote
                </Button>
              </Link>
            </div>

          </div>
        </Modal>
      )}
    </section>
  );
};
