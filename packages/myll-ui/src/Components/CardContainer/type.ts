export interface CardDataProps {
  id: number
  subTitle: string
  mainTitle: string
  alt: string
  url: string
}

export type CardType = 'basic' | 'horizontal' | 'round'

export interface CardContainerProps {
  data: CardDataProps[]
  cardType: CardType
}
