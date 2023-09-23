/** @type {import('tailwindcss').Config} */
const { theme } = require("ui/src/styles/theme");

module.exports = {
  theme,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.style.{ts,tsx}",
    "../../packages/ui/src/**/*.web.{ts,tsx}",
  ],
};
