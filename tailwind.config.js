/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js,jsx}",
  ],
  theme: {
    
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "wireframe", "nord"],
  },
 
}