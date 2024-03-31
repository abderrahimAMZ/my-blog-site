/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : ["Roboto", "sans-serif"],
        serif : ["Merriweather", "serif"],
      },
      colors : {
        "dark-nav" : "#222327",
        "dark-nav-elements": "#41434E",
        "dark-highlight-bg": "#4E505C",
        "light-highlight-bg": "#fde2e4",
        "light-highlight-fg": "#CE4367",
        "dark-color": "#C1C2C6",
        "table-content-color": "#222327",
        "dark-code-bg": "#282830",
        "light-code-bg": "#011627",
        "quote-dark-bg": "#292A30",
        "quote-light-bg": "#F9FAFB",
        "quote-sidebar-bg": "#CCCBFF",
        "coolbear-bg": "#26241C",
        "coolbear-bg-border": "#736624",
        "coolbear-bg-light-border": "#FFEB81",
        "coolbear-bg-light": "#FEFDF6",


      }
      },
    },
}

