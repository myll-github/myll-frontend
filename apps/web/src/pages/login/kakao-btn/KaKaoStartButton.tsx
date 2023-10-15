import { Button } from 'myll-ui'

const KaKaoStartButton = () => {
  return (
    <Button
      className="w-full flex gap-10pxr bg-[#FEE500] text-[#000000D9] "
      type="button"
      variant="large"
      color="outlined"
    >
      {/* <ICON_KAKAO_CHAT width={18} height={18} /> */}
      카카오로 시작하기
    </Button>
  )
}

export default KaKaoStartButton
