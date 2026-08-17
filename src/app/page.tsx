import React from "react";
import { HeroModule } from "@/modules/HeroModule";
import { VisionMission } from "@/modules/VisionMission";
import { ServicesModule } from "@/modules/ServicesModule";
import { ProjectsModule } from "@/modules/ProjectsModule";
import { DirectorMessage } from "@/modules/DirectorMessage";
import { CareersModule } from "@/modules/CareersModule";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { siteData } from "@/config/siteData";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroModule />

      {/* 2. Vision & Mission Pillars */}
      <VisionMission />

      {/* 3. 14 Specialized IT Services */}
      <ServicesModule />

      {/* 4. Projects We've Delivered */}
      <ProjectsModule />

      {/* 5. Executive Director Statement */}
      <DirectorMessage />

      {/* 6. Careers & Openings Matrix */}
      <CareersModule />

      {/* 7. High-Impact Contact CTA Banner */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-alpine-950 to-alpine-900 border-t border-white/10">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Badge variant="cyan">Start Your Transformation</Badge>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
              Ready to Build the Next Era of Cloud Intelligence?
            </h2>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Partner with Himnova Technologies for zero-downtime cloud migration, agentic AI integration, and enterprise software architecture.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                  Schedule Enterprise Consultation
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline">
                  Browse Delivered Projects
                </Button>
              </Link>
            </div>

            {/* Quick Contact Info Pills */}
            <div className="pt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-cyan" />
                {siteData.company.headquarters.city}, {siteData.company.headquarters.country}
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-cyan" />
                {siteData.company.contact.email}
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-cyan" />
                {siteData.company.contact.phonePrimary}
              </span>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
