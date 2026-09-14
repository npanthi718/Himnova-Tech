import React from "react";
import { ServicesModule } from "@/modules/ServicesModule";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Himnova IT Services | Custom Software, AI Voice Agents & Cloud",
  description:
    "Himnova Technologies (himnovatech.com) offers 15 specialized IT services: bilingual AI voice calling agents, custom software, cloud DevOps, web platforms, mobile apps, and 24/7 support.",
  keywords: [
    "Himnova",
    "Himnova Technologies",
    "Himnova IT services",
    "AI Voice Calling Agents Nepal",
    "AI Calling Agent Kathmandu",
    "Autonomous AI Agents",
    "IT Services Nepal",
    "Software Development Services",
    "Custom Software Solutions",
    "Cloud DevOps Engineering",
    "Web Application Development",
    "Mobile App Development",
    "Agentic AI Services",
  ],
  alternates: {
    canonical: "https://www.himnovatech.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-24 space-y-12">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <Badge variant="cyan">Service Catalog</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
          Enterprise Cloud & AI Solutions
        </h1>
        <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          From zero-downtime Kubernetes deployments to custom RAG pipelines and React Native applications, we engineer resilient software architectures for modern tech leaders.
        </p>
      </section>

      <ServicesModule />
    </div>
  );
}
