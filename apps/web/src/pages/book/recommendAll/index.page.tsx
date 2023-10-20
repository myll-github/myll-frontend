import { Button, MenuList } from 'myll-ui'
import DefaultMenuItem from 'myll-ui/src/Components/MenuList/DefaultMenuItem'
import { ItemType } from 'myll-ui/src/Components/MenuList/type'
import { useEffect, useState } from 'react'

import { useFavoritePlaceQuery } from '@/common/api/recommend'
import NavLayout from '@/common/components/Layout/NavLayout'
import useBookPageStore from '@/stores/useBookPageStore'

import SetPlanInfoModal from '../modal/SetPlanInfoModal'
import AllHeader from './section/AllHeader'

const RecommendAll = () => {
  const { data, refetch } = useFavoritePlaceQuery()
  const { recommendedPlaceMap, setRecommendedPlaceMap, selectedPlaceMap, setSelectedPlaceMap } = useBookPageStore()

  const [openModal, setOpenModal] = useState<boolean>(false)

  useEffect(() => {
    setSelectedPlaceMap(new Map())
  }, [])

  useEffect(() => {
    if (data && data.length === 0) {
      refetch()
    }
    const recommendList: ItemType[] = data.map((d) => ({
      ...d,
      img: d.firstimage ? d.firstimage : d.firstimage2,
      href: d.url,
      subTitle: d.conttenttype,
    }))

    const recommendPlaceMap = new Map<number, ItemType>()

    recommendList.forEach((recommendData) => {
      recommendPlaceMap.set(recommendData.id, recommendData)
    })

    setRecommendedPlaceMap(recommendPlaceMap)
  }, [data, refetch, setRecommendedPlaceMap])

  const datas = Array.from(recommendedPlaceMap.values())
  const isButtonVisible = selectedPlaceMap.size > 0
  return (
    <NavLayout>
      <AllHeader />
      <div className="flex h-48pxr items-center border-b-[1px] border-solid border-GRAY_30">
        <span className="ml-auto mr-20pxr">
          <Button type="button" variant="mini" color="secondary" onClick={() => refetch()}>
            다른 추천
          </Button>
        </span>
      </div>
      <div className="pr-20pxr">
        <MenuList data={datas} onChange={(selectedPlace) => setSelectedPlaceMap(selectedPlace)}>
          <DefaultMenuItem isSelectedButtonNeeded />
        </MenuList>
      </div>
      <div className="pl-20pxr pr-20pxr pt-20pxr pb-20pxr">
        {isButtonVisible && (
          <Button type="button" variant="block" onClick={() => setOpenModal(true)}>
            여행일정 등록하기
          </Button>
        )}
      </div>

      <SetPlanInfoModal open={openModal} onClose={() => setOpenModal(false)} />
    </NavLayout>
  )
}

export default RecommendAll
