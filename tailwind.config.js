// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e8e3de', // Pastikan warna ini sudah didefinisikan
        secondary: '#a5bfe2',
        dark: '#a1663f',
        cream: '#c9a986'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
