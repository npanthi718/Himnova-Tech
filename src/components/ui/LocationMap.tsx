"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/config/siteData";
import {
  Navigation,
  ExternalLink,
  MapPin,
  Copy,
  Check,
  Phone,
  Clock,
  Compass,
  Building2,
  Sparkles,
} from "lucide-react";

interface LocationMapProps {
  className?: string;
  showDetailsCard?: boolean;
}

export const LocationMap: React.FC<LocationMapProps> = ({
  className = "",
  showDetailsCard = true,
}) => {
  const [copied, setCopied] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Exact Google Maps Direction Route URL (triggers installed Maps app navigation on mobile)
  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Himnova+Technologies+Private+Limited&destination_place_id=0x39eb19179a4e9b19:0xe0e8ad3ea3b4c8b";

  // Google Maps Place URL
  const googleMapsUrl =
    "https://maps.google.com/?q=Himnova+Technologies+Private+Limited&ftid=0x39eb19179a4e9b19:0xe0e8ad3ea3b4c8b";

  const fullAddress = `${siteData.company.headquarters.address}, ${siteData.company.headquarters.landmark}, ${siteData.company.headquarters.city}, ${siteData.company.headquarters.country}`;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

  return (
    <div className={`relative w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-alpine-900/80 shadow-2xl backdrop-blur-xl ${className}`}>
      
      {/* Top Header Bar with Live Location & Navigation CTAs */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6 border-b border-slate-200 dark:border-white/10 bg-white/70 dark:bg-alpine-950/70">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-cyan to-brand-teal text-slate-950 shadow-lg shadow-brand-cyan/20">
            <Compass className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight">
                Himnova Technologies HQ
              </h3>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Verified Location
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
              {siteData.company.headquarters.address} • {siteData.company.headquarters.landmark}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {/* Direct Route / Direction Navigation Button */}
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-teal px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-950 shadow-md shadow-brand-cyan/25 hover:from-cyan-300 hover:to-teal-300 hover:shadow-lg hover:shadow-brand-cyan/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            title="Open turn-by-turn navigation in Google Maps or Apple Maps"
          >
            <Navigation className="h-4 w-4 transition-transform group-hover:rotate-45" />
            <span>Get Directions / Route</span>
          </a>

          {/* Copy Address Button */}
          <button
            onClick={handleCopyAddress}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-alpine-800/80 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-brand-cyan hover:text-brand-cyan dark:hover:text-brand-cyan transition-all shadow-sm"
            title="Copy address to clipboard"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy Address</span>
              </>
            )}
          </button>

          {/* External Map Link */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-alpine-800/80 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-brand-cyan hover:text-brand-cyan dark:hover:text-brand-cyan transition-all shadow-sm"
            title="Open directly in Google Maps"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="hidden sm:inline">Google Maps</span>
          </a>
        </div>
      </div>

      {/* Map Container Area */}
      <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px]">
        {/* Loading Skeleton */}
        {!isMapLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-200 dark:bg-alpine-950 text-slate-500 dark:text-slate-400 animate-pulse z-10">
            <MapPin className="h-10 w-10 text-brand-cyan mb-2 animate-bounce" />
            <p className="text-sm font-medium">Loading Interactive Himnova HQ Map...</p>
          </div>
        )}

        {/* Embedded Google Map Iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8721512192965!2d85.33947907525312!3d27.690346076192327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19179a4e9b19%3A0xe0e8ad3ea3b4c8b!2sHimnova%20Technologies%20Private%20Limited!5e0!3m2!1sen!2snp!4v1789299921485!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setIsMapLoaded(true)}
          className="w-full h-full grayscale-[15%] contrast-[105%] hover:grayscale-0 transition-all duration-500"
          title="Himnova Technologies Private Limited Google Maps Location"
        />

        {/* Floating Quick Info Badge */}
        {showDetailsCard && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs rounded-2xl bg-white/95 dark:bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl border border-slate-200 dark:border-brand-cyan/30 text-slate-800 dark:text-slate-200 pointer-events-auto"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-brand-cyan/15 p-2 text-brand-cyan shrink-0">
                <Building2 className="h-5 w-5" />
              </div>
              <div className="space-y-1 text-xs">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  Himnova Tech HQ
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Baneshwor-31, Kathmandu
                </p>
                <p className="text-[11px] text-brand-cyan font-semibold">
                  Opposite to Deurali Club
                </p>
                <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-200 dark:border-white/10 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-brand-teal" />
                    9:00 AM – 6:00 PM NPT
                  </span>
                  <a
                    href={`tel:${siteData.company.contact.phonePrimary.replace(/[^0-9+]/g, "")}`}
                    className="font-bold text-brand-cyan hover:underline flex items-center gap-1"
                  >
                    <Phone className="h-3 w-3" /> Call HQ
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer Info Strip */}
      <div className="px-5 py-3.5 bg-slate-50 dark:bg-alpine-950/90 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-brand-cyan" />
          <span>Coordinates: <code className="text-slate-800 dark:text-slate-200 font-mono">27.690346° N, 85.339479° E</code></span>
        </div>
        <div className="flex items-center gap-1 text-brand-teal font-medium">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Visitors & consultation walk-ins welcome by appointment</span>
        </div>
      </div>

    </div>
  );
};
