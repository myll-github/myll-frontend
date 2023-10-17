import { Button, MenuList } from 'myll-ui'
import DefaultMenuItem from 'myll-ui/src/Components/MenuList/DefaultMenuItem'
import { ItemType } from 'myll-ui/src/Components/MenuList/type'
import { useRouter } from 'next/router'

import { useRecommendPlace } from '@/common/api/recommend'

const LikeListPage = () => {
  const { data } = useRecommendPlace()
  const router = useRouter()

  const likeList: ItemType[] = data.map((d) => ({
    mainTitle: d.title,
    subTitle: d.contenttype,
    contenttype: d.contenttype,
    href: d.firstimage,
    id: d.contentid,
    img: d.firstimage,
  }))

  const handleClick = (item) => {
    const { contenttype, id } = item

    router.push(`/details/tour/${contenttype}/${id}`)
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
      <MenuList data={likeList} onClick={handleClick}>
        <DefaultMenuItem />
      </MenuList>
    </div>
  )
}

export default LikeListPage
