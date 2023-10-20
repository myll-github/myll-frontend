import { isEmpty } from 'lodash'
import { Button, CardContainer } from 'myll-ui'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useCompound } from 'shared'

import { useFavoriteActivityQuery, useTravelThemeQuery } from '@/common/api/recommend'
import { useRecommendPageStore } from '@/stores'

const FavoriteActivity = () => {
  const router = useRouter()

  const { data } = useFavoriteActivityQuery()
  const {
    FavoriteActivityMap,
    TravelThemeMap,
    FavoritePlaceMap,
    tabIndex,
    tabIndexFlag,
    setTabIndexFlag,
    setFavoriteActivityMap,
  } = useRecommendPageStore()

  /*
    useEffect(( )=> {
    }, [FavoriteActivityMap, TravelThemeMap, FavoritePlaceMap])
  */

  return (
    <main>
      <section className="w-full h-92pxr px-7 pb-5 flex-col items-center gap-[10px] inline-flex">
        <h1 className="text-left HEADER-H2 w-320pxr text-GRAY_80 ">어떤 활동을 하고 싶나요?</h1>
        <h2 className="text-left SUBTITLE-T3 w-320pxr text-GRAY_80 ">여행지에서 선호하는 활동을 선택해주세요.</h2>
      </section>

      <div className="flex flex-col items-center justify-center w-full px-20pxr mt-33pxr mb-18pxr">
        <CardContainer
          className="flex flex-row flex-wrap gap-x-5 gap-y-[30px] w-320pxr"
          data={data}
          cardType="basic"
          onChange={setFavoriteActivityMap}
        />
      </div>

      <div className="flex flex-col items-center justify-start w-full h-84pxr">
        <Button
          type="button"
          variant="block"
          color="primary"
          onClick={() => {
            if (!isEmpty(FavoriteActivityMap) && !isEmpty(TravelThemeMap) && !isEmpty(FavoritePlaceMap))
              router.push('/intro')
          }}
          disabled={!tabIndexFlag}
        >
          {tabIndexFlag ? '선택 완료' : '선호하는 활동을 선택해주세요'}
        </Button>
      </div>
    </main>
  )
}

export default FavoriteActivity
