import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { TAG_COLOR_MAP } from '@/common/constants'
import useOptimisticRecommend from '@/common/hooks/useOptimisticQuery'

import { authAPI, getCookieHeader, InitHeaders, ROOT_URL } from '..'

interface updateDataType {
  title: string
  contentImage: unknown[]
  contentTypeId: string
  address: string
  introduction: string
  createAt: number
}

export const getLocal = async ({ initHeaders }: InitHeaders) => {
  const headers = initHeaders ?? getCookieHeader()
  const data = await authAPI(`${ROOT_URL}/local-tour-list`, { headers })

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

export const updateLocal = async (data: updateDataType) => {
  const headers = getCookieHeader()
  const formData = new FormData()

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value)
  })

  await authAPI.post(
    `${ROOT_URL}/local-tour
  `,
    formData,
    {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data',
      },
    },
  )
}

export const getLocalMenuListQueryKey = () => ['localMenuList']

export const getLocalMenuListFn =
  ({ initHeaders }: InitHeaders) =>
  () =>
    getLocal({ initHeaders })

export const useLocalMenuListQuery = () => {
  const query = useQuery({
    queryKey: getLocalMenuListQueryKey(),
    queryFn: getLocalMenuListFn({}),
    staleTime: 0,
    cacheTime: Infinity,

    refetchOnMount: true,
  })

  const { handleOptimisticRecommendToggle } = useOptimisticRecommend({ queryKey: getLocalMenuListQueryKey() })

  return { ...query, handleOptimisticRecommendToggle }
}
