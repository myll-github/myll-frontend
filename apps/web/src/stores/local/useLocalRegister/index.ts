import { SyntheticEvent } from 'react'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { DEFAULT_TAG_COLOR_MAP } from '@/common/constants'

interface State {
  registerTitle: string
  registerLocation: string

  registerDescription: string
  selectedTagName: string
}

interface Actions {
  handleRegisterTitle: (newTitle: string) => void
  handleRegisterLocation: (newLocation: string) => void
  handleRegisterDescription: (newDescription: string) => void

  handleTag: (tagName: string) => (e: SyntheticEvent) => void
  isThisTagSelected: (currentTagName: string) => boolean

  resetState: () => void
}

const initState = {
  registerTitle: '',
  registerLocation: '',
  registerDescription: '',
  selectedTagName: DEFAULT_TAG_COLOR_MAP,
}

const useLocalRegister = create(
  immer<State & Actions>((set, get) => ({
    // Initial state
    ...initState,

    // Actions
    handleRegisterTitle: (newTitle) => {
      set((state) => {
        state.registerTitle = newTitle
      })
    },

    handleRegisterLocation: (newLocation) => {
      set((state) => {
        state.registerLocation = newLocation
      })
    },

    handleRegisterDescription: (newDescription) => {
      set((state) => {
        state.registerDescription = newDescription
      })
    },

    handleTag: (tagName) => (e) => {
      e.preventDefault()
      set((state) => {
        state.selectedTagName = tagName
      })
    },

    isThisTagSelected: (currentTagName: string) => {
      return get().selectedTagName === currentTagName
    },

    resetState: () => {
      set(initState)
    },
  })),
)

export default useLocalRegister
