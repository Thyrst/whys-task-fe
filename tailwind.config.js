/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        buttonBg: '#575757',
        buttonHover: '#6e6e6e',
        buttonBorder: '#707070',
        basicText: '#F5F5F5',
        baseText: '#FFFFFF',
        headline: '#ECECEC',
        secondaryText: '#CCCCCC',
        cardBg: '#333333',
      },
    },
  },
  plugins: [],
};
