import { Button } from 'antd'
import Image from 'next/image'

import { Container, Label, Layout, Title } from './style'

export const Login: React.FC = () => (
  <Container>
    <Layout>
      <Title>
        마일 여행자이시라면 <span>로그인</span> 해주세요
      </Title>
      <Button>초보 여행자에요</Button>
      <Label>
        SNS 계정 회원가입
        <Button>카카오 로그인</Button>
      </Label>
    </Layout>
  </Container>
)

export default Login
