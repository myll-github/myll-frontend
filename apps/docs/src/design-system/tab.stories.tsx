import type { Meta, StoryObj } from '@storybook/react'
import { Tab } from 'myll-ui'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Tab> = {
  title: 'Example/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Tab>

export const BasicTabExample: Story = {
  args: {
    defaultActiveKey: '1',
    items: [
      {
        key: '1',
        label: `Tab 1`,
        children: `Content of Tab Pane 1`,
      },
      {
        key: '2',
        label: `Tab 2`,
        children: `Content of Tab Pane 2`,
      },
      {
        key: '3',
        label: `Tab 3`,
        children: <div>test</div>,
      },
    ],
  },
}
