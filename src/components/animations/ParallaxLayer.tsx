"use client";

import React from "react";

interface ParallaxLayerProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};

interface ParallaxBackgroundProps {
  className?: string;
  speed?: number;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  className = "",
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className={`will-change-transform ${className}`} />
    </div>
  );
};
