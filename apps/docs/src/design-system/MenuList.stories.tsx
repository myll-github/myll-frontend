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
  args: { data },
}

export default meta
type Story = StoryObj<typeof MenuList>

export const BasicMenuList: Story = {
  args: {
    children: <MenuList.DefaultMenuList />,
  },
}

export const SelectedMenuList: Story = {
  args: {
    children: <MenuList.DefaultMenuList isSelectedButtonNeeded />,
  },
}

const dataWithRecommend = Array.from({ length: 23 }).map((_, i) => ({
  id: i,
  href: 'https://ant.design',
  img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  mainTitle: `ant design part ${i}`,
  subTitle: 'Ant Design',
  isRecommend: i % 2 === 0,
  recommendCount: i,
}))

export const MediumnMenuList: Story = {
  args: {
    data: dataWithRecommend,
    children: <MenuList.MediumMenuList onRecommendButtonClicked={(id: number) => {}} />,
  },
}
