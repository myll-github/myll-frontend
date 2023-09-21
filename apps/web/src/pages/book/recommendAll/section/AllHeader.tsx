import { AppBar } from 'myll-ui'
import { ICON_CHAT, ICON_NOTIFICATION } from 'shared'

const AllHeader = () => {
  return (
    <header>
      <AppBar>
        <AppBar.LeftSection>
          <AppBar.FallbackButton />
        </AppBar.LeftSection>
        <div className="w-full h-36pxr flex items-center">
          <AppBar.MiddleSection>내 취향에 맞는 추천</AppBar.MiddleSection>
          <AppBar.RightSection>
            <span className="flex h-full gap-10pxr items-center">
              <ICON_NOTIFICATION />
              <ICON_CHAT />
            </span>
          </AppBar.RightSection>
        </div>
      </AppBar>
    </header>
  )
}

export default AllHeader
