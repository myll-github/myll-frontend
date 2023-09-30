import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface State {
  accessToken: string
  email: string
}

interface Actions {
  setAccessToken: (token: string) => void
  setEmail: (email: string) => void
}

const useTokenStore = create(
  immer<State & Actions>((set) => ({
    accessToken: '',
    email: '',

    setAccessToken: (token: string) => {
      set((state) => {
        state.accessToken = token
      })
    },

    setEmail: (email: string) => {
      set((state) => {
        state.email = email
      })
    },
  })),
)

export default useTokenStore
