export interface CardDataProps {
  id: number
  subTitle: string
  mainTitle: string
  alt: string
  url: string
}

export type CardType = 'basic' | 'horizontal' | 'round'

export type OnToggleCardStatusType = (checkList: Map<number, CardDataProps>) => void

export interface CardContainerProps {
  data: CardDataProps[]
  cardType: CardType
  className: string
  onChange: OnToggleCardStatusType
}
