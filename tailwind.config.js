module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        Ashish: 
        {
          50: '#fff1e5',
          100: '#fbd5b8',
          200: '#fab987',
          300: '#fa9d56',
          400: '#fa8129',
          500: '#e16915',
          600: '#af510f',
          700: '#7d3a09',
          800: '#4b2306',
          900: '#1a0b00',
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
          800: '#21222e',
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
