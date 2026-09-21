import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0F",
        surface: "#12121A",
        purple: {
          DEFAULT: "#7C3AED",
          dark: "#5B21B6",
        },
        orange: {
          DEFAULT: "#F97316",
          dark: "#EA580C",
        },
        border: "#1E1B4B",
        "text-primary": "#F1F5F9",
        "text-secondary": "#94A3B8",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
