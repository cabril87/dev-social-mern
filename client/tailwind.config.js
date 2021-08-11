module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "color-purple": "#5267DF",
        "color-red": "#FA5959",
        "color-blue": "#242A45",
        "color-grey": "#9194A2",
        "color-white": "#f7f7f7",
      },
      textColor: {
        'primary': '#3490dc',
        'secondary': "#FA5959",
        
      },
      fontFamily: {
        'amatic-sc': ['"Amatic SC"', 'cursive']
      }
    },
  },
  container: {
    center: true,
    padding: "1rem",
    screens: {
      lg: "1124px",
      xl: "1124px",
      "2xl": "1124px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
