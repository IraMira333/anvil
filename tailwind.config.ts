import forms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tab: "768px",
      pc: "1440px",
    },
    extend: {
      fontFamily: {
        exo: ["var(--font-exo)"],
        robotoMono: ["var(--font-roboto-mono)"],
      },
      colors: {},
      dropShadow: {},
      backgroundImage: {},
    },
  },
  plugins: [forms],
};
export default config;
