import { Button, CardContainer } from 'myll-ui'
import { useCompound } from 'shared'

import { useFavoritePlaceQuery } from '@/common/api/recommend'
import { RECOMMEND_ACTIVITY_KEY } from '@/common/constants'
import { useRecommendPageStore } from '@/stores'

const FavoritePlace = () => {
  const { data } = useFavoritePlaceQuery()
  const { FavoritePlaceMap, setFavoritePlaceMap, handleChangeTabIndex } = useRecommendPageStore()

  return (
    <main>
      <section className="w-full h-92pxr px-7 pb-5 flex-col items-center gap-[10px] inline-flex">
        <h1 className="HEADER-H2 w-320pxr text-left text-GRAY_80">
          초보 여행자님! <br /> 어떤 지역을 선호하시나요?
        </h1>
        <h2 className="SUBTITLE-T3 w-320pxr text-left text-GRAY_80">여행지에서 선호하는 활동을 선택해주세요.</h2>
      </section>

      <div className="flex flex-col justify-center items-center w-full px-20pxr mt-20pxr mb-18pxr">
        <CardContainer
          className="flex flex-row flex-wrap gap-5 w-320pxr"
          data={data}
          cardType="round"
          onChange={setFavoritePlaceMap}
        />
      </div>

      <div className="w-full h-84pxr flex flex-col items-center justify-start">
        <Button
          type="button"
          variant="block"
          color="primary"
          onClick={() => handleChangeTabIndex(RECOMMEND_ACTIVITY_KEY.TRAVEL_THEME_KEY_INDEX)}
        >
          선택 완료
        </Button>
      </div>
    </main>
  )
}

export default FavoritePlace
