/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        bgBody: '#C5E4E7',
        title: '#3D6666',
        darkGreen: '#00474B',
        lightGreen: '#F3F9FA',
        grayGreen: '#7F9D9F',
        blueGreen: '#26C2AE',
        heading: '#5E7A7D',
        icon: '#9EBBBD',
        custom: '#547878',
      },
      fontFamily: {
        body: ['Space Mono'],
      },
    },
  },
  plugins: [],
};
