/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideUpFirst: 'slideUp 4s ease-in-out 5s infinite',
        slideDownSecond: 'slideDown 4s ease-in-out 10s infinite', 
      },
      keyframes: {
        slideUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        slideDown: {
          '0%, 50%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}

