import { ItemType } from 'myll-ui/src/Components/MenuList/type'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { Plan } from '@/common/interfaces'

interface State {
  planTitle: string
  startDate: string
  endDate: string

  recommendedPlaceMap: Map<number, ItemType>
  selectedPlaceMap: Map<number, ItemType>

  plans?: Plan
}

interface Actions {
  setPlans: (plans: Plan) => void

  setPlanInfo: (planInfo: { planTitle: string; startDate: string; endDate: string }) => void

  setRecommendedPlaceMap: (recommendedPlace: Map<number, ItemType>) => void
  setSelectedPlaceMap: (selectedPlace: Map<number, ItemType>) => void
}

const useBookPageStore = create(
  immer<State & Actions>((set) => ({
    planTitle: '',
    startDate: '',
    endDate: '',

    recommendedPlaceMap: new Map<number, ItemType>(),
    selectedPlaceMap: new Map<number, ItemType>(),

    setPlans: (plans: Plan) => {
      set((state) => {
        state.plans = plans
      })
    },

    setPlanInfo: (planInfo: { planTitle: string; startDate: string; endDate: string }) => {
      set((state) => {
        state.planTitle = planInfo.planTitle
        state.startDate = planInfo.startDate
        state.endDate = planInfo.endDate
      })
    },

    setRecommendedPlaceMap: (recommendedPlace: Map<number, ItemType>) => {
      set((state) => {
        state.recommendedPlaceMap = recommendedPlace
      })
    },

    setSelectedPlaceMap: (selectedPlace: Map<number, ItemType>) => {
      set((state) => {
        state.selectedPlaceMap = selectedPlace
      })
    },
  })),
)

export default useBookPageStore
