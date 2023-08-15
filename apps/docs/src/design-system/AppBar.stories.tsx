import type { Meta, StoryObj } from '@storybook/react'
import { AppBar } from 'myll-ui'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AppBar> = {
  title: 'Example/AppBar',
  component: AppBar,
  argTypes: {},

  render: (args) => (
    <div className="flex flex-row justify-center w-full">
      <AppBar {...args} />
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof AppBar>

export const BasicAppBarExample: Story = {
  args: {
    children: (
      <>
        <AppBar.LeftSection>
          <AppBar.FallbackButton />
        </AppBar.LeftSection>
        <AppBar.MiddleSection>example</AppBar.MiddleSection>
        <AppBar.RightSection>example</AppBar.RightSection>
      </>
    ),
  },
}
