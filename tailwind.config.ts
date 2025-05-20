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
    fontSize: {
      xs: [
        "12px",
        {
          lineHeight: "12px",
        },
      ],
      sm1: [
        "14px",
        {
          lineHeight: "14px",
        },
      ],
      sm11: [
        "14px",
        {
          lineHeight: "15px",
        },
      ],
      sm12: [
        "14px",
        {
          lineHeight: "17px",
        },
      ],
      sm13: [
        "14px",
        {
          lineHeight: "18px",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "16px",
        },
      ],
      base12: [
        "16px",
        {
          lineHeight: "19px",
        },
      ],
      base13: [
        "16px",
        {
          lineHeight: "21px",
        },
      ],
      lg: [
        "18px",
        {
          lineHeight: "18px",
        },
      ],
      lg11: [
        "18px",
        {
          lineHeight: "20px",
        },
      ],
      lg12: [
        "18px",
        {
          lineHeight: "22px",
        },
      ],
      lg13: [
        "18px",
        {
          lineHeight: "23px",
        },
      ],
      xl: ["20px", { lineHeight: "24px" }],
      "2xl": [
        "24px",
        {
          lineHeight: "24px",
        },
      ],
      "3xl": [
        "28px",
        {
          lineHeight: "28px",
        },
      ],
      "4xl": [
        "36px",
        {
          lineHeight: "36px",
        },
      ],
      "4xl12": [
        "36px",
        {
          lineHeight: "43px",
        },
      ],
      "5xl": [
        "48px",
        {
          lineHeight: "48px",
        },
      ],
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
        title20: "#F8F8F833",
        blackCustom: "#141414",
      },
      dropShadow: {},
      backgroundImage: {
        "radial-green-100": "radial-gradient(ellipse, transparent, #13D12F )",
        "radial-green-50": "radial-gradient(ellipse,  transparent, #13D12F80)",
      },
    },
  },
  plugins: [forms],
};
export default config;
