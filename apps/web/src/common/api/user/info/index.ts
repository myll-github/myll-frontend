import { useQuery } from '@tanstack/react-query'

import { authAPI, getCookieHeader, InitHeaders } from '../..'

export const getUserInfo = async ({ initHeaders }: InitHeaders, userEmail: string) => {
  const headers = initHeaders ?? getCookieHeader()
  try {
    const data = await authAPI(`/user/${userEmail}`, { headers, params: { userEmail } })
    return data.data
  } catch (e) {
    return {}
  }
}

export const userInfoKey = () => ['userEmail']
export const userInfoFn =
  ({ initHeaders }: InitHeaders, userEmail: string) =>
  () =>
    getUserInfo({ initHeaders }, userEmail)

export const useUserInfo = () => {
  return useQuery({
    queryKey: userInfoKey(),
    queryFn: userInfoFn({}, ''),
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnMount: true,
  })
}
