import { AppBar } from 'myll-ui'
import Link from 'next/link'
import { ICON_CHAT, ICON_EXPAND_MORE, ICON_NOTIFICATIONS1, ICON_SEARCH } from 'shared'

const DetailHeader = () => {
  return (
    <header>
      <AppBar>
        <AppBar.LeftSection>
          <AppBar.FallbackButton />
        </AppBar.LeftSection>

        <AppBar.MiddleSection>
          <h1 className="SUBTITLE-T3 text-GRAY_100">상세정보</h1>
        </AppBar.MiddleSection>
      </AppBar>
    </header>
  )
}

export default DetailHeader
