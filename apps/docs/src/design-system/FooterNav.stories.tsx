import type { Meta, StoryObj } from '@storybook/react'
import { FooterNav } from 'myll-ui'
import Image from 'next/image'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof FooterNav> = {
  title: 'Example/FooterNav',
  component: FooterNav,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof FooterNav>

export const BasicFooterNavExample: Story = {
  args: {},
}
