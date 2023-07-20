import type { Meta, StoryObj } from '@storybook/react'
import { Card, RoundCard } from 'myll-ui'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Card> = {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Card>

export const Round: Story = {
  render: (args) => <RoundCard {...args} />,
  args: {
    mainTitle: 'Europe Street beat',
    subTitle: 'www.instagram.com',
  },
}
