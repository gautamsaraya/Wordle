/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBackground: '#e3e3e1', // Custom background color
      },
      fontFamily: {
        karnak: ['nyt-karnakcondensed', 'sans-serif'], // Custom font family
      },
    },
  },
  plugins: [],
}
