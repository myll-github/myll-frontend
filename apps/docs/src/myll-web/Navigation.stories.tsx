import type { Meta, StoryObj } from '@storybook/react'
import { Navigation } from 'web'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Navigation> = {
  title: 'Example/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Navigation>

export const BasicFooterNavExample: Story = {
  args: {},
}
