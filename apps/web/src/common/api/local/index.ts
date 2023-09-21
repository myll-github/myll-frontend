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

  console.log(headers)

  await axios.post(
    `${ROOT_URL}/local-tour
  `,
    data,
    { headers },
  )
}
