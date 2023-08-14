import type { Preview } from '@storybook/react'
import './index.css'
import React from 'react'
import { AntdConfigProvider } from 'myll-ui'

const preview: Preview = {
  decorators: [(Story) => <AntdConfigProvider>{Story()}</AntdConfigProvider>],

  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
