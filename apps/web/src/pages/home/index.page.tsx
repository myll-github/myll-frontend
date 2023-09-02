import { Alert, AppBar, Button, Tab } from 'myll-ui'

import NavLayout from '@/common/components/Layout/NavLayout'

export const Login = () => {
  return (
    <>
      <NavLayout className="px-20pxr">
        <header>
          <AppBar>
            <AppBar.LeftSection>
              <AppBar.FallbackButton />
            </AppBar.LeftSection>
            <AppBar.MiddleSection>example</AppBar.MiddleSection>
            <AppBar.RightSection>example</AppBar.RightSection>
          </AppBar>
        </header>

        <main className="flex flex-col gap-10">
          <section className="w-full flex flex-col items-center">
            <h2 className="w-full HEADER-H5 text-GRAY_100">나의 마일 플랜</h2>

            <div className="flex flex-col items-center mt-20pxr w-full px-10pxr gap-5">
              <Alert
                isVisible
                message="예정된 여행계획이 없어요!"
                onVisibleChange={() => {}}
                type="info"
                closable={false}
              />

              <Button color="gradient" onClick={() => {}} type="button" variant="block">
                여행계획 추가하기
              </Button>
            </div>
          </section>

          <section className="my-10pxr">
            <div className="flex flex-row items-start justify-between w-full HEADER-H5 text-GRAY_100">
              <h2>다른 여행자들의 Myll</h2>
              <Button color="secondary" onClick={() => {}} type="button" variant="small">
                다른 추천 보기
              </Button>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex flex-col mt-20pxr w-320pxr h-200pxr gap-5 bg-SUB_BLUE_1 rounded-[20px]">aaa</div>
            </div>
          </section>

          <section className="my-10pxr">
            <div className="flex flex-row items-start justify-between w-full HEADER-H5 text-GRAY_100">
              <h2>로컬이 추천하는 여행지</h2>
              <Button color="secondary" onClick={() => {}} type="button" variant="small">
                다른 추천 보기
              </Button>
            </div>

            <Tab
              className="mt-24pxr w-full h-600pxr"
              defaultActiveKey="1"
              items={[
                {
                  children: <div className="w-full h-500pxr">Content of Tab Pane 1</div>,
                  key: '1',
                  label: '축제•공연',
                },
                {
                  children: 'Content of Tab Pane 2',
                  key: '2',
                  label: '관광지',
                },
                {
                  children: <div>test</div>,
                  key: '3',
                  label: '음식점',
                },

                {
                  children: <div>caft</div>,
                  key: '4',
                  label: '카페',
                },

                {
                  children: <div>caft</div>,
                  key: '5',
                  label: '문화시설',
                },
              ]}
              onChange={() => {}}
            />
          </section>

          <section className="my-10pxr">
            <div className="flex flex-row items-start justify-between w-full HEADER-H5 text-GRAY_100">
              <h2>오늘은 어디로 갈까요?</h2>
            </div>

            <Tab
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
        </main>
        <footer>123</footer>
      </NavLayout>
    </>
  )
}

export default Login
