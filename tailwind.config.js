/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B0E14',
          900: '#0F1219',
          850: '#141824',
          800: '#1A1F2E',
          700: '#232A3D',
          600: '#2D3548',
        },
        gold: {
          50: '#FBF6E8',
          100: '#F5EBC8',
          200: '#EBD9A0',
          300: '#E0C77C',
          400: '#D4AF37',
          500: '#C5A059',
          600: '#A8842F',
          700: '#876A26',
          800: '#5E4A1B',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(212,175,55,0.3)' },
        },
      },
    },
  },
  plugins: [],
};
