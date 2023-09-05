import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Alert, AppBar, Button, Tab } from 'myll-ui'

import NavLayout from '@/common/components/Layout/NavLayout'

import HomeHeader from '../section/HomeHeader'
import LocalPlaceSection from './section/LocalPlaceSection'

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <NavLayout>
        <main className="flex flex-col gap-10">
          <LocalPlaceSection />
        </main>
      </NavLayout>
    </>
  )
}

/*

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

*/

export default Home
