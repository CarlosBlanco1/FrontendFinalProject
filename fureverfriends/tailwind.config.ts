import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./authentication/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#d9c4a9"
      },
      fontFamily: {
        title: ["TitleFont", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
