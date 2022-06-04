module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(183, 100%, 15%)',
        'primary-light': 'hsl(186, 14%, 43%)',
        'primary-dark': 'hsl(184, 14%, 56%)',
        secondary: 'hsl(173, 61%, 77%)',
        'secondary-light': 'hsl(189, 41%, 97%)',
        tertiary: 'hsl(10, 44%, 59%)',
      },
      animation: {
        // number after 'fade' is the delay in seconds
        fade: '1.5s fadeInTop .3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'fade-1':
          '1.8s fadeInTop 1.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'fade-in-1':
          '1.8s fadeIn 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'fade-in-2':
          '1.8s fadeIn 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'fade-in-2.5':
          '1.8s fadeIn 2.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'slide-in-down':
          '1.5s slideInBckCntr 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: {
        fadeInTop: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInBckCntr: {
          '0%': {
            opacity: 1,
            transform: 'scaleY(0)',
            transformOrigin: '100% 0%',
          },
          '100%': {
            opacity: 1,
            transform: 'scaleY(1)',
            transformOrigin: '100% 0%',
          },
        },
      },
    },
  },
  plugins: [],
};
