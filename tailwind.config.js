module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6A4E23', // Earth brown
        secondary: '#A9C8A5', // Earth green
        background: '#212121', // Dark mode
        text: '#E2E2E2', // Light gray text
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
