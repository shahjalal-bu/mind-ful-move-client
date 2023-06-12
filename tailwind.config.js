/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSmoothing: ["antialiased"],
      fontFamily: {
        grandHotel: "'Grand Hotel', cursive",
        aleo: "'Aleo', serif",
        luckiestGuy: "'Luckiest Guy', cursive",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
