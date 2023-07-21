import { FC, ReactComponentElement, ReactNode } from 'react'

import { CardImage, ImageProps, MainTitle, SubTitle } from './compound'
import Card from './index'

interface HorizontalCardProps {
  children: ReactNode
}

interface DescriptionProps {
  mainTitle: string
  subTitle: string
}

interface CompoundCard extends FC<HorizontalCardProps> {
  CardImage: (props: ImageProps) => JSX.Element
  Description: (props: DescriptionProps) => JSX.Element
}

const HorizontalCard: CompoundCard = ({ children }: HorizontalCardProps) => {
  return (
    <Card className="w-320pxr h-115pxr flex justify-between gap-0.5 items-center bg-PRIMARY_SUB2_BLUE3 rounded-lg border border-solid hover:border-PRIMARY_BLUE">
      {children}
    </Card>
  )
}

HorizontalCard.CardImage = ({ src, alt }: ImageProps) => {
  return (
    <CardImage
      src={src}
      alt={alt}
      width={120}
      height={90}
      className="relative object-fill mb-1 rounded-sm w-190pxr h-90pxr"
    />
  )
}

const Description = ({ mainTitle, subTitle }: DescriptionProps) => {
  return (
    <div>
      <SubTitle title={subTitle} />
      <MainTitle title={mainTitle} />
    </div>
  )
}

HorizontalCard.Description = Description

export default HorizontalCard
