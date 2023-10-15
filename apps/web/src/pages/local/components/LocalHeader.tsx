import { AppBar, Button } from 'myll-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ICON_CHAT, ICON_EXPAND_MORE, ICON_NOTIFICATIONS1, ICON_SEARCH } from 'shared'

const LocalHeader = () => {
  const router = useRouter()

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
        <AppBar.RightSection className="flex gap-3 text-GRAY_60">
          <Link href="/local/search">
            <Button color="secondary" type="button" variant="mini" disabled={router.asPath === '/local/search'}>
              검색
            </Button>
          </Link>
        </AppBar.RightSection>
      </AppBar>
    </header>
  )
}

export default LocalHeader
