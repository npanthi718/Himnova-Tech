"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogs/blogPosts";
import { VisualProductGraphic } from "@/components/ui/VisualProductGraphic";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Clock, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/animations/RevealOnScroll";
import { ParallaxBackground } from "@/components/animations/ParallaxLayer";

export const BlogModule: React.FC = () => {
  const latestBlogs = blogPosts.slice(0, 3);

  return (
    <section
      id="blog"
      className="section-padding relative overflow-hidden bg-white dark:bg-alpine-950 border-t border-slate-200 dark:border-white/5"
    >
      <ParallaxBackground
        speed={0.12}
        className="absolute top-1/3 right-10 w-[600px] h-[350px] bg-brand-teal/10 rounded-full blur-[160px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto space-y-5 mb-12 sm:mb-14">
          <Badge variant="teal" className="uppercase tracking-widest px-4 py-1">
            RESEARCH & ENGINEERING INSIGHTS
          </Badge>

          <h2 className="section-heading">
            Latest in <span className="text-brand-cyan">AI, Cloud & Architecture</span>
          </h2>

          <p className="section-subtext">
            In-depth technical whitepapers, architectural blueprints, and industry analysis written by our engineering leadership and R&D architects.
          </p>
        </RevealOnScroll>

        {/* Featured Blogs Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" stagger={0.08}>
          {latestBlogs.map((blog) => (
            <StaggerItem key={blog.id}>
              <Link href={`/blog/${blog.slug}`} className="block h-full group focus:outline-none">
                <Card className="h-full flex flex-col justify-between overflow-hidden hover:border-brand-cyan/60 hover:shadow-xl hover:shadow-brand-cyan/10 transition-all duration-300">
                  
                  <div>
                    {/* Visual UI Graphic Preview */}
                    <div className="p-2 bg-slate-900 border-b border-slate-200 dark:border-white/10">
                      <VisualProductGraphic
                        title={blog.title}
                        category={blog.category}
                        iconName="FileText"
                        type="blog"
                        badge={blog.readTime}
                        metricsText={blog.publishedDate}
                      />
                    </div>

                    {/* Content Body */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-brand-cyan" />
                          {blog.readTime}
                        </span>
                        <span>•</span>
                        <span>{blog.publishedDate}</span>
                      </div>

                      <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-snug line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-brand-cyan group-hover:translate-x-1 transition-transform border-t border-slate-200 dark:border-white/10 mt-2">
                    <span>Read Full Article</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>

                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA to view all 16 articles */}
        <RevealOnScroll className="mt-12 text-center" delay={0.2}>
          <Link href="/blog">
            <Button size="lg" variant="secondary" icon={<BookOpen className="h-4 w-4" />}>
              Explore All 16 Technical Whitepapers & Articles
            </Button>
          </Link>
        </RevealOnScroll>

      </div>
    </section>
  );
};
