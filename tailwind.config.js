const postcss = require('tailwind-config/tailwind.config')

module.exports = {
  ...postcss,
  content: ['./src/**/*.{ts,tsx,js,tsx}', '../../packages/myll-ui/**/*.{js,ts,jsx,tsx}'],
}
