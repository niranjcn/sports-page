/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        shield: 'polygon(50% 0%, 100% 20%, 85% 100%, 15% 100%, 0% 20%)',
      },
    },
  },
  plugins: [],
}
