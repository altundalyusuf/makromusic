/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'sans': ['Alata', 'sans-serif'],
      },
      colors: {
        primary: '#14B1B9',
        primaryActive: '#0F9AA7',
        line18: '#ECEEEB',
        headerBlack: '#101828',
      }
    },
  },
  plugins: [],
};
