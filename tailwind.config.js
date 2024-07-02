/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        'be-vietnam-pro': 'Be Vietnam Pro, sans-serif'
      },
      colors: {
        'orange': 'hsl(12, 88%, 59%)',
        'dark-blue': 'hsl(228, 39%, 23%)',
        'grayish-blue': 'hsl(227, 12%, 61%)',
        'darker-blue': 'hsl(233, 12%, 13%)',
        'pale-orange': 'hsl(12, 92%, 72%)',
        'paler-orange': 'hsl(13, 100%, 96%)',
        'light-gray': 'hsl(0, 0%, 98%)'
      },
    },
  },
  plugins: [],
}