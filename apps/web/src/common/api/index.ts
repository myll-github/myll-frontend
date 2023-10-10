import axios, { AxiosError } from 'axios'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import nookies from 'nookies'

export const ROOT_URL = process.env.NEXT_PUBLIC_API_URL

export interface InitHeaders {
  initHeaders?: {
    Authorization: string
  }
}

export const getCookieHeader = (context: GetServerSidePropsContext = undefined) => {
  console.log(context)
  console.log('-----')
  console.log(context.req)
  const cookies = nookies.get(context)
  console.log('cookie')
  console.log(cookies)
  // eslint-disable-next-line no-underscore-dangle
  const token = cookies._vercel_jwt || ''
  const header = {
    Authorization: token ? `${token}` : undefined,
  }
  return header
}

const isServer = () => {
  return typeof window === 'undefined'
}

export const authAPI = axios.create({
  baseURL: ROOT_URL,
  withCredentials: true,
})

authAPI.interceptors.response.use(
  (response) => {
    return response
  },
  async (error: AxiosError) => {
    if (!isServer() && error.response?.status === 401) {
      try {
        await axios.post('/token/refresh', undefined, {
          baseURL: ROOT_URL,
          withCredentials: true,
        })
        const { response } = error

        // retry
        const retryOriginalRequest = new Promise((resolve) => {
          resolve(axios(response!.config))
        })

        return retryOriginalRequest
      } catch (e) {
        window.location.href = '/login'
      }
    }
    throw error
  },
)

export const withAuth = (getServerSideProps: GetServerSideProps) => {
  return async (context: GetServerSidePropsContext) => {
    try {
      // authAPI 인스턴스로 호출되는 API header에 access token 값 담아주기
      const response = await getServerSideProps(context)
      return response
    } catch (e) {
      const { response } = e

      if (response && response.status === 401) {
        const { res } = context
        try {
          // access token 재발급
          await axios.post('/token/refresh', undefined, {
            baseURL: ROOT_URL,
            headers: { Cookie: context.req.headers.cookie },
            withCredentials: true,
          })
        } catch (_) {
          // access token 재발급 실패 시 로그아웃
          nookies.destroy(context, 'accessToken')
          nookies.destroy(context, 'refreshToken')
          nookies.destroy(context, 'userEmail')
          res.writeHead(302, { Location: '/login' })
          res.end()
        }

        // getServerSideProps 재호출
        const newResponse = await getServerSideProps(context)
        return newResponse
      }
      return e
    }
  }
}
