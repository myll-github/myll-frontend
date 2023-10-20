import { useRecommendPlace } from '@/common/api/recommend'

import LikeListPage from './list/LikeListPage'
import NonePage from './none/NonePage'

const MyPlace = () => {
  const { data } = useRecommendPlace()
  return <div>{data && data.length > 0 ? <LikeListPage /> : <NonePage />}</div>
}

export default MyPlace
