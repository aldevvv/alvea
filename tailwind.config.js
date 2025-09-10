/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#7C1D2B',
          50: '#F5E8EA',
          100: '#EAD1D5',
          200: '#D5A3AB',
          300: '#C07581',
          400: '#AB4757',
          500: '#7C1D2B',
          600: '#6B1825',
          700: '#5A131F',
          800: '#490F19',
          900: '#380A13',
        },
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FAF7F0',
          100: '#F5EFE1',
          200: '#EBDFC3',
          300: '#E1CFA5',
          400: '#D7BF87',
          500: '#D4AF37',
          600: '#B8962E',
          700: '#9C7D25',
          800: '#80641C',
          900: '#644B13',
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}