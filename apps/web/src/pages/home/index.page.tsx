import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Alert, AppBar, Button, Tab } from 'myll-ui'

import { getCookieHeader } from '@/common/api'
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
      <HomeHeader />
      <NavLayout>
        <main className="flex flex-col gap-10">
          <MyllPlanSection />
          <AnotherUserPlanSection />

          <LocalRecommendSection />
          <MyllRecommendSection />
        </main>
      </NavLayout>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const queryClient = new QueryClient()
  const initHeaders = getCookieHeader(context)

  await Promise.all([
    queryClient.fetchQuery({
      queryKey: randomTourListQueryKey({ key: 1 }),
      queryFn: randomTourListQueryFn({ initHeaders, count: 5 }),
      staleTime: Infinity,
      cacheTime: Infinity,
    }),
    queryClient.fetchQuery({
      queryKey: randomTourListQueryKey({ key: 2 }),
      queryFn: randomTourListQueryFn({ initHeaders, count: 5 }),
      staleTime: Infinity,
      cacheTime: Infinity,
    }),
  ])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
