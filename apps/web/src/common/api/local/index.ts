import axios from 'axios'

import { getCookieHeader, ROOT_URL } from '..'

interface updateDataType {
  title: string
  contentImage: unknown[]
  contentTypeId: string
  address: string
  introduction: string
  createAt: number
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
