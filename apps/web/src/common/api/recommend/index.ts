import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { ROOT_URL } from '../index'

export const getFavoritePlace = async () => {
  const data = await axios(`${ROOT_URL}/random-tour`)

  return data.data.map((ele, id) => {
    return {
      id: ele.contentid,
      mainTitle: ele.title,
      alt: ele.title,
      subTitle: '',
      url: ele.firstimage,
      ...ele,
    }
  })
}

export const FavoritePlaceQueryKey = ['favoritePlace']
export const FavoritePlaceQueryFn = () => getFavoritePlace()

export const useFavoritePlaceQuery = () => {
  return useQuery({
    queryKey: FavoritePlaceQueryKey,
    queryFn: FavoritePlaceQueryFn,
    staleTime: Infinity,
    cacheTime: Infinity,
    suspense: true,
  })
}
