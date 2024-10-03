/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#8dc63f",
        hoverGreen: "#80b92f",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [
    require('daisyui'),
  ],
}
