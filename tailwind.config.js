/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      primary: "#4C0070",
      secondary: "#79018C",
      thirdary: "#9A0680",
      white: "#fff",
      secondaryWhite: "#ccc",
      black: "#000",
      green: "#52DE99",
      yellow: "#F5EB67",
      orange: "#DE7E52",
      blue: "#8f95ff",
      red: "#f00",
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
};
