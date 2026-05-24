import typography from "@tailwindcss/typography";
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
        navy: "#0B2545",
        gold: "#B8860B",
        "near-black": "#1A1D24",
        "warm-gray": "#5A6472",
        "warm-white": "#FAF8F5",
        "muted-teal": "#2E6171",
        "success-green": "#2D7A4F",
        "alert-red": "#8B2E2E",
      },
      fontFamily: {
        display: ["Source Serif 4", "Georgia", "serif"],
        headline: ["Source Serif 4", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        utility: ["Inter", "system-ui", "sans-serif"],
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
      maxWidth: {
        editorial: "760px",
        "site-wide": "1120px",
      },
    },
  },
  plugins: [typography],
};

export default config;
