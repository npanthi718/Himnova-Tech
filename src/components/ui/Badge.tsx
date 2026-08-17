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
    cyan: "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30",
    teal: "bg-brand-teal/10 text-brand-teal border-brand-teal/30",
    slate: "bg-slate-800/60 text-slate-300 border-white/10 dark:text-slate-300 light:bg-slate-200 light:text-slate-800 light:border-slate-300",
    outline: "bg-transparent text-slate-400 border-white/15 dark:text-slate-400 light:text-slate-600 light:border-slate-300",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-md ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
