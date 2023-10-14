import type { Meta, StoryObj } from '@storybook/react'
import { IconLabelContainer } from 'web'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof IconLabelContainer> = {
  title: 'Example/IconLabelContainer',
  component: IconLabelContainer,
  argTypes: {},
  args: { label: 'CAMERA' },
}

export default meta

type Story = StoryObj<typeof IconLabelContainer>

export const BasicIconLabelExample: Story = {
  args: {},
}
