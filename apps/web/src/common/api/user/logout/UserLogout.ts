import { authAPI } from '../..'

export const UserLogout = async () => {
  const response = await authAPI({ method: 'DELETE', url: `${process.env.NEXT_PUBLIC_API_URL}/logout` })

  return response
}
