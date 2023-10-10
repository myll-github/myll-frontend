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
        <div className="flex flex-col mt-20pxr w-320pxr h-200pxr gap-5 text-WHITE bg-SUB_BLUE_1 rounded-[20px] py-20pxr pl-24pxr ">
          <span className="HEADER-H5">여행자들의 계획 둘러보기</span>

          <p className="max-w-[276px] SUBTITLE-T6">나와 관심사가 비슷한 여행자들의 여행일정을 참고해보세요!</p>

          <div className="flex flex-row overflow-hidden gap-5pxr">
            {Array.from({ length: 8 }).map((_, i) => {
              return <img src={`/icons/Profile_Icon_${i + 1}.svg`} alt="" width="60" height="60" />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnotherUserPlanSection
