/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EE5420',
        secondary: '#2C3E50',
        accent: '#E74C3C',
        background: '#F8F9FA',
        text: '#2C3E50',
        'text-light': '#6C757D',
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Open Sans', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
