import { dehydrate, QueryClient } from '@tanstack/react-query'
import { ItemType } from 'myll-ui/src/Components/MenuList/type'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useEffect, useState } from 'react'

import { getCookieHeader, withAuth } from '@/common/api'
import { getPlanFn, getPlanQuery } from '@/common/api/book'
import { FavoritePlaceQueryFn, FavoritePlaceQueryKey, useFavoritePlaceQuery } from '@/common/api/recommend'
import NavLayout from '@/common/components/Layout/NavLayout'
import useBookPageStore from '@/stores/useBookPageStore'

import SetPlanInfoModal from './modal/SetPlanInfoModal'
import PlanBodyAdd from './section/PlanBodyAdd'
import PlanHeader from './section/PlanHeader'
import SimpleList from './section/SimpleList'

export const Book = () => {
  const { data, refetch } = useFavoritePlaceQuery()
  const { setPlanInfo, setRecommendedPlaceMap } = useBookPageStore()

  useEffect(() => {
    if (data && data.length === 0) {
      refetch()
    }
    const recommendList: ItemType[] = data.map((d) => ({
      ...d,
      img: d.firstimage ? d.firstimage : d.firstimage2,
      href: d.url,
      subTitle: d.conttenttype,
    }))

    const recommendPlaceMap = new Map<number, ItemType>()

    recommendList.forEach((recommendData) => {
      recommendPlaceMap.set(recommendData.id, recommendData)
    })

    setRecommendedPlaceMap(recommendPlaceMap)
  }, [data, refetch, setRecommendedPlaceMap])

  // 일정 등록
  const [openRangePicker, setOpenRangePicker] = useState<boolean>(false)

  useEffect(() => {
    if (openRangePicker) {
      setPlanInfo({ planTitle: '', startDate: '', endDate: '' })
    }
  }, [openRangePicker])

  return (
    <NavLayout>
      <PlanHeader />

      <PlanBodyAdd openModal={() => setOpenRangePicker(true)} />

      <SimpleList />

      <SetPlanInfoModal open={openRangePicker} onClose={() => setOpenRangePicker(false)} />
    </NavLayout>
  )
}

export const getServerSideProps: GetServerSideProps = withAuth(async (context: GetServerSidePropsContext) => {
  const queryClient = new QueryClient()
  const initHeaders = getCookieHeader(context)
  try {
    await Promise.all([
      await queryClient.fetchQuery({
        queryKey: FavoritePlaceQueryKey(),
        queryFn: FavoritePlaceQueryFn({ initHeaders }),
        staleTime: Infinity,
        cacheTime: Infinity,
      }),
      await queryClient.fetchQuery({
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
  } catch (e) {
    return {
      props: {},
      redirect: { statusCode: 302, destination: '/login' },
    }
  }
})

export default Book
