/* eslint-disable turbo/no-undeclared-env-vars */
import { Button, Divider, Input } from 'myll-ui'
import Image from 'next/image'
import Link from 'next/link'

import DefaultLayout from '@/common/components/layout/DefaultLayout'

export const SignUp = () => {
  return (
    <DefaultLayout>
      <div className="w-full h-full flex flex-col justify-center pl-30pxr pr-30pxr">
        <div className="HEADER-H1 break-keep text-center mb-30pxr">
          초보여행자님! <span className="text-PRIMARY_BLUE">회원가입</span>을 진행해주세요
        </div>

        <div className="flex flex-col gap-20pxr">
          <Input label="사용자 이름" size="large" placeholder="한/영 15자 이내" />
          <Input label="이메일" size="large" placeholder="이메일을 입력해주세요" inputMode="email" />
          <Input label="비밀번호" size="large" placeholder="8자 이상 비밀번호" inputType="password" />
        </div>
        <div className="flex flex-col mt-auto mb-60pxr">
          <Button type="button" variant="medium" color="primary">
            회원가입
          </Button>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default SignUp
