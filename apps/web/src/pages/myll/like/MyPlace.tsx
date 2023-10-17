import { useRecommendPlace } from '@/common/api/recommend'

import LikeListPage from './list/LikeListPage'
import NonePage from './none/NonePage'

const MyPlace = () => {
  const { data } = useRecommendPlace()
  console.log(data)
  return (
    <div>
      <LikeListPage />
    </div>
  )
}

export default MyPlace
