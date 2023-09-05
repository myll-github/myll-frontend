import { AppBar } from 'myll-ui'

const HomeHeader = () => {
  return (
    <header>
      <AppBar>
        <AppBar.LeftSection>
          <AppBar.FallbackButton />
        </AppBar.LeftSection>
        <AppBar.MiddleSection>example</AppBar.MiddleSection>
        <AppBar.RightSection>example</AppBar.RightSection>
      </AppBar>
    </header>
  )
}

export default HomeHeader
