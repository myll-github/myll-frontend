import { useQuery } from '@tanstack/react-query'

import useOptimisticRecommend from '@/common/hooks/useOptimisticQuery'

import { authAPI, getCookieHeader, ROOT_URL } from '../..'

interface randomTourListApiType {
  contentTypeId?: string
  count?: number
  key?: string | number

  initHeaders?: {
    Authorization: string
  }
}

export const getRandomTourList = async ({ initHeaders, contentTypeId, count }: randomTourListApiType) => {
  const headers = initHeaders ?? getCookieHeader()

  const data = await authAPI(
    `${ROOT_URL}/random-tour-list?${contentTypeId ? `contentTypeId=${contentTypeId}&` : ''}count=${count}`,
    { headers },
  )

  return data.data.map((ele, id) => {
    return {
      ...ele,
      id,
      key: id,
      img: ele.firstimage,
      mainTitle: ele.title,
      subTitle: ele.addr1,
      conttenttype: ele.contenttypeid,
    }
  })
}

export const randomTourListQueryKey = ({ contentTypeId = '', key = '' }: any) => {
  return ['randomTourListQuery', key, contentTypeId ?? 'all']
}
export const randomTourListQueryFn =
  ({ initHeaders, contentTypeId = '', count = 6 }: randomTourListApiType) =>
  () => {
    return getRandomTourList({ initHeaders, contentTypeId, count })
  }

export const useRandomTourListQuery = ({ contentTypeId = '', count = 6, key = '' }: randomTourListApiType) => {
  const query = useQuery({
    // @ts-ignore
    queryKey: randomTourListQueryKey({ contentTypeId, key }),
    queryFn: randomTourListQueryFn({ contentTypeId, key, count }),
    cacheTime: Infinity,
    staleTime: Infinity,
    refetchOnMount: true,
  })

  const { handleOptimisticRecommendToggle } = useOptimisticRecommend({
    queryKey: randomTourListQueryKey({ contentTypeId, key }),
  })

  return { ...query, handleOptimisticRecommendToggle }
}
