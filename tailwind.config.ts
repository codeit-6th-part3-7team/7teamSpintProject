import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      height: {
        "400": "400px",
      },
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
      fontSize: {
<<<<<<< HEAD
        "8": "0.5rem",
        "9": "0.5625rem",
        "10": "0.625rem",
        "11": "0.6875rem",
        "12": "0.75rem",
        "13": "0.8125rem",
        "14": "0.875rem",
        "15": "0.9375rem",
        "16": "1rem",
        "17": "1.0625rem",
        "18": "1.125rem",
        "19": "1.1875rem",
        "20": "1.25rem",
        "24": "1.5rem",
        "30": "1.875rem",
=======
        "14": "0.875rem",
        "16": "1rem",
        "18": "1.125rem",
>>>>>>> d1f819a053d347994f42db6a68295f2024f77073
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
<<<<<<< HEAD
=======
        "20": "20px",
        "25": "25px",
>>>>>>> d1f819a053d347994f42db6a68295f2024f77073
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
  },
  plugins: [],
};
export default config;
