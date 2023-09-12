import { Alert, Button } from 'myll-ui'

interface PlanBodyAddProps {
  openModal: () => void
}

const PlanBodyAdd = (props: PlanBodyAddProps) => {
  const { openModal } = props
  return (
    <div className="flex flex-col pl-30pxr pr-30pxr pt-20pxr mb-20pxr">
      <div className="break-words HEADER-H2">초보 여행자님 어디로 떠나볼까요?</div>
      <div className="break-words SUBTITLE-T6 mt-10pxr mb-20pxr">
        카카오맵에서 여행 동선을 바로 확인하고 가고싶은 여행지를 등록해 여행계획을 짜보세요!
      </div>
      <div className="mb-20pxr">
        <Alert type="warning" message="아직 여행계획이 없어요." closable={false} isVisible onVisibleChange={() => {}} />
      </div>
      <Button variant="large" type="button" onClick={openModal}>
        여행일정 등록하기
      </Button>
    </div>
  )
}

export default PlanBodyAdd
