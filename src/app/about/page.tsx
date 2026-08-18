import React from "react";
import { siteData } from "@/config/siteData";
import { VisionMission } from "@/modules/VisionMission";
import { DirectorMessage } from "@/modules/DirectorMessage";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Building2, Globe2, ShieldCheck, Cpu } from "lucide-react";

export const metadata = {
  title: "About Himnova Technologies | Premier IT & Software Engineering Company",
  description:
    "Learn about Himnova Technologies Private Limited (www.himnovatech.com): Enterprise IT company, software development leadership, vision, and engineering pillars.",
  keywords: [
    "About Himnova Technologies",
    "IT Company Kathmandu",
    "Software Engineering Agency",
    "Tech Software Exports",
    "Corporate Profile",
  ],
  alternates: {
    canonical: "https://www.himnovatech.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Header Banner */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <Badge variant="cyan">Corporate Profile</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
          Pioneering Enterprise Cloud Intelligence
        </h1>
        <p className="text-slate-700 dark:text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Himnova Technologies Private Limited is a global software export powerhouse based in Kathmandu, Nepal. We build zero-downtime cloud infrastructure, agentic AI pipelines, and high-concurrency microservices.
        </p>
      </section>

      {/* Pillars Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 space-y-3 border-brand-cyan/20">
            <Building2 className="h-8 w-8 text-brand-cyan" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Kathmandu HQ</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Himnova Tech Park, Level 5, Lazimpat, Kathmandu 44600.
            </p>
          </Card>

          <Card className="p-6 space-y-3 border-brand-teal/20">
            <Globe2 className="h-8 w-8 text-brand-teal" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Global Exports</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Serving enterprise clients across North America, Europe, and Asia-Pacific.
            </p>
          </Card>

          <Card className="p-6 space-y-3 border-purple-400/20">
            <Cpu className="h-8 w-8 text-purple-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Agentic R&D</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Dedicated research team developing autonomous LLM agents and vector RAG pipelines.
            </p>
          </Card>

          <Card className="p-6 space-y-3 border-emerald-400/20">
            <ShieldCheck className="h-8 w-8 text-emerald-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">99.99% Reliability</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              SOC2 Type II compliant engineering standards and SLA guarantees.
            </p>
          </Card>
        </div>
      </section>

      {/* Vision & Mission Module */}
      <VisionMission />

      {/* Director's Statement */}
      <DirectorMessage />

    </div>
  );
}
