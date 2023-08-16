import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      theme: {
        container: {
          center: true,
          padding: "1rem",
        },
        colors: {
          current: "currentColor",
          transparent: "transparent",
          "body-color": "#DCDCDC",
          white: "#FFFFFF",
          black: "#000000",
          night: "#020130",
          sunny: "#FFE14A",
          morning: "#FF7C53",
          rain: "#FF64D4",
          snow: "#42C6FF",
        },
        screens: {
          sm: "480px", // 480px and below (phone landscape & smaller)
          md: "768px", // 768px and below (tablet)
          lg: "1024px", // 1024px and below (tablet landscape)
          xl: "1280px", // 1280px and below (desktop)
          "2xl": "1441px", // 1441px and below (xlarge screens)
          "3xl": "1921px", // 1921px and below (xxlarge screens)
        },
      },
    },
  },
  plugins: [],
};

export default config;
