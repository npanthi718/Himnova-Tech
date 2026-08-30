"use client";

import React from "react";
import Image from "next/image";

interface BrandMarkProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

export const BrandMark: React.FC<BrandMarkProps> = ({ size = 40, className = "", priority = false }) => {
  return (
    <span
      className={`relative inline-flex shrink-0 overflow-hidden rounded-full ring-2 ring-brand-cyan/70 shadow-[0_0_20px_rgba(6,182,212,0.28)] ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logos/icon-circle.png"
        alt="Himnova Technologies"
        fill
        sizes={`${size}px`}
        className="object-cover"
        priority={priority}
      />
    </span>
  );
};
