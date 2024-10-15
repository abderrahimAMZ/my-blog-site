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
      gridTemplateRows : {
        "layout" : "0.5 0.4 0.1",
        "layout2" : "auto 1fr auto",
        "layout3" : "repeat(3, minmax(0, 1fr))",
        "three" : "1fr 1fr 1fr",
      },
      gridTemplateColumns : {
        "two-cols" : "1fr 1fr",
        "three-cols" : "1fr 1fr 1fr",
        "four-cols" : "1fr 1fr 1fr 1fr",
        "five-cols" : "1fr 1fr 1fr 1fr 1fr",
      },
      colors : {
        "dark-nav" : "#222327",
        "dark-card" : "#292A30",
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
        "smartbear-bg": "#333333",
        "smartbear-bg-border": "#5E6067",
        "smartbear-bg-light-border": "#CCE3F9",
        "smartbear-bg-light": "#F6F9FF",


      }
      },
    },
}

