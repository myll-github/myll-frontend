import { useQuery } from '@tanstack/react-query'

import { authAPI, getCookieHeader, InitHeaders, ROOT_URL } from '@/common/api'
import { TAG_COLOR_MAP } from '@/common/constants'
import useOptimisticRecommend from '@/common/hooks/useOptimisticQuery'

export const getRandomLocalTourList = async ({ initHeaders }: InitHeaders) => {
  const headers = initHeaders ?? getCookieHeader()
  const data = await authAPI(`${ROOT_URL}/random-local-tour-list?count=1000`, { headers })

  return data.data.map((ele, index) => {
    return {
      ...ele,
      id: ele.id,
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

const addListLike = async (contentId: number) => {
  const headers = getCookieHeader()

  try {
    const response = await authAPI.post(`${ROOT_URL}/local-recommend`, { contentId }, { headers })
  } catch (error) {
    throw new Error(error)
  }
}

const removeListLike = async (contentId: number) => {
  const headers = getCookieHeader()

  try {
    const response = await authAPI.delete(`${ROOT_URL}/local-recommend`, { data: { contentId }, headers })
  } catch (error) {
    throw new Error(error)
  }
}

export const useRandomLocalTourListQuery = () => {
  const query = useQuery({
    queryKey: getRandomLocalTourListQueryKey(),
    queryFn: getRandomLocalTourListFn({}),
    staleTime: Infinity,
    cacheTime: Infinity,

    refetchOnMount: true,
  })

  const { handleOptimisticRecommendToggle } = useOptimisticRecommend({
    queryKey: getRandomLocalTourListQueryKey(),
    onAddRecommend: addListLike,
    onRemoveRecommend: removeListLike,
  })

  return { ...query, handleOptimisticRecommendToggle }
}
