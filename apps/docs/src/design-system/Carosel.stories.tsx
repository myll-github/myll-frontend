import type { Meta, StoryObj } from '@storybook/react'
import { CustomCarosel } from 'myll-ui'

const data = Array.from({ length: 4 }).map((_, i) => ({
  id: i,
  img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
}))

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CustomCarosel> = {
  title: 'Example/CustomCarosel',
  component: CustomCarosel,
  tags: ['autodocs'],
  args: { data },
}

export default meta
type Story = StoryObj<typeof CustomCarosel>

export const BasicCustomCarosel: Story = {}
