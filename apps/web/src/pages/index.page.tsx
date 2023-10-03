import { useRouter } from 'next/router'
import { setCookie } from 'nookies'
import { useCallback, useEffect } from 'react'

import { RefreshAccessToken } from '@/common/api/token/RefreshAccessToken'

const Page = () => {
  const router = useRouter()

  const refreshAccessToken = useCallback(async () => {
    try {
      const newAccessToken = await RefreshAccessToken()
      setCookie(null, 'accessToken', newAccessToken)
      router.replace('/home')
    } catch (e) {
      router.replace('/login')
    }
  }, [router])

  useEffect(() => {
    refreshAccessToken()
  }, [refreshAccessToken])
  return null
}

export default Page
