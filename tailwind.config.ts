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
        verdigris: "#526c64",
        "verdigris-wash": "#dfe5dc",
      },
      fontFamily: {
        display: ["var(--font-big-daily-short)", "Playfair Display", "Georgia", "serif"],
        body: ["var(--font-basel-grotesk)", "Inter", "system-ui", "sans-serif"],
        utility: ["Arial", "system-ui", "sans-serif"],
      },
      fontSize: {
        caption: ["14px", { lineHeight: "1.2" }],
        body: ["20px", { lineHeight: "1.6" }],
        "body-mobile": ["18px", { lineHeight: "1.6" }],
        subheading: ["24px", { lineHeight: "1.25" }],
        heading: ["36px", { lineHeight: "1.25" }],
        "heading-lg": ["64px", { lineHeight: "1.12" }],
        display: ["86px", { lineHeight: "1" }],
      },
      lineHeight: {
        caption: "1.2",
        body: "1.6",
        subheading: "1.25",
        heading: "1.25",
        "heading-lg": "1.12",
        display: "1",
      },
      spacing: {
        2: "2px",
        4: "4px",
        5: "5px",
        6: "6px",
        8: "8px",
        9: "9px",
        10: "10px",
        11: "11px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        28: "28px",
        30: "30px",
        34: "34px",
        40: "40px",
        48: "48px",
        50: "50px",
        60: "60px",
        70: "70px",
        72: "72px",
        76: "76px",
        84: "84px",
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
