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
            transform: "translate(0px) scale(1)",
          },
          "33%": {
            transform: "translate(10px) scale(.9)",
          },
          "66%": {
            transform: "translate(-10px) scale(.9)",
          },
          "100%": {
            transform: "translate(0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
