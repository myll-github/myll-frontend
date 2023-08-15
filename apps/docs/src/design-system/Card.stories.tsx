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
