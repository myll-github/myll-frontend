import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Tab } from 'myll-ui'
import { GetServerSideProps } from 'next'
import { Suspense } from 'react'
import { CompoundProvider, noop } from 'shared'

import { FavoritePlaceQueryFn, FavoritePlaceQueryKey } from '@/common/api/recommend'
import DefaultLayout from '@/common/components/Layout/DefaultLayout'

import FavoriteActivity from './FavoriteActivity'
import FavoritePlace from './FavoritePlace'
import TravelTheme from './TravelTheme'

const getTabItems = () => [
  {
    key: '1',
    label: `좋아하는 지역`,
    children: <FavoritePlace />,
  },
  {
    key: '2',
    label: `여행테마`,
    children: <TravelTheme />,
  },
  {
    key: '3',
    label: `하고싶은 활동`,
    children: <FavoriteActivity />,
  },
]

export const Recommend = ({ favoritePlace }: any) => {
  const [{ favoritePlace: fav }, setFavorite] = useState({ favoritePlace })

  return (
    <CompoundProvider providerValue={{ fav }}>
      <DefaultLayout>
        <Tab className="mt-30pxr" defaultActiveKey="1" items={getTabItems()} onChange={noop} />
      </DefaultLayout>
    </CompoundProvider>
  )
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.fetchQuery({
    queryKey: FavoritePlaceQueryKey,
    queryFn: FavoritePlaceQueryFn,
    staleTime: Infinity,
    cacheTime: Infinity,
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Recommend
