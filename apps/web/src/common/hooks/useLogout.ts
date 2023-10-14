import nookies from 'nookies'
import { useEffect, useState } from 'react'

import { UserLogout } from '../api/user/UserLogout'
import { LoginToken } from '../interfaces'

const checkIsLogout = (token: LoginToken) => !token.accessToken && !token.refreshToken

const useLogout = (token) => {
  const [isLogout, setIsLogout] = useState<boolean>(checkIsLogout(token))

  useEffect(() => {
    setIsLogout(checkIsLogout(token))
  }, [token])

  const logout = async () => {
    // 백엔드에서 로그아웃 처리
    await UserLogout()

    // 토큰 모두 지우기
    nookies.destroy(undefined, 'accessToken')
    nookies.destroy(undefined, 'refreshToken')
    nookies.destroy(undefined, 'userEmail')
  }

  return {
    isLogout,
    logout,
  }
}

export default useLogout
