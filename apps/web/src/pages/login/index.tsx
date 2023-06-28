import { Button } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Container, Label, Layout, Title } from './style'

export const Login: React.FC = () => {
  const router = useRouter()

  return (
    <Container>
      <Layout>
        <Title>
          마일 여행자이시라면 <span>로그인</span> 해주세요
        </Title>
        <Button>초보 여행자에요</Button>
        <Label>
          SNS 계정 회원가입
          <Button
            onClick={() =>
              router.replace(
                `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_KEY}&redirect_uri=${process.env.KAKAO_LOGIN_REDIRECT_URL}&response_type=code&` +
                  `scope=profile_nickname age_range`,
              )
            }
          >
            카카오 로그인
          </Button>
        </Label>
      </Layout>
    </Container>
  )
}

export default Login
