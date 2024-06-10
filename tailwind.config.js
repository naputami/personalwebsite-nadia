/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./src/**/*.{html,js}"],
  },
  theme: {
    extend: {},
    colors: {
      primary: {
        50: "#FEF9EC",
        100: "#FDF5DE",
        200: "#FAE9B7",
        300: "#F8DF96",
        400: "#F5D575",
        500: "#F3CA52",
        600: "#EFB815",
        700: "#B58B0D",
        800: "#775B08",
        900: "#3E3004",
        950: "#1D1602",
      },
      secondary: {
        50: "#DAFBF0",
        100: "#B5F8E0",
        200: "#6FF1C4",
        300: "#24EAA5",
        400: "#11B179",
        500: "#0A6847",
        600: "#085439",
        700: "#063C29",
        800: "#042A1D",
        900: "#02130D",
        950: "#010906",
      },
    },
    fontFamily: {
      sans: ["Mulish", "sans-serif"],
    },
  },
  plugins: [require("taos/plugin")],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
