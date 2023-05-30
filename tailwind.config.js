/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue': {
          '200' : '#ACD1FE',
          '300' : '#E1EEFF',
          '400' : '#A5CCFF',
          '500' : '#0466C8',
          '600' : '#0360D9',
          'text' : '#021526'
        }
      },
   
    },
    fontFamily: {
      'ibm': ['IBM Plex Sans','sans-serif'],
    }
  },
  plugins: [],
}

