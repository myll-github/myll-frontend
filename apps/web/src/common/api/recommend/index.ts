import { useQuery } from '@tanstack/react-query'
import { GetServerSidePropsContext } from 'next'
import nookies from 'nookies'

import { authAPI, getCookieHeader, InitHeaders, ROOT_URL } from '../index'

export const getFavoritePlace = async (context?: GetServerSidePropsContext) => {
  const cookies = nookies.get(context)
  console.log('cookies')
  console.log(cookies)
  console.log('-----')
  console.log(console.log(context.req.headers.cookie))
  try {
    const data = await authAPI.get(`/random-tour-list`, { headers: { Authorization: cookies.accessToken } })

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
export const FavoritePlaceQueryFn = (context?: GetServerSidePropsContext) => () => getFavoritePlace(context)

export const useFavoritePlaceQuery = () => {
  return useQuery({
    queryKey: FavoritePlaceQueryKey(),
    queryFn: FavoritePlaceQueryFn(),
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
