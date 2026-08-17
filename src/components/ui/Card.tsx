"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  glowOnHover?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  glowOnHover = true,
  className = "",
  ...props
}) => {
  return (
    <motion.div
      whileHover={glowOnHover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`relative overflow-hidden rounded-2xl border transition-all duration-300
        dark:bg-alpine-900/90 dark:border-white/10 dark:shadow-2xl dark:shadow-black/60
        light:bg-white light:border-slate-200/80 light:shadow-lg light:shadow-slate-200/60 light:text-slate-900
        ${glowOnHover ? "hover:border-brand-cyan/50 hover:shadow-brand-cyan/15" : ""}
        ${className}`}
      {...props}
    >
      {/* Radial glow background effect */}
      {glowOnHover && (
        <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-brand-cyan/10 blur-3xl transition-all duration-500 group-hover:bg-brand-cyan/25" />
      )}
      {children}
    </motion.div>
  );
};
