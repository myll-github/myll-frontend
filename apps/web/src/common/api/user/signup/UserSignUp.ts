import axios, { AxiosRequestConfig } from 'axios'

export const UserSignUp = async (
  email: string,
  password: string,
  nickname: string,
  kakaoId?: number,
  birth?: string,
  gender?: string,
  phone?: string,
  role?: string,
) => {
  const axiosConfig: AxiosRequestConfig = {
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_API_URL}/sign-up`,
    data: { email, password, nickname, kakaoId, birth, gender, phone, role },
  }

  const response = await axios(axiosConfig)

  return response
}
