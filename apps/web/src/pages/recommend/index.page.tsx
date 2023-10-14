import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Tab } from 'myll-ui'
import nookies from 'nookies'
import { Suspense } from 'react'

import { getCookieHeader } from '@/common/api'
import {
  FavoriteActivityFn,
  FavoriteActivityKey,
  FavoritePlaceQueryFn,
  FavoritePlaceQueryKey,
  TravelThemeQueryFn,
  TravelThemeQueryKey,
} from '@/common/api/recommend'
import DefaultLayout from '@/common/components/Layout/DefaultLayout'
import { RECOMMEND_ACTIVITY_KEY, RECOMMEND_ACTIVITY_KEY_TYPE } from '@/common/constants'
import { useRecommendPageStore } from '@/stores'

import FavoriteActivity from './FavoriteActivity'
import FavoritePlace from './FavoritePlace'
import TravelTheme from './TravelTheme'

const getTabItems = () => [
  {
    key: RECOMMEND_ACTIVITY_KEY.FAVORITE_PLACE_KEY_INDEX,
    label: `좋아하는 지역`,
    children: <FavoritePlace />,
  },
  {
    key: RECOMMEND_ACTIVITY_KEY.TRAVEL_THEME_KEY_INDEX,
    label: `여행테마`,
    children: <TravelTheme />,
  },
  {
    key: RECOMMEND_ACTIVITY_KEY.FAVORTIE_ACTIVITY_KEY_INDEX,
    label: `하고싶은 활동`,
    children: <FavoriteActivity />,
  },
]

export const Recommend = ({ favoritePlace }: any) => {
  const { tabIndex, tabIndexFlag, handleChangeTabIndex } = useRecommendPageStore()

  return (
    <DefaultLayout>
      <Suspense fallback={<div />}>
        <Tab
          activeKey={tabIndex}
          onChange={(key) => {
            handleChangeTabIndex(key as RECOMMEND_ACTIVITY_KEY_TYPE)
          }}
          className="mt-30pxr"
          defaultActiveKey="1"
          items={getTabItems()}
        />
      </Suspense>
    </DefaultLayout>
  )
}

export const getServerSideProps = async (context) => {
  const queryClient = new QueryClient()

  const initHeaders = getCookieHeader(context)

  await Promise.all([
    queryClient.fetchQuery(FavoritePlaceQueryKey(), FavoritePlaceQueryFn({ initHeaders }), {
      staleTime: Infinity,
      cacheTime: Infinity,
    }),
    queryClient.fetchQuery({
      queryKey: TravelThemeQueryKey(),
      queryFn: TravelThemeQueryFn({ initHeaders }),
      staleTime: Infinity,
      cacheTime: Infinity,
    }),
    queryClient.fetchQuery({
      queryKey: FavoriteActivityKey(),
      queryFn: FavoriteActivityFn({ initHeaders }),
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
