/* eslint-disable turbo/no-undeclared-env-vars */
import { Alert, Button, Divider, Input } from 'myll-ui'
import { GetServerSidePropsContext } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import nookies from 'nookies'
import { useEffect, useState } from 'react'

import { UserLogin } from '@/common/api/user/login/UserLogin'
import DefaultLayout from '@/common/components/Layout/DefaultLayout'
import { SIGNUP_REDIRECT_URL } from '@/common/constants'
import { LoginToken } from '@/common/interfaces'

import KaKaoStartButton from './kakao-btn/KaKaoStartButton'

interface LoginProps {
  token: LoginToken
}

export const Login = (props: LoginProps) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [openAlert, setOpenAlert] = useState<{ isVisible: boolean; type?: 'success' | 'error'; message?: string }>({
    isVisible: false,
  })

  const router = useRouter()

  useEffect(() => {
    const { token } = props
    if (!token.accessToken && !token.refreshToken) {
      router.replace('/login')
    }
  }, [])

  const handleEmailLogin = async () => {
    try {
      const response = await UserLogin(email, password)

      const { accessToken, refreshToken, isSetPreference } = response.data
      nookies.set(undefined, 'accessToken', accessToken, { maxAge: 1800 })
      nookies.set(undefined, 'refreshToken', refreshToken, { maxAge: 10800 })
      nookies.set(undefined, 'userEmail', email, { maxAge: 10800 })

      if (isSetPreference) router.replace('/home')
      else router.replace('/recommend')
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message
      setOpenAlert({ isVisible: true, type: 'error', message: errorMessage })
    }
  }

  return (
    <>
      <DefaultLayout>
        <main className="flex flex-col w-full h-screen pl-30pxr pr-30pxr pt-80pxr">
          <div className="text-center HEADER-H1 break-keep mb-30pxr">
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
            <div className="flex items-center justify-center w-full h-30pxr">
              <Button color="text" variant="medium" type="button">
                이메일 찾기
              </Button>
              <Divider type="vertical" />
              <Button color="text" variant="medium" type="button">
                비밀번호 찾기
              </Button>
            </div>
          </div>

          <div className="flex flex-col mt-auto mb-0 text-left gap-10pxr INPUT-LABEL2 text-GRAY_70">
            SNS 계정 회원가입
            <div className="flex justify-center w-full cursor-pointer">
              <Link className="w-full" href={SIGNUP_REDIRECT_URL}>
                <KaKaoStartButton />
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
        </main>
      </DefaultLayout>
    </>
  )
}

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const token = nookies.get(context)

  return {
    props: {
      token,
    },
  }
}

export default Login
