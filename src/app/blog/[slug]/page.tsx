import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { blogPosts } from "@/data/blogs/blogPosts";
import { VisualProductGraphic } from "@/components/ui/VisualProductGraphic";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Send,
  Linkedin,
  Twitter,
} from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Himnova Technologies`,
    description: post.excerpt,
    keywords: [...post.tags, "Himnova Tech", "Software Architecture", "AI Engineering"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.himnovatech.com/blog/${post.slug}`,
      siteName: "Himnova Technologies",
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    alternates: {
      canonical: `https://www.himnovatech.com/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 2);

  return (
    <article className="pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-28">
      
      {/* Top Breadcrumb / Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-cyan hover:underline transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Technical Insights</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center lg:text-left">
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
          <Badge variant="cyan">{post.category}</Badge>
          <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <Clock className="h-3.5 w-3.5 text-brand-cyan" />
            {post.readTime}
          </span>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <Calendar className="h-3.5 w-3.5 text-brand-teal" />
            {post.publishedDate}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
          {post.excerpt}
        </p>

        {/* Author Card */}
        <div className="pt-4 pb-2 flex items-center justify-center lg:justify-start gap-4 border-y border-slate-200 dark:border-white/10">
          <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-brand-cyan/40 shrink-0">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              sizes="48px"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-slate-900 dark:text-white">{post.author.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{post.author.role}</p>
          </div>
        </div>
      </header>

      {/* Featured Cover Graphic */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <div className="p-2.5 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 bg-slate-900">
          <VisualProductGraphic
            title={post.title}
            category={post.category}
            iconName="FileText"
            type="blog"
            badge={post.readTime}
            metricsText={post.publishedDate}
          />
        </div>
      </div>

      {/* Main Body Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Table of Contents */}
        {post.tableOfContents && post.tableOfContents.length > 0 && (
          <Card className="p-6 sm:p-7 mb-10 bg-slate-50 dark:bg-alpine-900/90 border-brand-cyan/20 space-y-4">
            <div className="flex items-center gap-2 text-brand-cyan">
              <BookOpen className="h-4 w-4" />
              <h3 className="text-xs font-bold uppercase tracking-wider">
                Table of Contents
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {post.tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-slate-700 dark:text-slate-300 hover:text-brand-cyan transition-colors flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Content Typography */}
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-800 dark:text-slate-200 leading-relaxed text-base sm:text-lg">
          {post.content.split("\n\n").map((block, idx) => {
            const trimmed = block.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith("## ")) {
              const headingText = trimmed.replace("## ", "");
              const id = headingText
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
              return (
                <h2
                  key={idx}
                  id={id}
                  className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white pt-8 pb-2 border-b border-slate-200 dark:border-white/10"
                >
                  {headingText}
                </h2>
              );
            }

            if (trimmed.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white pt-4"
                >
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }

            if (trimmed.startsWith("- ")) {
              const listItems = trimmed.split("\n");
              return (
                <ul key={idx} className="space-y-2 my-4 pl-2">
                  {listItems.map((li, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-brand-cyan shrink-0 mt-1" />
                      <span>{li.replace(/^- /, "")}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            if (trimmed.startsWith("1. ") || trimmed.startsWith("2. ")) {
              const listItems = trimmed.split("\n");
              return (
                <ol key={idx} className="space-y-2 my-4 pl-4 list-decimal text-sm sm:text-base text-slate-700 dark:text-slate-300">
                  {listItems.map((li, lIdx) => (
                    <li key={lIdx} className="pl-1">
                      {li.replace(/^\d+\.\s*/, "")}
                    </li>
                  ))}
                </ol>
              );
            }

            if (trimmed.startsWith("|")) {
              return (
                <div key={idx} className="my-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10">
                  <div className="p-4 bg-slate-100 dark:bg-alpine-900 text-xs sm:text-sm font-mono whitespace-pre-wrap">
                    {trimmed}
                  </div>
                </div>
              );
            }

            if (trimmed === "---") {
              return <hr key={idx} className="my-8 border-slate-200 dark:border-white/10" />;
            }

            return (
              <p key={idx} className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="pt-10 mt-10 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
            Related Tags:
          </span>
          {post.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-alpine-900 text-brand-cyan border border-slate-200 dark:border-white/10"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Call to Action Box */}
        <Card className="p-8 sm:p-10 my-12 bg-gradient-to-br from-brand-cyan/15 to-brand-teal/10 border-brand-cyan/40 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs font-bold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Himnova Architecture Consult</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
            Ready to Implement This Architecture in Your Organization?
          </h3>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our lead architects and cloud engineers partner with forward-thinking enterprises to design, migrate, and deploy high-performance software systems.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto" icon={<Send className="h-4 w-4" />}>
                Schedule Technical Consultation
              </Button>
            </Link>
            <Link href="/solutions" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Explore Ready-Made Solutions
              </Button>
            </Link>
          </div>
        </Card>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6 pt-6">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
              Related Engineering Insights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Link key={rel.id} href={`/blog/${rel.slug}`} className="block group focus:outline-none">
                  <Card className="h-full p-6 flex flex-col justify-between hover:border-brand-cyan/50 transition-all">
                    <div className="space-y-3">
                      <Badge variant="cyan">{rel.category}</Badge>
                      <h4 className="text-base font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-snug line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>
                    <div className="pt-4 mt-2 flex items-center justify-between text-xs font-bold text-brand-cyan group-hover:translate-x-1 transition-transform">
                      <span>Read Insight</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}
