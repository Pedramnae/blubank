/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        yekanr: ['yekanr'],
        yekanb: ['yekanb']
      },
      animation:{
        updown: 'updown 10s linear  infinite alternate'
      },
      keyframes:{
        updown:{
          '0%':{
            transform: 'translateY(0)'
          },
          '5%':{
            transform: 'translateY(0)'
          },
          '95%':{
            transform: 'translateY(50px)'
          },
          '100%':{
            transform: 'translateY(50px)'
          }
        }
      }
    },
  },
  plugins: [],
}