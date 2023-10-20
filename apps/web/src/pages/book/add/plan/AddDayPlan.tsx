import { Alert, Button, Steps } from 'myll-ui'
import { useRouter } from 'next/router'
import { useState } from 'react'

import useBookPageStore from '@/stores/useBookPageStore'

import SetPlanMemoModal from '../../modal/SetPlanMemoModal'

interface AddDayPlanProps {
  itemIndex: number
  date: number
}

const AddDayPlan = (props: AddDayPlanProps) => {
  const { date, itemIndex } = props
  const [openMemo, setOpenMemo] = useState<boolean>(false)

  const { plans } = useBookPageStore()
  const currentData = plans.planDetails.filter((detail) => detail.date === date)
  const currentMemos = plans.memos.filter((memo) => memo.date === date)

  const router = useRouter()
  return (
    <div>
      {currentData.length === 0 && (
        <Alert
          type="warning"
          message="아직 등록된 여행 장소가 없어요!"
          isVisible
          onVisibleChange={() => {}}
          closable={false}
        />
      )}
      {currentData.length > 0 && (
        <Steps
          direction="vertical"
          items={currentData.map((data) => ({ title: data.title, description: data.subtitle }))}
        />
      )}
      <div className="w-full h-60pxr flex justify-center items-center gap-30pxr">
        <Button
          type="button"
          variant="medium"
          color="outlined"
          onClick={() => router.push(`/book/add/place?date=${date}`)}
        >
          장소 추가
        </Button>
        <Button type="button" variant="medium" color="outlined" onClick={() => setOpenMemo(true)}>
          {currentMemos.length > 0 ? '메모' : '메모 추가'}
        </Button>
      </div>

      <SetPlanMemoModal open={openMemo} onClose={() => setOpenMemo(false)} id={itemIndex} date={date} />
    </div>
  )
}

export default AddDayPlan
