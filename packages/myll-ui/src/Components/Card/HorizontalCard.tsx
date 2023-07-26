import { FC, MouseEventHandler, ReactComponentElement, ReactNode, useId } from 'react'

import Card from './components/base'
import { CardImage, ImageProps, MainTitle, SubTitle } from './components/compound'
import { BasicCardProps, CompoundCard, DescriptionProps } from './type'

const HorizontalCard: CompoundCard<BasicCardProps> = ({ children, isSelected }: BasicCardProps) => {
  const userId = useId()
  const BG_COLOR = isSelected ? 'bg-WHITE border-PRIMARY_BLUE' : 'bg-SUB_BLUE_3'

  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    console.log(userId)
  }

  return (
    <Card
      onClick={onClick}
      className={`${BG_COLOR} w-320pxr h-115pxr gap-3pxr flex p-7pxr items-center rounded-lg border border-solid`}
    >
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
    <div className="flex flex-col w-150pxr h-72pxr mt-15pxr">
      <SubTitle title={subTitle} className="h-50pxr flex flex-col justify-end" />
      <MainTitle className="-mt-2pxr" title={mainTitle} />
    </div>
  )
}

HorizontalCard.Description = Description

export default HorizontalCard
