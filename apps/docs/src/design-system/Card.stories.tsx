import type { Meta, StoryObj } from '@storybook/react'
import { CardContainer } from 'myll-ui'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CardContainer> = {
  title: 'Example/CardContainer',
  component: CardContainer,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    className: 'gap-5',
  },
}

const ExampleData = [
  {
    id: 1,
    subTitle: 'apple',
    mainTitle: 'apple',
    alt: '1',
    url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  },
  {
    id: 2,
    subTitle: 'apple2',
    mainTitle: 'apple2',
    alt: '1',
    url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  },
  {
    id: 3,
    subTitle: 'apple3',
    mainTitle: 'apple3',
    alt: '1',
    url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  },
  {
    id: 4,
    subTitle: 'apple4',
    mainTitle: 'apple4',
    alt: '4',
    url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  },
  {
    id: 5,
    subTitle: 'apple5',
    mainTitle: 'apple5',
    alt: '5',
    url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  },
  {
    id: 6,
    subTitle: 'apple6',
    mainTitle: 'apple6',
    alt: '6',
    url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  },
  {
    id: 7,
    subTitle: 'apple7',
    mainTitle: 'apple7',
    alt: '7',
    url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  },
  {
    id: 8,
    subTitle: 'apple8',
    mainTitle: 'apple8',
    alt: '8',
    url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  },
]

export default meta
type Story = StoryObj<typeof CardContainer>

export const BasicCardContainer: Story = {
  args: {
    data: ExampleData,
    cardType: 'basic',
  },
}

export const HorizontalCardContainer: Story = {
  args: {
    data: ExampleData,
    cardType: 'horizontal',
  },
}

export const RoundCardContainer: Story = {
  args: {
    data: ExampleData,
    cardType: 'round',
  },
}
