import { AppBar } from 'myll-ui'
import Link from 'next/link'
import { ICON_CHAT, ICON_EXPAND_MORE, ICON_NOTIFICATIONS1, ICON_SEARCH } from 'shared'

const LocalHeader = () => {
  return (
    <header>
      <AppBar>
        <AppBar.LeftSection>
          <button className="border-0 w-100pxr h-36pxr px-10pxr opacity-40" type="button" disabled>
            <span className="flex flex-row SUBTITLE-T3 text-GRAY_100">
              <span className="w-48pxr">Myll</span> <ICON_EXPAND_MORE />
            </span>
          </button>
        </AppBar.LeftSection>
        <AppBar.RightSection className="flex gap-3 text-GRAY_60">
          <Link href="/local/search">
            <ICON_SEARCH />
          </Link>

          <ICON_NOTIFICATIONS1 />
          <ICON_CHAT />
        </AppBar.RightSection>
      </AppBar>
    </header>
  )
}

export default LocalHeader
