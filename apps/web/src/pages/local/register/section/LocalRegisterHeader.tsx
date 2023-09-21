import { AppBar, Button } from 'myll-ui'
import { ICON_CLOSE } from 'shared'

const LocalHeader = () => {
  return (
    <header>
      <AppBar>
        <AppBar.LeftSection>
          <AppBar.FallbackButton Icon={<ICON_CLOSE />} />
        </AppBar.LeftSection>

        <AppBar.MiddleSection>
          <h1 className="text-GRAY_100 SUBTITLE-T3">장소 추천하기</h1>
        </AppBar.MiddleSection>
        <AppBar.RightSection className="flex gap-3 text-GRAY_60">
          <Button color="secondary" onClick={() => {}} type="button" variant="small">
            임시 저장
          </Button>
        </AppBar.RightSection>
      </AppBar>
    </header>
  )
}

export default LocalHeader
