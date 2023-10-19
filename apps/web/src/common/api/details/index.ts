import { useQuery } from '@tanstack/react-query'
import { isEmpty } from 'lodash'
import { JSONstartWith } from 'shared'

import { addMenuListLike, removeMenuListLike, useLocalMenuListQuery } from '@/common/api/local'
import { IconLabelContainerType } from '@/common/components/IconLabel/type'
import { TAG_COLOR_MAP } from '@/common/constants'
import useOptimisticRecommend from '@/common/hooks/useOptimisticQuery'

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

  const ele = data.data

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
}

/*!
  공공 데이터엔 가라 데이터가 많은데
  파싱하는 로직
*/
export const getTourDetailById = async ({ contentTypeId, contentId, initHeaders }: InitHeadersWithId) => {
  const headers = initHeaders ?? getCookieHeader()

  const datas = await Promise.all([
    authAPI(
      `/tour-detail`,

      {
        params: {
          contentTypeId,
          contentId,
        },
        headers,
      },
    ),
    authAPI(
      `/tour`,

      {
        params: {
          contentTypeId,
          contentId,
        },
        headers,
      },
    ),
  ])

  let ele = {} as any

  ele = { ...datas[0].data[0], ...datas[1].data }

  return {
    ...ele,
    id: ele.contentid,
    img: ele.firstimage,
    mainTitle: ele.title,
    contentImage: [ele.firstimage, ele.firstimage2].filter((image) => !isEmpty(image)),
    subTitle: ele.addr1,
    contentTypeId: ele.contenttypeid,

    address: ele.addr1 || ele.addr2,
    parking: JSONstartWith('parking', ele, 'parkingfee'),
    infocenter: JSONstartWith('infocenter', ele),
    open: JSONstartWith('open', ele) || JSONstartWith('usetime', ele),
    restDate: JSONstartWith('restDate', ele),
    usetime: JSONstartWith('usetime', ele),
  }
}

export const getLocalMenuQueryKey = ({ contentTypeId, contentId }) => ['localMenuList-detail', contentTypeId, contentId]

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

  const { handleOptimisticRecommendToggle } = useOptimisticRecommend({
    queryKey: getLocalMenuQueryKey({ contentTypeId, contentId }),
    onRemoveRecommend: removeMenuListLike,
    onAddRecommend: addMenuListLike,
  })

  return { ...query, handleOptimisticRecommendToggle }
}
