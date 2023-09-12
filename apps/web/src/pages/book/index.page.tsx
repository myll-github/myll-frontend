import { Button, DatePicker, Input, Modal } from 'myll-ui'
import { useState } from 'react'

import NavLayout from '@/common/components/Layout/NavLayout'

import { AddPlanPage } from './add/AddPlanPage'
import PlanBodyAdd from './section/PlanBodyAdd'
import PlanHeader from './section/PlanHeader'
import SimpleList from './section/SimpleList'

export const Book = () => {
  // 일정 등록
  const [openRangePicker, setOpenRangePicker] = useState<boolean>(false)
  const [addDates, setAddDates] = useState<string[]>([])
  const [title, setTitle] = useState<string>('')

  const [addMode, setAddMode] = useState<boolean>(false)
  return addMode ? (
    <AddPlanPage
      title={title}
      startDate={addDates[0]}
      endDate={addDates[1]}
      selectedDatas={[]}
      onBack={() => setAddMode(false)}
    />
  ) : (
    <NavLayout>
      <PlanHeader />

      <PlanBodyAdd openModal={() => setOpenRangePicker(true)} />

      <SimpleList onChangeMode={() => {}} />

      <Modal
        open={openRangePicker}
        onCancel={() => setOpenRangePicker(false)}
        cancelButtonText="취소"
        submitButtonText="일정 등록"
        onSubmit={() => {
          setAddMode(true)
          setOpenRangePicker(false)
        }}
      >
        <div className="h-150pxr flex flex-col items-center gap-20pxr">
          <div className="w-full">
            <Input
              label="여행 정보"
              placeholder="여행 제목을 입력해주세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <DatePicker.RangePicker
            format="YYYY년 M월 D일"
            className="w-full"
            allowClear={false}
            onChange={(_, values) => setAddDates(values)}
          />
        </div>
      </Modal>
    </NavLayout>
  )
}

export default Book
