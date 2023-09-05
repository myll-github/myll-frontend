/** @jest-environment jsdom */
import { act, renderHook } from '@testing-library/react'

import { RECOMMEND_ACTIVITY_KEY } from '@/common/constants'

import useRawRecommendPageStore from '.'

describe('useRawRecommendPageStore', () => {
  it('should have the correct default values', () => {
    const { result } = renderHook(() => useRawRecommendPageStore.getState())

    expect(result.current.tabIndex).toBe(RECOMMEND_ACTIVITY_KEY.FAVORITE_PLACE_KEY_INDEX)
    expect(result.current.FavoritePlaceMap.size).toBe(0)
    expect(result.current.TravelThemeMap.size).toBe(0)
    expect(result.current.FavoriteActivityMap.size).toBe(0)
  })

  describe('유저가 탭을 이동했을때', () => {
    it('should handle changing the tab index', () => {
      const { result } = renderHook(() => useRawRecommendPageStore.getState())

      act(() => {
        result.current.handleChangeTabIndex(RECOMMEND_ACTIVITY_KEY.TRAVEL_THEME_KEY_INDEX) // Replace with one of your constants.
      })

      const { result: newResult } = renderHook(() => useRawRecommendPageStore.getState())
      expect(newResult.current.tabIndex).toBe(RECOMMEND_ACTIVITY_KEY.TRAVEL_THEME_KEY_INDEX)
    })
  })

  describe('cardlist에서 유저가 cardview를 선택시', () => {
    it('should handle setting favorite place map', () => {
      const { result } = renderHook(() => useRawRecommendPageStore.getState())

      const newMap = new Map()
      newMap.set(1, { id: 1 })

      act(() => {
        result.current.setFavoritePlaceMap(newMap)
      })

      const { result: newResult } = renderHook(() => useRawRecommendPageStore.getState())
      expect(newResult.current.FavoritePlaceMap.get(1)).toEqual({ id: 1 })
    })

    it('should handle setting travel theme map', () => {
      const { result } = renderHook(() => useRawRecommendPageStore.getState())

      const newMap = new Map()
      newMap.set(2, { id: 2 })

      act(() => {
        result.current.setTravelThemeMap(newMap)
      })

      const { result: newResult } = renderHook(() => useRawRecommendPageStore.getState())
      expect(newResult.current.TravelThemeMap.get(2)).toEqual({ id: 2 })
    })

    it('should handle setting favorite activity map', () => {
      const { result } = renderHook(() => useRawRecommendPageStore.getState())

      const newMap = new Map()
      newMap.set(3, { id: 3 })

      act(() => {
        result.current.setFavoriteActivityMap(newMap)
      })

      const { result: newResult } = renderHook(() => useRawRecommendPageStore.getState())
      expect(newResult.current.FavoriteActivityMap.get(3)).toEqual({ id: 3 })
    })
  })
})
