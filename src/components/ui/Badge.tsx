"use client";

import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "teal" | "blue" | "slate" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "cyan",
  className = "",
}) => {
  const variantClasses = {
    cyan: "bg-cyan-500/10 text-cyan-800 border-cyan-500/30 dark:bg-brand-cyan/15 dark:text-brand-cyan dark:border-brand-cyan/40",
    teal: "bg-sky-500/10 text-sky-800 border-sky-500/30 dark:bg-brand-teal/15 dark:text-brand-teal dark:border-brand-teal/40",
    blue: "bg-blue-500/10 text-blue-800 border-blue-500/30 dark:bg-blue-500/15 dark:text-blue-400 dark:border-blue-500/40",
    slate: "bg-slate-100 text-slate-800 border-slate-300/80 dark:bg-slate-800/80 dark:text-slate-200 dark:border-white/10",
    outline: "bg-transparent text-slate-700 border-slate-300 dark:text-slate-300 dark:border-white/20",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-md ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
