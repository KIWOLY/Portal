/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         colors: {
        darkgray: "#212529", 
        darkgray2: "#2B3035",
      },
    },
  },
  plugins: [],
}

