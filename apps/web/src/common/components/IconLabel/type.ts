import { IconComponentMap } from './constants'

export type IconLabelType = keyof typeof IconComponentMap

export type IconLabelContainerType = { [key in IconLabelType]: boolean }
export interface IconLabelProps {
  label: IconLabelType
  isSelected: boolean
  handleToggleLabel: (label) => void
  disabled: boolean
}
