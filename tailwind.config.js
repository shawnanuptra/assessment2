const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bubbles: "url('./vectors/bubbles.svg')",
        primaryGradient: "linear-gradient(to right, #FF1F1F, #FB7722);",
        reverseGradient: "linear-gradient(to right, #FB7722, #FF1F1F);",
      },
      colors: {
        accentOrange: '#FB7722',
        primaryRed: '#FF1F1F',
        gray: {
          500: '#C4C4C4'
        },
        yellowBorder: '#FFBA08',
        yellowText: '#EFAC00',
        greenBorder: '#4C9900'
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'hidden',
          'scrollbar-width': 'hidden',
        }
      })
    })],
}