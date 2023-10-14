import { useQuery } from '@tanstack/react-query'

import { useLocalMenuListQuery } from '@/common/api/local'
import { IconLabelContainerType } from '@/common/components/IconLabel/type'
import { TAG_COLOR_MAP } from '@/common/constants'

import { authAPI, getCookieHeader, InitHeaders } from '..'

interface updateDataType {
  title: string
  contentImage: unknown[]
  contentTypeId: string
  address: string
  introduction: string
  createAt: number

  labels: IconLabelContainerType
}

interface InitHeadersWithId extends InitHeaders {
  contentTypeId: number
  contentId: number
}

interface UseLocalMenuListQuery {
  contentTypeId: number
  contentId: number
}

export const getLocalMenuById = async ({ contentTypeId, contentId, initHeaders }: InitHeadersWithId) => {
  const headers = initHeaders ?? getCookieHeader()

  const data = await authAPI(
    `/local-tour-detail`,

    {
      params: {
        contentTypeId,
        contentId,
      },
      headers,
    },
  )

  return data.data.map((ele, index) => {
    return {
      ...ele,
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

export const getLocalMenuQueryKey = ({ contentTypeId, contentId }) => ['localMenuList', contentTypeId, contentId]

export const getLocalMenuFn =
  ({ contentTypeId, contentId, initHeaders }: InitHeadersWithId) =>
  () =>
    getLocalMenuById({ contentTypeId, contentId, initHeaders })

export const useLocalMenuQuery = ({ contentTypeId, contentId }: UseLocalMenuListQuery) => {
  const query = useQuery({
    queryKey: getLocalMenuQueryKey({ contentTypeId, contentId }),
    queryFn: getLocalMenuFn({ contentTypeId, contentId }),
    staleTime: 0,
    cacheTime: Infinity,

    refetchOnMount: true,
  })

  return query
}
