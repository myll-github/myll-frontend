import axios, { AxiosRequestConfig } from 'axios'

export const RefreshAccessToken = async () => {
  const axiosConfig: AxiosRequestConfig = {
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_API_URL}/token/refresh`,
    withCredentials: true,
  }
  const response = await axios(axiosConfig)

  return response.data.accessToken
}
