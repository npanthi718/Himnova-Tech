"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxLayerProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  offset?: ["start start" | "start end" | "end start" | "end end", "start start" | "start end" | "end start" | "end end"];
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  className = "",
  speed = 0.3,
  offset = ["start end", "end start"],
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 80, speed * -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y, opacity }}>{children}</motion.div>
    </div>
  );
};

interface ParallaxBackgroundProps {
  className?: string;
  speed?: number;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  className = "",
  speed = 0.15,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * -200]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div style={{ y }} className={className} />
    </div>
  );
};
