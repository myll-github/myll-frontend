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
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
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
