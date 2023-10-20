import moment from 'moment'
import { DatePicker, Input, Modal } from 'myll-ui'
import { useRouter } from 'next/router'

import useBookPageStore from '@/stores/useBookPageStore'

interface SetPlanInfoModalProps {
  open: boolean
  onClose: () => void
}

const SetPlanInfoModal = (props: SetPlanInfoModalProps) => {
  const { open, onClose } = props
  const { planTitle, startDate, endDate, setPlanInfo, setPlans } = useBookPageStore()

  const router = useRouter()
  return (
    <Modal
      open={open}
      onCancel={onClose}
      cancelButtonText="취소"
      submitButtonText="일정 등록"
      onSubmit={() => {
        setPlans({
          startDate: moment(startDate, 'M월 D일').valueOf(),
          endDate: moment(endDate, 'M월 D일').valueOf(),
          planDetails: [],
          title: planTitle,
          memos: [],
        })
        onClose()
        router.push('/book/add/plan')
      }}
    >
      <div className="h-150pxr flex flex-col items-center gap-20pxr">
        <div className="w-full">
          <Input
            label="여행 정보"
            placeholder="여행 제목을 입력해주세요."
            value={planTitle}
            onChange={(e) => {
              setPlanInfo({ planTitle: e.target.value, startDate, endDate })
            }}
          />
        </div>
        <DatePicker.RangePicker
          format="M월 D일"
          className="w-full"
          allowClear={false}
          onChange={(_, values) => {
            setPlanInfo({ planTitle, startDate: values[0], endDate: values[1] })
          }}
        />
      </div>
    </Modal>
  )
}

export default SetPlanInfoModal
