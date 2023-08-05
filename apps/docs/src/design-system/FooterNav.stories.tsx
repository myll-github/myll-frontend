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
  render: () => {
    return (
      <FooterNav>
        <FooterNav.BookIcon isActive />
        <FooterNav.HomeIcon isActive={false} />
        <FooterNav.LocalIcon isActive={false} />
        <FooterNav.MapIcon isActive={false} />
        <FooterNav.MyllIcon isActive={false} />
      </FooterNav>
    )
  },
  args: {},
}
