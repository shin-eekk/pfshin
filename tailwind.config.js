/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main': '#FD6C2E',
        'main-bg': '#FDFAF6',
        'white': 'rgba(255, 255, 255, 1)',
        'black' : '#111111',
        'bg-gray': '#f3f3f3',
        'tripblue': '#0051D3',
        'tripyellow': '#FFDA00',
        'tripgreen':'#3EB489',
        'tripsun':'#FF7F50',

      },
      fontSize: {
        'mainIntro': '7rem', 
        'huge': '4rem', //48
        'big': '2.5rem', //40
        'semibig': '2rem', 
        'mediumbig': '1.75rem',
        'medium': '1.5rem',
        'semismall': '1.25rem',
        'small': '1rem',
        'desc': '0.875rem',
        'm-small': '0.75rem',
      },
      dropShadow: {
        'custom': '1px 1px 5px rgba(0,0,0,0.25)',
      },
      fontFamily: {
        nanum: ['Nanumsquare', 'sans-serif'],
        tway: ['twaysky','sans-serif'],
        inter:['inter', 'sans-serif'],
        jamsil: [ 'TheJamsil', 'sans-serif'],
      },

      maxWidth: {
        '1920': '1920px',
        '1440': '1440px',
        '1080': '1080px'
      },
      minHeight: {
        '1080': '1080px',
        '726' :'726px',
      }
    },
  },
  plugins: [],

  
}
