/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';


export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,jsx,tsx,html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'sans' :['inter', 'sans-serif']
      }
    },
  },
  plugins: [tailwindScrollbar],
}