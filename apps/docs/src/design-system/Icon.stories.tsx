import type { Meta, StoryObj } from '@storybook/react'
import { FooterNav } from 'myll-ui'
import Image from 'next/image'
import * as Icons from 'shared'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof FooterNav> = {
  title: 'Example/Icon',
  argTypes: {},
}

export default meta

const ICONS = Object.entries(Icons)
  .filter(([key, value]) => key.startsWith('ICON'))
  .map(([key, value]) => {
    return { key, IconComponent: value }
  })

console.log(ICONS)

export const IconExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      색깔은 fill, color를 통해 맞추세요
      {ICONS.map(({ key, IconComponent }) => {
        return (
          <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <div style={{ width: '280px' }}>{key} :</div> <IconComponent />
          </div>
        )
      })}
    </div>
  )
}
