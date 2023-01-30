/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,

  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/styles/**/*.css"],

  //  purge: ["./src/**/*.{js,jsx,ts,tsx}", './src/styles/**/*.css'],

  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
