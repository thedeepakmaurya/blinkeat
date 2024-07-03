/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': { 'min': '320px', 'max': '639px' },

      'md': { 'min': '640px', 'max': '1023px' },

      'lg': { 'min': '1024px', 'max': '1279px' },

      'xl': { 'min': '1280px', 'max': '1535px' },

      '2xl': { 'min': '1536px' },
    },
    extend: {
      colors: {
        primaryBlue: '#0FA3B1',
        secondaryBlue: '#B5E2FA',
        offWhite: '#F9F7F3',
        wheatColor: '#EDDEA4',
        Orange: '#F7A072'
      }
    },
  },
  plugins: [],
}

