/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xs": "300px",
        "2xs": "400px",
        xs: "500px",
      },
    },
  },
  plugins: [],
};
