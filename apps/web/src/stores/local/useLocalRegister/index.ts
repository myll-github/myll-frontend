import { SyntheticEvent } from 'react'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { registerLocal } from '@/common/api/local'
import { IconLabelDefaultJSON } from '@/common/components/IconLabel'
import { IconLabelContainerType } from '@/common/components/IconLabel/type'
import { DEFAULT_TAG_COLOR_MAP, TAG_COLOR_MAP_REVERSE } from '@/common/constants'

interface State {
  registerTitle: string
  registerLocation: string

  registerDescription: string
  registerFileList: unknown[]
  selectedTagName: string

  labels: IconLabelContainerType
}

interface Actions {
  handleRegisterTitle: (newTitle: string) => void
  handleRegisterLocation: (newLocation: string) => void
  handleRegisterDescription: (newDescription: string) => void
  handleRegisterFileList: (fileList: unknown[]) => void

  handleLabels: (newLabels: IconLabelContainerType) => void

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

  labels: IconLabelDefaultJSON,
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

    handleLabels: (newLabels) => {
      set((state) => {
        state.labels = newLabels
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
        contentImage: state.registerFileList ?? [],
        contentTypeId: TAG_COLOR_MAP_REVERSE[state.selectedTagName],
        address: state.registerLocation,
        introduction: state.registerDescription,
        createAt: new Date().getTime(),

        labels: JSON.stringify({ ...IconLabelDefaultJSON, ...state.labels }),
      }

      await registerLocal(requestBody)
    },

    resetState: () => {
      set(initState)
    },
  })),
)

export default useLocalRegister
