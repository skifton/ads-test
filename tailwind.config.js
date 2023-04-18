/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#03A9F4",
        secondary: "#343240",
        title: "#12101C",
      },
      screens: {
        desktop: "1440px",
        tablet: "1000px",
        mobile: "620px",
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        s: "20px",
      },
      backgroundImage: {
        'back': "url('/src/assets/background.png')",
      },
    },
  },
  plugins: [],
};
