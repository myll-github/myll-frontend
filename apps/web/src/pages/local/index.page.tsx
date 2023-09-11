import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Alert, AppBar, Button, Tab } from 'myll-ui'

import { randomTourListQueryFn, randomTourListQueryKey } from '@/common/api/home/localRecommend'
import NavLayout from '@/common/components/Layout/NavLayout'

import LocalAttractionMenuList from './components/LocalAttractionMenuList'
import LocalHeader from './section/LocalHeader'
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

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()

  /*
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
  */

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Local
