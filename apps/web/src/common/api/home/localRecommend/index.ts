import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { HOME_LOCALRECOMMANDSECTION_MAP_KEY_TYPE } from '@/common/constants'

import { ROOT_URL } from '../..'

interface randomTourListApiType {
  contentTypeId: string
  count: number
}

export const getRandomTourList = async ({ contentTypeId, count }: randomTourListApiType) => {
  const data = await axios(`${ROOT_URL}/random-tour-list?contentTypeId=${contentTypeId}&count=${count}`)

  return data.data.map((ele, id) => {
    return {
      ...ele,
    }
  })
}

export const randomTourListQueryKey = ({ contentTypeId }) => ['tour-theme', contentTypeId]
export const randomTourListQueryFn =
  ({ contentTypeId, count = 5 }: randomTourListApiType) =>
  () =>
    getRandomTourList({ contentTypeId, count })

export const useRandomTourListQuery = ({ contentTypeId, count = 5 }: randomTourListApiType) => {
  return useQuery({
    queryKey: randomTourListQueryKey({ contentTypeId }),
    queryFn: randomTourListQueryFn({ contentTypeId, count }),
    staleTime: Infinity,
    cacheTime: Infinity,
    suspense: true,
  })
}
