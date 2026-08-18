import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        alpine: {
          950: "#0B0F19", // Deep Alpine Midnight
          900: "#111827", // Dark Card Surface
          850: "#1E293B", // Elevated Surface
          800: "#334155",
        },
        frost: {
          50: "#F8FAFC",  // Pure Frost White
          100: "#F1F5F9",
          200: "#E2E8F0",
        },
        brand: {
          cyan: "#06B6D4", // Electric Cyan
          teal: "#0EA5E9", // Neon Teal
          cobalt: "#1E3A8A", // Deep Cobalt Accent
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Outfit", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.15), transparent 70%)",
        "card-glow": "radial-gradient(circle at top right, rgba(14, 165, 233, 0.08), transparent 50%)",
        "radial-dark": "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(14, 165, 233, 0.15), rgba(255, 255, 255, 0))",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "float": "float 8s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "icon-pulse": "icon-pulse 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 15px rgba(6, 182, 212, 0.2)" },
          "100%": { boxShadow: "0 0 35px rgba(6, 182, 212, 0.5)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "icon-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.08)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("light", ".light &");
    }),
  ],
};

export default config;
