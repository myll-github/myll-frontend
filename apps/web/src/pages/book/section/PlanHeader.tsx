import { AppBar } from 'myll-ui'
import { ICON_CHAT, ICON_NOTIFICATIONS1 } from 'shared'

const PlanHeader = () => (
  <header>
    <AppBar>
      <AppBar.LeftSection>
        <AppBar.FallbackButton />
      </AppBar.LeftSection>
      <AppBar.MiddleSection>BOOK</AppBar.MiddleSection>
    </AppBar>
  </header>
)

export default PlanHeader
