import { useQueryClient } from '@tanstack/react-query'
import { isArray } from 'lodash'
import { noop } from 'shared'

type OnCommand = (contentId: number) => Promise<void>

interface UseOptimisticRecommendArgs {
  queryKey: unknown[]
  onRemoveRecommend: OnCommand
  onAddRecommend: OnCommand
}

const useOptimisticRecommend = ({ queryKey, onRemoveRecommend, onAddRecommend }: UseOptimisticRecommendArgs) => {
  const queryClient = useQueryClient()

  const handleOptimisticRecommendToggle = async ({ id }: { id: number }) => {
    // 낙관적 업데이트를 덮어쓰지 않기 위해 쿼리를 수동으로 삭제한다.
    await queryClient.cancelQueries(queryKey)

    const previousQueryData: any[] = queryClient.getQueryData(queryKey)
    let isRecommendQueryKey
    let newQueryData

    const getPreviousQueryData = ({ ele }) => {
      if (id === ele.id) {
        const { isRecommend } = ele
        isRecommendQueryKey = isRecommend

        return {
          ...ele,
          isRecommend: !ele.isRecommend,
          recommendCount: !ele.isRecommend ? ele.recommendCount + 1 : ele.recommendCount - 1,
        }
      }

      return ele
    }

    if (isArray(previousQueryData)) {
      newQueryData = previousQueryData.map((ele) => getPreviousQueryData({ ele }))
    } else {
      newQueryData = getPreviousQueryData({ ele: previousQueryData })
    }

    queryClient.setQueryData(queryKey, newQueryData)

    try {
      if (typeof isRecommendQueryKey !== 'boolean') {
        throw Error('cannot find id in list!')
      }

      if (isRecommendQueryKey) await onRemoveRecommend(id)
      else await onAddRecommend(id)
    } catch (err) {
      queryClient.setQueryData(queryKey, previousQueryData)
    }
  }

  return { handleOptimisticRecommendToggle }
}

export default useOptimisticRecommend
