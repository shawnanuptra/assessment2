// const colors = require('tailwindcss/colors')

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
        // gray: colors.neutral,
        // gray: {
        //   900: '#202225',
        //   800: '#2f3136',
        //   700: '#36393f',
        //   600: '#4f545c',
        //   400: '#d4d7dc',
        //   300: '#e3e5e8',
        //   200: '#ebedef',
        //   100: '#f2f3f5',
        // }
      }
    },
  },
  plugins: [],
}