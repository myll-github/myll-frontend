import { Tab } from 'myll-ui'

const MyllRecommendSection = () => {
  return (
    <section className="my-10pxr">
      <div className="flex flex-row items-start justify-between w-full HEADER-H5 text-GRAY_100 px-20pxr">
        <h2>오늘은 어디로 갈까요?</h2>
      </div>

      <Tab
        tabBarGutter={20}
        size="small"
        className="mt-24pxr h-600pxr"
        defaultActiveKey="1"
        items={[
          {
            children: <div className="w-full h-500pxr">Content of Tab Pane 1</div>,
            key: '1',
            label: '부산 인기장소',
          },
          {
            children: 'Content of Tab Pane 2',
            key: '2',
            label: '찜한곳',
          },
          {
            children: <div>test</div>,
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
