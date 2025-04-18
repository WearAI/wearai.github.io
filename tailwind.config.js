/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': {
          '50': '#f5f3ff',
          '100': '#ede9fe',
          '200': '#ddd6fe',
          '300': '#c4b5fd',
          '400': '#a78bfa',
          '500': '#8b5cf6',
          '600': '#7c3aed',
          '700': '#6d28d9',
          '800': '#5b21b6',
          '900': '#4c1d95',
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'fade-left': 'fade-left 1s ease-out forwards',
        'fade-right': 'fade-right 1s ease-out forwards',
        'glow': 'glow 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}