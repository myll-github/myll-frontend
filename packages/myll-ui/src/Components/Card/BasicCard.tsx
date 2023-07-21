import { FC, ReactNode } from 'react'

import { CardImage, MainTitle, SubTitle } from './compound'
import Card from './index'

interface BasicCardProps {
  children: ReactNode
}

interface CompoundCard extends FC<BasicCardProps> {
  CardImage: typeof CardImage
  SubTitle: typeof MainTitle
  MainTitle: typeof SubTitle
}

const BasicCard: CompoundCard = ({ children }: BasicCardProps) => {
  return (
    <Card className="w-150pxr h-116pxr flex flex-col justify-center gap-0.5 items-center bg-PRIMARY_SUB2_BLUE3 rounded-lg border border-solid hover:selection:border-PRIMARY_BLUE">
      {children}
    </Card>
  )
}

BasicCard.CardImage = CardImage
BasicCard.SubTitle = SubTitle
BasicCard.MainTitle = MainTitle

export default BasicCard
