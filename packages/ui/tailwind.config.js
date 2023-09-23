/** @type {import('tailwindcss').Config} */
const {theme} = require('./src/styles/theme')

module.exports = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme,
  plugins: [],
};
