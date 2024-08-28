/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.625rem",
      },
      fontFamily: {
        pre: ['"Pretendard Variable", Pretendard, sans-serif'],
        suit: ["SUIT Variable", "sans-serif"],
      },

      colors: {
        grayscale: {
          100: "#bcc3c7",
          200: "#9b9a90",
          500: "#6d7478",
          950: "#040404",
        },
        primary: {
          100: "#03cc5c",
          200: "#11d975",
          300: "#22be61",
          400: "#1BF008",
          500: "#03CCA8",
        },
        secondary: {
          100: "#01a9ff",
          200: "#4284f7",
        },
        tertiary: {
          100: "#e3a368",
          200: "#e39042",
        },
      },
      boxShadow: {
        "shadow/100": "0px 4px 4px 0px rgba(68,131,63,0.15)",
        "shadow/200": "0px 0px 2px 0px rgba(114,119,124,0.2)",
      },
      borderRadius: {
        none: 0,
        half: 50,
      },
    },
  },

  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
};
