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
import { RECOMMEND_ACTIVITY_KEY_ENUM } from '@/common/constants'
import { useRecommendPageStore } from '@/stores'

import FavoriteActivity from './FavoriteActivity'
import FavoritePlace from './FavoritePlace'
import TravelTheme from './TravelTheme'

const getTabItems = () => [
  {
    key: RECOMMEND_ACTIVITY_KEY_ENUM.FAVORITE_PLACE_KEY_INDEX,
    label: `좋아하는 지역`,
    children: <FavoritePlace />,
  },
  {
    key: RECOMMEND_ACTIVITY_KEY_ENUM.TRAVEL_THEME_KEY_INDEX,
    label: `여행테마`,
    children: <TravelTheme />,
  },
  {
    key: RECOMMEND_ACTIVITY_KEY_ENUM.FAVORTIE_ACTIVITY_KEY_INDEX,
    label: `하고싶은 활동`,
    children: <FavoriteActivity />,
  },
]

export const Recommend = ({ favoritePlace }: any) => {
  const { tabIndex, handleChangeTabIndex } = useRecommendPageStore()

  return (
    <DefaultLayout>
      <Suspense fallback={<div />}>
        <Tab
          activeKey={tabIndex}
          onChange={(key) =>
            handleChangeTabIndex(key as (typeof RECOMMEND_ACTIVITY_KEY_ENUM)[keyof typeof RECOMMEND_ACTIVITY_KEY_ENUM])
          }
          className="mt-30pxr"
          defaultActiveKey="1"
          items={getTabItems()}
        />
      </Suspense>
    </DefaultLayout>
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
