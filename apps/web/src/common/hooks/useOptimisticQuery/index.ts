import { useQueryClient } from '@tanstack/react-query'

const useOptimisticRecommend = ({ QueryFn, onRemoveRecommend, onAddRecommend }) => {
  const queryClient = useQueryClient()

  const handleOptimisticRecommendToggle = async ({ id }: { id: number }) => {
    // 낙관적 업데이트를 덮어쓰지 않기 위해 쿼리를 수동으로 삭제한다.
    await queryClient.cancelQueries(QueryFn)

    // 새로운 값으로 낙관적 업데이트 진행
    queryClient.setQueryData(QueryFn, (oldData: any) => {
      return oldData.map((ele) => {
        if (id === ele.id) {
          const { isRecommend } = ele

          if (isRecommend) onRemoveRecommend()
          else onAddRecommend()

          return {
            ...ele,
            isRecommend: !ele.isRecommend,
            recommendCount: !ele.isRecommend ? ele.recommendCount + 1 : ele.recommendCount - 1,
          }
        }

        return ele
      })
    })
  }

  return { handleOptimisticRecommendToggle }
}

export default useOptimisticRecommend
