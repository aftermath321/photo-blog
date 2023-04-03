/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        artist: "url('/artist.jpg')",
      },
      boxShadow: {},
    },
  },
  plugins: [],
};
