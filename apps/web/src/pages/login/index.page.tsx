/* eslint-disable turbo/no-undeclared-env-vars */
import { Alert, Button, Divider, Input } from 'myll-ui'
import Image from 'next/image'
import Link from 'next/link'
import { setCookie } from 'nookies'
import { useState } from 'react'

import { UserLogin } from '@/common/api/user-login/UserLogin'
import DefaultLayout from '@/common/components/Layout/DefaultLayout'

export const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [openAlert, setOpenAlert] = useState<{ isVisible: boolean; type?: 'success' | 'error'; message?: string }>({
    isVisible: false,
  })

  const handleEmailLogin = async () => {
    try {
      const response = await UserLogin(email, password)
      setCookie(null, 'accessToken', response.data.accessToken, {
        path: '/',
        maxAge: 10000, // ms
      })
      // 나중에 store email에 넣어야 해
      setCookie(null, 'userEmail', email, {
        path: '/',
        maxAge: 1000000,
      })
    } catch (error) {
      setOpenAlert({ isVisible: true, type: 'error', message: error.message })
    }
  }

  return (
    <DefaultLayout>
      <div className="w-full h-screen flex flex-col pl-30pxr pr-30pxr">
        <div className="HEADER-H1 break-keep text-center mb-30pxr">
          마일 여행자이시라면 <span className="text-PRIMARY_BLUE">로그인</span> 해주세요
        </div>

        <Input
          size="large"
          value={email}
          placeholder="이메일을 입력해주세요"
          inputMode="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          size="large"
          value={password}
          placeholder="비밀번호를 입력해주세요"
          inputType="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex flex-col gap-10pxr mt-30pxr">
          <Button variant="large" color="primary" type="button" onClick={handleEmailLogin}>
            로그인
          </Button>
          <div className="w-full flex justify-center items-center h-30pxr">
            <Button color="text" variant="medium" type="button">
              이메일 찾기
            </Button>
            <Divider type="vertical" />
            <Button color="text" variant="medium" type="button">
              비밀번호 찾기
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-10pxr mt-auto mb-0 INPUT-LABEL2 text-left text-GRAY_70">
          SNS 계정 회원가입
          <div className="flex w-full justify-center cursor-pointer">
            <Link
              href={
                `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_KEY}&redirect_uri=${process.env.KAKAO_LOGIN_REDIRECT_URL}&response_type=code&` +
                `scope=profile_nickname age_range`
              }
            >
              <Image width={265} height={40} src="/kakao_start.png" alt="no img" />
            </Link>
          </div>
          <Alert
            isVisible={openAlert.isVisible}
            onVisibleChange={(flag) => {
              if (!flag) setOpenAlert({ isVisible: false, message: '' })
            }}
            type={openAlert.type}
            message={openAlert.message}
          />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Login
