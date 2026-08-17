"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={toggleTheme}
      className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 dark:bg-alpine-850 light:bg-slate-100 text-slate-300 dark:text-slate-200 light:text-slate-700 hover:border-brand-cyan/50 hover:text-brand-cyan transition-all shadow-md"
      aria-label="Toggle light and dark mode"
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-amber-400 animate-spin-slow" />
      ) : (
        <Moon className="h-4 w-4 text-brand-cobalt" />
      )}
    </motion.button>
  );
};
