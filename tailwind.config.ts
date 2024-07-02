import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        'sm': { max: "1279px" },
        'md': { min: "1280px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export default config;
