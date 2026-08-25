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
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/animations/RevealOnScroll";
import { ParallaxBackground } from "@/components/animations/ParallaxLayer";

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
  const [selectedCategory, setSelectedCategory] = useState<string>("All Services");

  const categories = [
    "All Services",
    "Software & Web",
    "Cloud & Infrastructure",
    "Marketing & SEO",
    "Support & Advisory",
  ];

  const categoryMapping: Record<string, string[]> = {
    "Software & Web": [
      "custom-software",
      "web-apps-platforms",
      "website-design-dev",
      "mobile-app-dev",
    ],
    "Cloud & Infrastructure": [
      "deployment-cloud-support",
      "domain-hosting-services",
    ],
    "Marketing & SEO": [
      "digital-marketing-branding",
      "content-creation-mgmt",
      "social-media-management",
      "seo-analytics-services",
    ],
    "Support & Advisory": [
      "subscription-software",
      "it-support-maintenance",
      "annual-subscription-maintenance",
      "consulting-advisory",
    ],
  };

  const filteredServices =
    selectedCategory === "All Services"
      ? siteData.services
      : siteData.services.filter((s) =>
          categoryMapping[selectedCategory]?.includes(s.id)
        );

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-slate-50 dark:bg-alpine-950 border-t border-slate-200 dark:border-white/5">
      <ParallaxBackground
        speed={0.1}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-cyan/10 rounded-full blur-[160px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll className="text-center max-w-3xl mx-auto space-y-5 mb-10 sm:mb-12">
          <Badge variant="cyan" className="uppercase tracking-widest px-4 py-1">
            WHAT WE DO
          </Badge>
          
          <h2 className="section-heading">
            <span className="text-brand-cyan">14 Specialized</span> IT Services
          </h2>

          <p className="section-subtext">
            From custom software and web platforms to cloud deployment, digital marketing, and 24/7 support — click any service to explore what we deliver, our focus, and the value we create.
          </p>
        </RevealOnScroll>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
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

        <StaggerContainer key={selectedCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8" stagger={0.06}>
          {filteredServices.map((service) => {
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

                    {/* Estimated Rate Box */}
                    <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-alpine-850/90 border border-slate-200 dark:border-white/5 space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        <span>Standard Scope Rate</span>
                        <span className="text-slate-700 dark:text-slate-300 font-bold">{service.priceRange.turnaround}</span>
                      </div>
                      <div className="flex items-baseline justify-between pt-0.5">
                        <span className="text-base sm:text-lg font-extrabold font-display text-slate-900 dark:text-white">
                          {service.priceRange.usd}
                        </span>
                        <span className="text-[11px] font-bold text-brand-cyan">
                          {service.priceRange.npr}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 pt-0.5 font-medium">
                        <span className="line-clamp-1">Model: {service.priceRange.model}</span>
                        <span className="font-semibold text-brand-cyan/90">@ 155/USD</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {service.fullDetails}
                    </p>

                  </div>

                  {/* Footer Bar */}
                  <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-brand-cyan transition-colors">
                    <span>Explore Scope & Quotation</span>
                    <Sparkles className="h-3.5 w-3.5 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Global Commercial Scope & Mutual Satisfaction Agreement Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-100/90 dark:bg-alpine-900/60 border border-slate-200 dark:border-white/10 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide rounded-full bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                  Transparency Guarantee
                </span>
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  Custom Requirement & Mutual Agreement Notice
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                The price ranges and delivery turnaround figures listed above represent standard industry benchmarks for baseline scopes. Actual contractual investments are customized and may be lower or higher depending on your exact system complexity, third-party integrations, data migration volume, and security compliance requirements. All engagements are executed through transparent discovery, mutual bilateral agreement, and signed Statement of Work (SOW) to ensure 100% client satisfaction.
              </p>
            </div>
            <Link href="/contact" className="shrink-0 w-full sm:w-auto">
              <Button size="md" icon={<ArrowRight className="h-4 w-4" />}>
                Discuss Your Scope
              </Button>
            </Link>
          </div>
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
            
            {/* Tagline & Pricing Callout Header */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-cyan/15 to-brand-teal/10 border border-brand-cyan/30 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Badge variant="cyan">{selectedService.shortDescription}</Badge>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Estimated SLA: <span className="font-bold text-slate-900 dark:text-white">{selectedService.priceRange.turnaround}</span>
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
                  Model: {selectedService.priceRange.model}
                </span>
              </div>

              <div className="border-t border-brand-cyan/20 pt-2 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                <span>Metric: <strong className="text-slate-900 dark:text-white">{selectedService.metrics}</strong></span>
                <span className="font-medium text-brand-cyan">Commercial Rate: $1 USD = NPR 155</span>
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
                {selectedService.features.map((feature, idx) => (
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
                Custom Scope & Agreement Policy
              </span>
              <p className="leading-relaxed text-[11px] text-slate-600 dark:text-slate-400">
                The budget range specified above is an estimated baseline for standard enterprise delivery. Final contract values are mutually aligned and may adjust higher or lower following a technical scoping session, ensuring complete satisfaction and transparency before commencement.
              </p>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 text-center sm:text-left">
                Ready to tailor this service to your project requirements?
              </span>
              <Link href={`/contact?service=${encodeURIComponent(selectedService.id)}`} className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto" icon={<ArrowRight className="h-4 w-4" />}>
                  Request Formal Scope & Proposal
                </Button>
              </Link>
            </div>

          </div>
        </Modal>
      )}
    </section>
  );
};
