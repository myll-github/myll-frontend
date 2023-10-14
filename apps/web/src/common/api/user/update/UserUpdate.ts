import { AxiosRequestConfig } from 'axios'

import { UserInfo } from '@/common/interfaces/user'

import { authAPI } from '../..'

export const UserUpdate = async (newUserInfo: UserInfo) => {
  const axiosConfig: AxiosRequestConfig = {
    method: 'PUT',
    url: `${process.env.NEXT_PUBLIC_API_URL}/user`,
    data: { ...newUserInfo },
  }

  const response = await authAPI(axiosConfig)

  return response
}
