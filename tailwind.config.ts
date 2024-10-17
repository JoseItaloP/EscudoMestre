import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        'tablet': '960px',
        'laptop': '1124px',
        'PC': '1536px',
        'largePC': '1940px',
        
      },
      colors: {
        "color1-1": {
          100: "#C48358",
          200: "#E69A67",
          300: "#fe7f2d",
          400: "#805539",
          500: "#66442E",
        },
        "color1-2": {
          100: "#2E5066",
          200: "#396580",
          300: "#233d4d",
          400: "#67B5E6",
          500: "#589AC4",
        },
      },
    },
  },
  plugins: [],
};
export default config;
