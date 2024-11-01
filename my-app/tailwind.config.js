/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding:{
        pad100:"6.9444vw"
      },
      fontSize:{
        text18:"1.25vw",
      text32:"2.2222vw",
      text20:"1.3889vw",
        text16:"1.1111vw"
      },gap:{
        gap16:"1.1111vw"
      },backgroundColor:{
        backCfirst:"#ed9238",
        backseced:"#fae5d6"
      },
      textColor:{
        textitemcolor:"rgba(72, 102, 132, 1)",
        backCfirst:"#ed9238",
        textsecenf:"rgba(20, 19, 24, 1)"
      }
    },
  },
  plugins: [],
}