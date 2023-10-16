import { AppBar } from 'myll-ui'

const MyllHeader = () => {
  return (
    <header>
      <AppBar>
        <AppBar.LeftSection>
          <AppBar.FallbackButton />
        </AppBar.LeftSection>
        <AppBar.MiddleSection>MYLL</AppBar.MiddleSection>
      </AppBar>
    </header>
  )
}

export default MyllHeader
