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
  args: {},
}
