import type { Meta, StoryObj } from '@storybook/react'
import { DataList } from 'myll-ui'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DataList> = {
  title: 'Example/DataList',
  component: DataList,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    className: 'gap-5',
  },
}

export default meta
type Story = StoryObj<typeof DataList>

export const BasicDataList: Story = {
  args: {},
}
