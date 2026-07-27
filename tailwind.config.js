/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
     extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-hover": "rgb(var(--surface-hover) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        "brand-fg": "rgb(var(--brand-fg) / <alpha-value>)",
        "footer-background": "rgb(var(--footer-background) / <alpha-value>)",
        "footer-foreground": "rgb(var(--footer-foreground) / <alpha-value>)",
        ink: {
          950: "#05070d",
          900: "#0a0e17",
          800: "#111827",
          700: "#1c2536",
        },
        brand: {
          50: "#eef9f4",
          100: "#d6f0e2",
          200: "#aee1c6",
          300: "#7ccca5",
          400: "#48ad81",
          500: "#279065",
          600: "#1a7452",
          700: "#175d43",
          800: "#154a37",
          900: "#123d2e",
        },
        accent: {
          400: "#ffb454",
          500: "#f79b2e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgb(var(--grid-color) / var(--grid-opacity)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--grid-color) / var(--grid-opacity)) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(39,144,101,0.35), 0 8px 30px -8px rgba(39,144,101,0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
}

