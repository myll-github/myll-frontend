import { MenuList, Modal } from 'myll-ui'
import DefaultMenuItem from 'myll-ui/src/Components/MenuList/DefaultMenuItem'
import { ItemType } from 'myll-ui/src/Components/MenuList/type'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ICON_EXPAND_MORE_ACTIVE } from 'shared'

import { useRecommendPlace } from '@/common/api/recommend'

import MyllAllLikeHeader from './section/MyllAllLikeHeader'

const MyllAllLike = () => {
  const { data } = useRecommendPlace()
  const router = useRouter()

  const [open, setOpen] = useState<boolean>(false)

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
    <div>
      <MyllAllLikeHeader />
      <main className="flex flex-col">
        <div className="w-full flex justify-end">
          <button className="border-0 w-100pxr h-36pxr px-10pxr opacity-40" type="button" onClick={() => setOpen(true)}>
            <span className="flex flex-row SUBTITLE-T3 text-SUB_BLUE_1">
              <span className="w-48pxr">필터</span>
              <ICON_EXPAND_MORE_ACTIVE width={18} height={18} />
            </span>
          </button>
        </div>
        <MenuList data={likeList} onClick={handleClick}>
          <DefaultMenuItem />
        </MenuList>
      </main>
      <Modal
        open={open}
        submitButtonText="확인"
        onSubmit={() => setOpen(false)}
        cancelButtonText=""
        onCancel={() => {}}
      >
        <div className="HEADER-H7">현재 지원하지 않는 기능입니다.</div>
      </Modal>
    </div>
  )
}

export default MyllAllLike
