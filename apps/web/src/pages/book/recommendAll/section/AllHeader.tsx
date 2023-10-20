import { AppBar } from 'myll-ui'
import { ICON_CHAT, ICON_NOTIFICATIONS1 } from 'shared'

const AllHeader = () => {
  return (
    <header>
      <AppBar>
        <AppBar.LeftSection>
          <AppBar.FallbackButton />
        </AppBar.LeftSection>
        <div className="flex items-center w-full h-36pxr">
          <AppBar.MiddleSection>내 취향에 맞는 추천</AppBar.MiddleSection>
        </div>
      </AppBar>
    </header>
  )
}

export default AllHeader
