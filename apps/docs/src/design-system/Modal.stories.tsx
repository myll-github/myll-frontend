import type { Meta, StoryObj } from '@storybook/react'
import { Button, Modal, useModalHook } from 'myll-ui'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Modal> = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Modal>

export const BasicModalExample: Story = () => {
  const { open, onOpen, onCancel, onSubmit } = useModalHook()

  return (
    <div>
      <Button type="button" onClick={() => onOpen()}>
        click!
      </Button>

      <Modal open={open} onCancel={onCancel} onSubmit={onSubmit} submitButtonText="Ok" cancelButtonText="Cancel">
        <div>12323</div>
      </Modal>
    </div>
  )
}
