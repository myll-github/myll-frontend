import type { Meta, StoryObj } from '@storybook/react'
import { BasicCard, Card } from 'myll-ui'
import Image from 'next/image'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Card> = {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Card>

export const BasicCardExample: Story = {
  render: (args) => (
    <BasicCard {...args}>
      <BasicCard.CardImage alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
      <BasicCard.SubTitle title="Sub Title" />
      <BasicCard.MainTitle title="Place Title" />
    </BasicCard>
  ),
  args: {},
}
