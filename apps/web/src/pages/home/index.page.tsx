import { dehydrate, QueryClient } from '@tanstack/react-query'

import { getCookieHeader } from '@/common/api'
import {
  randomTourListQueryFn,
  randomTourListQueryKey,
  recommendedTourListQueryFn,
  recommendedTourListQueryKey,
} from '@/common/api/home/localRecommend'
import {
  getRandomLocalTourListFn,
  getRandomLocalTourListQueryKey,
} from '@/common/api/home/localRecommend/localUserRegistered'
import NavLayout from '@/common/components/Layout/NavLayout'

import { MYLLRECOMMEND_KEY } from './constants'
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
    queryClient.prefetchQuery({
      queryKey: randomTourListQueryKey({ contentTypeId: 'all', key: MYLLRECOMMEND_KEY.BUSAN_HOT_PLACE }),
      queryFn: randomTourListQueryFn({ initHeaders, count: 6 }),
      staleTime: Infinity,
      cacheTime: Infinity,
    }),

    queryClient.prefetchQuery({
      queryKey: recommendedTourListQueryKey({ key: MYLLRECOMMEND_KEY.USER_RECOMMENDED }),
      queryFn: recommendedTourListQueryFn({ initHeaders }),
      staleTime: Infinity,
      cacheTime: Infinity,
    }),

    queryClient.prefetchQuery({
      queryKey: randomTourListQueryKey({ contentTypeId: 'all', key: MYLLRECOMMEND_KEY.MYLL_RECOMMENDED }),
      queryFn: randomTourListQueryFn({ initHeaders, count: 6 }),
      staleTime: Infinity,
      cacheTime: Infinity,
    }),

    queryClient.prefetchQuery({
      queryKey: getRandomLocalTourListQueryKey(),
      queryFn: getRandomLocalTourListFn({ initHeaders }),
    }),
  ])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
