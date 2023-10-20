import moment from 'moment'
import { Button } from 'myll-ui'
import { ItemType } from 'myll-ui/src/Components/MenuList/type'
import { useRouter } from 'next/router'
import { useState } from 'react'

import useDebounce from '@/common/hooks/useDebounce'
import { partialSearch } from '@/common/utils/partialSearch'
import useBookPageStore from '@/stores/useBookPageStore'

import AddPlaceHeader from './section/AddPlaceHeader'
import SimpleAddList from './section/SimpleAddList'

const AddPlanPage = () => {
  const router = useRouter()
  const { selectedPlaceMap, plans, setPlans } = useBookPageStore()
  console.log(plans)
  const { date } = router.query
  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 500)

  const [selectedPlace, setSelectedPlace] = useState<any>([])
  const isVisibleButton = selectedPlace.length > 0

  const data =
    debouncedValue === ''
      ? Array.from(selectedPlaceMap.values())
      : Array.from(selectedPlaceMap.values()).filter((d) => partialSearch(debouncedValue, d.mainTitle))

  const handleAdd = () => {
    setPlans({
      ...plans,
      planDetails: [
        ...plans.planDetails,
        ...selectedPlace.map((selected, index) => ({
          date: parseInt(date as string, 10),
          contentId: parseInt(selected.id, 10),
          itemIndex: index,
          title: selected.mainTitle,
          subtitle: selected.contenttype,
        })),
      ],
    })

    router.push('/book/add/plan')
  }

  return (
    <div>
      <AddPlaceHeader value={value} onChange={(e) => setValue(e.target.value)} />
      <SimpleAddList data={data} setData={setSelectedPlace} />

      {isVisibleButton && (
        <div className="fixed bottom-30pxr left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Button type="button" variant="block" onClick={handleAdd}>
            {`${selectedPlace.length}개 장소 추가하기`}
          </Button>
        </div>
      )}
    </div>
  )
}

export default AddPlanPage
