import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pcrTeal: {
          50: "#F4FAFA",
          100: "#E6F2F2",
          200: "#CDE4E5",
          300: "#9DC7C9",
          400: "#85B8BA",
          500: "#6C9EA0",
          600: "#558384",
          700: "#3F6667",
          800: "#2A4849",
          900: "#162929",
        },
        pcpPurple: {
          50: "#F9F9FD",
          100: "#E6E7F7",
          200: "#CDD0EF",
          300: "#9EA3DD",
          400: "#878ED8",
          500: "#6C72B6",
          600: "#545998",
          700: "#3D4177",
          800: "#282B55",
          900: "#151730",
        },
        pdpBlue: {
          50: "#F7F8FE",
          100: "#E8EDFC",
          200: "#D1DCF9",
          300: "#A6BAF0",
          400: "#91A9EA",
          500: "#748BCB",
          600: "#596FA9",
          700: "#455580",
          800: "#323C54",
          900: "#161F33",
        },
        pcaBlue: {
          50: "#EDF8FF",
          100: "#CEEBFF",
          200: "#B0DEFF",
          300: "#77C3FA",
          400: "#5CB5F6",
          500: "#4494D5",
          600: "#1E6AA1",
          700: "#184A6C",
          800: "#0F2635",
          900: "#010203",
        },
      }
    },
  },
  plugins: [],
};
export default config;
