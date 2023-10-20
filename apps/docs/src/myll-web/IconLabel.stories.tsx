import type { Meta, StoryObj } from '@storybook/react'
import { IconLabel } from 'web'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof IconLabel> = {
  title: 'Example/IconLabel',
  component: IconLabel,
  argTypes: {},
  args: { label: 'CAMERA' },
}

export default meta

type Story = StoryObj<typeof IconLabel>

export const BasicIconLabelExample: Story = {
  args: {},
}
