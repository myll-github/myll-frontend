import { dehydrate, QueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import nookies from 'nookies'
import { useEffect } from 'react'

import { getCookieHeader, withAuth } from '@/common/api'
import { getPlanFn, getPlanQuery } from '@/common/api/book'
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
import useLogout from '@/common/hooks/useLogout'

import { MYLLRECOMMEND_KEY } from './constants'
import AnotherUserPlanSection from './section/AnotherUserPlanSection'
import HomeHeader from './section/HomeHeader'
import LocalRecommendSection from './section/LocalRecommendSection'
import MyllPlanSection from './section/MyllPlanSection'
import MyllRecommendSection from './section/MyllRecommendSection'

export const Home = () => {
  const { isLogout } = useLogout(nookies.get())
  const router = useRouter()
  useEffect(() => {
    if (isLogout) router.push('/login')
  })
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

export const getServerSideProps = withAuth(async (context) => {
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

    queryClient.prefetchQuery({
      queryKey: getPlanQuery(),
      queryFn: getPlanFn({ initHeaders }),
      staleTime: Infinity,
      cacheTime: Infinity,
    }),
  ])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
})

export default Home
