/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0d9488",
        secondary: "#64748b",
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
};
