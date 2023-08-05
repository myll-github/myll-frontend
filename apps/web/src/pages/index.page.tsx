import { Button, Header } from 'myll-ui'
import styled from 'styled-components'

const Styled = styled.div`
  width: 500px;
  height: 500px;

  background-color: red;
`

const Page = () => {
  return (
    <>
      <Header text="Web" />
      <div className="w-30tvw h-30tvh bg-PINK1 HEADER-H1"> 213213</div>
      <div className="w-180tvw h-[30px] bg-PINK1 HEADER-H1"> 213213</div>
      123
      <Button type="button" variant="small">
        asd
      </Button>
      <Styled>rasdasdsads</Styled>
    </>
  )
}

export default Page
