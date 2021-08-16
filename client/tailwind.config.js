module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      colors: {
        "color-purple": "#5267DF",
        "color-red": "#FA5959",
        "color-blue": "#242A45",
        "color-grey": "#9194A2",
        "color-white": "#f7f7f7",
        "color-hot-blue" : "rgb(0,172,220)"
      },
      textColor: {
        'primary': '#3490dc',
        'secondary': "#FA5959",
        
      },
      fontFamily: {
        'amatic-sc': ['"Amatic SC"', 'cursive']
      },
      zIndex: {
        'auto': 'auto',
        'n2': -2,
        'n1': -1,
        '0': 0,
        '1': 1,
        '2': 2
      }
    },
  },
  container: {
    center: true,
    padding: "1rem",
    screens: {
      xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
      sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
      lg: { min: '1200px' }, // Desktop smallest.
      xl: { min: '1159px' }, // Desktop wide.
      xxl: { min: '1359px' } // Desktop widescreen.
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
