import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface State {
  count: number
}

interface Actions {
  increment: (qty: number) => void
  decrement: (qty: number) => void
}

const useCountStore = create(
  immer<State & Actions>((set) => ({
    count: 0,
    increment: (qty: number) =>
      set((state) => {
        state.count += qty
      }),
    decrement: (qty: number) =>
      set((state) => {
        state.count -= qty
      }),
  })),
)

export default useCountStore
