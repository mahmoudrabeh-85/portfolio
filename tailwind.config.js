/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./*.html",
    "./js/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#D4A843", "primary-container": "#B8953A", "background": "#1a1a28",
        "surface-dim": "#20202e", "surface": "#222230", "surface-variant": "#33334a",
        "on-surface": "#f0ebf5", "on-surface-variant": "#b8b0c4", "secondary": "#00ffcc",
        "tertiary": "#ffe04a", "outline": "#7a718a", "surface-container-low": "#252534",
        "surface-container": "#2a2a3c", "surface-container-high": "#33334a", "surface-container-highest": "#3d3d55",
      },
      borderRadius: { DEFAULT: "0.125rem", lg: "0.25rem", xl: "0.5rem", full: "0.75rem" },
      spacing: {
        "margin-mobile": "20px", "container-max": "1440px", "gutter": "24px",
        "margin-desktop": "64px", "stack-xl": "80px", "stack-sm": "8px",
        "stack-md": "24px", "stack-lg": "48px",
      },
      fontFamily: { headline: ["Sora"], display: ["Sora"], body: ["Inter"], label: ["Space Grotesk"] },
      fontSize: {
        "headline-lg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "500" }],
        "display": ["80px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "800" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')],
}