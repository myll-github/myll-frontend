import { MenuList, Modal } from 'myll-ui'
import DefaultMenuItem from 'myll-ui/src/Components/MenuList/DefaultMenuItem'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ICON_EXPAND_MORE_ACTIVE } from 'shared'

import { useMyLocalMenuListQuery } from '@/common/api/local'

import MyllAllLocalHeader from './section/MyllAllLocalHeader'

const MyllAllLocal = () => {
  const { data } = useMyLocalMenuListQuery()
  const router = useRouter()

  const [open, setOpen] = useState<boolean>(false)
  const handleClick = (item) => {
    const { contentTypeId, id } = item
    router.push(`/details/local/${contentTypeId}/${id}`)
  }
  return (
    <div>
      <MyllAllLocalHeader />
      <main className="flex flex-col">
        <div className="w-full flex justify-end">
          <button className="border-0 w-100pxr h-36pxr px-10pxr opacity-40" type="button" onClick={() => setOpen(true)}>
            <span className="flex flex-row SUBTITLE-T3 text-SUB_BLUE_1">
              <span className="w-48pxr">필터</span>
              <ICON_EXPAND_MORE_ACTIVE width={18} height={18} />
            </span>
          </button>
        </div>
        <MenuList data={data} onClick={handleClick}>
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

export default MyllAllLocal
