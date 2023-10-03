import axios, { AxiosError } from 'axios'
import { GetServerSidePropsContext } from 'next'
import Router from 'next/router'
import nookies, { setCookie } from 'nookies'

export const ROOT_URL = 'http://localhost:8080'

export interface InitHeaders {
  initHeaders?: {
    Authorization: string
  }
}

export const getCookieHeader = (context: any = undefined) => {
  const cookies = nookies.get(context)
  const token = cookies.accessToken || ''

  const header = {
    Authorization: token ? `${token}` : undefined,
  }
  return header
}

/**
 *  401 에러로 인증 실패 시에는 access token을 재발급하여 retry 하는 로직
 */

// server 측에서 실행되는 함수인가?
const isServer = () => {
  return typeof window === 'undefined'
}

let accessToken = ''
let context = <GetServerSidePropsContext>{}

export const setAccessToken = (_accessToken: string) => {
  accessToken = _accessToken
}

export const getAccessToken = () => accessToken

export const setContext = (_context: GetServerSidePropsContext) => {
  context = _context
}

export const api = axios.create({
  baseURL: ROOT_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

let isAssignToken = false
let subscribers: ((token: string) => any)[] = []

const onAccessTokenReAssigned = (token: string) => {
  subscribers.forEach((callback) => callback(token))
  subscribers = []
}

const addSubscriber = (callback: (token: string) => any) => {
  subscribers.push(callback)
}

const refreshToken = async (originError: AxiosError) => {
  try {
    const { response } = originError

    // retry request
    const retryOriginalRequest = new Promise((resolve) => {
      addSubscriber((token: string) => {
        response!.config.headers.Authorization = `${token}`
        resolve(axios(response!.config))
      })
    })

    if (!isAssignToken) {
      isAssignToken = true

      // reassign access token
      const { data } = await api.post('/token/refresh', undefined, {
        // server 측에서 실행되고 있다면 쿠키를 명시적으로 넘겨줘야 함.
        headers: isServer() ? { Cookie: context.req.headers.cookie } : undefined,
      })

      if (!isServer()) {
        setAccessToken(data.accessToken)
      }

      // 새로운 access token 저장
      setCookie(isServer() ? context : null, 'accessToken', data.accessToken)

      // 재시도
      onAccessTokenReAssigned(data.accessToken)
    }
    return retryOriginalRequest
  } catch (error) {
    // 로그인 페이지 이동
    if (!isServer()) {
      Router.push('/login')
    }
    if (isServer()) {
      context.res.setHeader('location', '/login')
      context.res.statusCode = 302
      context.res.end()
    }
    return Promise.reject(originError)
  } finally {
    isAssignToken = false
  }
}

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    if (error.response?.status === 401 && !error.response?.config?.url?.includes('token/refresh')) {
      return refreshToken(error)
    }
    return Promise.reject(error)
  },
)
