import { MouseEvent, MouseEventHandler, ReactEventHandler, TouchEventHandler, useId } from 'react'

import Card from './components/base'
import { CardImage, ImageProps, MainTitle, SubTitle } from './components/compound'
import { BasicCardProps, CompoundCard, DescriptionProps } from './type'

const BasicCard: CompoundCard<BasicCardProps> = ({ children, isSelected }: BasicCardProps) => {
  const userId = useId()
  const BG_COLOR = isSelected ? 'bg-WHITE border-PRIMARY_BLUE' : 'bg-SUB_BLUE_3'

  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    console.log(userId)
  }

  return (
    <Card
      data-index-id={userId}
      onClick={onClick}
      className={`${BG_COLOR} w-150pxr h-116pxr flex flex-col relative justify-center gap-0.5 items-center bg-PRIMARY_SUB2_BLUE3 rounded-lg border border-solid`}
    >
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
