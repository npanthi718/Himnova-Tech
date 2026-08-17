"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

export interface ToastProps {
  isVisible: boolean;
  message: string;
  type?: "success" | "error";
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  isVisible,
  message,
  type = "success",
  onClose,
  duration = 6000,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border px-5 py-4 shadow-2xl backdrop-blur-xl max-w-md
            dark:bg-alpine-900/95 dark:border-brand-cyan/40 dark:text-white
            light:bg-white/95 light:border-brand-cobalt/30 light:text-slate-900"
        >
          {type === "success" ? (
            <CheckCircle2 className="h-6 w-6 text-brand-cyan shrink-0 animate-pulse" />
          ) : (
            <AlertCircle className="h-6 w-6 text-red-400 shrink-0" />
          )}
          <p className="text-xs sm:text-sm font-medium leading-relaxed">{message}</p>
          <button
            onClick={onClose}
            className="ml-auto text-slate-400 hover:text-white p-1 rounded-md transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
