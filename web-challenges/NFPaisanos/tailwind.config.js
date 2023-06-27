/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['DM Sans', 'Roboto', 'sans-serif'],
      'alternative': ['Poppins', 'Roboto', 'sans-serif']
    },
    extend: {
      container: {
        padding: {
          DEFAULT: '2rem',
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
        'smaller': '0.84rem',
        '4xl': '2rem'
      },
      padding: {
        '0.75': '.2rem',
        '1.25': '.3rem'
      }
    },
  },
  safelist: [
    'border-custom-green',
    'border-custom-blue',
    'border-custom-black',
    'border-custom-pink',
    'border-custom-orange',
    'border-custom-red',
    'bg-custom-green',
    'bg-custom-blue',
    'bg-custom-black',
    'bg-custom-pink',
    'bg-custom-orange',
    'bg-custom-red',
    'text-custom-green',
    'text-custom-blue',
    'text-custom-black',
    'text-custom-pink',
    'text-custom-orange',
    'text-custom-red',
  ],
  plugins: [],
}
