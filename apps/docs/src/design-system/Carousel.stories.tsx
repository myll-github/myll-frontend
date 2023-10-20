import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from 'myll-ui'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Carousel> = {
  title: 'Example/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Carousel>

export const CarouselExample: Story = {
  args: {
    children: [<div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>],
  },
}
