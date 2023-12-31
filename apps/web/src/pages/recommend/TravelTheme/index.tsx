import { Button, CardContainer } from 'myll-ui'
import { useEffect } from 'react'
import { useCompound } from 'shared'

import { useTravelThemeQuery } from '@/common/api/recommend'
import { RECOMMEND_ACTIVITY_KEY } from '@/common/constants'
import { useRecommendPageStore } from '@/stores'

const TravelTheme = () => {
  const { data } = useTravelThemeQuery()
  const { TravelThemeMap, setTravelThemeMap, tabIndex, tabIndexFlag, setTabIndexFlag, handleChangeTabIndex } =
    useRecommendPageStore()

  return (
    <main>
      <section className="w-full h-92pxr px-7 mb-9 flex-col items-center gap-[10px] inline-flex">
        <h1 className="text-left HEADER-H2 w-320pxr text-GRAY_80">
          초보 여행자님은 <br /> 어떤 여행자 이신가요?
        </h1>
        <h2 className="text-left SUBTITLE-T3 w-320pxr text-GRAY_80">선호하는 여행 테마를 선택해주세요!</h2>
      </section>

      <div className="w-full px-20pxr mb-18pxr">
        <CardContainer
          className="flex flex-col items-center gap-5"
          data={data}
          cardType="horizontal"
          onChange={setTravelThemeMap}
        />
      </div>

      <div className="flex flex-col items-center justify-start w-full h-84pxr">
        <Button
          type="button"
          variant="block"
          color="primary"
          onClick={() => {
            handleChangeTabIndex(RECOMMEND_ACTIVITY_KEY.FAVORTIE_ACTIVITY_KEY_INDEX)
          }}
          disabled={!tabIndexFlag}
        >
          {tabIndexFlag ? '선택 완료' : '선호하는 여행테마를 선택해주세요'}
        </Button>
      </div>
    </main>
  )
}

export default TravelTheme
