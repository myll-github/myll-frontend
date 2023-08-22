import { Button, CardContainer } from 'myll-ui'
import { useCompound } from 'shared'

import { useFavoriteActivityQuery, useTravelThemeQuery } from '@/common/api/recommend'

const FavoriteActivity = () => {
  const context = useCompound()
  const { data } = useFavoriteActivityQuery()

  return (
    <main>
      <section className="w-full h-92pxr px-7 pb-5 flex-col items-center gap-[10px] inline-flex">
        <h1 className="HEADER-H2 w-320pxr text-left text-GRAY_80 ">어떤 활동을 하고 싶나요?</h1>
        <h2 className="SUBTITLE-T3 w-320pxr text-left text-GRAY_80 ">여행지에서 선호하는 활동을 선택해주세요.</h2>
      </section>

      <div className="flex flex-col justify-center items-center w-full px-20pxr mt-20pxr mb-18pxr">
        <CardContainer
          className="flex flex-row flex-wrap gap-x-5 gap-y-[30px] w-320pxr"
          data={data}
          cardType="basic"
          onChange={() => {}}
        />
      </div>

      <div className="w-full h-84pxr flex flex-col items-center justify-start">
        <Button type="button" variant="block" color="primary">
          선택 완료
        </Button>
      </div>
    </main>
  )
}

export default FavoriteActivity
