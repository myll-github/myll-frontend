import { ItemType } from 'myll-ui/src/Components/MenuList/type'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface State {
  accessToken: string
}

interface Actions {
  setAccessToken: (token: string) => void
}

const useTokenStore = create(
  immer<State & Actions>((set) => ({
    accessToken: '',

    setAccessToken: (token: string) => {
      set((state) => {
        state.accessToken = token
      })
    },
  })),
)

export default useTokenStore
