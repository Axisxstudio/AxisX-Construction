import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1320px" },
    },
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Space Grotesk', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        steel: {
          DEFAULT: "hsl(var(--steel))",
          foreground: "hsl(var(--steel-foreground))",
        },
        "surface-soft": "hsl(var(--surface-soft))",
        "surface-blue": "hsl(var(--surface-blue))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-in-up": { "0%": { opacity: "0", transform: "translateY(48px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-in-right": { "0%": { opacity: "0", transform: "translateX(-24px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
        "scale-in": { "0%": { opacity: "0", transform: "scale(0.93)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        "float": { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        "spin-slow": { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px 4px hsl(205 100% 58% / 0.3)" },
          "50%": { boxShadow: "0 0 40px 12px hsl(205 100% 58% / 0.6)" },
        },
        "slide-up": { "0%": { opacity: "0", transform: "translateY(60px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "width-expand": { "0%": { width: "0%" }, "100%": { width: "100%" } },
        "border-glow": {
          "0%, 100%": { borderColor: "hsl(205 100% 58% / 0.3)" },
          "50%": { borderColor: "hsl(205 100% 58% / 0.8)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.7s ease-out forwards",
        "fade-in-up": "fade-in-up 0.9s ease-out forwards",
        "fade-in-right": "fade-in-right 0.8s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out",
        "float": "float 5s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "slide-up": "slide-up 0.8s ease-out forwards",
        "width-expand": "width-expand 1.5s ease-out forwards",
        "border-glow": "border-glow 3s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(hsl(210 20% 92% / 0.03) 1px, transparent 1px), linear-gradient(90deg, hsl(210 20% 92% / 0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "48px 48px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
