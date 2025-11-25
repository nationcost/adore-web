/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blurple: '#5865F2',
        'blurple-dark': '#4752C4',
        dark: {
          950: '#000000',
          900: '#050505',
          800: '#0A0A0A',
          750: '#111111',
          700: '#161616',
          600: '#262626',
        },
        misa: {
          100: '#FFE4E9',
          200: '#FFB7C5',
          300: '#FF8FAB',
          400: '#FB6F92',
          500: '#E11D48',
        },
        matte: {
          black: '#000000',
          brown: '#1A1A1A',
          accent: '#333333',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.2s ease-out forwards',
        'menu-spring': 'menuSpring 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        menuSpring: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(-20px) scale(0.96)', 
            filter: 'blur(10px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) scale(1)', 
            filter: 'blur(0px)' 
          },
        }
      },
    },
  },
  plugins: [],
}