import { FC, MouseEventHandler, ReactComponentElement, ReactNode, useId } from 'react'
import { ICON_CHECKED, ICON_DEFAULT } from 'shared'

import Card from './components/base'
import { CardImage, ImageProps, MainTitle, SubTitle } from './components/compound'
import { BasicCardProps, CompoundCard, DescriptionProps } from './type'

const HorizontalCard: CompoundCard<BasicCardProps> = ({ children, isSelected, onClick }: BasicCardProps) => {
  const BG_COLOR = isSelected ? 'bg-WHITE border-PRIMARY_BLUE' : 'bg-SUB_BLUE_3'

  return (
    <Card
      onClick={onClick}
      className={`${BG_COLOR} relative w-320pxr h-115pxr flex p-10pxr items-center rounded-lg border border-solid`}
    >
      {children}
      <div className="absolute top-2.5 right-2.5">
        {isSelected ? <ICON_CHECKED className="text-PRIMARY_BLUE" /> : <ICON_DEFAULT className="text-GRAY_60" />}
      </div>
    </Card>
  )
}

HorizontalCard.CardImage = ({ src, alt }: ImageProps) => {
  return <CardImage src={src} alt={alt} className="relative object-fill rounded-sm w-120pxr h-90pxr mx-10pxr" />
}

const Description = ({ mainTitle, subTitle }: DescriptionProps) => {
  return (
    <div className="flex flex-col w-150pxr h-72pxr mt-15pxr">
      <SubTitle title={subTitle} className="flex flex-col justify-end h-50pxr" />
      <MainTitle className="" title={mainTitle} />
    </div>
  )
}

HorizontalCard.Description = Description

export default HorizontalCard
