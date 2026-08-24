"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { nicheProducts, NicheProduct } from "@/data/nicheProducts";
import { VisualProductGraphic } from "@/components/ui/VisualProductGraphic";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import {
  ShoppingCart,
  Hotel,
  Utensils,
  Stethoscope,
  Building2,
  GraduationCap,
  Compass,
  Truck,
  Dumbbell,
  Banknote,
  Boxes,
  Wrench,
  Bot,
  Car,
  Briefcase,
  Pill,
  Ticket,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/animations/RevealOnScroll";
import { ParallaxBackground } from "@/components/animations/ParallaxLayer";

const iconMap = {
  ShoppingCart,
  Hotel,
  Utensils,
  Stethoscope,
  Building2,
  GraduationCap,
  Compass,
  Truck,
  Dumbbell,
  Banknote,
  Boxes,
  Wrench,
  Bot,
  Car,
  Briefcase,
  Pill,
  Ticket,
  HeartHandshake,
};

export const NicheProductsModule: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Solutions");
  const [selectedProduct, setSelectedProduct] = useState<NicheProduct | null>(null);

  const categories = [
    "All Solutions",
    "E-Commerce & SaaS",
    "Hospitality & Food",
    "Healthcare & Wellness",
    "Enterprise & ERP",
    "FinTech & Real Estate",
    "EdTech & Services",
  ];

  const filteredProducts =
    selectedCategory === "All Solutions"
      ? nicheProducts
      : nicheProducts.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="solutions"
      className="section-padding relative overflow-hidden bg-slate-50 dark:bg-alpine-950 border-t border-slate-200 dark:border-white/5"
    >
      <ParallaxBackground
        speed={0.15}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-cyan/10 rounded-full blur-[150px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto space-y-5 mb-12 sm:mb-14">
          <Badge variant="cyan" className="uppercase tracking-widest px-4 py-1">
            READY-TO-DEPLOY SOLUTIONS
          </Badge>

          <h2 className="section-heading">
            Turnkey Products & <span className="text-brand-cyan">Market Pricing</span>
          </h2>

          <p className="section-subtext">
            Battle-tested software systems with transparent pricing and fast turnaround. From multi-vendor e-commerce and hospital EHRs to hotel PMS and fleet logistics — tailored to your exact brand.
          </p>
        </RevealOnScroll>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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

        {/* Products Grid */}
        <StaggerContainer key={selectedCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7" stagger={0.06}>
          {filteredProducts.map((product) => {
            const IconComponent = iconMap[product.iconName] || Boxes;
            return (
              <StaggerItem key={product.id}>
                <Card
                  onClick={() => setSelectedProduct(product)}
                  className="h-full flex flex-col justify-between cursor-pointer group hover:border-brand-cyan/60 hover:shadow-xl hover:shadow-brand-cyan/10 transition-all duration-300 overflow-hidden"
                >
                  <div>
                    {/* Visual UI Graphic Preview */}
                    <div className="p-2 bg-slate-900 border-b border-slate-200 dark:border-white/10">
                      <VisualProductGraphic
                        title={product.title}
                        category={product.category}
                        iconName={product.iconName}
                        type="solution"
                        badge={product.badge}
                        metricsText={product.deliveryTime}
                      />
                    </div>

                    <div className="p-5 sm:p-6 space-y-4">
                      {/* Product Title & Tagline */}
                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="rounded-lg bg-brand-cyan/15 border border-brand-cyan/30 p-2 text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-300">
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                            Himnova Turnkey Solution
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-snug">
                          {product.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                          {product.tagline}
                        </p>
                      </div>

                      {/* Pricing Box */}
                      <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-alpine-850/90 border border-slate-200 dark:border-white/5 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                            Standard Package Rate
                          </span>
                          <span className="flex items-center gap-1 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                            <Clock className="h-3 w-3 text-brand-cyan" />
                            {product.deliveryTime}
                          </span>
                        </div>
                        <div className="flex items-baseline justify-between pt-0.5">
                          <span className="text-lg sm:text-xl font-extrabold font-display text-slate-900 dark:text-white">
                            {product.priceRange.usd}
                          </span>
                          <span className="text-[11px] font-bold text-brand-cyan">
                            {product.priceRange.localEstimated}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 pt-0.5 font-medium">
                          <span>Model: {product.priceRange.model}</span>
                          <span className="font-semibold text-brand-cyan/90">@ 155/USD</span>
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className="space-y-2 pt-1">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Included Key Highlights
                        </p>
                        <ul className="space-y-1.5">
                          {product.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="h-3.5 w-3.5 text-brand-cyan shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>

                  {/* Footer Card Action */}
                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-bold text-brand-cyan group-hover:translate-x-0.5 transition-all">
                    <span>View Architecture & Deliverables</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>

      {/* Product Deep-Dive Modal */}
      {selectedProduct && (
        <Modal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct.title}
          maxWidth="lg"
        >
          <div className="space-y-6">
            
            {/* Modal SVG Image Banner */}
            <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-xl">
              <img
                src={selectedProduct.imagePlaceholder}
                alt={selectedProduct.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Header Callout with Pricing */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-brand-cyan/15 to-brand-teal/10 border border-brand-cyan/30 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Badge variant="cyan">{selectedProduct.category}</Badge>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <Clock className="h-4 w-4 text-brand-cyan" />
                  Turnaround: <span className="font-bold text-slate-900 dark:text-white">{selectedProduct.deliveryTime}</span>
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pt-1">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                    {selectedProduct.priceRange.usd}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-brand-cyan ml-2">
                    ({selectedProduct.priceRange.localEstimated})
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {selectedProduct.priceRange.model}
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 border-t border-brand-cyan/20 pt-2">
                💵 {selectedProduct.priceRange.conversionRateNote}
              </p>
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                System Overview
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>

            {/* Target Industry */}
            <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-alpine-850/80 border border-slate-200 dark:border-white/5 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                Target Industries & Clients
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                {selectedProduct.targetMarket}
              </p>
            </div>

            {/* Architectural Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Layers className="h-4 w-4 text-brand-cyan" />
                Technical Architecture & Foundation
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-100 dark:bg-alpine-850/60 p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
                {selectedProduct.fullArchitecture}
              </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Functional Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProduct.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-100 dark:bg-alpine-850/70 border border-slate-200 dark:border-white/5 text-xs text-slate-800 dark:text-slate-200 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What is Included */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                What is Included in This Solution Package
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProduct.included.map((inc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-800 dark:text-slate-200 font-medium">
                    <Zap className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What is NOT Included (Scope Exclusions) */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400 flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-rose-500" />
                What is NOT Included (Out-of-Pocket / Client Responsibilities)
              </h4>
              <div className="space-y-2">
                {selectedProduct.excluded.map((exc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-rose-500/5 border border-rose-500/20 text-xs text-slate-700 dark:text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <span>{exc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Add-Ons */}
            {selectedProduct.addOns && selectedProduct.addOns.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cyan flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-brand-cyan" />
                  Available Add-Ons & Custom Upgrades
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.addOns.map((addon, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30"
                    >
                      + {addon}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 text-center sm:text-left">
                Need customizations or a tailored walkthrough demo?
              </span>
              <Link href={`/contact?product=${encodeURIComponent(selectedProduct.id)}`} className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto" icon={<ArrowRight className="h-4 w-4" />}>
                  Request Custom Quote & Demo
                </Button>
              </Link>
            </div>

          </div>
        </Modal>
      )}
    </section>
  );
};
