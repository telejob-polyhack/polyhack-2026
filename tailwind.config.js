/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutralBox: "#4b5563",
        darkbg: '#111827',
      }
    },
  },
  plugins: [],
};