import { Alert, Button } from 'myll-ui'
import { useRouter } from 'next/router'
import { ICON_COMPASS } from 'shared'

import {
  MYLL_HAS_NOT_HISTORY_MESSAGE,
  MYLL_HAS_NOT_PLAN_MESSAGE,
  MYLL_RECOMMEND_MESSAGE,
} from '@/common/constants/myll'

const MyTripPlan = () => {
  const router = useRouter()
  return (
    <div className="w-full">
      <div className="ml-20pxr mr-20pxr">
        <Alert isVisible message={MYLL_HAS_NOT_PLAN_MESSAGE} closable={false} onVisibleChange={() => {}} type="error" />
      </div>
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
