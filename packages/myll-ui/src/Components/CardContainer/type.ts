export interface CardDataProps {
  id: number
  subTitle: string
  mainTitle: string
  alt: string
  url: string
}

export type CardType = 'basic' | 'horizontal' | 'round'

export type OnToggleCardStatusType<T extends { id: number }> = (checkList: Map<number, T>) => void

export interface CardContainerProps {
  data: CardDataProps[]
  cardType: CardType
  className: string
  onChange: OnToggleCardStatusType<CardDataProps>
}
