/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#313338",
        secondary: "#2B2D31",
        accent: "#1E1F22",
        complementary: "#23A559",
        "tx-primary": "#FFFFFF",
        "tx-secondary": "#81858B",
        "icons-primary": "#DBDEE1",
      },
      fontFamily: {
        "abc-ginto-nord": ["ABC Ginto Nord Unlicensed Trial", "sans-serif"],
        "gg-sans-normal": ["gg sans normal", "sans-serif"],
        "gg-sans-bold": ["gg sans", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1100px",
      xl: "1280px",
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
