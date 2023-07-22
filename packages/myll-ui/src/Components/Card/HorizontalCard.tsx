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
    <Card className="w-320pxr h-115pxr gap-3pxr flex p-7pxr items-center bg-PRIMARY_SUB2_BLUE3 rounded-lg border border-solid ">
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
      className="relative object-fill rounded-sm w-120pxr h-90pxr mr-27pxr"
    />
  )
}

const Description = ({ mainTitle, subTitle }: DescriptionProps) => {
  return (
    <div className="flex flex-col w-150pxr h-72pxr mt-3pxr">
      <SubTitle title={subTitle} className="h-50pxr flex flex-col justify-end" />
      <MainTitle className="-mt-2pxr" title={mainTitle} />
    </div>
  )
}

HorizontalCard.Description = Description

export default HorizontalCard
