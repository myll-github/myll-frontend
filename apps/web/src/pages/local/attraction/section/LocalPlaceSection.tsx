import { Button } from 'myll-ui'
import { useState } from 'react'
import { ICON_ARROW_DOWN, ICON_ARROW_UP, ICON_EXPAND_MORE } from 'shared'

import { LocalMenuListParams } from '@/common/api/local'

import LocalAttractionMenuList from '../../components/LocalAttractionMenuList'

const LocalPlaceSection = () => {
  const [sort, setSort] = useState<LocalMenuListParams['sort']>('ASC')

  const handleSort = () => {
    setSort(sort === 'ASC' ? 'DESC' : 'ASC')
  }

  return (
    <section className="my-10pxr">
      <div className="flex flex-row items-center justify-between w-full border-b border-solid pb-12pxr mb-10pxr HEADER-H5 border-GRAY_30 text-GRAY_100 px-20pxr">
        <h2 className="text-center SUBTITLE-T2">로컬이 추천해요</h2>
        <Button
          color="text"
          onClick={handleSort}
          type="button"
          variant="small"
          icon={
            sort === 'ASC' ? (
              <ICON_ARROW_DOWN className="w-18pxr h-18pxr" />
            ) : (
              <ICON_ARROW_UP className="w-18pxr h-18pxr" />
            )
          }
        >
          <span className="w-43pxr"> {sort === 'ASC' ? '오래된 순' : '최신 순'}</span>
        </Button>
      </div>

      <LocalAttractionMenuList sort={sort} />
    </section>
  )
}

export default LocalPlaceSection
