import axios, { AxiosRequestConfig } from 'axios'

export const UserLogin = async (email: string, password: string) => {
  const axiosConfig: AxiosRequestConfig = {
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_API_URL}/login`,
    data: { email, password },
    withCredentials: true,
  }

  const response = await axios(axiosConfig)

  return response
}
