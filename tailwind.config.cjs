/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b1220",
        foreground: "#e6e9ef",
        primary: {
          DEFAULT: "#7c5cff",
          foreground: "#111016"
        },
        muted: "#0f172a",
        accent: "#1d2a44"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(124,92,255,0.35)"
      },
      backgroundImage: {
        'noise': "url('/noise.svg')",
        'grid': "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)"
      }
    },
  },
  plugins: [],
}
