module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      grey: {
        light: "#E6E6E6",
        DEFAULT: "#EEEEEE",
        dark: "#BDBDBD",
      },
      blue: {
        DEFAULT: "#0070f3",
        navy: "#001f3f",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      red: {
        DEFAULT: "#FF0000",
      },
    },
    boxShadow: {
      default:
        "0px 2px 5px 0px rgba(0,0,0,0.14) , 0px 1px 10px 0px rgba(0,0,0,0.12) , 0px 2px 4px -1px rgba(0,0,0,0.2) ",
    },
  },
  plugins: [],
};
