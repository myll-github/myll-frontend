import axios, { AxiosRequestConfig } from 'axios'

export const Verify = async (email: string, code: string) => {
  const axiosConfig: AxiosRequestConfig = {
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_API_URL}/verify`,
    data: { email, code },
  }

  const response = await axios(axiosConfig)

  return response
}
