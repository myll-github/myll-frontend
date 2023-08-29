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
    children: <MenuList.DefaultMenuItem />,
  },
}

export const SelectedMenuList: Story = {
  args: {
    children: <MenuList.DefaultMenuItem isSelectedButtonNeeded />,
  },
}

const COLOR_MAP = Object.keys({
  관광지: 'processing',
  문화시설: '',
  축제공연행사: 'cyan',
  여행코스: 'magenta',
  레포츠: 'blue',
  쇼핑: 'purple',
  음식점: 'gold',
  카페: 'green',
})

const dataWithRecommend = Array.from({ length: 23 }).map((_, i) => ({
  id: i,
  href: 'https://ant.design',
  img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  mainTitle: `ant design part ${i}`,
  subTitle: 'Ant Design',
  isRecommend: i % 2 === 0,
  recommendCount: i,
  contenttype: COLOR_MAP[i % COLOR_MAP.length],
}))

export const MediumnMenuList: Story = {
  args: {
    data: dataWithRecommend,
    children: <MenuList.MediumMenuItem onRecommendButtonClicked={(id: number) => {}} />,
  },
}

export const LargeMenuList: Story = {
  args: {
    itemLayout: 'vertical',
    data: dataWithRecommend,
    children: <MenuList.LargeMenuItem onRecommendButtonClicked={(id: number) => {}} />,
  },
}
