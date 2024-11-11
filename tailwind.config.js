/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blackBg:'#151419',
        pink:'#F3274C',
        darkGreen:'#283618',
        lightGreen:'#606C38',
        skin:'#FEFAE0',
        lightOrange:'#DDA15E',
        darkOrange:'#BC6C25',
        mustard:'#FFAA00',
        yellow:'#FFCC00',
      }
      ,
      fontFamily: {
        Fredoka: ['Fredoka', 'sans-serif'], 
        
      },
    },
  },
  plugins: [],
}

