import { Button, CardContainer } from 'myll-ui'
import { useCompound } from 'shared'

import { useFavoritePlaceQuery } from '@/common/api/recommend'

const FavoritePlace = () => {
  const context = useCompound()
  const { data } = useFavoritePlaceQuery()

  return (
    <main>
      <section className="w-full h-92pxr px-7 pb-5 flex-col items-center gap-5 inline-flex">
        <h1 className="HEADER-H2 min-w-1/2 text-GRAY_80 text-left">
          초보 여행자님! <br /> 어떤 지역을 선호하시나요?
        </h1>
        <h2 className="SUBTITLE-T3 min-w-1/2 text-GRAY_80 text-left">여행지에서 선호하는 활동을 선택해주세요.</h2>
      </section>

      <div className="w-full px-20pxr mt-20pxr mb-18pxr">
        <CardContainer className="" data={data} cardType="round" onChange={() => {}} />
      </div>

      <div className="w-full h-84pxr flex flex-col items-center justify-start mb-36pxr">
        <Button type="button" variant="block" color="primary">
          선택 완료
        </Button>
      </div>
    </main>
  )
}

export default FavoritePlace
