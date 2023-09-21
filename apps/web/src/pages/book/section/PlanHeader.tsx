import { AppBar } from 'myll-ui'
import { ICON_CHAT, ICON_NOTIFICATION } from 'shared'

const PlanHeader = () => (
  <header>
    <AppBar>
      <AppBar.LeftSection>
        <AppBar.FallbackButton />
      </AppBar.LeftSection>
      <AppBar.MiddleSection>Book</AppBar.MiddleSection>
      <AppBar.RightSection>
        <span className="flex h-full gap-10pxr items-center">
          <ICON_NOTIFICATION />
          <ICON_CHAT />
        </span>
      </AppBar.RightSection>
    </AppBar>
  </header>
)

export default PlanHeader
