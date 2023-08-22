import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type RecommandMapType = unknown & { id: number }

type State = {
  FavoritePlaceMap: Map<number, RecommandMapType>
  TravelThemeMap: Map<number, RecommandMapType>
  FavoriteActivityMap: Map<number, RecommandMapType>
}

type Actions = {
  setFavoritePlaceMap: (newFavoritePlaceMap: Map<number, RecommandMapType>) => void
  setTravelThemeMap: (newTravelThemeMap: Map<number, RecommandMapType>) => void
  setFavoriteActivityMap: (newFavoriteActivityMap: Map<number, RecommandMapType>) => void
}

const useRawRecommendPageStore = create(
  immer<State & Actions>((set) => ({
    FavoritePlaceMap: new Map<number, RecommandMapType>(),
    TravelThemeMap: new Map<number, RecommandMapType>(),
    FavoriteActivityMap: new Map<number, RecommandMapType>(),

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
