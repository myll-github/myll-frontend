import { Alert, Button } from 'myll-ui'
import { useRouter } from 'next/router'
import { useState } from 'react'

import SetPlanMemoModal from '../../modal/SetPlanMemoModal'

interface AddDayPlanProps {
  id: number
  date: number
}

const AddDayPlan = (props: AddDayPlanProps) => {
  const { id, date } = props
  const [openMemo, setOpenMemo] = useState<boolean>(false)

  const router = useRouter()
  return (
    <div>
      <Alert
        type="warning"
        message="아직 등록된 여행 장소가 없어요!"
        isVisible
        onVisibleChange={() => {}}
        closable={false}
      />
      <div className="w-full h-60pxr flex justify-center items-center gap-30pxr">
        <Button
          type="button"
          variant="medium"
          color="outlined"
          onClick={() => router.push(`/book/add/place?id=${id}&date=${date}`)}
        >
          장소 추가
        </Button>
        <Button type="button" variant="medium" color="outlined" onClick={() => setOpenMemo(true)}>
          메모 추가
        </Button>
      </div>

      <SetPlanMemoModal open={openMemo} onClose={() => setOpenMemo(false)} id={id} />
    </div>
  )
}

export default AddDayPlan
