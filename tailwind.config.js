/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // theme: {
  //   fontFamily: {
  //     custom: ['Noto Sans', 'sans-serif'], // Replace 'Roboto' with your chosen font
  //   },
  // },
   theme: {
    extend: {
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
      },
      colors: {
        pastelPeach: '#ffe5dd',
        pastelPeachDark: '#ffb8a6',
        textMuted: '#555555',
      }
    }
  },
  plugins: [],
}

