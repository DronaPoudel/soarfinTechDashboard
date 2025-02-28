/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: '#4318FF',
        secondary: '#2B3674',
        background: '#F4F7FE',
      }
    },
  },
  plugins: [],
}