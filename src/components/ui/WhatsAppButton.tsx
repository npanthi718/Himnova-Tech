"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, ArrowUpRight, ShieldCheck, Clock } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "9779823009467",
  defaultMessage = "Hello Himnova Technologies! I am interested in your software & cloud services and would like to connect.",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end pointer-events-auto">
      {/* Interactive Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="mb-3 w-[320px] sm:w-[350px] overflow-hidden rounded-2xl border border-emerald-500/30 bg-slate-900/95 p-0 shadow-2xl backdrop-blur-2xl dark:border-emerald-500/30 text-white"
          >
            {/* Header with Emerald Gradient */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-5 py-4 text-white relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3.5 right-3.5 rounded-full p-1 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Close WhatsApp chat card"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-2 ring-white/30">
                  <WhatsAppIcon className="h-6 w-6 fill-white" />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-emerald-700 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight">Himnova Direct Line</h4>
                  <p className="text-xs text-emerald-100/90 flex items-center gap-1.5 mt-0.5">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300 animate-ping" />
                    Engineering & Sales • Online
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-5 space-y-4 text-slate-200">
              <div className="rounded-xl bg-slate-800/80 p-3.5 border border-slate-700/60 space-y-2">
                <p className="text-xs sm:text-sm leading-relaxed text-slate-100">
                  👋 <span className="font-semibold text-emerald-400">Welcome to Himnova!</span>
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Need an instant quotation, architecture consultation, or technical support? Skip the form and chat directly with our team on WhatsApp.
                </p>
                <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
                  <Clock className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Typically replies in under 15 minutes</span>
                </div>
              </div>

              {/* Direct CTA Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-center gap-2.5 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-5 w-5 fill-white" />
                <span>Start WhatsApp Chat</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 text-center">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Encrypted • Official Number: +977 9823009467</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="relative group">
        {/* Floating Tooltip (shown on hover when popup closed) */}
        {!isOpen && (
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="hidden sm:flex absolute right-full mr-3 top-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-xl bg-slate-900/90 px-3.5 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-md border border-emerald-500/30"
              >
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Chat on WhatsApp (+977 9823009467)</span>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Ambient Pulsing Halo */}
        <span
          className="absolute -inset-1.5 rounded-full bg-emerald-500/30 opacity-75 blur-md animate-pulse group-hover:opacity-100 group-hover:bg-emerald-400/40 transition-all"
          aria-hidden="true"
        />

        {/* The Main Round Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-[0_6px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 ring-2 ring-white/30"
          aria-label="Direct Connect via WhatsApp"
        >
          {isOpen ? (
            <X className="h-7 w-7 text-white transition-transform duration-200 rotate-90 group-hover:rotate-180" />
          ) : (
            <>
              <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8 fill-white" />
              {/* Online Indicator Badge */}
              <span className="absolute top-0 right-0 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 ring-2 ring-slate-900" />
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// High-fidelity official WhatsApp Vector Icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6 fill-current" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.204 8.204 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.12.82.83-3.04-.19-.3a8.216 8.216 0 0 1-1.26-4.46c0-4.54 3.7-8.24 8.24-8.24zm4.79 11.64c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.09-1.29-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.58-1.4-.8-1.92-.21-.5-.43-.43-.59-.44l-.5-.01c-.17 0-.45.06-.69.32-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.7c.13.17 1.83 2.8 4.44 3.93.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.24-.17-.5-.3z" />
  </svg>
);
