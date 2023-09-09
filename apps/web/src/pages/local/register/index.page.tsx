import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Alert, AppBar, Button, Tab } from 'myll-ui'
import { ICON_EDIT } from 'shared'

import NavLayout from '@/common/components/Layout/NavLayout'

export const Register = () => {
  return (
    <>
      <NavLayout>
        <main className="relative flex flex-col gap-10">123</main>
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

export default Register
