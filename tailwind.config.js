module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'home':"url('/public/images/WEBSITE-back-scaled.jpg')"
      }
    },
    colors: {
      'primary': '#F5F5F5',
      'footer-end': '#0A0A0A',
      'footer-start': '#212121'
    },
    fontFamily: {
      'main': ['"Jost"', 'sans-serif'],
    }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
