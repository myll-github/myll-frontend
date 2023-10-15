import { useRouter } from 'next/router'

import { useLocalMenuListQuery } from '@/common/api/local'
import LocalMenuList from '@/common/components/CustomMenuItem/LocalMenuItem'

const LocalAttractionMenuList = () => {
  const { data, handleOptimisticRecommendToggle } = useLocalMenuListQuery()

  return (
    <LocalMenuList data={data}>
      <LocalMenuList.MediumMenuItem
        onRecommendButtonClicked={(id: number) => {
          handleOptimisticRecommendToggle({ id })
        }}
      />
    </LocalMenuList>
  )
}

export default LocalAttractionMenuList
