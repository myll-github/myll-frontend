import { FC, ReactNode } from 'react'

import { ImageProps } from '../Image'

export interface BasicCardProps {
  children: ReactNode
  isSelected?: boolean
  onClick: () => void
}

export interface DescriptionProps {
  mainTitle: string
  subTitle: string
  isSelected: boolean
}

export interface CompoundCard<T> extends FC<T> {
  CardImage: (props: ImageProps) => JSX.Element
  Description: (props: DescriptionProps) => JSX.Element
}
