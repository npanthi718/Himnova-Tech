import React from "react";
import { ProjectsModule } from "@/modules/ProjectsModule";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Delivered Projects | Himnova Technologies",
  description: "Explore 8 real-world production projects delivered by Himnova Technologies across health tech, peer learning, AI chat, ERP systems, and computer vision.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-16 space-y-12">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <Badge variant="teal">Production Portfolio</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
          Real-World Software Engineering
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          From hospital resource queueing to conversational AI platforms and computer vision attendance, explore the production systems built by our engineering team.
        </p>
      </section>

      <ProjectsModule />
    </div>
  );
}
