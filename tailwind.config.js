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
        quick: ['--font-quicksand)', ...fontFamily.sans],
      },
      colors: {
        background: '#1a1a1a',
        primary: '#f6f6f6',
        highlight: '#4cd963',
        fade: '#626262',
        focus: '#FF4655',
      },
    },
  },
  plugins: [],
}
