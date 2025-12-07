import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // existing CSS-variable based tokens
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        surface: "var(--surface)",
        border: "var(--border)",

        // ---- soft light theme palette ----
        // main soft primary set (optional use)
        primarySoft: "#5B6EE1",
        primarySoftLight: "#8EA3F4",
        primarySoftDark: "#3A4CCB",

        // accents you liked
        lavender: "#C7B9FF", // soft artistic accent
        peach: "#FFD9C8",    // warm section highlight
        skyTint: "#E7F1FF",  // light backgrounds

        // gentle neutrals
        softBg: "#F8F8FA",
        softBorder: "#E6E6EC",
        headingText: "#1F1F1F",
        bodyText: "#4A4A4A",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
