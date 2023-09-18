/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "app-purple": "#a445ed",
      "app-red": "#ff5252",
      "app-black-1": "#050505",
      "app-black-2": "#1f1f1f",
      "app-black-3": "#2d2d2d",
      "app-black-4": "#3a3a3a",
      "app-grey-1": "#757575",
      "app-grey-2": "#e9e9e9",
      "app-grey-3": "#f4f4f4",
      white: "#ffffff",
    },
    extend: {
      boxShadow: {
        custom: "0 5px 30px 0px rgba(164, 69, 237, 1)",
      },
    },
  },
  plugins: [],
};
