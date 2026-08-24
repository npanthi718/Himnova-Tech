"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Hotel,
  Utensils,
  Stethoscope,
  Building2,
  GraduationCap,
  Compass,
  Truck,
  Dumbbell,
  Banknote,
  Boxes,
  Wrench,
  Bot,
  Car,
  Briefcase,
  Pill,
  Ticket,
  HeartHandshake,
  Code,
  Globe,
  Layout,
  Smartphone,
  CreditCard,
  Megaphone,
  FileText,
  HelpCircle,
  Cloud,
  Server,
  Calendar,
  Share2,
  BarChart3,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  Cpu,
  Database,
  Lock,
  Wifi,
  Layers,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

interface VisualGraphicProps {
  title: string;
  category?: string;
  iconName?: string;
  type?: "solution" | "project" | "service" | "blog";
  badge?: string;
  metricsText?: string;
  className?: string;
}

const iconComponents: Record<string, React.ElementType> = {
  ShoppingCart,
  Hotel,
  Utensils,
  Stethoscope,
  Building2,
  GraduationCap,
  Compass,
  Truck,
  Dumbbell,
  Banknote,
  Boxes,
  Wrench,
  Bot,
  Car,
  Briefcase,
  Pill,
  Ticket,
  HeartHandshake,
  Code,
  Globe,
  Layout,
  Smartphone,
  CreditCard,
  Megaphone,
  FileText,
  HelpCircle,
  Cloud,
  Server,
  Calendar,
  Share2,
  BarChart3,
  ShieldCheck,
  Zap,
};

export const VisualProductGraphic: React.FC<VisualGraphicProps> = ({
  title,
  category = "Himnova Engine",
  iconName = "Code",
  type = "solution",
  badge,
  metricsText,
  className = "",
}) => {
  const IconComponent = iconComponents[iconName] || Code;

  // Generate visual color themes based on type
  const themeGradients = {
    solution: "from-cyan-500/20 via-emerald-500/10 to-blue-600/20 border-cyan-500/30",
    project: "from-purple-500/20 via-indigo-500/10 to-cyan-500/20 border-purple-500/30",
    service: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20 border-emerald-500/30",
    blog: "from-amber-500/20 via-orange-500/10 to-rose-500/20 border-amber-500/30",
  };

  const accentColors = {
    solution: "text-cyan-400 bg-cyan-500/15 border-cyan-500/30",
    project: "text-purple-400 bg-purple-500/15 border-purple-500/30",
    service: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
    blog: "text-amber-400 bg-amber-500/15 border-amber-500/30",
  };

  return (
    <div
      className={`relative w-full aspect-[16/9] overflow-hidden rounded-xl border bg-slate-950 p-4 sm:p-5 select-none ${themeGradients[type]} ${className}`}
    >
      {/* Background Animated Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Radial Ambient Glow */}
      <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

      {/* Top Window Bar (Mac OS / IDE Window Style) */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80 shadow-sm" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80 shadow-sm" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 shadow-sm" />
          <span className="ml-2 font-mono text-[10px] font-semibold text-slate-400">
            himnova://system/v2.4
          </span>
        </div>

        <div className="flex items-center gap-2">
          {badge && (
            <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 font-mono text-[9px] font-extrabold text-cyan-300 border border-cyan-500/40 uppercase tracking-wider">
              {badge}
            </span>
          )}
          <span className="flex items-center gap-1 font-mono text-[10px] font-bold text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            LIVE SLA
          </span>
        </div>
      </div>

      {/* Main Glassmorphic UI Body */}
      <div className="relative z-10 mt-3 grid grid-cols-12 gap-3 h-[calc(100%-2.5rem)]">
        
        {/* Left Side Info Panel */}
        <div className="col-span-8 flex flex-col justify-between space-y-2">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className={`rounded-lg border p-1.5 ${accentColors[type]}`}>
                <IconComponent className="h-4 w-4" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-300">
                {category}
              </span>
            </div>

            <h4 className="font-display text-sm sm:text-base font-extrabold text-white line-clamp-1 tracking-tight">
              {title}
            </h4>
          </div>

          {/* Mini Telemetry Tickers */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="rounded-lg border border-white/10 bg-white/5 p-2 backdrop-blur-md">
              <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
                <span>Latency</span>
                <Zap className="h-3 w-3 text-amber-400" />
              </div>
              <div className="font-mono text-xs font-extrabold text-emerald-400 mt-0.5">
                &lt; 24ms (Ultra-Low)
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-2 backdrop-blur-md">
              <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
                <span>Security SLA</span>
                <ShieldCheck className="h-3 w-3 text-cyan-400" />
              </div>
              <div className="font-mono text-xs font-extrabold text-cyan-300 mt-0.5">
                99.99% Uptime
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Visual Topology & Radar Widget */}
        <div className="col-span-4 flex flex-col items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 p-2 text-center backdrop-blur-md relative overflow-hidden group">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full border border-dashed border-cyan-500/20"
          />

          <div className="relative z-10 space-y-1">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 border border-cyan-400/40 text-white shadow-lg shadow-cyan-500/20">
              <Cpu className="h-5 w-5 text-cyan-300 animate-pulse" />
            </div>

            <div className="font-mono text-[10px] font-extrabold text-slate-200">
              {metricsText || "Enterprise Cluster"}
            </div>

            <div className="flex items-center justify-center gap-1 font-mono text-[9px] font-bold text-emerald-400">
              <Activity className="h-2.5 w-2.5" /> Active Node
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Subtle Status Line */}
      <div className="absolute bottom-1.5 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-slate-500 border-t border-white/5 pt-1">
        <span>Nepal & Global SLA Standard</span>
        <span>Verified Architecture</span>
      </div>
    </div>
  );
};
