import nookies from 'nookies'

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
    Authorization: `${token}`,
  }
  return header
}
