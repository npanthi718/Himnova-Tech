"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteData } from "@/config/siteData";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = ["home", "about", "services", "projects", "director", "careers", "governance", "contact"];
      let current = "#home";

      sections.forEach((id) => {
        const sectionEl = document.getElementById(id);
        if (!sectionEl) return;
        const top = sectionEl.offsetTop - 120;
        if (window.scrollY >= top) {
          current = `#${id}`;
        }
      });

      setActiveHash(current);
    };

    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    handleHashChange();
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 border-b border-slate-200 shadow-md dark:bg-alpine-950/90 dark:border-white/10 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo matching exact screenshot emblem */}
          <Link href="/" className="flex items-center gap-3 shrink-0 focus:outline-none">
            <div className="relative h-11 w-52 sm:w-60 transition-transform duration-300 hover:scale-105">
              <Image
                src="/logos/logo-light.png"
                alt={siteData.company.name}
                fill
                sizes="(max-width: 640px) 208px, 240px"
                priority
                className="hidden h-full w-auto object-contain dark:block"
              />
              <Image
                src="/logos/logo.png"
                alt={siteData.company.name}
                fill
                sizes="(max-width: 640px) 208px, 240px"
                priority
                className="h-full w-auto object-contain dark:hidden"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-slate-200 bg-white/90 dark:border-white/10 dark:bg-alpine-900/60 px-4 py-1.5 backdrop-blur-md shadow-sm dark:shadow-inner">
            {siteData.navLinks.map((link) => {
              const isActive = link.href.startsWith("#") ? activeHash === link.href : pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors rounded-full ${
                    isActive
                      ? "text-brand-cyan dark:text-brand-cyan"
                      : "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-brand-cyan/15 border border-brand-cyan/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Theme Switcher & Get in Touch CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <ThemeToggle />
            <Link href="#contact">
              <Button size="sm" icon={<ArrowUpRight className="h-4 w-4" />}>
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-xl border border-slate-300 p-2.5 text-slate-700 dark:border-white/10 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-b border-white/10 dark:bg-alpine-950/95 light:bg-white/95 backdrop-blur-2xl"
          >
            <div className="mx-auto max-w-7xl px-6 py-6 space-y-4">
              <nav className="flex flex-col space-y-2">
                {siteData.navLinks.map((link) => {
                  const isActive = link.href.startsWith("#") ? activeHash === link.href : pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold tracking-wide uppercase transition-all ${
                        isActive
                          ? "bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30"
                          : "text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-white/5"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <Sparkles className="h-4 w-4 text-brand-cyan" />}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-white/10">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full" size="md" icon={<ArrowUpRight className="h-4 w-4" />}>
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
