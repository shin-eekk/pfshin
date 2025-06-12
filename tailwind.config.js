/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // src 내부 모든 html/js/jsx/ts/tsx 파일 검사
  theme: {
    extend: {
      colors: {
        'main': '#FD6C2E',
        'main-bg': '#FDFAF6',
        'white': 'rgba(255, 255, 255, 1)',
        'black' : '#111111',
        'bg-gray': '#f3f3f3',
      },
      fontSize: {
        'main-slide': '4rem',
        'huge': '3rem',
        'big': '2.5rem',
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
        inter:['inter','sans-serif'],
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
    },
  },
  plugins: [],
}
