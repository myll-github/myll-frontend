import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { getCookieHeader } from '@/common/api'

const Page = () => {
  const router = useRouter()
  useEffect(() => {
    const { Authorization } = getCookieHeader()
    if (Authorization) {
      // 토큰이 있으면
      router.replace('/home')
    } else {
      // 토큰이 없으면
      router.replace('/login')
    }
  }, [router])
  return null
}

export default Page
