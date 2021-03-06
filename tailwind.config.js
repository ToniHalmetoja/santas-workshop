module.exports = {
  content: ["public/*.html"],
  theme: {
    fontFamily: {
      "menu": ["Yellowtail"],
      "body": ["Source Sans Pro"]
    },
    extend: {
      keyframes: {        
        wiggle: {          
          "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
          "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
          "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
          "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
          "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
          "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
          "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
          "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
          "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
          "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
        },
      },
      animation: {        
        wiggle: 'wiggle 1s ease-in-out infinite',      
      },
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
        backgroundTransparent: "rgba(0, 0, 0,0.3)",
        backgroundInput: "#C4C4C4",
        black: "#000000",
      },
      dropShadow: {
        dropShadowNewsletterBtn: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontSize: {
        "h1": "44px",
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
      spacing: {
        "buttonSantaTabletLeft": "27%",
        "buttonSantaTabletBottom": "22%",
      },
      width: {
        "newsletterWidthMobile": "219px",
        "newsletterInputWidthMobile": "108px",

        "newsletterWidthTablet": "283px",
        "newsletterInputWidthTablet": "140px",

        "newsletterWidthDesktop": "465px",       
        "newsletterInputWidthDesktop": "229px",

        "santaButtonWidthMobile": "104px",
        "santaButtonWidthTablet": "185px",
        "santaButtonWidthDesktop": "310px",

        "santaImgWidth": "150%",
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

        "santaButtonHeighthMobile": "32px",
        "santaButtonHeighthTablet": "57px",
        "santaButtonHeighthDesktop": "100px",
      },
      minHeight: {
        "bodyHeight": "calc(100vh - 200px)",
      },
      borderRadius: {
        "newsLetter": "29px",
        "newsletterInput": "10px",
        "newsLetterButton": "20px",

        "santaButton": "20px",
        "santaButtonLg": "100px"
      }
      
    },
  },
  plugins: [],
}
