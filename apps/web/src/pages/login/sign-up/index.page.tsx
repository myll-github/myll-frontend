/* eslint-disable turbo/no-undeclared-env-vars */
import { Alert, Button, Input } from 'myll-ui'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { SendEmail } from '@/common/api/user/send-email/SendEmail'
import { UserSignUp } from '@/common/api/user/signup/UserSignUp'
import { Verify } from '@/common/api/user/verify/Verify'
import DefaultLayout from '@/common/components/Layout/DefaultLayout'

// @TODO debounce, useCallback 적용 및 text state 관리 로직 추가
export const SignUp = () => {
  const router = useRouter()

  const [openValidation, setOpenValidation] = useState<boolean>(false) // 인증 필드 open
  const [emailCode, setEmailCode] = useState<string>('') // 인증 코드
  const [isEmailValidated, setIsEmailValidated] = useState<boolean>(false) // 인증 완료 state

  const [openAlert, setOpenAlert] = useState<{ isVisible: boolean; type?: 'success' | 'error'; message?: string }>({
    isVisible: false,
  })

  // @TODO 객체로 관리
  const [name, setName] = useState<string>('') // name
  const [email, setEmail] = useState<string>('') // email
  const [password, setPassword] = useState<string>('') // password

  const [nameErrorMessage, setNameErrorMessage] = useState<string>('')
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('')
  const [validationErrorMessage, setValidationErrorMessage] = useState<string>('')
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('')

  // 카카오 정보 자동완성
  useEffect(() => {
    const kakaoName = sessionStorage.getItem('nickname')
    const kakaoEmail = sessionStorage.getItem('email')
    setName(kakaoName)

    if (kakaoEmail !== 'undefined') setEmail(kakaoEmail)
  }, [])

  const handleVerifyEmail = useCallback(async () => {
    try {
      await Verify(email, emailCode)
      setIsEmailValidated(true)
      setValidationErrorMessage('')
    } catch (error) {
      setValidationErrorMessage(error.message)
    }
  }, [email, emailCode])

  // 이메일 자동 인증
  useEffect(() => {
    if (emailCode.length === 6) {
      handleVerifyEmail()
    }
  }, [emailCode])

  const handleValidateEmail = async () => {
    try {
      if (!email.length) throw new Error('이메일을 입력해주세요.')
      if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) throw new Error('잘못된 이메일 형식입니다.')

      setEmailErrorMessage('')
      setIsEmailValidated(false)
      await SendEmail(email)
      setOpenValidation(true)
    } catch (error) {
      setEmailErrorMessage(error.message)
    }
  }

  const handleResendEmail = async () => {
    try {
      await SendEmail(email)
      setEmailErrorMessage('')
    } catch (error) {
      setEmailErrorMessage(error.message)
    }
  }

  const handleClickSignUp = async () => {
    try {
      await UserSignUp(email, password, name)
      router.replace('/login')
    } catch (error) {
      setOpenAlert((prev) => ({ ...prev, isVisible: true, type: 'error', message: error.response.data.message }))
    }
  }

  return (
    <DefaultLayout>
      <div className="w-full h-full flex flex-col justify-center pl-30pxr pr-30pxr pt-80pxr">
        <div className="HEADER-H1 flex flex-col break-keep text-left mb-50pxr">
          <div>초보여행자님!</div>
          <div>
            <span className="text-PRIMARY_BLUE">회원가입</span>을 진행해주세요
          </div>
        </div>

        <div className="w-full flex flex-col gap-20pxr">
          <div className="w-full h-92pxr">
            <Input
              label="사용자 이름"
              size="large"
              value={name}
              placeholder="한/영 15자 이내"
              onChange={(e) => {
                if (e.target.value.length > 15) {
                  setNameErrorMessage('한글, 영문 대소문자 15자 이내로 입력해주세요')
                } else {
                  setNameErrorMessage('')
                }

                setName(e.target.value)
              }}
              errorMessage={nameErrorMessage}
            />
          </div>
          <div className="w-full h-92pxr">
            <Input
              label="이메일"
              size="large"
              value={email}
              disabled={isEmailValidated}
              placeholder="이메일을 입력해주세요"
              inputMode="email"
              onChange={(e) => setEmail(e.target.value)}
              errorMessage={emailErrorMessage}
              addonAfter={
                <Button
                  type="button"
                  variant="small"
                  color="text"
                  disabled={isEmailValidated}
                  onClick={handleValidateEmail}
                >
                  인증
                </Button>
              }
            />
          </div>
          <div className="w-full h-92pxr">
            {openValidation && (
              <Input
                size="large"
                placeholder="인증번호"
                value={emailCode}
                disabled={isEmailValidated}
                onChange={(e) => {
                  if (e.target.value.length <= 6) setEmailCode(e.target.value)
                }}
                errorMessage={validationErrorMessage}
                addonBefore={<div className="INPUT-LABEL2">인증코드</div>}
                addonAfter={
                  <Button
                    type="button"
                    variant="small"
                    color="text"
                    disabled={isEmailValidated}
                    onClick={handleResendEmail}
                  >
                    재전송
                  </Button>
                }
              />
            )}
          </div>
          <div className="w-full h-92pxr">
            <Input
              label="비밀번호"
              size="large"
              placeholder="8자 이상 비밀번호"
              inputType="password"
              value={password}
              errorMessage={passwordErrorMessage}
              onChange={(e) => {
                if (e.target.value.length < 8) setPasswordErrorMessage('8글자 이상 입력하세요.')
                else setPasswordErrorMessage('')
                setPassword(e.target.value)
              }}
            />
          </div>
        </div>
        <div className="w-full flex flex-col mt-74pxr items-center">
          <Button
            type="button"
            variant="block"
            color="primary"
            disabled={
              Boolean(
                nameErrorMessage.length ||
                  emailErrorMessage.length ||
                  validationErrorMessage.length ||
                  passwordErrorMessage.length,
              ) || !isEmailValidated
            }
            onClick={handleClickSignUp}
          >
            회원가입
          </Button>
        </div>
        <Alert
          isVisible={openAlert.isVisible}
          onVisibleChange={(flag) => {
            if (!flag) setOpenAlert({ isVisible: false, message: '' })
          }}
          closable
          type={openAlert.type}
          message={openAlert.message}
        />
      </div>
    </DefaultLayout>
  )
}

export default SignUp
