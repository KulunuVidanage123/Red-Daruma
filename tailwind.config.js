/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'scroll-x': 'scrollX 20s linear infinite',
      },
      screens: {
        sm: '640px',  //mobile
        md: '768px',   //tablet
        lg: '900px',   //laptop
        xl: '1280px',  //large desktop screens
        '2xl': '1536px',  //extra large screens
      }
    },
  },
  plugins: [],
}
