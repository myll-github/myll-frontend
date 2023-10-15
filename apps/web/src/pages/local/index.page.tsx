import { dehydrate, QueryClient } from '@tanstack/react-query'

import { getCookieHeader, withAuth } from '@/common/api'
import { randomTourListQueryFn, randomTourListQueryKey } from '@/common/api/home/localRecommend'
import { getLocalMenuListFn, getLocalMenuListQueryKey } from '@/common/api/local'
import NavLayout from '@/common/components/Layout/NavLayout'

import LocalHeader from './components/LocalHeader'
import LocalIntroduceSection from './section/LocalIntroduceSection'
import LocalPlaceSection from './section/LocalPlaceSection'

export const Local = () => {
  return (
    <>
      <LocalHeader />
      <NavLayout>
        <main className="flex flex-col gap-10">
          <LocalIntroduceSection />
          <LocalPlaceSection />
        </main>
      </NavLayout>
    </>
  )
}

export const getServerSideProps = withAuth(async (context) => {
  const queryClient = new QueryClient()
  const initHeaders = getCookieHeader(context)

  await queryClient.fetchQuery({
    queryKey: getLocalMenuListQueryKey(),
    queryFn: getLocalMenuListFn({ initHeaders }),
    staleTime: Infinity,
    cacheTime: Infinity,
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
})

export default Local
