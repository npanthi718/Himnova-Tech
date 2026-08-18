"use client";

import React, { useRef } from "react";
import { Upload, X, FileText } from "lucide-react";

export interface FileInputProps {
  label?: string;
  error?: string;
  accept?: string;
  maxSizeMB?: number;
  optional?: boolean;
  value: File | null;
  onChange: (file: File | null) => void;
}

export const FileInput: React.FC<FileInputProps> = ({
  label,
  error,
  accept = ".pdf,.doc,.docx",
  maxSizeMB = 10,
  optional = false,
  value,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) {
      onChange(null);
      return;
    }
    if (file.size > maxSizeMB * 1024 * 1024) {
      onChange(null);
      if (inputRef.current) inputRef.current.value = "";
      return;
    }
    onChange(file);
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="block text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">
          {label}
          {optional && <span className="normal-case text-slate-500 ml-1">(Optional)</span>}
        </label>
      )}

      {!value ? (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className={`w-full rounded-xl border-2 border-dashed px-4 py-6 text-center transition-all duration-200
            hover:border-brand-cyan/60 hover:bg-brand-cyan/5
            dark:border-white/15 dark:bg-alpine-850/50
            light:border-slate-300 light:bg-slate-50
            ${error ? "border-red-500" : ""}`}
        >
          <Upload className="h-6 w-6 mx-auto mb-2 text-brand-cyan" />
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Click to upload or drag & drop
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
            PDF, DOC, DOCX — max {maxSizeMB}MB
          </p>
        </button>
      ) : (
        <div className="flex items-center gap-3 rounded-xl border px-4 py-3
          dark:bg-alpine-850 dark:border-white/10
          light:bg-slate-50 light:border-slate-300">
          <FileText className="h-5 w-5 text-brand-cyan shrink-0" />
          <div className="flex-1 min-w-0 text-left">
            <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{value.name}</p>
            <p className="text-xs text-slate-500">{formatSize(value.size)}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              onChange(null);
              if (inputRef.current) inputRef.current.value = "";
            }}
            className="rounded-lg p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
            aria-label="Remove file"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />

      {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
};
