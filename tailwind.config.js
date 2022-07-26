module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 3s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)",
          },
          "33%": {
            transform: "scale(.9) ",
          },
          "66%": {
            transform: "scale(.9) ",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
