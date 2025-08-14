/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        'intrax-blue': '#1e4a72',
        'intrax-green': '#2c5530',
        'intrax-dark': '#1a1a1a',
        'intrax-light': '#f8fafc'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
