import { Alert, AppBar, Button, Tab } from 'myll-ui'

import NavLayout from '@/common/components/Layout/NavLayout'

import AnotherUserPlanSection from './section/AnotherUserPlanSection'
import HomeHeader from './section/HomeHeader'
import LocalRecommendSection from './section/LocalRecommendSection'
import MyllPlanSection from './section/MyllPlanSection'
import MyllRecommendSection from './section/MyllRecommendSection'

export const Login = () => {
  return (
    <>
      <NavLayout>
        <HomeHeader />

        <main className="flex flex-col gap-10">
          <MyllPlanSection />
          <AnotherUserPlanSection />

          <LocalRecommendSection />
          <MyllRecommendSection />
        </main>

        <footer>123</footer>
      </NavLayout>
    </>
  )
}

export default Login
