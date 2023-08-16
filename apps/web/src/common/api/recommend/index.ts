import axios from 'axios'

import { ROOT_URL } from '../index'

export const getFavoritePlace = async () => {
  const data = await axios(`${ROOT_URL}/random-tour`)

  return data.data
}
