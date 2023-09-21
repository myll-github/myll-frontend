import { Button, Tab } from 'myll-ui'

const LocalRecommendSection = () => {
  return (
    <section className="my-10pxr">
      <div className="flex flex-row items-start justify-between w-full HEADER-H5 text-GRAY_100 px-20pxr">
        <h2>로컬이 추천하는 여행지</h2>
        <Button color="secondary" onClick={() => {}} type="button" variant="small">
          다른 추천 보기
        </Button>
      </div>

      <Tab
        size="small"
        tabBarGutter={20}
        className="w-full mt-24pxr h-400pxr"
        defaultActiveKey="15"
        items={[
          {
            children: <div className="w-full h-400pxr">Content of Tab Pane 1</div>,
            key: '15',
            label: '축제•공연',
          },
          {
            children: 'Content of Tab Pane 2',
            key: '12',
            label: '관광지',
          },
          {
            children: <div>test</div>,
            key: '39',
            label: '음식점',
          },

          {
            children: <div>caft</div>,
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
