/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.html"],
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
    },
  },
  plugins: [],
};
