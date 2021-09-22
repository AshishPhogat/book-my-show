module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        Ashish: 
        {
          50: '#ffe3ed',
          100: '#ffb3c7',
          200: '#fb839e',
          300: '#f95371',
          400: '#f62457',
          500: '#dc0d4b',
          600: '#ac0646',
          700: '#7c033a',
          800: '#4c0028',
          900: '#1f0010',
        },
        bms :
        {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#2b3147',
          900: '#0a0a16',
        }

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
