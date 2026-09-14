import React from "react";
import { NicheProductsModule } from "@/modules/NicheProductsModule";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Himnova Solutions | Turnkey Software Products & Voice AI Suite",
  description:
    "Himnova Technologies turnkey products (himnovatech.com): autonomous AI voice calling platform, e-commerce, hotel PMS, restaurant POS, hospital EHR, real estate, and FinTech platforms with transparent pricing.",
  keywords: [
    "Himnova",
    "Himnova Technologies",
    "AI Voice Calling Agent Platform",
    "VoxNova AI Agent Nepal",
    "Ready Software Products",
    "Turnkey Web Platforms",
    "E-Commerce SaaS Software",
    "Hotel PMS Software",
    "Hospital EHR Management",
    "Restaurant POS System",
    "Software Pricing Standard",
    "Himnova Solutions",
  ],
  alternates: {
    canonical: "https://www.himnovatech.com/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <div className="pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-24 space-y-12">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <Badge variant="cyan">Ready-Made Software Portfolio</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
          Turnkey Products & Market Pricing
        </h1>
        <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Skip months of custom development. Deploy pre-engineered, highly customizable software systems with standard market rates, clear timelines, and dedicated production support.
        </p>
      </section>

      <NicheProductsModule />
    </div>
  );
}
