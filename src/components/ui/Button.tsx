"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  className = "",
  disabled,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 font-semibold",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-brand-teal to-brand-cyan text-white shadow-lg shadow-brand-cyan/25 hover:shadow-brand-cyan/40 hover:brightness-110 active:scale-[0.98]",
    secondary:
      "bg-slate-200 text-slate-900 border border-slate-300 hover:bg-slate-300 dark:bg-alpine-850 dark:text-white dark:border-white/10 dark:hover:bg-alpine-800",
    outline:
      "bg-transparent text-slate-800 border border-slate-300 hover:border-brand-teal hover:text-brand-cyan hover:bg-brand-cyan/5 dark:text-slate-200 dark:border-white/20",
    ghost:
      "bg-transparent text-slate-700 hover:text-brand-cyan hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/40",
  };

  return (
    <motion.button
      whileHover={disabled ? undefined : { y: -1 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </motion.button>
  );
};
