import { useQuery } from '@tanstack/react-query'

import { authAPI, getCookieHeader, InitHeaders, ROOT_URL } from '../index'

export const getFavoritePlace = async ({ initHeaders }: InitHeaders) => {
  const headers = initHeaders ?? getCookieHeader()

  try {
    const data = await authAPI.get(`/random-tour-list`, { headers })

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
  } catch (e) {
    return []
  }
}

export const FavoritePlaceQueryKey = () => ['favoritePlace']
export const FavoritePlaceQueryFn =
  ({ initHeaders }: InitHeaders) =>
  () =>
    getFavoritePlace({ initHeaders })

export const useFavoritePlaceQuery = () => {
  return useQuery({
    queryKey: FavoritePlaceQueryKey(),
    queryFn: FavoritePlaceQueryFn({}),
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnMount: true,
  })
}

export const getTravelTheme = async () => {
  const data = await authAPI(`/tour-theme`)

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
  const data = await authAPI(`/tour-category`)

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
