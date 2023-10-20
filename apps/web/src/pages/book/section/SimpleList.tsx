import { Button, MenuList } from 'myll-ui'
import DefaultMenuItem from 'myll-ui/src/Components/MenuList/DefaultMenuItem'
import { useRouter } from 'next/router'

import useBookPageStore from '@/stores/useBookPageStore'

const SimpleList = () => {
  const { recommendedPlaceMap, setSelectedPlaceMap } = useBookPageStore()

  const data = Array.from(recommendedPlaceMap.values())

  const router = useRouter()

  return (
    <div className="flex flex-col">
      <div className="flex h-64pxr pr-10pxr SUBTITLE-T2 items-center border-b-[1px] border-solid border-GRAY_30">
        <span className="mr-auto ml-20pxr">내 취향에 맞는 추천</span>
        <Button type="button" variant="small" color="text" onClick={() => router.push('/book/recommendAll')}>
          전체 보기
        </Button>
      </div>
      <div>
        <MenuList data={data} onChange={(selectedPlaceMap) => setSelectedPlaceMap(selectedPlaceMap)}>
          <DefaultMenuItem isSelectedButtonNeeded />
        </MenuList>
      </div>
    </div>
  )
}

export default SimpleList
