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
      colors: {
        accent: "#63D706",
        error: "#FF2B27",
        text: "#cfcfcf",
        title: "#F8F8F8",
      },
      dropShadow: {},
      backgroundImage: {
        "radial-green": "radial-gradient(ellipse, transparent, #13D12F )",
      },
    },
  },
  plugins: [forms],
};
export default config;
