import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#000000",
        night: "#020130",
        sunny: "#FFE14A",
        morning: "#FF7C53",
        rain: "#FF64D4",
        snow: "#42C6FF",
        grey: "#DCDCDC",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1441px",
        "3xl": "1921px",
      },
    },
  },
  plugins: [],
};

export default config;
