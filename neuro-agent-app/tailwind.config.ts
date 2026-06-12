import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        "primary": "#dbfcff",
        "on-primary": "#00363a",
        "primary-container": "#00f0ff",
        "on-primary-container": "#006970",
        "inverse-primary": "#006970",
        "primary-fixed": "#7df4ff",
        "primary-fixed-dim": "#00dbe9",
        "on-primary-fixed": "#002022",
        "on-primary-fixed-variant": "#004f54",
        // Secondary
        "secondary": "#dcb8ff",
        "on-secondary": "#480081",
        "secondary-container": "#7701d0",
        "on-secondary-container": "#dcb7ff",
        "secondary-fixed": "#efdbff",
        "secondary-fixed-dim": "#dcb8ff",
        "on-secondary-fixed": "#2c0051",
        "on-secondary-fixed-variant": "#6700b5",
        // Tertiary
        "tertiary": "#fff5de",
        "on-tertiary": "#3b2f00",
        "tertiary-container": "#fed639",
        "on-tertiary-container": "#715d00",
        "tertiary-fixed": "#ffe179",
        "tertiary-fixed-dim": "#eac324",
        "on-tertiary-fixed": "#231b00",
        "on-tertiary-fixed-variant": "#554500",
        // Surface
        "surface": "#131313",
        "surface-dim": "#131313",
        "surface-bright": "#3a3939",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1c1b1b",
        "surface-container": "#201f1f",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353534",
        "surface-variant": "#353534",
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#b9cacb",
        "inverse-surface": "#e5e2e1",
        "inverse-on-surface": "#313030",
        // Background
        "background": "#0e0e0e",
        "on-background": "#e5e2e1",
        // Outline
        "outline": "#849495",
        "outline-variant": "#3b494b",
        // Surface Tint
        "surface-tint": "#00dbe9",
        // Error
        "error": "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.25rem",
        xl: "0.5rem",
        "2xl": "0.75rem",
        full: "9999px",
      },
      spacing: {
        base: "4px",
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "40px",
        xl: "64px",
        "margin-mobile": "16px",
        "margin-desktop": "48px",
        gutter: "20px",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        headline: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        sora: ["var(--font-sora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        jetbrains: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-base": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "mono-label": ["12px", { lineHeight: "1.0", letterSpacing: "0.05em", fontWeight: "500" }],
        "mono-reasoning": ["13px", { lineHeight: "1.7", letterSpacing: "0em", fontWeight: "400" }],
      },
      keyframes: {
        scan: {
          "0%": { top: "0%", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        scanH: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.1", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(1.05)" },
        },
        "scan-vertical": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
      },
      animation: {
        scan: "scan 3s linear infinite",
        scanH: "scanH 3s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "scan-vertical": "scan-vertical 4s linear infinite",
        blink: "blink 1s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
