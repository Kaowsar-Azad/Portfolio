/** @type {import('tailwindcss').Config} */
const config = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7c3aed",
          light: "#a78bfa",
          dark: "#5b21b6",
        },
        secondary: {
          DEFAULT: "#06b6d4",
          light: "#67e8f9",
        },
        accent: "#f59e0b",
        dark: {
          DEFAULT: "#030712",
          card: "#0f172a",
          lighter: "#1e293b",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      animation: {
        "gradient-shift": "gradientShift 4s ease infinite",
        float: "float 6s ease-in-out infinite",
        blob: "blobAnimation 8s ease-in-out infinite",
        "pulse-ring": "pulseRing 2s ease-out infinite",
        "dot-pulse": "dotPulse 2s infinite",
        shimmer: "shimmer 2s infinite",
        blink: "blink 1s ease infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        blobAnimation: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        dotPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(124, 58, 237, 0.7)" },
          "70%": { boxShadow: "0 0 0 10px rgba(124, 58, 237, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
