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

const dataWithRecommend = Array.from({ length: 23 }).map((_, i) => ({
  id: i,
  href: 'https://ant.design',
  img: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  mainTitle: `ant design part ${i}`,
  subTitle: 'Ant Design',
  isRecommend: i % 2 === 0,
  recommendCount: i,
  contenttype: COLOR_MAP[i % COLOR_MAP.length],
}))

const LocalAttractionMenuList = () => {
  const { data } = useLocalMenuListQuery()

  console.log(data)

  return (
    <MenuList data={dataWithRecommend}>
      <MenuList.MediumMenuItem onRecommendButtonClicked={(id: number) => {}} />
    </MenuList>
  )
}

export default LocalAttractionMenuList
