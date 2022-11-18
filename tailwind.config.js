/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: '1065px',
        }
      },
      fontFamily: {
        'sans': ['Outfit'],
        'serif': ['Outfit'],
        'mono': ['Outfit'],
        'display': ['Outfit'],
        'body': ['Outfit']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}