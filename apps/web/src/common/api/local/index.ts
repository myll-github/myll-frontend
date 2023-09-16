import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { getCookieHeader, InitHeaders, ROOT_URL } from '..'

interface updateDataType {
  title: string
  contentImage: unknown[]
  contentTypeId: string
  address: string
  introduction: string
  createAt: number
}

export const getLocal = async ({ initHeaders }: InitHeaders) => {
  const headers = initHeaders ?? getCookieHeader()
  const data = await axios(`${ROOT_URL}/local-tour-list`, { headers })

  return data.data
}

export const updateLocal = async (data: updateDataType) => {
  const headers = getCookieHeader()
  const formData = new FormData()

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value)
  })

  await axios.post(
    `${ROOT_URL}/local-tour
  `,
    formData,
    {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data',
      },
    },
  )
}

export const getLocalMenuListQueryKey = () => ['localMenuList']

export const getLocalMenuListFn =
  ({ initHeaders }: InitHeaders) =>
  () =>
    getLocal({ initHeaders })

export const useLocalMenuListQuery = () => {
  return useQuery({
    queryKey: getLocalMenuListQueryKey(),
    queryFn: getLocalMenuListFn({}),
    staleTime: Infinity,
    cacheTime: Infinity,
  })
}
