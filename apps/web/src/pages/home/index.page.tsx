import { Alert, AppBar, Button } from 'myll-ui'

import NavLayout from '@/common/components/Layout/NavLayout'

export const Login = () => {
  return (
    <>
      <NavLayout className="">
        <header className="mt-30pxr">
          <AppBar>
            <AppBar.LeftSection>
              <AppBar.FallbackButton />
            </AppBar.LeftSection>
            <AppBar.MiddleSection>example</AppBar.MiddleSection>
            <AppBar.RightSection>example</AppBar.RightSection>
          </AppBar>
        </header>
        <div role="none" className="h-76pxr" />
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
                여행계획 추가하기
              </Button>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex flex-col mt-20pxr w-320pxr h-200pxr gap-5 bg-SUB_BLUE_1 rounded-[20px]">aaa</div>
            </div>
          </section>
        </main>
        <footer>123</footer>
      </NavLayout>
    </>
  )
}

export default Login
