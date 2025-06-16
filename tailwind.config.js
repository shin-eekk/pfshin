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
        'tripyellow': 'FFDA00',
        'tripgreen':'3EB489',
        'tripsun':'FF7F50',

      },
      fontSize: {
        'main-slide': '4rem', //64
        'huge': '3rem', //48
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
        nanum: [
          "'Nanumsquare300'",
          "'Nanumsquare400'",
          "'Nanumsquare500'",
          "'Nanumsquare600'",
          'sans-serif'],
        tway: ['twaysky', 'sans-serif'],
        inter:[
          'inter',
          'inter600',
          'sans-serif',
        ],
        jamsil: [
          "'TheJamsil100'",
          "'TheJamsil300'",
          "'TheJamsil400'",
          "'TheJamsil500'",
          "'TheJamsil700'",
          "'TheJamsil800'",
          'sans-serif',
        ],
        
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
