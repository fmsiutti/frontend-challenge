/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },  
      flexBasis: {
        '7/10': '70%',
        '3/10': '30%',
      },
      colors: {
        'dark-grey': 'rgb(20, 20, 24)',
        'main-grey': 'rgb(35, 38, 47)',
        'medium-grey': 'rgb(53, 57, 69)',
        'light-grey': 'rgb(120, 126, 144)',
        'lighter-grey': 'rgb(177, 181, 195)',
        'custom-green': 'rgb(68, 178, 107)',
        'custom-orange': 'rgb(254, 135, 4)',
        'custom-blue': 'rgb(55, 114, 255)',
        'custom-black': 'rgb(0, 0, 0)',
        'custom-red': 'rgb(252, 3, 1)',
        'custom-pink': 'rgb(239, 70, 111)',
        'main-blue': 'rgb(55, 114, 255)',
        'light-blue': 'rgb(108, 151, 252)'
      },
      fontSize: {
        'xs': '0.77rem'
      },
      padding: {
        '0.75': '.2rem',
        '1.25': '.3rem'
      }
    },
  },
  plugins: [],
}
