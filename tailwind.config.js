/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    colors: {
      // Primary
      verylightblue: 'hsl(220 100% 96%)',
      lightred: 'hsl(0 100% 67%)',
      orangey: 'hsl(39 100% 56%)',
      greenteal: 'hsl(166 100% 37%)',
      cobalt: 'hsl(234 85% 45%)',
      // Gradient related
      lightslateblue: 'hsl(252 100% 67%)',
      lightroyalblue: 'hsl(241 81% 54%)',
      violetblue: 'hsla(256 72% 46% / 1)',
      persianblue: 'hsla(241 72% 46% / 0)',
      // Neutral
      white: 'hsl(0 0% 100%)',
      paleblue: 'hsl(221 100% 96%)',
      lightlavender: 'hsl(241 100% 89%)',
      darkgrayblue: 'hsl(224 30% 27%)'
    },
    fontSize: {
      sm: '16px',
      base: '18px',
      md: '24px',
      lg: '32px',
      plg: '56px',
      xl: '72px'
    },
    extend: {
      fontFamily: {
        'hanken': ['Hanken Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
