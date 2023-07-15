const shared = require('shared')
const TYPOGRAPHY = shared.TYPOGRAPHY
const COLOR = shared.COLOR

const plugin = require('tailwindcss/plugin')

const pxToVH = (px, base = 800) => `${(px / base) * 100}vh`
const pxToVW = (px, base = 360) => `${(px / base) * 100}vw`

/** @type {import('tailwindcss').Config} */
export default {
  content: ['../../packages/myll-ui/**/*.{ts,tsx}', './**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...COLOR,
      },

      spacing: {
        ...Array.from({ length: 1000 }, (_, i) => i + 1).reduce((acc, px) => {
          acc[`${px}tvh`] = pxToVH(px)
          acc[`${px}tvw`] = pxToVW(px)
          return acc
        }, {}),
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
