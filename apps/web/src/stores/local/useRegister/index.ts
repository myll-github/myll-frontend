import { SyntheticEvent } from 'react'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

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
}

const useRegister = create(
  immer<State & Actions>((set, get) => ({
    // Initial state
    registerTitle: '',
    registerLocation: '',
    registerDescription: '',
    selectedTagName: '',

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
  })),
)

export default useRegister
