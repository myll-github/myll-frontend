import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { RECOMMEND_ACTIVITY_KEY, RECOMMEND_ACTIVITY_KEY_TYPE } from '@/common/constants'

type RecommandMapType = unknown & { id: number }

interface State {
  tabIndex: RECOMMEND_ACTIVITY_KEY_TYPE

  FavoritePlaceMap: Map<number, RecommandMapType>
  TravelThemeMap: Map<number, RecommandMapType>
  FavoriteActivityMap: Map<number, RecommandMapType>
}

interface Actions {
  handleChangeTabIndex: (newTabIndex: RECOMMEND_ACTIVITY_KEY_TYPE) => void

  setFavoritePlaceMap: (newFavoritePlaceMap: Map<number, RecommandMapType>) => void
  setTravelThemeMap: (newTravelThemeMap: Map<number, RecommandMapType>) => void
  setFavoriteActivityMap: (newFavoriteActivityMap: Map<number, RecommandMapType>) => void
}

const useRawRecommendPageStore = create(
  immer<State & Actions>((set) => ({
    tabIndex: RECOMMEND_ACTIVITY_KEY.FAVORITE_PLACE_KEY_INDEX,

    FavoritePlaceMap: new Map<number, RecommandMapType>(),
    TravelThemeMap: new Map<number, RecommandMapType>(),
    FavoriteActivityMap: new Map<number, RecommandMapType>(),

    handleChangeTabIndex: (newTabIndex: RECOMMEND_ACTIVITY_KEY_TYPE) => {
      set((state) => {
        state.tabIndex = newTabIndex
      })
    },

    setFavoritePlaceMap: (newFavoritePlaceMap: Map<number, RecommandMapType>) => {
      set((state) => {
        state.FavoritePlaceMap = newFavoritePlaceMap
      })
    },
    setTravelThemeMap: (newTravelThemeMap: Map<number, RecommandMapType>) => {
      set((state) => {
        state.TravelThemeMap = newTravelThemeMap
      })
    },
    setFavoriteActivityMap: (newFavoriteActivityMap: Map<number, RecommandMapType>) => {
      set((state) => {
        state.FavoriteActivityMap = newFavoriteActivityMap
      })
    },
  })),
)

export default useRawRecommendPageStore
