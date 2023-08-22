/* eslint-disable turbo/no-undeclared-env-vars */
import { Button, Input, Space } from 'myll-ui'
import { useEffect, useState } from 'react'

import { SendEmail } from '@/common/api/send-email/SendEmail'
import { UserSignUp } from '@/common/api/signup/UserSignUp'
import { Verify } from '@/common/api/verify/Verify'
import DefaultLayout from '@/common/components/Layout/DefaultLayout'

export const SignUp = () => {
  const [openValidation, setOpenValidation] = useState<boolean>(false)

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailCode, setEmailCode] = useState<string>('')

  const [isEmailValidated, setIsEmailValidated] = useState<boolean>(false)

  useEffect(() => {
    const kakaoName = sessionStorage.getItem('nickname')
    const kakaoEmail = sessionStorage.getItem('email')
    setName(kakaoName)

    if (kakaoEmail !== 'null') setEmail(kakaoEmail)
  }, [])

  useEffect(() => {
    if (emailCode.length === 6) {
      Verify(email, emailCode)
        .then(() => {
          setIsEmailValidated(true)
        })
        .catch(console.log)
    }
  }, [emailCode])

  const sendEmail = async () => {
    try {
      await SendEmail(email)
    } catch (error) {
      console.error(error)
    }
  }

  // @TODO debounce, useCallback 적용 및 text state 관리 로직 추가
  const handleValidateUsername = (text: string) => {
    if (text.length <= 15 && !/[^a-zA-Z가-힣]/.test(text)) return true
    return false
  }

  const handleClickSignUp = async () => {
    await UserSignUp(email, password, name)
  }

  return (
    <DefaultLayout>
      <div className="w-full h-full flex flex-col justify-center pl-30pxr pr-30pxr">
        <div className="HEADER-H1 break-keep text-center mb-30pxr">
          초보여행자님! <span className="text-PRIMARY_BLUE">회원가입</span>을 진행해주세요
        </div>

        <div className="w-full flex flex-col gap-20pxr">
          <Input
            label="사용자 이름"
            size="large"
            value={name}
            placeholder="한/영 15자 이내"
            onValidation={handleValidateUsername}
            onChange={(e) => setName(e.target.value)}
            errorMessage="한글, 영문 대소문자 15자 이내로 입력해주세요"
          />
          <Input
            label="이메일"
            size="large"
            value={email}
            placeholder="이메일을 입력해주세요"
            inputMode="email"
            onChange={(e) => setEmail(e.target.value)}
            addonAfter={
              <Button
                type="button"
                variant="small"
                color="text"
                onClick={() => {
                  setOpenValidation(true)
                  sendEmail()
                }}
              >
                인증
              </Button>
            }
          />
          {openValidation && (
            <Space.Compact block size="large" className="w-full flex justify-center items-center">
              <Input
                size="large"
                placeholder="인증번호"
                value={emailCode}
                disabled={isEmailValidated}
                onChange={(e) => {
                  if (e.target.value.length <= 6) setEmailCode(e.target.value)
                }}
                addonBefore={<div className="INPUT-LABEL2">인증코드</div>}
              />
              <Button
                className="border-1 border-l-0 border-solid border-GRAY_40 text-PRIMARY_BLUE BUTTON-MEDIUM"
                type="button"
                variant="medium"
                color="text"
                disabled={isEmailValidated}
              >
                재전송
              </Button>
            </Space.Compact>
          )}
          <Input
            label="비밀번호"
            size="large"
            placeholder="8자 이상 비밀번호"
            inputType="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-auto mb-60pxr">
          <Button type="button" variant="medium" color="primary" onClick={handleClickSignUp}>
            회원가입
          </Button>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default SignUp
