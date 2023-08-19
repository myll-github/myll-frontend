import type { Meta, StoryObj } from '@storybook/react'
import { MenuList } from 'myll-ui'

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  mainTitle: `ant design part ${i}`,
  img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  subTitle: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}))

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MenuList> = {
  title: 'Example/MenuList',
  component: MenuList,
  tags: ['autodocs'],
  argTypes: {},
  args: { data },
}

export default meta
type Story = StoryObj<typeof MenuList>

export const BasicMenuList: Story = {
  args: {},
}
