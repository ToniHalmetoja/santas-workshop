module.exports = {
  content: ["public/*.html"],
  theme: {
    fontFamily: {
      "menu": ["Yellowtail"],
      "body": ["Source Sans Pro"]
    },
    extend: {
      colors: {
        primary: {
          default: "#63881D",
          hover: "#4F6D16",
          active: "#31440E",
          disabled: "rgba(49, 68, 14, 0.8)"
        },
        secondary: {
          default: "#A90307",
          hover: "#740508",
          active: "#310203"
        },
        pearl: "#E7DEC9",
        crayolasGold: "#E2C289",
        backgroundTransparent: "rgba(0, 0, 0,0.5)"
      },
      fontSize: {
        "h1": "72px",
        "h2": "48px",
        "h3": "36px",
        "bodyText": "20px",
      },
      margin: {
        "28px": "28px",
      },
      
    },
  },
  plugins: [],
}
