import styled from 'styled-components'
import { Button, Header } from 'ui'

const Styled = styled.div`
  width: 500px;
  height: 500px;

  background-color: red;
`

export default function Page() {
  return (
    <>
      <Header text="Web" />
      123
      <Button />
      <Styled />
    </>
  )
}
