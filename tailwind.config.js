/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      orange: {
        100: "hsl(25, 100%, 94%)",
        200: "hsl(26, 100%, 55%)",
      },
      blue: {
        100: "hsl(223, 64%, 98%)",
        700: "hsl(220, 14%, 75%)",
        800: "hsl(219, 9%, 45%)",
        900: "hsl(220, 13%, 13%)",
      },
    },
    extend: {},
  },
  plugins: [],
};
