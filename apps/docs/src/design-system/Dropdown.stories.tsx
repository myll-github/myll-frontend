import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from 'myll-ui'
import { noop } from 'shared'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Dropdown> = {
  title: 'Example/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    DropdownTrigger: (
      <button type="button" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        click me
      </button>
    ),
  },
}

export default meta

type Story = StoryObj<typeof Dropdown>

export const BasicDropdownExample: Story = {
  args: {
    items: [
      {
        children: <div>1</div>,
        onClick: noop,
        key: '1',
      },
      {
        key: '2',
        children: <div>2</div>,
        onClick: noop,
      },
      {
        key: '3',
        children: <div>3</div>,
        onClick: noop,
      },
    ],
  },
}
