import moment from 'moment'
import { Alert, Button, MenuList } from 'myll-ui'
import DefaultMenuItem from 'myll-ui/src/Components/MenuList/DefaultMenuItem'
import { useRouter } from 'next/router'
import { ICON_COMPASS } from 'shared'

import { usePlan } from '@/common/api/book'
import {
  MYLL_HAS_NOT_HISTORY_MESSAGE,
  MYLL_HAS_NOT_PLAN_MESSAGE,
  MYLL_RECOMMEND_MESSAGE,
} from '@/common/constants/myll'
import useBookPageStore from '@/stores/useBookPageStore'

const MyTripPlan = () => {
  const router = useRouter()
  const { data } = usePlan()
  const { setPlans } = useBookPageStore()
  return (
    <div className="w-full">
      <div className="ml-20pxr mr-20pxr">
        <Alert
          isVisible
          message={data.length > 0 ? `예정된 여행계획이 ${data.length}건 있습니다.` : MYLL_HAS_NOT_PLAN_MESSAGE}
          closable={false}
          onVisibleChange={() => {}}
          type={data.length > 0 ? 'info' : 'error'}
        />
      </div>
      {data.length > 0 && (
        <div className="h-48pxr mt-20pxr mb-20pxr pl-20pxr flex items-center SUBTITLE-T2 text-GRAY_80 border-b-[1px] border-solid border-GRAY_30">
          예정된 여행
        </div>
      )}
      {data.length > 0 && (
        <MenuList
          data={data.map((one) => ({
            id: one.id,
            mainTitle: one.title,
            subTitle: `${moment(one.startDate).format('M월 D일')} ~ ${moment(one.endDate).format('M월 D일')}`,
            img: '',
            href: '',
          }))}
          onClick={(item) => {
            setPlans(data.filter((one) => one.id === item.id)[0])
            router.push('/book/add/plan')
          }}
        >
          <DefaultMenuItem />
        </MenuList>
      )}
      <div className="flex h-114pxr pl-30pxr pr-30pxr justify-center items-center">
        <Button type="button" variant="block" onClick={() => router.push('/book')}>
          여행일정 만들기
        </Button>
      </div>
      <div className="h-48pxr mb-20pxr pl-20pxr flex items-center SUBTITLE-T2 text-GRAY_80 border-b-[1px] border-solid border-GRAY_30">
        지난 여행
      </div>
      <div className="w-full min-h-176pxr flex flex-col pt-20pxr justify-center items-center">
        <ICON_COMPASS width={50} height={50} />
        <div className="flex flex-col items-center gap-10pxr mt-20pxr">
          <div className="SUBTITLE-T2 text-GRAY_80">{MYLL_HAS_NOT_HISTORY_MESSAGE}</div>
          <div className="SUBTITLE-T8 text-GRAY_70">{MYLL_RECOMMEND_MESSAGE}</div>
        </div>
      </div>
    </div>
  )
}

export default MyTripPlan
