const shared = require('shared')
const TYPOGRAPHY = shared.TYPOGRAPHY
const COLOR = shared.COLOR

const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['../../packages/myll-ui/**/*.{ts,tsx}', './**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...COLOR,
      },
    },
  },
  /** @type {import('tailwindcss/types/config').PluginCreator} */
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({ ...TYPOGRAPHY })
    }),
  ],
}
