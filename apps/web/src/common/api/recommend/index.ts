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

export const getTravelTheme = async () => {
  const data = await axios(`${ROOT_URL}/tour-theme`)

  return data.data.map((ele, id) => {
    return {
      id,
      mainTitle: ele.title,
      subTitle: ele.subTitle,
      alt: ele.title,
      url: ele.image,
      ...ele,
    }
  })
}

export const TravelThemeQueryKey = ['tour-theme']
export const TravelThemeQueryFn = () => getTravelTheme()

export const useTravelThemeQuery = () => {
  return useQuery({
    queryKey: TravelThemeQueryKey,
    queryFn: TravelThemeQueryFn,
    staleTime: Infinity,
    cacheTime: Infinity,
    suspense: true,
  })
}

export const getFavoriteActivity = async () => {
  const data = await axios(`${ROOT_URL}/tour-category`)

  return data.data.map((ele, id) => {
    return {
      id,
      mainTitle: ele.title,
      subTitle: ele.subTitle,
      alt: ele.title,
      url: ele.image,
      ...ele,
    }
  })
}
export const FavoriteActivityKey = ['tour-category']
export const FavoriteActivityFn = () => getFavoriteActivity()

export const useFavoriteActivityQuery = () => {
  return useQuery({
    queryKey: FavoriteActivityKey,
    queryFn: FavoriteActivityFn,
    staleTime: Infinity,
    cacheTime: Infinity,
    suspense: true,
  })
}
