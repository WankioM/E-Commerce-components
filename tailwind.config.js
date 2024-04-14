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
        neowhite: '#FFFFFF70',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Example of extending typography
        montserrat: ['Montserrat', 'sans-serif'],
        libre_baskerville: ['Libre Baskerville', 'serif'],
        craketest_light: ['Craketest Light', 'sans-serif'],
        craketest_medium: ['Craketest Medium', 'sans-serif'],
        craketest_regular: ['Craketest Regular', 'sans-serif'],
        craketest_semibold: ['Craketest Semibold', 'sans-serif'],
        craketest_bold: ['Craketest Bold', 'sans-serif'],
      },
      },
    },
  
  plugins: [],
}

