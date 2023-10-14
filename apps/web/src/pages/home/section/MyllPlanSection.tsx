import { Alert, Button } from 'myll-ui'
import Link from 'next/link'

const MyllPlanSection = () => {
  return (
    <section className="flex flex-col items-center w-full px-20pxr">
      <h2 className="w-full HEADER-H5 text-GRAY_100">나의 마일 플랜</h2>

      <div className="flex flex-col items-center w-full gap-5 mt-20pxr px-10pxr">
        <Alert isVisible message="예정된 여행계획이 없어요!" onVisibleChange={() => {}} type="info" closable={false} />

        <Button color="gradient" onClick={() => {}} type="button" variant="block">
          여행계획 추가하기
        </Button>
      </div>
    </section>
  )
}
export default MyllPlanSection
