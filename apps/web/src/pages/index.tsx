import styled from 'styled-components'

import Button from '../components/Button'
import { Header } from '../components/Header'

const Styled = styled.div`
  width: 500px;
  height: 500px;

  background-color: red;
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
