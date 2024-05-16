/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1e40af",
        secondary: "#7c3aed",
        Light:"#818cf8",
         Alight: '#e0e7ff'
      },
    },
  },
  plugins: [
   
  ],
}