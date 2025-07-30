/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        fast: '300ms',
        smoother: '500ms',
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        fadeInSlow: "fadeIn 1s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}
