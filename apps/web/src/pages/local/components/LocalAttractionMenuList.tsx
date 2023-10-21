import { LocalMenuListParams, useLocalMenuListQuery } from '@/common/api/local'
import LocalMenuList from '@/common/components/CustomMenuItem/LocalMenuItem'

interface LocalAttractionMenuListProps {
  sort?: LocalMenuListParams['sort']
}

const LocalAttractionMenuList = ({ sort }: LocalAttractionMenuListProps) => {
  const { data, handleOptimisticRecommendToggle } = useLocalMenuListQuery({ sort })

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

LocalAttractionMenuList.defaultProps = {
  sort: 'ASC',
}

export default LocalAttractionMenuList
