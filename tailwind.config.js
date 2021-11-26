const colors = require("tailwindcss/colors");

module.exports = {
  
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        woodsmoke: {
          50: "#f3f3f3",
          100: "#e8e8e8",
          200: "#c5c5c5",
          300: "#a3a3a3",
          400: "#5d5d5d",
          500: "#181818",
          600: "#161616",
          700: "#121212",
          800: "#0e0e0e",
          900: "#0c0c0c",
        },
        shark: {
          50: "#f4f4f4",
          100: "#e9e9e9",
          200: "#c7c7c7",
          300: "#a6a6a6",
          400: "#636363",
          500: "#202020",
          600: "#1d1d1d",
          700: "#181818",
          800: "#131313",
          900: "#101010",
        },
        alabaster: {
          50: "#ffffff",
          100: "#ffffff",
          200: "#fefefe",
          300: "#fdfdfd",
          400: "#fcfcfc",
          500: "#fafafa",
          600: "#e1e1e1",
          700: "#bcbcbc",
          800: "#969696",
          900: "#7b7b7b",
        },
        "havelock-blue": {
          50: "#f2fbff",
          100: "#e6f7ff",
          200: "#bfeaff",
          300: "#99ddff",
          400: "#4dc4ff",
          500: "#00aaff",
          600: "#0099e6",
          700: "#0080bf",
          800: "#006699",
          900: "#00537d",
        },
        edward: {
          50: "#fafbfb",
          100: "#f6f7f7",
          200: "#e8eaea",
          300: "#d9dddd",
          400: "#bdc4c4",
          500: "#a1aaaa",
          600: "#919999",
          700: "#798080",
          800: "#616666",
          900: "#4f5353",
        },
        "silver-chalice": {
          50: "#fbfbfb",
          100: "#f7f7f7",
          200: "#eaeaea",
          300: "#dddddd",
          400: "#c4c4c4",
          500: "#AAAAAA",
          600: "#999999",
          700: "#808080",
          800: "#666666",
          900: "#535353",
        },
        "medical-blue": {
          50: "#f2fafc",
          100: "#e6f5f8",
          200: "#bfe6ee",
          300: "#99d7e4",
          400: "#4db8cf",
          500: "#009ABB",
          600: "#008ba8",
          700: "#00748c",
          800: "#005c70",
          900: "#004b5c",
        },
        tuatara: {
          50: "#f5f5f5",
          100: "#ebebeb",
          200: "#cecece",
          300: "#b1b1b1",
          400: "#767676",
          500: "#3B3B3B",
          600: "#353535",
          700: "#2c2c2c",
          800: "#232323",
          900: "#1d1d1d",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};