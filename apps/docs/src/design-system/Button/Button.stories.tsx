import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'myll-ui'

import ExampleButton from './Example'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  tags: ['autodocs'],
  component: Button,
  args: {
    variant: 'large',
    children: 'button',
    disabled: false,
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'large',
  },
}

export const Large: Story = {
  render: (args) => <ExampleButton {...args} />,
  args: {
    variant: 'large',
  },
}

export const Medium: Story = {
  render: (args) => <ExampleButton {...args} />,
  args: {
    variant: 'medium',
  },
}

export const Small: Story = {
  render: (args) => <ExampleButton {...args} />,
  args: {
    variant: 'small',
  },
}

export const Link: Story = {
  args: {
    variant: 'mini',
  },
}
