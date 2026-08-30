"use client";

import React, { useState } from "react";
import Link from "next/link";
import { nicheProducts, NicheProduct } from "@/data/nicheProducts";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { VisualProductGraphic } from "@/components/ui/VisualProductGraphic";
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
  CheckCircle2,
  ArrowRight,
  Clock,
  Zap,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/animations/RevealOnScroll";
import { ParallaxBackground } from "@/components/animations/ParallaxLayer";

const iconMap: Record<string, React.ElementType> = {
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

const categories = [
  "All Products",
  "E-Commerce & SaaS",
  "Hospitality & Food",
  "Healthcare & Wellness",
  "Enterprise & ERP",
  "FinTech & Real Estate",
  "EdTech & Services",
];

interface NicheProductsProps {
  limit?: number;
  showViewAll?: boolean;
}

export const NicheProductsModule: React.FC<NicheProductsProps> = ({ limit, showViewAll }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedProduct, setSelectedProduct] = useState<NicheProduct | null>(null);

  const filteredProducts =
    selectedCategory === "All Products"
      ? nicheProducts
      : nicheProducts.filter((p: NicheProduct) => p.category === selectedCategory);

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <section id="solutions" className="section-padding relative overflow-hidden bg-slate-50 dark:bg-alpine-950 border-t border-slate-200 dark:border-white/5">
      {/* Background Radial Glow */}
      <ParallaxBackground
        speed={0.12}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-brand-cyan/10 rounded-full blur-[170px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-12">
          <Badge variant="cyan" className="uppercase tracking-widest px-4 py-1">
            TURNKEY NICHE PRODUCTS & PLATFORMS
          </Badge>
          <h2 className="section-heading">
            Pre-Built <span className="text-brand-cyan">Industry Solutions</span> Ready to Deploy
          </h2>
          <p className="section-subtext">
            18 specialized software products engineered with production-ready microservices, mobile apps, and transparent Nepalese market pricing.
          </p>
        </RevealOnScroll>

        {/* Filter Pill Buttons */}
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

        {/* Products Grid */}
        <StaggerContainer key={selectedCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7" stagger={0.06}>
          {displayedProducts.map((product: NicheProduct) => {
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
                        badge={product.deliveryTime}
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
                            Himnova Turnkey Platform
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-snug">
                          {product.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                          {product.tagline}
                        </p>
                      </div>

                      {/* Turnkey SLA & Scope Indicator Box */}
                      <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-alpine-850/90 border border-slate-200 dark:border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                          <Clock className="h-4 w-4 text-brand-cyan shrink-0" />
                          <span>Turnaround SLA: <strong className="text-slate-900 dark:text-white">{product.deliveryTime}</strong></span>
                        </div>
                        <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-wider">
                          {product.priceRange.model}
                        </span>
                      </div>

                      {/* Key Highlights */}
                      <div className="space-y-2 pt-1">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Included Key Highlights
                        </p>
                        <ul className="space-y-1.5">
                          {product.keyFeatures.slice(0, 3).map((feat: string, fIdx: number) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="h-3.5 w-3.5 text-brand-cyan shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-5 sm:p-6 pt-0">
                    <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-brand-cyan transition-colors">
                      <span>View Turnkey Specs & Rate Card</span>
                      <ArrowRight className="h-3.5 w-3.5 text-brand-cyan group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* View All Button on Homepage Teaser */}
        {(showViewAll || limit) && (
          <div className="mt-12 text-center">
            <Link href="/solutions">
              <Button size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Explore All 18 Turnkey Niche Products
              </Button>
            </Link>
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <Modal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct.title}
        >
          <div className="space-y-6">
            
            {/* Transparent Rate & Setup SLA Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-100 dark:bg-alpine-850 border border-slate-200 dark:border-white/10 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Badge variant="cyan">{selectedProduct.category}</Badge>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-brand-cyan" />
                  Turnaround SLA: <span className="font-bold text-slate-900 dark:text-white">{selectedProduct.deliveryTime}</span>
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
                  Model: {selectedProduct.priceRange.model}
                </span>
              </div>

              <div className="border-t border-brand-cyan/20 pt-2 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                <span>Deployment Scope: <strong className="text-slate-900 dark:text-white">Full Turnkey Handover</strong></span>
                <span className="font-medium text-brand-cyan">Commercial Rate @ 155/USD</span>
              </div>
            </div>

            {/* Product Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Product Architectural Overview
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>

            {/* Target Audience & Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-alpine-850/80 border border-slate-200 dark:border-white/5 space-y-1">
                <span className="text-[11px] font-bold text-brand-cyan uppercase tracking-wider">
                  Target Business Users
                </span>
                <p className="text-xs text-slate-800 dark:text-slate-200 font-semibold">
                  {selectedProduct.targetMarket}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-100 dark:bg-alpine-850/80 border border-slate-200 dark:border-white/5 space-y-1">
                <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-wider">
                  Core Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedProduct.techStack.map((tech: string, tIdx: number) => (
                    <span key={tIdx} className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Module Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Included Turnkey Modules & Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProduct.keyFeatures.map((feat: string, fIdx: number) => (
                  <div key={fIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-100 dark:bg-alpine-850/80 border border-slate-200 dark:border-white/5">
                    <CheckCircle2 className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-800 dark:text-slate-200 font-medium leading-normal">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Scope Notice */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1 text-xs text-slate-700 dark:text-slate-300">
              <span className="font-bold text-amber-500 dark:text-amber-400 flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4" />
                Custom Scope & Mutual Bilateral Agreement
              </span>
              <p className="text-[11px] leading-normal text-slate-600 dark:text-slate-400">
                Turnaround SLA and price ranges represent baseline turnkey benchmarks. Final contractual investments are calculated based on your custom Statement of Work (SOW), technical complexity, and bilateral agreement to guarantee 100% satisfaction.
              </p>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
              <Button
                variant="secondary"
                onClick={() => setSelectedProduct(null)}
                className="w-full sm:w-auto"
              >
                Close
              </Button>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  className="w-full sm:w-auto"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Schedule Demo & Custom Quote
                </Button>
              </Link>
            </div>

          </div>
        </Modal>
      )}
    </section>
  );
};
