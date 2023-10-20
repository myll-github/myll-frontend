import { Button, MenuList } from 'myll-ui'
import DefaultMenuItem from 'myll-ui/src/Components/MenuList/DefaultMenuItem'
import { useRouter } from 'next/router'

import { useMyLocalMenuListQuery } from '@/common/api/local'

const MyWritingList = () => {
  const { data } = useMyLocalMenuListQuery()
  const router = useRouter()
  const handleClick = (item) => {
    const { contentTypeId, id } = item
    router.push(`/details/local/${contentTypeId}/${id}`)
  }
  return (
    <div className="flex flex-col">
      <div className="flex h-18pxr items-center">
        <Button
          className="ml-auto mr-20pxr"
          type="button"
          variant="mini"
          color="text"
          onClick={() => router.push('/myll/local/all')}
        >
          전체보기
        </Button>
      </div>
      <MenuList data={data} onClick={handleClick}>
        <DefaultMenuItem />
      </MenuList>
    </div>
  )
}

export default MyWritingList
