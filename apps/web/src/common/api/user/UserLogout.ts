import axios, { AxiosRequestConfig } from 'axios'

export const UserLogout = async () => {
  const axiosConfig: AxiosRequestConfig = {
    method: 'DELETE',
    url: `${process.env.NEXT_PUBLIC_API_URL}/logout`,
    withCredentials: true,
  }

  const response = await axios(axiosConfig)

  return response
}
