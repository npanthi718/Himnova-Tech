import React from "react";
import { CareersModule } from "@/modules/CareersModule";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Careers & Tech Openings | Himnova Technologies",
  description:
    "Explore open tech careers at Himnova Technologies (www.himnovatech.com): Software Sales, Full-Stack Developers, Marketing Officers, and Engineering Internships.",
  keywords: [
    "Tech Jobs Nepal",
    "Software Developer Careers",
    "IT Engineering Openings",
    "Software Sales Jobs",
    "Marketing Jobs Kathmandu",
  ],
  alternates: {
    canonical: "https://www.himnovatech.com/careers",
  },
};

export default function CareersPage() {
  return (
    <div className="pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-24 space-y-12">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <Badge variant="teal">Join Himnova Labs</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
          Shape the Future of Cloud Intelligence
        </h1>
        <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          We offer competitive compensation, cutting-edge hardware, remote flexibility, and the opportunity to build software used by millions globally.
        </p>
      </section>

      <CareersModule />
    </div>
  );
}
