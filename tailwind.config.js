/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#fdf8f0',
          bg2: '#fff4e4',
          card: '#ffffff',
          gold: '#c47b1a',
          goldLight: '#e89a20',
          goldDark: '#9a5e10',
          text: '#3d2200',
          muted: '#8a6545'
        }
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      boxShadow: {
        card: '0 4px 24px rgba(196, 123, 26, 0.10)'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
