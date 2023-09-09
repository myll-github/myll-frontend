import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { RECOMMEND_ACTIVITY_KEY, RECOMMEND_ACTIVITY_KEY_TYPE } from '@/common/constants'

type RecommandMapType = unknown & { id: number }

interface State {
  tabIndex: RECOMMEND_ACTIVITY_KEY_TYPE
  tabIndexFlag: boolean

  FavoritePlaceMap: Map<number, RecommandMapType>
  TravelThemeMap: Map<number, RecommandMapType>
  FavoriteActivityMap: Map<number, RecommandMapType>
}

interface Actions {
  handleChangeTabIndex: (newTabIndex: RECOMMEND_ACTIVITY_KEY_TYPE) => void

  setTabIndexFlag: (flag: boolean) => void

  setFavoritePlaceMap: (newFavoritePlaceMap: Map<number, RecommandMapType>) => void
  setTravelThemeMap: (newTravelThemeMap: Map<number, RecommandMapType>) => void
  setFavoriteActivityMap: (newFavoriteActivityMap: Map<number, RecommandMapType>) => void
}

const useRawRecommendPageStore = create(
  immer<State & Actions>((set) => ({
    tabIndex: RECOMMEND_ACTIVITY_KEY.FAVORITE_PLACE_KEY_INDEX,
    tabIndexFlag: false,

    FavoritePlaceMap: new Map<number, RecommandMapType>(),
    TravelThemeMap: new Map<number, RecommandMapType>(),
    FavoriteActivityMap: new Map<number, RecommandMapType>(),

    handleChangeTabIndex: (newTabIndex: RECOMMEND_ACTIVITY_KEY_TYPE) => {
      set((state) => {
        state.tabIndex = newTabIndex

        switch (newTabIndex) {
          case RECOMMEND_ACTIVITY_KEY.FAVORTIE_ACTIVITY_KEY_INDEX:
            state.tabIndexFlag = state.FavoriteActivityMap.size > 0
            break
          case RECOMMEND_ACTIVITY_KEY.TRAVEL_THEME_KEY_INDEX:
            state.tabIndexFlag = state.TravelThemeMap.size > 0
            break

          case RECOMMEND_ACTIVITY_KEY.FAVORITE_PLACE_KEY_INDEX:
          default:
            state.tabIndexFlag = state.FavoritePlaceMap.size > 0
            break
        }
      })
    },

    setTabIndexFlag: (flag) => {
      set((state) => {
        state.tabIndexFlag = flag
      })
    },

    setFavoritePlaceMap: (newFavoritePlaceMap: Map<number, RecommandMapType>) => {
      set((state) => {
        state.FavoritePlaceMap = newFavoritePlaceMap
        state.tabIndexFlag = state.FavoritePlaceMap.size > 0
      })
    },
    setTravelThemeMap: (newTravelThemeMap: Map<number, RecommandMapType>) => {
      set((state) => {
        state.TravelThemeMap = newTravelThemeMap
        state.tabIndexFlag = state.TravelThemeMap.size > 0
      })
    },
    setFavoriteActivityMap: (newFavoriteActivityMap: Map<number, RecommandMapType>) => {
      set((state) => {
        state.FavoriteActivityMap = newFavoriteActivityMap
        state.tabIndexFlag = state.FavoriteActivityMap.size > 0
      })
    },
  })),
)

export default useRawRecommendPageStore
