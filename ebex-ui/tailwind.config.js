/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-purple": "#131135",
        "c-purple-light": "#875EFF",
        "c-gray": "#9695B9",
      },
    },
  },
  plugins: [],
};
