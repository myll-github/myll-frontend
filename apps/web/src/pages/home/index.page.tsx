import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Alert, AppBar, Button, Tab } from 'myll-ui'

import { randomTourListQueryFn, randomTourListQueryKey } from '@/common/api/home/localRecommend'
import NavLayout from '@/common/components/Layout/NavLayout'
import { HOME_LOCALRECOMMANDSECTION_MAP, HOME_LOCALRECOMMANDSECTION_MAP_KEY_TYPE } from '@/common/constants'

import AnotherUserPlanSection from './section/AnotherUserPlanSection'
import HomeHeader from './section/HomeHeader'
import LocalRecommendSection from './section/LocalRecommendSection'
import MyllPlanSection from './section/MyllPlanSection'
import MyllRecommendSection from './section/MyllRecommendSection'

export const Home = () => {
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

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()

  await Promise.all(
    Object.keys(HOME_LOCALRECOMMANDSECTION_MAP).map((contentTypeId: string) => {
      return queryClient.fetchQuery({
        queryKey: randomTourListQueryKey({ contentTypeId }),
        queryFn: randomTourListQueryFn({ contentTypeId, count: 5 }),
        staleTime: Infinity,
        cacheTime: Infinity,
      })
    }),
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
