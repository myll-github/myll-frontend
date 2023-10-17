import { AppBar } from 'myll-ui'

const MyllAllLikeHeader = () => {
  return (
    <header>
      <AppBar>
        <AppBar.LeftSection>
          <AppBar.FallbackButton />
        </AppBar.LeftSection>
        <div className="flex items-center w-full h-36pxr">
          <AppBar.MiddleSection>찜한 여행지</AppBar.MiddleSection>
        </div>
      </AppBar>
    </header>
  )
}

export default MyllAllLikeHeader
