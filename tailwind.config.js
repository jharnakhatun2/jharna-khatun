/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
 
}