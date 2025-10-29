import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0A0A0A",
          white: "#FFFFFF",
          bg: "#F7F8FA",
          ink: "#0F1720",
          muted: "#6B7280",
          line: "#E5E7EB",
          accent: "#B6E3FF",
        },
      },
      borderRadius: {
        md: "10px",
        lg: "14px",
        xl: "18px",
        card: "16px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(15, 23, 32, 0.08)",
        sm: "0 4px 12px rgba(15, 23, 32, 0.08)",
        md: "0 8px 24px rgba(15, 23, 32, 0.12)",
        lg: "0 16px 40px rgba(15, 23, 32, 0.12)",
      },
      backgroundImage: {
        "hero-texture": "url('/texture.svg')",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
