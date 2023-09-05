import { Button } from 'myll-ui'

import LocalAttractionMenuList from '../components/LocalAttractionMenuList'

const LocalPlaceSection = () => {
  return (
    <section className="">
      <div className="flex flex-row items-center justify-between w-full border-b border-solid pb-12pxr mb-30pxr HEADER-H5 border-GRAY_30 text-GRAY_100 px-20pxr">
        <h2 className="text-center SUBTITLE-T2">새로 등록된 관광지</h2>
        <Button color="text" onClick={() => {}} type="button" variant="small">
          전체보기
        </Button>
      </div>

      <LocalAttractionMenuList />
    </section>
  )
}

export default LocalPlaceSection
