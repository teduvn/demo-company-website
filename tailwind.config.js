/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'Inter', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#F0F4FF',
          100: '#DDE7FF',
          200: '#C3D6FF',
          300: '#9FBCFF',
          400: '#7898FF',
          500: '#5575FF',
          600: '#3D53F5',
          700: '#2E3FD8',
          800: '#2736AE',
          900: '#273489',
          950: '#1A2053',
        },
        accent: {
          50: '#FFF7EC',
          100: '#FFEDD3',
          200: '#FFD7A5',
          300: '#FFBD6D',
          400: '#FF9632',
          500: '#FF7A0A',
          600: '#FF5F00',
          700: '#CC4402',
          800: '#A1360B',
          900: '#822E0C',
          950: '#461504',
        },
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#052E16',
        },
        dark: {
          900: '#0B0F19',
          800: '#151B2B',
          700: '#1F2937',
          600: '#374151',
          500: '#6B7280',
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
}