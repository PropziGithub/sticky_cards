import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        stickyWhite: '#ECEBE5',
        stickyBlack: '#27211E',
        stickyYellow: '#FCDF3D',
        stickyGreen: '#75B855',
        stickyOrange: '#FFAC00',
        stickyRed: '#FB5521',
        stickyPurple:'#FDB0F4',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
