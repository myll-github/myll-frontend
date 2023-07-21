import { FC, ReactElement, ReactNode } from 'react'

import { CardImage, ImageProps, MainTitle, SubTitle } from './compound'
import Card from './index'

interface BasicCardProps {
  children: ReactNode
}

interface DescriptionProps {
  mainTitle: string
  subTitle: string
}

interface CompoundCard extends FC<BasicCardProps> {
  CardImage: (props: ImageProps) => JSX.Element
  Description: (props: DescriptionProps) => JSX.Element
}

const BasicCard: CompoundCard = ({ children }: BasicCardProps) => {
  return (
    <Card className="w-150pxr h-116pxr flex flex-col relative justify-center gap-0.5 items-center bg-PRIMARY_SUB2_BLUE3 rounded-lg border border-solid hover:selection:border-PRIMARY_BLUE">
      {children}
    </Card>
  )
}

BasicCard.CardImage = ({ src, alt }: ImageProps) => {
  return (
    <CardImage
      src={src}
      alt={alt}
      width={150}
      height={50}
      className="relative object-fill mb-1 rounded-sm w-140pxr h-50pxr"
    />
  )
}

const Description = ({ mainTitle, subTitle }: DescriptionProps) => {
  return (
    <>
      <SubTitle title={subTitle} />
      <MainTitle title={mainTitle} />
    </>
  )
}

BasicCard.Description = Description

export default BasicCard
