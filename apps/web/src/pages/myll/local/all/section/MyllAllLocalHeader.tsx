import { AppBar } from 'myll-ui'

const MyllAllLocalHeader = () => {
  return (
    <header>
      <AppBar>
        <AppBar.LeftSection>
          <AppBar.FallbackButton />
        </AppBar.LeftSection>
        <div className="flex items-center w-full h-36pxr">
          <AppBar.MiddleSection>작성한 글</AppBar.MiddleSection>
        </div>
      </AppBar>
    </header>
  )
}

export default MyllAllLocalHeader
