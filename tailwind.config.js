// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          900: "#4b2e2e",
          800: "#6b3e2e",
          700: "#8b5e3c",
        },
        amber: require("tailwindcss/colors").amber,
      },
    },
  },
  plugins: [],
}
