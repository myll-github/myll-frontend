import { Button, MenuList, Tab } from 'myll-ui'
import { ItemType } from 'myll-ui/src/Components/MenuList/type'

import { useRandomLocalTourListQuery } from '@/common/api/home/localRecommend/localUserRegistered'

const LocalRecommendSection = () => {
  const { data, refetch, handleOptimisticRecommendToggle } = useRandomLocalTourListQuery()

  return (
    <section className="my-10pxr">
      <div className="flex flex-row items-start justify-between w-full HEADER-H5 text-GRAY_100 px-20pxr">
        <h2>로컬이 추천하는 여행지</h2>
        <Button
          color="secondary"
          onClick={() => {
            refetch()
          }}
          type="button"
          variant="small"
        >
          다른 추천 보기
        </Button>
      </div>

      <Tab
        size="small"
        tabBarGutter={20}
        className="w-full mt-24pxr"
        defaultActiveKey="15"
        items={[
          {
            children: (
              <div className="w-full">
                <MenuList
                  onChange={() => {}}
                  data={data.filter((ele) => ele.contentTypeId === 15).slice(0, 5) as ItemType[]}
                >
                  <MenuList.MediumMenuItem
                    onRecommendButtonClicked={(id) => {
                      handleOptimisticRecommendToggle({ id })
                    }}
                  />
                </MenuList>
              </div>
            ),
            key: '15',
            label: '축제•공연',
          },
          {
            children: (
              <div className="w-full">
                <MenuList
                  onChange={() => {}}
                  data={data.filter((ele) => ele.contentTypeId === 12).slice(0, 5) as ItemType[]}
                >
                  <MenuList.MediumMenuItem
                    onRecommendButtonClicked={(id) => {
                      handleOptimisticRecommendToggle({ id })
                    }}
                  />
                </MenuList>
              </div>
            ),
            key: '12',
            label: '관광지',
          },
          {
            children: (
              <div className="w-full">
                <MenuList
                  onChange={() => {}}
                  data={data.filter((ele) => ele.contentTypeId === 39).slice(0, 5) as ItemType[]}
                >
                  <MenuList.MediumMenuItem
                    onRecommendButtonClicked={(id) => {
                      handleOptimisticRecommendToggle({ id })
                    }}
                  />
                </MenuList>
              </div>
            ),
            key: '39',
            label: '음식점',
          },

          {
            children: (
              <div className="w-full">
                <MenuList
                  onChange={() => {}}
                  data={data.filter((ele) => ele.contentTypeId === 14).slice(0, 5) as ItemType[]}
                >
                  <MenuList.MediumMenuItem
                    onRecommendButtonClicked={(id) => {
                      handleOptimisticRecommendToggle({ id })
                    }}
                  />
                </MenuList>
              </div>
            ),
            key: '14',
            label: '문화시설',
          },
        ]}
        onChange={() => {}}
      />
    </section>
  )
}

export default LocalRecommendSection
