import { Modal } from 'myll-ui'
import { useState } from 'react'

import useBookPageStore from '@/stores/useBookPageStore'

interface SetPlanMemoModalProps {
  id: number
  open: boolean
  date: number
  onClose: () => void
}

const SetPlanMemoModal = (props: SetPlanMemoModalProps) => {
  const { id, date, open, onClose } = props

  const { plans, setPlans } = useBookPageStore()
  console.log(plans)
  const [text, setText] = useState<string>('')

  const handleSubmit = () => {
    setPlans({
      ...plans,
      memos: [
        ...plans.memos.filter((memo) => memo.date !== date),
        {
          date,
          itemIndex: id,
          memo: text,
        },
      ],
    })
    onClose()
  }

  return (
    <Modal open={open} onCancel={onClose} cancelButtonText="취소" submitButtonText="저장" onSubmit={handleSubmit}>
      <div className="INPUT-LABEL2 mb-10pxr">메모</div>
      <div className="w-full h-150pxr">
        <textarea
          className="w-full h-full pl-10pxr pr-10pxr resize-none rounded-[2px] border-[1px] border-solid border-GRAY_30 focus:ring-0 focus:outline-none"
          value={text}
          placeholder="메모는 300자 이내로 작성되어야 합니다."
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
      </div>
    </Modal>
  )
}

export default SetPlanMemoModal
