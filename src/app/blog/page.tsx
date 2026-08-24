"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogs/blogPosts";
import { VisualProductGraphic } from "@/components/ui/VisualProductGraphic";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Search, Clock, ArrowRight, BookOpen, Tag, Sparkles, User } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");

  const categories = [
    "All Articles",
    "Artificial Intelligence",
    "Cloud & DevOps",
    "Software Architecture",
    "Cybersecurity",
    "Mobile & Web Engineering",
    "FinTech & SaaS",
    "E-Commerce & SaaS",
    "Healthcare & Wellness",
    "Industry Insights",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All Articles" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  return (
    <div className="pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-28 space-y-16">
      
      {/* Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <Badge variant="cyan">Himnova Technical Whitepapers & Insights</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white">
          Engineering, Cloud & AI Insights
        </h1>
        <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Deep dives into modern agentic AI systems, zero-trust cloud architectures, microservices optimization, and enterprise software engineering.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative pt-4">
          <div className="relative flex items-center">
            <Search className="absolute left-4 h-5 w-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search articles by topic, keyword (e.g. AI, Kubernetes, FinTech)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 dark:border-white/10 bg-white/90 dark:bg-alpine-900/90 text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 backdrop-blur-md shadow-sm transition-all"
            />
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-brand-cyan text-white shadow-lg shadow-brand-cyan/25 scale-105"
                  : "bg-white text-slate-700 border border-slate-300 hover:border-brand-cyan/50 dark:bg-alpine-900/80 dark:text-slate-300 dark:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Article Banner (Visible when on 'All Articles' and no active search) */}
      {selectedCategory === "All Articles" && !searchQuery && featuredPost && (
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Link href={`/blog/${featuredPost.slug}`} className="block group focus:outline-none">
            <Card className="p-6 sm:p-8 lg:p-10 border-brand-cyan/40 hover:border-brand-cyan hover:shadow-2xl hover:shadow-brand-cyan/15 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Visual Graphic Preview */}
                <div className="lg:col-span-6 p-2 rounded-2xl bg-slate-900 border border-slate-200 dark:border-white/10">
                  <VisualProductGraphic
                    title={featuredPost.title}
                    category={featuredPost.category}
                    iconName="FileText"
                    type="blog"
                    badge="Featured Blueprint"
                    metricsText={featuredPost.publishedDate}
                  />
                </div>

                {/* Right: Info */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-brand-cyan font-bold uppercase tracking-wider">
                    <span>{featuredPost.category}</span>
                    <span>•</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">{featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden border border-brand-cyan/40">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        sizes="40px"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">{featuredPost.author.name}</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-brand-cyan group-hover:translate-x-1 transition-transform">
                    <span>Read Full Blueprint</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

              </div>
            </Card>
          </Link>
        </section>
      )}

      {/* Grid of Articles */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
            {selectedCategory} ({filteredPosts.length})
          </h2>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs font-semibold text-brand-cyan hover:underline"
            >
              Clear search filter
            </button>
          )}
        </div>

        {filteredPosts.length === 0 ? (
          <Card className="p-12 text-center space-y-4">
            <BookOpen className="h-10 w-10 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No articles matched your criteria</h3>
            <p className="text-sm text-slate-500">Try searching for keywords like &quot;AI&quot;, &quot;Cloud&quot;, or &quot;Architecture&quot;.</p>
          </Card>
        ) : (
          <div key={selectedCategory + searchQuery} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredPosts.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.slug}`} className="block h-full group focus:outline-none">
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

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-brand-cyan" />
                          {blog.readTime}
                        </span>
                        <span>•</span>
                        <span>{blog.publishedDate}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-snug line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                        {blog.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {blog.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 text-[10px] font-medium rounded bg-slate-100 dark:bg-alpine-850 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-brand-cyan group-hover:translate-x-1 transition-transform border-t border-slate-200 dark:border-white/10 mt-2">
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>

                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
