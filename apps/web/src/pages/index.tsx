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
      <div className="w-[500px] h-[500px] bg-slate-900 HEADER-H1"> 213213</div>
      123
      <Button />
      <Styled>rasdasdsads</Styled>
    </>
  )
}

export default Page
