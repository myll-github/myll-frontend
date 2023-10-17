import { Button } from 'myll-ui'
import { useRouter } from 'next/router'
import { ICON_HEART_IN } from 'shared'

import { MYLL_HAS_NOT_PLACE, MYLL_RECOMMEND_MESSAGE2 } from '@/common/constants/myll'

const NonePage = () => {
  const router = useRouter()
  return (
    <div className="w-full h-236pxr flex flex-col items-center pt-30pxr gap-20pxr">
      <ICON_HEART_IN width={50} height={50} />
      <div className="w-full flex flex-col gap-10pxr items-center">
        <div className="SUBTITLE-T2 text-GRAY_80">{MYLL_HAS_NOT_PLACE}</div>
        <div className="SUBTITLE-T8 text-GRAY_70">{MYLL_RECOMMEND_MESSAGE2}</div>
      </div>
      <Button type="button" variant="medium" onClick={() => router.push('/home')}>
        여행지 둘러보러 가기
      </Button>
    </div>
  )
}

export default NonePage
