import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { getCookieHeader, InitHeaders, ROOT_URL } from '@/common/api'
import { TAG_COLOR_MAP } from '@/common/constants'

export const getRandomLocalTourList = async ({ initHeaders }: InitHeaders) => {
  const headers = initHeaders ?? getCookieHeader()
  const data = await axios(`${ROOT_URL}/random-local-tour-list`, { headers })

  return data.data.map((ele, index) => {
    return {
      ...ele,
      id: index,
      img: '',
      href: '',
      mainTitle: ele.title,
      subTitle: `${ele.address} • ${TAG_COLOR_MAP[ele.contentTypeId ?? 13]}` ?? 13,
      contenttype: TAG_COLOR_MAP[ele.contentTypeId ?? 13] ?? 13,
      isRecommend: ele.isRecommend ?? false,
      recommendCount: ele.recommendCount ?? 0,
    }
  })
}

export const getRandomLocalTourListQueryKey = () => ['RandomLocalTourList']

export const getRandomLocalTourListFn =
  ({ initHeaders }: InitHeaders) =>
  () =>
    getRandomLocalTourList({ initHeaders })

export const useRandomLocalTourListQuery = () => {
  return useQuery({
    queryKey: getRandomLocalTourListQueryKey(),
    queryFn: getRandomLocalTourListFn({}),
    staleTime: Infinity,
    cacheTime: Infinity,

    refetchOnMount: true,
  })
}
