import axios, { AxiosRequestConfig } from 'axios'

export const SendEmail = async (email: string) => {
  const axiosConfig: AxiosRequestConfig = {
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_API_URL}/send-email`,
    data: { email },
  }

  const response = await axios(axiosConfig)

  return response
}
