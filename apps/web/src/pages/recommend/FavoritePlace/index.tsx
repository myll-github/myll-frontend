import { CardContainer } from 'myll-ui'
import { useCompound } from 'shared'

import { useFavoritePlaceQuery } from '@/common/api/recommend'

const FavoritePlace = () => {
  const context = useCompound()
  const { data } = useFavoritePlaceQuery()

  return (
    <main>
      <section>
        <h1>어떤 활동을 하고 싶나요?</h1>
        <h2>여행지에서 선호하는 활동을 선택해주세요.</h2>
      </section>

      <section>
        <CardContainer className="" data={data} cardType="round" onChange={() => {}} />
      </section>
    </main>
  )
}

export default FavoritePlace
