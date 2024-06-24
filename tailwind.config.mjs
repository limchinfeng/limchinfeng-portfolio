/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        linear: "linear-gradient(to right, #2176AE, #157A6E)",
      },
      colors: {
        light: {
          background: "#F7FFFC",
          text: "#18181B",
          pale: "#D7D7D7",
        },
        dark: {
          background: "#343434",
          text: "#FFFFFF",
          pale: "#3A3A3D",
        },
      },
    },
  },
  plugins: [],
};
