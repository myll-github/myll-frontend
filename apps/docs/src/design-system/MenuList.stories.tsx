import type { Meta, StoryObj } from '@storybook/react'
import { MenuList } from 'myll-ui'

const data = Array.from({ length: 23 }).map((_, i) => ({
  id: i,
  href: 'https://ant.design',
  img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  mainTitle: `ant design part ${i}`,
  subTitle: 'Ant Design',
}))

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MenuList> = {
  title: 'Example/MenuList',
  component: MenuList,
  tags: ['autodocs'],
  argTypes: {
    size: ['advanced', 'default'],
  },
  args: { data },
}

export default meta
type Story = StoryObj<typeof MenuList>

export const BasicMenuList: Story = {
  args: {},
}

export const SelectedMenuList: Story = {
  args: {
    isSelectedButtonNeeded: true,
  },
}

export const AdvancedMenuList: Story = {
  args: {
    size: 'advanced',
  },
}
