"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteData, ProjectItem } from "@/config/siteData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Layers, ArrowRight, ExternalLink, Calendar, CheckCircle2, Sparkles, Filter } from "lucide-react";
import { motion } from "framer-motion";

export const ProjectsModule: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Full-Stack Web App", "Frontend Web App", "AI & Computer Vision", "Enterprise ERP"];

  const filteredProjects =
    selectedCategory === "All"
      ? siteData.projects
      : siteData.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden dark:bg-alpine-950 light:bg-slate-50">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[300px] bg-brand-teal/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Matching Second Screenshot */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="teal" className="uppercase tracking-widest px-4 py-1">
            OUR WORK
          </Badge>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
            Projects We&apos;ve Delivered
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Real-world solutions across ERP, e-commerce, healthcare, SaaS, logistics, and fintech — built with modern stacks and deployed to production.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-brand-cyan text-white shadow-lg shadow-brand-cyan/25"
                  : "bg-alpine-900/40 dark:bg-alpine-900/60 light:bg-white text-slate-400 dark:text-slate-400 light:text-slate-700 border border-white/10 light:border-slate-200 hover:border-brand-cyan/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Delivered Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card
                onClick={() => setSelectedProject(project)}
                className="h-full flex flex-col justify-between cursor-pointer group hover:border-brand-cyan/50 transition-all duration-300"
              >
                <div>
                  {/* Thumbnail Image Header */}
                  <div className="relative h-44 w-full overflow-hidden bg-alpine-900 border-b border-white/10">
                    <Image
                      src={project.imagePlaceholder}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Top Badges Overlay */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 text-[10px] font-bold uppercase rounded-md bg-black/75 backdrop-blur-md text-white border border-white/20">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 text-[10px] font-bold uppercase rounded-md bg-emerald-500/90 text-white shadow">
                        {project.status}
                      </span>
                    </div>

                    <div className="absolute bottom-2 right-3 px-2 py-0.5 text-[10px] font-mono font-bold bg-black/60 rounded text-slate-300">
                      {project.year}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-snug line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {project.tagline}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-alpine-850 dark:bg-alpine-850 light:bg-slate-100 text-brand-cyan dark:text-brand-cyan light:text-brand-cobalt border border-white/5 light:border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-0.5 text-[10px] font-medium text-slate-500">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-semibold text-brand-cyan group-hover:translate-x-1 transition-transform">
                  <span>View Project Details</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          maxWidth="lg"
        >
          <div className="space-y-6">
            
            <div className="relative h-48 w-full rounded-xl overflow-hidden border border-white/10">
              <Image
                src={selectedProject.imagePlaceholder}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              <Badge variant="cyan">{selectedProject.category}</Badge>
              <Badge variant="teal">Year: {selectedProject.year}</Badge>
              <Badge variant="slate">Status: {selectedProject.status}</Badge>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                System Overview
              </h4>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Architectural Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedProject.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-alpine-850/80 light:bg-slate-50 border border-white/5 light:border-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 dark:text-slate-200 light:text-slate-800 font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Complete Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">Need a similar custom platform built for your enterprise?</span>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto" icon={<ArrowRight className="h-4 w-4" />}>
                  Discuss Your Project
                </Button>
              </Link>
            </div>

          </div>
        </Modal>
      )}
    </section>
  );
};
