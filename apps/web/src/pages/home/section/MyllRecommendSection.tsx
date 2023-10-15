import { Tab } from 'myll-ui'
import { ItemType } from 'myll-ui/src/Components/MenuList/type'

import { useRandomTourListQuery, useRecommendedTourListQuery } from '@/common/api/home/localRecommend'
import TourMenuList from '@/common/components/CustomMenuItem/TourMenuItem'

import { MYLLRECOMMEND_KEY } from '../constants'

const MyllRecommendSection = () => {
  const { data: data1, handleOptimisticRecommendToggle: handleOptimisticRecommendToggle1 } = useRandomTourListQuery({
    contentTypeId: 'all',
    key: MYLLRECOMMEND_KEY.BUSAN_HOT_PLACE,
    count: 6,
  })

  const { data: recommendedData, handleOptimisticRecommendToggle: handleOptimisticRecommendToggle2 } =
    useRecommendedTourListQuery({ key: MYLLRECOMMEND_KEY.USER_RECOMMENDED })

  const { data: data3, handleOptimisticRecommendToggle: handleOptimisticRecommendToggle3 } = useRandomTourListQuery({
    contentTypeId: 'all',
    key: MYLLRECOMMEND_KEY.MYLL_RECOMMENDED,
    count: 6,
  })

  return (
    <section className="my-10pxr">
      <div className="flex flex-row items-start justify-between w-full HEADER-H5 text-GRAY_100 px-20pxr">
        <h2>오늘은 어디로 갈까요?</h2>
      </div>

      <Tab
        tabBarGutter={20}
        size="small"
        className="home-myllrecommend mt-24pxr"
        defaultActiveKey={MYLLRECOMMEND_KEY.BUSAN_HOT_PLACE}
        items={[
          {
            children: (
              <TourMenuList itemLayout="vertical" onChange={() => {}} data={data3 as ItemType[]}>
                <TourMenuList.LargeMenuItem
                  onRecommendButtonClicked={(id) => {
                    handleOptimisticRecommendToggle3({ id })
                  }}
                />
              </TourMenuList>
            ),
            key: MYLLRECOMMEND_KEY.MYLL_RECOMMENDED,
            label: '마일이 추천해요',
          },

          {
            children: (
              <TourMenuList itemLayout="vertical" onChange={() => {}} data={data1 as ItemType[]}>
                <TourMenuList.LargeMenuItem
                  onRecommendButtonClicked={(id) => {
                    handleOptimisticRecommendToggle1({ id })
                  }}
                />
              </TourMenuList>
            ),
            key: MYLLRECOMMEND_KEY.BUSAN_HOT_PLACE,
            label: '금강산도 식후경',
          },
          {
            children: (
              <TourMenuList itemLayout="vertical" onChange={() => {}} data={recommendedData}>
                <TourMenuList.LargeMenuItem
                  onRecommendButtonClicked={(id) => {
                    handleOptimisticRecommendToggle2({ id })
                  }}
                />
              </TourMenuList>
            ),
            key: MYLLRECOMMEND_KEY.USER_RECOMMENDED,
            label: '찜한곳',
          },
        ]}
        onChange={() => {}}
      />
    </section>
  )
}

export default MyllRecommendSection
