/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        persianorange: '#ED8845', //primary color
        oxfordblue: '#0E1C36', // secondary color (steel blue)
        sage: '#C8CC92', // accent color
        slategray: '#6E8894',
        rosetaupe: '#A26769',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Example of extending typography
      },
    },
  },
  plugins: [],
}
