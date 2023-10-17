import { useLocalMenuListQuery } from '@/common/api/local'

import MyWritingList from './list/MyWritingList'
import NoneWritingPage from './none/NoneWritingPage'

const MyWriting = () => {
  const { data } = useLocalMenuListQuery()
  return <div>{data && data.length > 0 ? <MyWritingList /> : <NoneWritingPage />}</div>
}

export default MyWriting
