import type { Config } from "tailwindcss";

// Extend the Config type to include daisyUI properties
type ExtendedConfig = Config & {
  daisyui?: {
    themes?: Array<Record<string, Record<string, string>>>;
    darkTheme?: string;
    base?: boolean;
    styled?: boolean;
    utils?: boolean;
    logs?: boolean;
  };
};

const config: ExtendedConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        secondary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
  daisyui: {
    themes: [
      {
        lingodbt: {
          primary: "#0ea5e9",
          secondary: "#a855f7",
          accent: "#22c55e",
          neutral: "#374151",
          "base-100": "#f8fafc",
          info: "#3b82f6",
          success: "#22c55e", 
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
  },
};
export default config;
