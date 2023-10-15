import { AppBar } from 'myll-ui'

const MyllHeader = () => {
  return (
    <header>
      <AppBar>
        <AppBar.LeftSection>
          <AppBar.FallbackButton />
        </AppBar.LeftSection>
        <AppBar.MiddleSection>프로필 이미지 선택</AppBar.MiddleSection>
      </AppBar>
    </header>
  )
}

export default MyllHeader
