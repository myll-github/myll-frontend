import { FC, ReactNode } from 'react'

import { ImageProps } from './components/compound'

export interface BasicCardProps {
  children: ReactNode
}

export interface DescriptionProps {
  mainTitle: string
  subTitle: string
}

export interface CompoundCard<T> extends FC<T> {
  CardImage: (props: ImageProps) => JSX.Element
  Description: (props: DescriptionProps) => JSX.Element
}
