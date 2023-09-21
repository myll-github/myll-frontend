import { Button, MenuList } from 'myll-ui'
import DefaultMenuItem from 'myll-ui/src/Components/MenuList/DefaultMenuItem'
import { useEffect, useState } from 'react'

import useBookPageStore from '@/stores/useBookPageStore'

import SetPlanInfoModal from '../modal/SetPlanInfoModal'
import AllHeader from './section/AllHeader'

// 다른 추천 (refresh) 기능 보류
const RecommendAll = () => {
  const { recommendedPlaceMap, selectedPlaceMap, setSelectedPlaceMap } = useBookPageStore()

  const [openModal, setOpenModal] = useState<boolean>(false)

  useEffect(() => {
    setSelectedPlaceMap(new Map())
  }, [])

  const data = Array.from(recommendedPlaceMap.values())
  const isButtonVisible = selectedPlaceMap.size > 0
  return (
    <div>
      <AllHeader />
      {/* <div className="flex h-48pxr items-center border-b-[1px] border-solid border-GRAY_30">
        <span className="ml-auto mr-20pxr">
          <Button type="button" variant="mini" color="secondary">
            다른 추천
          </Button>
        </span>
      </div> */}
      <div className="pr-20pxr">
        <MenuList data={data} onChange={(selectedPlace) => setSelectedPlaceMap(selectedPlace)}>
          <DefaultMenuItem isSelectedButtonNeeded />
        </MenuList>
      </div>

      {isButtonVisible && (
        <div className="fixed bottom-30pxr left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Button type="button" variant="block" onClick={() => setOpenModal(true)}>
            여행일정 등록하기
          </Button>
        </div>
      )}
      <SetPlanInfoModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  )
}

export default RecommendAll
