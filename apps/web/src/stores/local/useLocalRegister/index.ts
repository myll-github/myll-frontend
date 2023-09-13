import { SyntheticEvent } from 'react'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { updateLocal } from '@/common/api/local'
import { DEFAULT_TAG_COLOR_MAP, TAG_COLOR_MAP_REVERSE } from '@/common/constants'

interface State {
  registerTitle: string
  registerLocation: string

  registerDescription: string
  registerFileList: unknown[]
  selectedTagName: string
}

interface Actions {
  handleRegisterTitle: (newTitle: string) => void
  handleRegisterLocation: (newLocation: string) => void
  handleRegisterDescription: (newDescription: string) => void
  handleRegisterFileList: (fileList: unknown[]) => void

  handleTag: (tagName: string) => (e: SyntheticEvent) => void
  isThisTagSelected: (currentTagName: string) => boolean

  resetState: () => void
  handleSubmit: () => Promise<void>
}

const initState = {
  registerTitle: '',
  registerLocation: '',
  registerDescription: '',
  registerFileList: [],
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

    handleRegisterFileList: (newFileList: unknown & { originFileObj: any }[]) => {
      set((state) => {
        state.registerFileList = newFileList.map((ele) => ele.originFileObj)
      })
    },

    isThisTagSelected: (currentTagName: string) => {
      return get().selectedTagName === currentTagName
    },

    handleSubmit: async () => {
      const state = get()

      const requestBody = {
        title: state.registerTitle,
        contentImage: 'stsr',
        contentTypeId: TAG_COLOR_MAP_REVERSE[state.selectedTagName],
        address: state.registerLocation,
        introduction: state.registerDescription,
        createAt: new Date().getTime(),
      }

      await updateLocal(requestBody)
    },

    resetState: () => {
      set(initState)
    },
  })),
)

export default useLocalRegister
