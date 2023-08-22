import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from 'myll-ui'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DatePicker> = {
  title: 'Example/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    className: 'gap-5',
  },
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const BasicDatePicker: Story = {
  args: {},
}
