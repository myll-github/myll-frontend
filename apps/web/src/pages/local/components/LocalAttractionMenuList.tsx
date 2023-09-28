import { MenuList } from 'myll-ui'

import { useLocalMenuListQuery } from '@/common/api/local'

const COLOR_MAP = Object.keys({
  관광지: 'processing',
  문화시설: '',
  축제공연행사: 'cyan',
  여행코스: 'magenta',
  레포츠: 'blue',
  쇼핑: 'purple',
  음식점: 'gold',
  카페: 'green',
})

const LocalAttractionMenuList = () => {
  const { data, handleOptimisticRecommendToggle } = useLocalMenuListQuery()

  return (
    <MenuList data={data}>
      <MenuList.MediumMenuItem
        onRecommendButtonClicked={(id: number) => {
          handleOptimisticRecommendToggle({ id })
        }}
      />
    </MenuList>
  )
}

export default LocalAttractionMenuList
