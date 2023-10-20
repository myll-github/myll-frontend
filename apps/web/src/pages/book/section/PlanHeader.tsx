import { AppBar } from 'myll-ui'
import { ICON_EXPAND_MORE } from 'shared'

const PlanHeader = () => (
  <header>
    <AppBar>
      <AppBar.LeftSection>
        <button className="border-0 w-100pxr h-36pxr px-10pxr" type="button" disabled>
          <span className="flex flex-row SUBTITLE-T3 text-GRAY_100">
            <span className="w-48pxr">부산시</span> <ICON_EXPAND_MORE />
          </span>
        </button>
      </AppBar.LeftSection>
      <AppBar.MiddleSection>BOOK</AppBar.MiddleSection>
    </AppBar>
  </header>
)

export default PlanHeader
