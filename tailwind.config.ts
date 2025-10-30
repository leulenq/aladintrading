import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        brand: {
          canvas: "#F6F1EB",
          surface: "#FFFFFF",
          mist: "#E9F0F8",
          blush: "#F4E5D6",
          accent: "#6FA6C7",
          accentSoft: "#9CC2D9",
          ink: "#243140",
          muted: "#5E6B7A",
          line: "#D8E0EB",
        },
      },
      borderRadius: {
        md: "10px",
        lg: "14px",
        xl: "18px",
        card: "16px",
      },
      boxShadow: {
        xs: "0 2px 4px rgba(36, 49, 64, 0.06)",
        sm: "0 6px 16px rgba(36, 49, 64, 0.08)",
        md: "0 12px 32px rgba(36, 49, 64, 0.12)",
        lg: "0 18px 48px rgba(36, 49, 64, 0.14)",
      },
      backgroundImage: {
        "hero-texture": "url('/texture.svg')",
        "noise-soft": "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\" fill=\"none\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.95\" numOctaves=\"2\"/></filter><rect width=\"200\" height=\"200\" filter=\"url(%23n)\" opacity=\"0.05\"/></svg>')",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
