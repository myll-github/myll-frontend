import { MenuList, Tab } from 'myll-ui'
import { ItemType } from 'myll-ui/src/Components/MenuList/type'

import { useRandomTourListQuery } from '@/common/api/home/localRecommend'

const MyllRecommendSection = () => {
  const { data: data1 } = useRandomTourListQuery({ key: 1 })
  const { data: data2 } = useRandomTourListQuery({ key: 2 })

  return (
    <section className="my-10pxr">
      <div className="flex flex-row items-start justify-between w-full HEADER-H5 text-GRAY_100 px-20pxr">
        <h2>오늘은 어디로 갈까요?</h2>
      </div>

      <Tab
        tabBarGutter={20}
        size="small"
        className="mt-24pxr"
        defaultActiveKey="1"
        items={[
          {
            children: (
              <MenuList itemLayout="vertical" onChange={() => {}} data={data1 as ItemType[]}>
                <MenuList.LargeMenuItem onRecommendButtonClicked={() => {}} />
              </MenuList>
            ),
            key: '1',
            label: '부산 인기장소',
          },
          {
            children: (
              <MenuList itemLayout="vertical" onChange={() => {}} data={[]}>
                <MenuList.LargeMenuItem onRecommendButtonClicked={() => {}} />
              </MenuList>
            ),
            key: '2',
            label: '찜한곳',
          },
          {
            children: (
              <MenuList itemLayout="vertical" onChange={() => {}} data={data2 as ItemType[]}>
                <MenuList.LargeMenuItem onRecommendButtonClicked={() => {}} />
              </MenuList>
            ),
            key: '3',
            label: '마일이 추천해요',
          },
        ]}
        onChange={() => {}}
      />
    </section>
  )
}

export default MyllRecommendSection
