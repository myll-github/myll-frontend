import type { Meta, StoryObj } from '@storybook/react'
import { TopNavigationBar } from 'myll-ui'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TopNavigationBar> = {
  title: 'Example/TopNavigationBar',
  component: TopNavigationBar,
  argTypes: {},

  render: (args) => (
    <div className="w-full flex flex-row justify-center">
      <TopNavigationBar {...args} />
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof TopNavigationBar>

export const BasicTopNavigationBarExample: Story = {
  args: {
    children: (
      <>
        <TopNavigationBar.LeftSection>
          <TopNavigationBar.FallbackButton />
        </TopNavigationBar.LeftSection>
        <TopNavigationBar.MiddleSection>example</TopNavigationBar.MiddleSection>
        <TopNavigationBar.RightSection>example</TopNavigationBar.RightSection>
      </>
    ),
  },
}
