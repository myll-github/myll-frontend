import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Tab } from 'myll-ui'
import { GetServerSideProps } from 'next'
import { Suspense } from 'react'
import { CompoundProvider, noop } from 'shared'

import {
  FavoriteActivityFn,
  FavoriteActivityKey,
  FavoritePlaceQueryFn,
  FavoritePlaceQueryKey,
  TravelThemeQueryFn,
  TravelThemeQueryKey,
} from '@/common/api/recommend'
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
  const a = 1

  return (
    <CompoundProvider providerValue={a}>
      <DefaultLayout>
        <Suspense fallback={<div />}>
          <Tab className="mt-30pxr" defaultActiveKey="1" items={getTabItems()} onChange={noop} />
        </Suspense>
      </DefaultLayout>
    </CompoundProvider>
  )
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()

  await Promise.all([
    queryClient.fetchQuery({
      queryKey: FavoritePlaceQueryKey,
      queryFn: FavoritePlaceQueryFn,
      staleTime: Infinity,
      cacheTime: Infinity,
    }),
    queryClient.fetchQuery({
      queryKey: TravelThemeQueryKey,
      queryFn: TravelThemeQueryFn,
      staleTime: Infinity,
      cacheTime: Infinity,
    }),

    queryClient.fetchQuery({
      queryKey: FavoriteActivityKey,
      queryFn: FavoriteActivityFn,
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

export default Recommend
