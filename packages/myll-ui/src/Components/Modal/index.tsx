import { Modal as AntdModal } from 'antd'
import { ReactNode, useState } from 'react'

import Button from '../Button/Button'

export const useModalHook = () => {
  const [open, setOpen] = useState(false)

  const onOpen = (func?: Function) => {
    setOpen(true)
    func?.()
  }

  const onSubmit = (func?: Function) => {
    setOpen(false)
    func?.()
  }

  const onCancel = (func?: Function) => {
    setOpen(false)
    func?.()
  }

  return { open, onOpen, onCancel, onSubmit }
}

export interface ModalProps {
  open: boolean
  onSubmit: () => void
  onCancel: () => void
  children: ReactNode

  submitButtonText: string
  cancelButtonText: string
}

const Modal = ({ open, onSubmit, onCancel, children, submitButtonText, cancelButtonText }: ModalProps) => {
  return (
    <>
      <AntdModal
        open={open}
        title=""
        onOk={onSubmit}
        onCancel={onCancel}
        width={300}
        centered
        closable={false}
        footer={[
          <div key="abc-footer" className="flex flex-col justify-end w-full h-full gap-[10px]">
            <Button type="button" variant="medium" color="primary" onClick={onSubmit}>
              {submitButtonText}
            </Button>
            {cancelButtonText.length > 0 && (
              <Button type="button" variant="medium" color="text" onClick={onCancel}>
                {cancelButtonText}
              </Button>
            )}
          </div>,
        ]}
      >
        {children}
      </AntdModal>
    </>
  )
}

export default Modal
