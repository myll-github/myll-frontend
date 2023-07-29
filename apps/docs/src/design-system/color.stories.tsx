import type { Meta, Story, StoryObj } from '@storybook/react'
import { FooterNav } from 'myll-ui'
import Image from 'next/image'
import { COLOR } from 'shared'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof FooterNav> = {
  title: 'fordev',
  argTypes: {},

  parameters: {
    backgrounds: {
      default: 't',
      values: [
        {
          name: 't',
          value: '#e6eded',
        },
        {
          name: 'facebook',
          value: '#3b5998',
        },
      ],
    },
  },
}

export default meta

const Color = Object.entries(COLOR).map(([key, colorValue]) => {
  const regex = /#[a-zA-Z0-9]{1,6}/g

  const handleCopy = () => {
    navigator.clipboard.writeText(key)
  }

  return (
    <div
      className="flex flex-col w-[100px] h-[90px] items-center justify-center text-justify cursor-pointer"
      onClick={handleCopy}
    >
      <div
        key={key}
        className={`w-[100px] h-[50px] bg-${key}`}
        style={{ background: String(colorValue).replace(/;/g, '') }}
      />
      <div>{key}:</div>
      <div>{colorValue.match(regex)}</div>
    </div>
  )
})

export const ColorPallete = () => (
  <div>
    클릭시 color name 복사
    <div className="inline-flex flex-row flex-wrap w-[95%] justify-evenly gap-4">{Color}</div>
  </div>
)
