import type { Meta, StoryObj } from '@storybook/react'
import { InfiniteBanner } from 'myll-ui'

const data = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
}))

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof InfiniteBanner> = {
  title: 'Example/InfiniteBanner',
  component: InfiniteBanner,
  argTypes: {},
  args: { data },
}

export default meta

type Story = StoryObj<typeof InfiniteBanner>

export const BasicFooterNavExample: Story = {
  args: {},
}
