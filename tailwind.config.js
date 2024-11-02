/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Poppins"', "sans-serif"],
        paragraph: ['"Nunito Sans"', "sans-serif"],
      },
      colors: {
        main: ["#2F327D"],
        secondary: ["#F48C06"],
        tertiary: ["#696984"],
      },
    },
  },
  plugins: [],
};
