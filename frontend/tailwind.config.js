/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        interRegular: ["Inter-Regular", 'sans-serif'],
        interBlack: ["Inter-Black", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

