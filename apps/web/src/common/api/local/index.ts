import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { isArray } from 'lodash'

import { IconLabelContainerType } from '@/common/components/IconLabel/type'
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

  labels: string
}

export interface LocalMenuListParams extends InitHeaders {
  sort?: 'ASC' | 'DESC'
}

export const getLocal = async ({ initHeaders, sort }: LocalMenuListParams) => {
  const headers = initHeaders ?? getCookieHeader()

  const data = await authAPI(`/local-tour-list`, {
    params: {
      sort,
    },
    headers,
  })

  return data.data.map((ele, index) => {
    return {
      ...ele,

      img: ele.contentImage?.[0] ?? '',
      href: '',
      mainTitle: ele.title,
      subTitle: `${ele.address} • ${TAG_COLOR_MAP[ele.contentTypeId ?? 13]}` ?? 13,
      contenttype: TAG_COLOR_MAP[ele.contentTypeId ?? 13] ?? 13,
      isRecommend: ele.isRecommend ?? false,
      recommendCount: ele.recommendCount ?? 0,
    }
  })
}

export const registerLocal = async (data: updateDataType) => {
  const headers = getCookieHeader()
  const formData = new FormData()

  Object.entries(data).forEach(([key, value]) => {
    if (isArray(value)) {
      value.forEach((ele) => {
        formData.append(key, ele)
      })

      return
    }

    formData.append(key, value)
  })

  await authAPI.post(`/local-tour`, formData, {
    headers: {
      ...headers,
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const getLocalMenuListQueryKey = (sort: LocalMenuListParams['sort'] = 'ASC') => ['localMenuList', sort]

export const getLocalMenuListFn =
  ({ initHeaders, sort = 'ASC' }: LocalMenuListParams) =>
  () =>
    getLocal({ initHeaders, sort })

export const addMenuListLike = async (contentId: number) => {
  const headers = getCookieHeader()

  try {
    const response = await authAPI.post(`/local-recommend`, { contentId }, { headers })
  } catch (error) {
    throw new Error(error)
  }
}

export const removeMenuListLike = async (contentId: number) => {
  const headers = getCookieHeader()

  try {
    const response = await authAPI.delete(`/local-recommend`, { data: { contentId }, headers })
  } catch (error) {
    throw new Error(error)
  }
}

export const useLocalMenuListQuery = ({ sort }: { sort?: LocalMenuListParams['sort'] } = { sort: 'ASC' }) => {
  const query = useQuery({
    queryKey: getLocalMenuListQueryKey(sort),
    queryFn: getLocalMenuListFn({ sort }),
    staleTime: 0,
    cacheTime: Infinity,

    refetchOnMount: true,
  })

  const { handleOptimisticRecommendToggle } = useOptimisticRecommend({
    queryKey: getLocalMenuListQueryKey(sort),
    onRemoveRecommend: removeMenuListLike,
    onAddRecommend: addMenuListLike,
  })

  return { ...query, handleOptimisticRecommendToggle }
}
