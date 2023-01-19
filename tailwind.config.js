// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
        quick: ['var(--font-quicksand)', ...fontFamily.sans],
        oswald: ['var(--font-oswald)', ...fontFamily.sans],
      },
      colors: {
        background: '#1a1a1a',
        primary: '#f6f6f6',
        highlight: '#4cd963',
        fade: '#626262',
        focus: '#FF4655',
        lightGray: '#d3d3d3',
      },
      backgroundImage: {
        gradient1: 'linear-gradient(136.35deg, #FF3055 0%, #EB54FE 100%)',
      },
    },
  },
  plugins: [],
}
