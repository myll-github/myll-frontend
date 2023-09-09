import { Button } from 'myll-ui'

const AnotherUserPlanSection = () => {
  return (
    <section className="my-10pxr px-20pxr">
      <div className="flex flex-row items-start justify-between w-full HEADER-H5 text-GRAY_100">
        <h2>다른 여행자들의 Myll</h2>
        <Button color="secondary" onClick={() => {}} type="button" variant="small">
          다른 추천 보기
        </Button>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col mt-20pxr w-320pxr h-200pxr gap-5 bg-SUB_BLUE_1 rounded-[20px]">aaa</div>
      </div>
    </section>
  )
}

export default AnotherUserPlanSection
