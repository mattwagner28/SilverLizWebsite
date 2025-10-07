/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '0' },
          '25%': { opacity: '1' },
          '75%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 6s ease-in-out forwards',
      },
      fontFamily: {
        garamond: ['Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};