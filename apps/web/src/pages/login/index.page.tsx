/* eslint-disable turbo/no-undeclared-env-vars */
import { Button, Divider, Input } from 'myll-ui'
import Image from 'next/image'
import Link from 'next/link'

import DefaultLayout from '@/common/components/Layout/DefaultLayout'

export const Login = () => {
  return (
    <DefaultLayout>
      <div className="w-full h-full flex flex-col justify-center pl-30pxr pr-30pxr">
        <div className="HEADER-H1 break-keep text-center mb-30pxr">
          마일 여행자이시라면 <span className="text-PRIMARY_BLUE">로그인</span> 해주세요
        </div>

        <Input size="large" placeholder="이메일을 입력해주세요" inputMode="email" />
        <Input size="large" placeholder="비밀번호를 입력해주세요" inputType="password" />

        <div className="flex flex-col gap-10pxr mt-30pxr">
          <Button variant="large" color="primary" type="button">
            이메일로 로그인
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

        <div className="flex flex-col gap-10pxr mt-auto mb-30pxr INPUT-LABEL2 text-left text-GRAY_70">
          SNS 계정 회원가입
          <div className="flex w-full justify-center cursor-pointer">
            <Link
              href={
                `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_KEY}&redirect_uri=${process.env.KAKAO_LOGIN_REDIRECT_URL}&response_type=code&` +
                `scope=profile_nickname age_range`
              }
            >
              <Image width={265} height={40} src="/kakao_login_medium_wide.png" alt="no img" />
            </Link>
          </div>
          이메일로 회원가입
          <Button type="button" variant="medium" color="secondary">
            초보 여행자에요
          </Button>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Login
