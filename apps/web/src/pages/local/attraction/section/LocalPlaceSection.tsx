import { Button } from 'myll-ui'
import { ICON_EXPAND_MORE } from 'shared'

import LocalAttractionMenuList from '../../components/LocalAttractionMenuList'

const LocalPlaceSection = () => {
  return (
    <section className="my-10pxr">
      <div className="flex flex-row items-center justify-between w-full border-b border-solid pb-12pxr mb-10pxr HEADER-H5 border-GRAY_30 text-GRAY_100 px-20pxr">
        <h2 className="text-center SUBTITLE-T2">로컬이 추천해요</h2>
        <Button color="text" onClick={() => {}} type="button" variant="small" icon={<ICON_EXPAND_MORE />}>
          Filter
        </Button>
      </div>

      <LocalAttractionMenuList />
    </section>
  )
}

export default LocalPlaceSection