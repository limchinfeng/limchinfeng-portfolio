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
        title: "#0090C1",
        light: {
          background: "#F7FFFC",
          text: "#383838",
          pale: "#D7D7D7",
          hover: "#004D89",
        },
        dark: {
          background: "#343434",
          text: "#E2E2E2",
          pale: "#3A3A3D",
          hover: "#90DDF0",
          border: "#9CA3AF",
        },
      },
    },
  },
  plugins: [],
};
