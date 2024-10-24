/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': 'var(--bg-color-primary)',
        'secondary': 'var(--bg-color-secondary)'
      }),
      backgroundImage: theme => ({
        'gradient': 'var(--bg-gradient)',
      }),
      keyframes: {
        twinkle: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        twinkle: 'twinkle 1.5s infinite alternate',
      },
    },
  },
  plugins: [],
}

