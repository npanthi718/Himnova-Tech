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
          950: "#060B17", // Deep Obsidian Sapphire Midnight (from Himnova logo background)
          900: "#0C1322", // Dark Card Surface
          850: "#141D32", // Elevated Surface
          800: "#1E293B",
        },
        frost: {
          50: "#F8FAFC",  // Pure Frost White
          100: "#F1F5F9",
          200: "#E2E8F0",
        },
        brand: {
          cyan: "#00D8FF",   // Luminescent Electric Cyan (from Himnova logo swoop & halo)
          teal: "#0EA5E9",   // Neon Sky Teal
          blue: "#2563EB",   // Electric Sapphire Blue (from logo arrow)
          cobalt: "#1D4ED8", // Deep Cobalt Accent
          aqua: "#00F5D4",   // Circuit Board Aqua
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Outfit", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at 50% 0%, rgba(0, 216, 255, 0.18), rgba(37, 99, 235, 0.08) 45%, transparent 70%)",
        "card-glow": "radial-gradient(circle at top right, rgba(0, 216, 255, 0.12), transparent 60%)",
        "radial-dark": "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(0, 216, 255, 0.15), rgba(37, 99, 235, 0.05) 50%, transparent 100%)",
        "logo-gradient": "linear-gradient(135deg, #00D8FF 0%, #0EA5E9 40%, #2563EB 100%)",
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
