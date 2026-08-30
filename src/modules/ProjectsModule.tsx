"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteData, ProjectItem } from "@/config/siteData";
import { VisualProductGraphic } from "@/components/ui/VisualProductGraphic";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/animations/RevealOnScroll";
import { ParallaxBackground } from "@/components/animations/ParallaxLayer";

interface ProjectsModuleProps {
  limit?: number;
  showViewAll?: boolean;
}

export const ProjectsModule: React.FC<ProjectsModuleProps> = ({ limit, showViewAll }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Full-Stack Web App", "Frontend Web App", "AI & Computer Vision", "Enterprise ERP"];

  const filteredProjects =
    selectedCategory === "All"
      ? siteData.projects
      : siteData.projects.filter((p: ProjectItem) => p.category === selectedCategory);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-white dark:bg-alpine-950 border-t border-slate-200 dark:border-white/5">
      <ParallaxBackground
        speed={0.12}
        className="absolute top-1/4 right-10 w-[500px] h-[300px] bg-brand-teal/10 rounded-full blur-[140px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll className="text-center max-w-3xl mx-auto space-y-5 mb-12 sm:mb-14">
          <Badge variant="teal" className="uppercase tracking-widest px-4 py-1">
            DELIVERED CASE STUDIES
          </Badge>
          
          <h2 className="section-heading">
            Projects We&apos;ve Delivered
          </h2>

          <p className="section-subtext">
            Real-world solutions across ERP, e-commerce, healthcare, SaaS, logistics, and fintech — built with modern stacks and deployed to production.
          </p>
        </RevealOnScroll>

        {/* Category Filter Pills */}
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

        {/* Delivered Projects Grid */}
        <StaggerContainer key={selectedCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8" stagger={0.07}>
          {displayedProjects.map((project: ProjectItem) => (
            <StaggerItem key={project.id}>
              <Card
                onClick={() => setSelectedProject(project)}
                className="h-full flex flex-col justify-between cursor-pointer group hover:border-brand-cyan/60 hover:shadow-xl hover:shadow-brand-cyan/10 transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Visual UI Graphic Preview */}
                  <div className="p-2 bg-slate-900 border-b border-slate-200 dark:border-white/10">
                    <VisualProductGraphic
                      title={project.title}
                      category={project.category}
                      iconName="Code"
                      type="project"
                      badge={project.status}
                      metricsText={project.year}
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-cyan px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20">
                          {project.category}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {project.year}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((t: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] font-medium rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-brand-cyan transition-colors">
                    <span>View Case Study & Deliverables</span>
                    <ArrowRight className="h-3.5 w-3.5 text-brand-cyan group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Button on Homepage Teaser */}
        {(showViewAll || limit) && (
          <div className="mt-12 text-center">
            <Link href="/projects">
              <Button size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                View All Case Studies & Delivered Work
              </Button>
            </Link>
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-slate-100 dark:bg-alpine-850 border border-slate-200 dark:border-white/10">
              <Badge variant="cyan">{selectedProject.category}</Badge>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                Year: <strong className="text-slate-900 dark:text-white">{selectedProject.year}</strong> ({selectedProject.status})
              </span>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Project Overview & Impact
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Accomplishments & Deliverables
              </h4>
              <div className="space-y-2">
                {selectedProject.features.map((highlight: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-100 dark:bg-alpine-850/80 border border-slate-200 dark:border-white/5">
                    <CheckCircle2 className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-800 dark:text-slate-200 font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((t: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-bold rounded-lg bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
              <Button
                variant="secondary"
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto"
              >
                Close
              </Button>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  className="w-full sm:w-auto"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Request Similar System
                </Button>
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
