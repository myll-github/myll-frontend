import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { HOME_LOCALRECOMMANDSECTION_MAP_KEY_TYPE } from '@/common/constants'

import { getCookieHeader, ROOT_URL } from '../..'

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

  const data = await axios(
    `${ROOT_URL}/random-tour-list?${contentTypeId ? `contentTypeId=${contentTypeId}&` : ''}count=${count}`,
    { headers },
  )

  return data.data.map((ele, id) => {
    return {
      ...ele,
      key: id,
      img: ele.firstimage,
      mainTitle: ele.title,
      subTitle: ele.addr1,
      conttenttype: ele.conttenttype,
    }
  })
}

export const randomTourListQueryKey = ({ contentTypeId = '', key = '' }: any) => [
  'tour-theme',
  key,
  contentTypeId ?? 'all',
]
export const randomTourListQueryFn =
  ({ initHeaders, contentTypeId, count = 6 }: randomTourListApiType) =>
  () =>
    getRandomTourList({ initHeaders, contentTypeId, count })

export const useRandomTourListQuery = ({ contentTypeId = '', count = 6, key = '' }: randomTourListApiType) => {
  return useQuery({
    // @ts-ignore
    queryKey: randomTourListQueryKey({ contentTypeId, key }),
    queryFn: randomTourListQueryFn({ contentTypeId, key, count })(),
    staleTime: Infinity,
    cacheTime: Infinity,
  })
}
