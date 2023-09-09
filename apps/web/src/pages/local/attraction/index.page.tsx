import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Alert, AppBar, Button, Tab } from 'myll-ui'
import Link from 'next/link'
import { ICON_EDIT } from 'shared'

import NavLayout from '@/common/components/Layout/NavLayout'

import LocalHeader from '../section/LocalHeader'
import LocalPlaceSection from './section/LocalPlaceSection'

export const Home = () => {
  return (
    <>
      <LocalHeader />
      <NavLayout>
        <main className="relative flex flex-col gap-10">
          <LocalPlaceSection />
        </main>
      </NavLayout>

      <div className="fixed left-1/2 -translate-x-1/2 bottom-118pxr flex flex-row justify-end w-screen md:w-[768px] max-h-98px px-20pxr transform">
        <Link href="/local/register">
          <Button type="button" onClick={() => {}} variant="medium" icon={<ICON_EDIT />}>
            글쓰기
          </Button>
        </Link>
      </div>
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