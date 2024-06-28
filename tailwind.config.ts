import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          100: "#F7F7FA",
          200: "#E4E5F0",
          300: "#C6CADA",
          400: "#8F95B2",
          500: "#474D66",
          600: "#3B415B",
          800: "#474D66",
        },
        green: {
          100: "#EEF9F6",
          200: "#4CBFA4",
          300: "#32A68A",
        },
        red: {
          100: "#FBEDED",
          200: "#D14343",
        },
        purple: "#8E66FF",
        yellow: "#FDD181",
      },
    },
    fontSize: {
      "8": "0.5rem",
      "10": "0.625rem",
      "14": "1.14rem",
      "16": "1rem",
      "20": "1.25rem",
      "30": "1.875rem",
      "32": "2rem",
      "40": "2.5rem",
      "50": "3.125rem",
      "60": "3.75rem",
      "70": "4.375rem",
      "80": "5rem",
      "90": "5.625rem",
    },
    fontFamily: {
      pretendard: ["Pretendard", "sans-serif"],
      nexon: ["Nexon", "sans-serif"],
    },
    borderRadius: {
      "1/2": "50%",
    },
    lineHeight: {
      "20": "1.25rem",
      "30": "1.875rem",
      "40": "2.5rem",
      "60": "3.75rem",
      "70": "4.375rem",
      "100": "6.25rem",
    },
  },
  plugins: [],
};
export default config;
