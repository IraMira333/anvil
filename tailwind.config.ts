import forms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const clipPath = require("tailwind-clip-path");

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
      "2xl13": [
        "24px",
        {
          lineHeight: "31px",
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
        hoverAccent: "#88F035",
        error: "#FF2B27",
        text: "#cfcfcf",
        title: "#F8F8F8",
        title20: "#F8F8F833",
        blackCustom: "#141414",
        black30: "#303030",
        corner: "#CCCCCC",
      },
      clipPath: {
        "hex-notch":
          "polygon(0 45px, 16px 15px, calc(50% - 94px) 15px, calc(50% - 83px) 0, calc(50% + 83px) 0, calc(50% + 94px) 15px, calc(100% - 16px) 15px, 100% 45px, 100% 100%, 0 100%)",
        "hex-notch-tab":
          "polygon(0 73px, 50px 23px, calc(50% - 171px) 23px, calc(50% - 150px) 0, calc(50% + 150px) 0, calc(50% + 171px) 23px, calc(100% - 50px) 23px, 100% 73px, 100% 100%, 0 100%)",
        "hex-notch-galery":
          "polygon(0 45px, 16px 15px, calc(50% - 93px) 15px, calc(50% - 82px) 2px, calc(50% + 82px) 2px, calc(50% + 93px) 15px, calc(100% - 16px) 15px, 100% 45px, 100% 0, 100% calc(100% - 30px), calc(100% - 16px) 100%, calc(50% + 92.5px) 100%, calc(50% + 82px) calc(100% - 13px), calc(50% - 81.3px) calc(100% - 13px), calc(50% - 92.5px) 100%, 16px 100%, 0 calc(100% - 30px))",
        "hex-notch-galery-tab":
          "polygon(0 73px, 50px 25px, calc(50% - 170px) 25px, calc(50% - 149px) 2px, calc(50% + 150px) 2px, calc(50% + 169px) 25px, calc(100% - 50px) 25px, 100% 73px, 100% 0, 100% calc(100% - 50px), calc(100% - 23px) 100%, calc(50% + 169px) 100%, calc(50% + 150px) calc(100% - 23.5px), calc(50% - 149.4px) calc(100% - 23.5px), calc(50% - 170px) 100%, 23px 100%, 0 calc(100% - 50px))",

        "down-cut-mobile-service":
          "polygon(0 0, 16px 30px, calc(50% - 94px) 30px, calc(50% - 82px) 16px, calc(50% + 82px) 16px, calc(50% + 94px) 30px, calc(100% - 16px) 30px, 100% 0, 100% calc(100% - 30px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 30px))",
        "down-cut-tab-service":
          "polygon(0 0, 50px 50px, calc(50% - 169px) 50px, calc(50% - 149px) 27px, calc(50% + 149.5px) 27px, calc(50% + 168.5px) 50px, calc(100% - 50px) 50px, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 50px 100%, 0 calc(100% - 50px))",
        "down-cut-mobile":
          "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 30px))",
        "down-cut-tab":
          "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 50px 100%, 0 calc(100% - 50px))",
      },
      dropShadow: {},
      backgroundImage: {
        "radial-green-100": "radial-gradient(ellipse, transparent, #13D12F )",
        "radial-green-50": "radial-gradient(ellipse,  transparent, #13D12F80)",
        "radial-green-button":
          "radial-gradient(circle,  transparent, #13D12F80)",
      },
    },
  },
  plugins: [forms, clipPath],
};
export default config;
