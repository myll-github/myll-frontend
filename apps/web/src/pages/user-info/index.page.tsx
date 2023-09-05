import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const UserInfo = () => {
  const router = useRouter()

  useEffect(() => {
    const { kakaoId, nickname, email } = router.query

    sessionStorage.setItem('kakaoId', kakaoId as string)
    sessionStorage.setItem('nickname', nickname as string)

    if (email !== 'null') sessionStorage.setItem('email', email as string)

    router.push('/login/sign-up')
  }, [router])
  return null
}

export default UserInfo
