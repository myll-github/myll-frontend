const TYPOGRAPHY = require('shared').TYPOGRAPHY
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['../../packages/myll-ui/**/*.{ts,tsx}', './**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  /** @type {import('tailwindcss/types/config').PluginCreator} */
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({ ...TYPOGRAPHY })
    }),
  ],
}
