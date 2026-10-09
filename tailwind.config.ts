import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C1694F", // Terracotta Warm
          hover: "#A8533B",
          light: "#F9ECE8",
          dark: "#8F3F29",
        },
        secondary: {
          DEFAULT: "#FFE97D", // Pastel Soft Yellow
          hover: "#FADB4E",
          light: "#FFFCE6",
        },
        neutral: {
          warm: "#EFE3D0", // Warm Cream / Off-White
          pink: "#F0D3D3", // Dusty Pastel Pink (Neutral-2nd)
          light: "#FAF7F2",
        },
        contrast: {
          DEFAULT: "#3A2E2A", // Dark Espresso / Dark Brown
          muted: "#6B5851",
          soft: "#94827B",
        },
        canvas: "#F5F5F5", // Light Gray Canvas Background
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "var(--font-outfit)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        sticker: "3px 3px 0px 0px #3A2E2A",
        "sticker-sm": "2px 2px 0px 0px #3A2E2A",
        "sticker-lg": "5px 5px 0px 0px #3A2E2A",
        "sticker-primary": "3px 3px 0px 0px #C1694F",
        soft: "0 10px 30px -10px rgba(58, 46, 42, 0.08)",
        "soft-hover": "0 20px 35px -10px rgba(193, 105, 79, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
