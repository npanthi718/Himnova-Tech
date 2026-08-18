"use client";

import React, { forwardRef } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full rounded-xl px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50
            bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-brand-cyan
            dark:bg-alpine-850 dark:border-white/10 dark:text-white dark:placeholder-slate-500 dark:focus:border-brand-cyan
            border ${error ? "border-red-500 focus:ring-red-500/50" : ""} ${className}`}
          {...props}
        />
        {error && <p className="text-xs text-red-400 font-medium">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
