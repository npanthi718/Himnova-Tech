"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/config/siteData";
import { MapPin, Mail, Phone, Github, Linkedin, Twitter, Facebook } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/10 dark:bg-alpine-950 dark:text-slate-400 light:bg-slate-900 light:text-slate-300 overflow-hidden">
      {/* Top glowing separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1 & 2: Brand & Headquarters */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block focus:outline-none">
              <div className="relative h-12 w-60">
                <Image
                  src="/logos/himnova-logo.svg"
                  alt={siteData.company.name}
                  fill
                  sizes="240px"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              {siteData.company.tagline}
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{siteData.company.headquarters.address}</p>
                  <p className="text-slate-400">{siteData.company.headquarters.landmark}, {siteData.company.headquarters.city}, {siteData.company.headquarters.country}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-cyan shrink-0" />
                <a href={`mailto:${siteData.company.contact.email}`} className="hover:text-brand-cyan transition-colors">
                  {siteData.company.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-cyan shrink-0" />
                <span>{siteData.company.contact.phonePrimary}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {siteData.footerLinks.company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-brand-cyan transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Top Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Specialized Services</h4>
            <ul className="space-y-2.5 text-sm">
              {siteData.footerLinks.services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-brand-cyan transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Governance & Social */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Governance</h4>
            <ul className="space-y-2.5 text-sm">
              {siteData.footerLinks.legal.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-brand-cyan transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <h5 className="text-xs font-semibold text-slate-400 mb-3">Connect Globally</h5>
              <div className="flex items-center gap-3">
                <a
                  href={siteData.company.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 p-2.5 hover:border-brand-cyan hover:text-brand-cyan transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={siteData.company.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 p-2.5 hover:border-brand-cyan hover:text-brand-cyan transition-all"
                  aria-label="GitHub Repository"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={siteData.company.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 p-2.5 hover:border-brand-cyan hover:text-brand-cyan transition-all"
                  aria-label="Twitter X Account"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={siteData.company.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 p-2.5 hover:border-brand-cyan hover:text-brand-cyan transition-all"
                  aria-label="Facebook Page"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteData.company.legalName}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Architected for <span className="text-brand-cyan font-semibold">{siteData.company.motto}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
