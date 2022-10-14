/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: { /* nomeando tamnhos de fontes */
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: { /* nomeando cores das fontes */
      trasparent: 'transparent',
    
      black: '#000000',
      white: '#ffffff',

      'gray-900': '#7C7C8A',
      'gray-500': '#cbd5e1',
      'gray-300': '#e2e8f0',

      'cyan-700': '#81d8f7',
      'cyan-300': '#b9ecfe',

      'darkblue': '#01013f',

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
