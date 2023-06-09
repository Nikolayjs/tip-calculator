/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: 'hsl(172, 67%, 45%)',
      'dark-cyan': 'hsl(183, 100%, 15%)',
      'dark-grayish-cyan': 'hsl(186, 14%, 43%)',
      'grayish-cyan': 'hsl(184, 14%, 56%)',
      'light-grayish-cyan': 'hsl(185, 41%, 84%)',
      'very-light-grayish': 'hsl(189, 41%, 97%)',
      white: 'hsl(0, 0%, 100%)',
    },
    extend: {
      fontFamily: {
        main: ['Rubik'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
