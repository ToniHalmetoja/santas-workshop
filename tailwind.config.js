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
          defaultWithOpacity: "rgba(169, 3, 7, 0.8)",
          hover: "#740508",
          active: "#310203"
        },
        pearl: "#E7DEC9",
        crayolasGold: "#E2C289",
        backgroundTransparent: "rgba(0, 0, 0,0.5)",
        backgroundInput: "#C4C4C4",
        black: "#000000",
      },
      fontSize: {
        "h1": "72px",
        "h2": "48px",
        "h3": "36px",
        "bodyText": "20px",
        
        "newsletterButtonMobile": "18px",
        "newsLetterTextTablet": "24px",
        "newsLetterTextDesktop": "48px",
      },
      margin: {
        "28px": "28px",
      },
      width: {
        "newsletterWidthMobile": "219px",
        "newsletterInputWidthMobile": "108px",

        "newsletterWidthTablet": "283px",
        "newsletterInputWidthTablet": "140px",

        "newsletterWidthDesktop": "465px",       
        "newsletterInputWidthDesktop": "229px" 
      },
      height: {
        "newsletterHeigtMobile": "318px",
        "newsletterInputHeightMobile": "25px",
        "newsletterButtonHeightMobile": "32px",

        "newsletterHeigtTablet": "342px",
        "newsletterInputHeightTablet": "27px",
        "newsletterButtonHeightTablet": "35px",

        "newsletterHeigtDesktop": "523px",        
        "newsletterInputHeightDesktop": "41px",
        "newsletterButtonHeightDesktop": "52px",
      },
      borderRadius: {
        "newsLetter": "29px",
        "newsletterInput": "10px",
        "newsLetterButton": "20px",
      }
      
    },
  },
  plugins: [],
}
