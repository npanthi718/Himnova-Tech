"use client";

import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "teal" | "slate" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "cyan",
  className = "",
}) => {
  const variantClasses = {
    cyan: "bg-brand-cyan/15 text-cyan-700 dark:text-brand-cyan border-brand-cyan/30 dark:bg-brand-cyan/10",
    teal: "bg-brand-teal/15 text-sky-800 dark:text-brand-teal border-brand-teal/30 dark:bg-brand-teal/10",
    slate: "bg-slate-200 text-slate-800 border-slate-300 dark:bg-slate-800/60 dark:text-slate-300 dark:border-white/10",
    outline: "bg-transparent text-slate-700 border-slate-300 dark:text-slate-300 dark:border-white/15",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-md ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
