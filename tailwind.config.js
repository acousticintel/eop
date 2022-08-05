// tailwind.config.cjs
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    color:{
      "eop": "#100351"
    },
    extend: {
      fontSize: {
        "12xl": "12rem",
        "16xl": "16rem",
      },
      fontFamily: {
        body: ["Raleway", ...defaultTheme.fontFamily.sans],
        heavy: ["Alfa Slab One", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
};
