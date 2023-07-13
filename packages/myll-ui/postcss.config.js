const postcss = require('tailwind-config/postcss.config')

module.exports = {
  ...postcss,
  plugins: [require('tailwindcss')(), require('autoprefixer')()],
}
