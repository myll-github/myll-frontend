import { AppBar } from 'myll-ui'
import { ICON_CHAT, ICON_EXPAND_MORE, ICON_NOTIFICATIONS1 } from 'shared'

const HomeHeader = () => {
  return (
    <header>
      <AppBar>
        <AppBar.LeftSection>
          <button className="border-0 w-100pxr h-36pxr px-10pxr" type="button" disabled>
            <span className="flex flex-row SUBTITLE-T3 text-GRAY_100">
              <span className="w-48pxr">부산시</span> <ICON_EXPAND_MORE />
            </span>
          </button>
        </AppBar.LeftSection>
      </AppBar>
    </header>
  )
}

export default HomeHeader
