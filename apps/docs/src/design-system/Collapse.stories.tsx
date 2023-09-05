import type { Meta, StoryObj } from '@storybook/react'
import { Collapse } from 'myll-ui'

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const items = [
  {
    key: '1',
    mainTitle: 'DAY 1',
    subTitle: '8.25(월)',
    children: <p>{text}</p>,
  },
]

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Collapse> = {
  title: 'Example/Collapse',
  component: Collapse,
  tags: ['autodocs'],
  argTypes: {
    size: ['advanced', 'default'],
  },
  args: { items },
}

export default meta
type Story = StoryObj<typeof Collapse>

export const BasicCollapse: Story = {
  args: {},
}
