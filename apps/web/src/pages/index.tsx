import { TYPOGRAPHY } from 'shared'
import styled from 'styled-components'
import { Button, Header } from 'ui'

const Styled = styled.div`
  width: 500px;
  height: 500px;

  background-color: red;
  ${TYPOGRAPHY.HEADER.H1}
`

const Page = () => {
  return (
    <>
      <Header text="Web" />
      123
      <Button />
      <Styled>rasdasdsads</Styled>
    </>
  )
}

export default Page
