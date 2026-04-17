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
        background: "var(--bg-base)",
        foreground: "var(--text-primary)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        heading: ["var(--font-epilogue)", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        accent: ["var(--font-instrument)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
