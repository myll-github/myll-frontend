import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from 'myll-ui'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Alert> = {
  title: 'Example/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {},
  args: { message: 'example' },
}

export default meta
type Story = StoryObj<typeof Alert>

export const SuccessAlert: Story = {
  args: { type: 'success' },
}

export const InfoAlert: Story = {
  args: { type: 'info' },
}

export const WarningAlert: Story = {
  args: { type: 'warning' },
}

export const ErrorAlert: Story = {
  args: { type: 'error' },
}
