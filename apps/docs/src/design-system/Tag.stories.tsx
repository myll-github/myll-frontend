import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from 'myll-ui'

const COLOR_MAP: { [id in string]: string } = {
  관광지: 'processing',
  문화시설: '',
  축제공연행사: 'cyan',
  여행코스: 'magenta',
  레포츠: 'blue',
  쇼핑: 'purple',
  음식점: 'gold',
  카페: 'green',
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Tag> = {
  title: 'Example/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
}

export default meta
type Story = StoryObj<typeof Tag>

export const BasicUploadCard: Story = {
  args: {
    contenttype: '문화시설',
  },
}

export const tags = () => {
  return (
    <div>
      {Object.entries(COLOR_MAP).map(([k, v]) => (
        <Tag contenttype={k} />
      ))}
    </div>
  )
}
