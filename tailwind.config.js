/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1C22",
        secondary: "#DB202C",
      },
      container: {
        center: true,
        padding: "24px",
      },
    },
  },
  plugins: [],
};
