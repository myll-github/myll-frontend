import type { Meta, StoryObj } from '@storybook/react'
import { Input } from 'myll-ui'
import { useState } from 'react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Input>

export const BasicInput: Story = {
  render: (args) => {
    const [text, setText] = useState<string>()

    return <Input value={text} onChange={(e) => setText(e.target.value)} {...args} />
  },
  args: {
    label: 'Basic Input',
  },
}

export const NumberValidationInput: Story = {
  render: (args) => {
    const [text, setText] = useState<string>()

    return <Input value={text} onChange={(e) => setText(e.target.value)} {...args} />
  },
  args: {
    label: 'Number Input',
    placeholder: 'Only Number!',
    onValidation: (text?: string) => {
      if (text !== undefined) {
        if (String(parseInt(text, 10)) === String(text)) {
          return true
        }
        return false
      }
      return true
    },
  },
}
