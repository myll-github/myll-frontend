import type { Meta, StoryObj } from '@storybook/react'
import { BasicCard, Card, HorizontalCard, RoundCard } from 'myll-ui'
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
      <BasicCard.Description subTitle={args.subTitle} mainTitle={args.mainTitle} />
    </BasicCard>
  ),
  args: {
    subTitle: 'Sub Title',
    mainTitle: 'Place Title',
  },
}

export const HorizontalCardExample: Story = {
  render: (args) => (
    <HorizontalCard {...args}>
      <HorizontalCard.CardImage alt="example" src="http://tong.visitkorea.or.kr/cms/resource/34/2869134_image2_1.jpg" />
      <HorizontalCard.Description subTitle={args.subTitle} mainTitle={args.mainTitle} />
    </HorizontalCard>
  ),
  args: {
    subTitle: 'Sub Title',
    mainTitle: 'Place Title',
  },
}

export const RoundCardExample: Story = {
  render: (args) => (
    <RoundCard {...args}>
      <RoundCard.CardImage alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
      <RoundCard.Description subTitle={args.subTitle} mainTitle={args.mainTitle} />
    </RoundCard>
  ),
  args: {
    subTitle: 'Sub Title',
    mainTitle: 'Place Title',
  },
}
