import React from "react";
import { CareersModule } from "@/modules/CareersModule";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Careers & Open Positions | Himnova Technologies",
  description: "Join Himnova Technologies in Kathmandu or remotely. Explore open roles in full-stack engineering, AI/ML research, and product design.",
};

export default function CareersPage() {
  return (
    <div className="pt-28 pb-16 space-y-12">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <Badge variant="teal">Join Himnova Labs</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white">
          Shape the Future of Cloud Intelligence
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          We offer competitive compensation, cutting-edge hardware, remote flexibility, and the opportunity to build software used by millions globally.
        </p>
      </section>

      <CareersModule />
    </div>
  );
}
