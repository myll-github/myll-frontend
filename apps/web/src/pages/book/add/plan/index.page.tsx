import moment from 'moment'
import { Collapse } from 'myll-ui'
import { useEffect, useState } from 'react'

import NavLayout from '@/common/components/Layout/NavLayout'
import useBookPageStore from '@/stores/useBookPageStore'

import AddDayPlan from './AddDayPlan'
import AddPlanHeader from './section/AddPlanHeader'

const getBetweenDates = (startDate: string, endDate: string) => {
  const dates = []
  const currentDate = moment(startDate, 'YYYY년 M월 D일')
  const finalDate = moment(endDate, 'YYYY년 M월 D일')

  while (currentDate <= finalDate) {
    dates.push(currentDate.format('YYYY년 M월 D일'))
    currentDate.add(1, 'days')
  }

  return dates
}

export const AddPlanPage = () => {
  const { startDate, endDate } = useBookPageStore()

  const [planData, setPlanData] = useState<any[]>([])

  useEffect(() => {
    const dates = getBetweenDates(startDate, endDate)

    const newPlanData = dates.map((date, index) => ({
      key: `Day${index + 1}`,
      mainTitle: `Day${index + 1}`,
      subTitle: moment(date, 'YYYY년 M월 D일').format('M월 D일 (ddd)'),
      children: <AddDayPlan id={index} date={moment(date).valueOf()} />,
    }))

    setPlanData(newPlanData)
  }, [startDate, endDate])

  return (
    <NavLayout>
      <div className="w-full">
        <AddPlanHeader />

        <div>
          <Collapse items={planData} onExtraButtonClick={() => {}} />
        </div>
      </div>
    </NavLayout>
  )
}

export default AddPlanPage
