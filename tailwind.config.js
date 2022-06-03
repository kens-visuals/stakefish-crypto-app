module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(183, 100%, 15%)',
        'primary-light': 'hsl(186, 14%, 43%)',
        'primary-dark': 'hsl(184, 14%, 56%)',
        secondary: 'hsl(173, 61%, 77%)',
        'secondary-light': 'hsl(189, 41%, 97%)',
        tertiary: 'hsl(10, 44%, 59%)',
      },
    },
  },
  plugins: [],
};
