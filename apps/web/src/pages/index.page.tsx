import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import nookies from 'nookies'
import { useEffect } from 'react'

import { LoginToken } from '@/common/interfaces'

interface PageProps {
  token: LoginToken
}

const Page = (props: PageProps) => {
  const router = useRouter()

  useEffect(() => {
    const { token } = props
    if (!token.accessToken && !token.refreshToken) {
      router.replace('/home')
    } else {
      router.replace('/login')
    }
  }, [])
  return null
}

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const token = nookies.get(context)

  return {
    props: {
      token,
    },
  }
}

export default Page
