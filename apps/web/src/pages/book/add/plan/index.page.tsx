import moment from 'moment'
import { Button, Collapse, Modal } from 'myll-ui'
import { useEffect, useState } from 'react'

import NavLayout from '@/common/components/Layout/NavLayout'
import useBookPageStore from '@/stores/useBookPageStore'

import AddDayPlan from './AddDayPlan'
import AddPlanHeader from './section/AddPlanHeader'

const getBetweenDates = (startDate: string, endDate: string) => {
  const dates = []
  const currentDate = moment(startDate, 'M월 D일')
  const finalDate = moment(endDate, 'M월 D일')

  while (currentDate <= finalDate) {
    dates.push(currentDate.format('M월 D일'))
    currentDate.add(1, 'days')
  }

  return dates
}

export const AddPlanPage = () => {
  const { startDate, endDate } = useBookPageStore()

  const [planData, setPlanData] = useState<any[]>([])
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    const dates = getBetweenDates(startDate, endDate)
    const newPlanData = dates.map((date, index) => ({
      key: `Day${index + 1}`,
      mainTitle: `Day${index + 1}`,
      subTitle: moment(date, 'M월 D일').format('M월 D일 (ddd)'),
      children: <AddDayPlan date={moment(date, 'M월 D일').valueOf()} itemIndex={index} />,
    }))

    setPlanData(newPlanData)
  }, [startDate, endDate])

  return (
    <NavLayout>
      <div className="w-full h-screen flex flex-col justify-end">
        <AddPlanHeader />

        <div>
          <Collapse
            items={planData}
            onExtraButtonClick={() => {
              setOpen(true)
            }}
          />
        </div>
        <div className="w-full flex justify-center mt-auto mb-120pxr">
          <Button className="pl-20pxr pr-20pxr" type="button" variant="block" onClick={() => {}}>
            일정 등록
          </Button>
        </div>
      </div>

      <Modal
        open={open}
        submitButtonText="확인"
        cancelButtonText=""
        onCancel={() => {}}
        onSubmit={() => setOpen(false)}
      >
        <div>지원하지 않는 기능입니다.</div>
      </Modal>
    </NavLayout>
  )
}

export default AddPlanPage
