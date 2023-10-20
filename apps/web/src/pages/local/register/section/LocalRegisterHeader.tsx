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
      </AppBar>
    </header>
  )
}

export default LocalHeader
