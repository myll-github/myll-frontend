import { Button } from 'myll-ui'

interface SimpleListProps {
  onChangeMode: () => void
}

const SimpleList = (props: SimpleListProps) => {
  const { onChangeMode } = props
  return (
    <div className="flex flex-col">
      <div className="flex h-64pxr SUBTITLE-T2 items-center border-b-[1px] border-solid border-GRAY_30">
        <span className="mr-auto ml-20pxr">내 취향에 맞는 추천</span>
        <Button type="button" variant="small" color="text" onClick={onChangeMode}>
          전체 보기
        </Button>
      </div>
    </div>
  )
}

export default SimpleList
