const shared = require('shared')
const TYPOGRAPHY = shared.TYPOGRAPHY
const COLOR = shared.COLOR

const plugin = require('tailwindcss/plugin')

const pxToVH = (px, base = 800) => `${(px / base) * 100}vh`
const pxToVW = (px, base = 360) => `${(px / base) * 100}vw`

const pxToRem = (px, base = 16) => `${px / base}rem`

/** @type {import('tailwindcss').Config} */
export default {
  content: ['../../packages/myll-ui/**/*.{ts,tsx}', './**/*.{ts,tsx}'],

  extend: {
    fontFamily: {
      pretendard: ['Pretendard', 'sans'],
    },
  },

  variants: {
    extend: {},
  },

  theme: {
    extend: {
      colors: {
        ...COLOR,
      },

      boxShadow: {
        SM: '0px 1px 3px 0px rgba(0, 0, 0, 0.20)',
        MD: '0px 4px 10px 0px rgba(0, 0, 0, 0.20)',
        LG: '0px 4px 16px 0px rgba(0, 0, 0, 0.20)',
        XL: '0px 16px 32px 0px rgba(0, 0, 0, 0.20)',
      },

      spacing: {
        ...Array.from({ length: 900 }, (_, i) => i + 1).reduce((acc, px) => {
          acc[`${px}pxr`] = pxToRem(px)
          return acc
        }, {}),

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
