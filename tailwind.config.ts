import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#f0ebdd",
        inkwell: "#302f2c",
        "activated-black": "#000000",
        sunbeam: "#ffb801",
      },
      fontFamily: {
        display: ["var(--font-big-daily-short)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-basel-grotesk)", "Inter", "system-ui", "sans-serif"],
        utility: ["Arial", "system-ui", "sans-serif"],
      },
      fontSize: {
        caption: ["13px", { lineHeight: "1.2" }],
        body: ["18px", { lineHeight: "1.55" }],
        "body-mobile": ["17px", { lineHeight: "1.55" }],
        subheading: ["22px", { lineHeight: "1.25" }],
        heading: ["36px", { lineHeight: "1.25" }],
        "heading-lg": ["64px", { lineHeight: "1.12" }],
        display: ["86px", { lineHeight: "1" }],
      },
      lineHeight: {
        caption: "1.2",
        body: "1.55",
        subheading: "1.25",
        heading: "1.25",
        "heading-lg": "1.12",
        display: "1",
      },
      spacing: {
        8: "8px",
        9: "9px",
        10: "10px",
        12: "12px",
        14: "14px",
        18: "18px",
        30: "30px",
        40: "40px",
        60: "60px",
        90: "90px",
      },
      borderRadius: {
        links: "40px",
      },
      backgroundImage: {
        "sunbeam-gradient":
          "radial-gradient(41.33% 41.33%, rgb(255, 199, 56) 0px, rgba(248, 233, 226, 0) 100%)",
      },
      maxWidth: {
        editorial: "760px",
        "site-wide": "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
