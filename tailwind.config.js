/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // This should cover all JS/TS files
  ],
  theme: {
    extend: {
      colors: {
        "pale-yellow": "#f7f2e6",
        "light-yellow": "#faf8ef",
      },
    },
  },
  plugins: [],
};
