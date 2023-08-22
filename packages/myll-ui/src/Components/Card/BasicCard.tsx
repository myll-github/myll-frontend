import { MouseEvent, MouseEventHandler, ReactEventHandler, TouchEventHandler, useId } from 'react'

import { ImageProps } from '../Image'
import Card from './components/base'
import { CardImage, MainTitle, SubTitle } from './components/compound'
import { BasicCardProps, CompoundCard, DescriptionProps } from './type'

const BasicCard: CompoundCard<BasicCardProps> = ({ children, isSelected, onClick }: BasicCardProps) => {
  const BG_COLOR = isSelected ? 'bg-WHITE border-PRIMARY_BLUE' : 'bg-SUB_BLUE_3'

  return (
    <Card
      onClick={onClick}
      className={`${BG_COLOR} w-150pxr h-116pxr py-10pxr flex flex-col relative justify-center items-center bg-PRIMARY_SUB2_BLUE3 rounded-lg border-[1.5px] border-solid overflow-hidden`}
    >
      {children}
    </Card>
  )
}

BasicCard.CardImage = ({ src, alt }: ImageProps) => {
  return (
    <div className="w-150pxr h-50pxr">
      <CardImage src={src} alt={alt} className="relative rounded-sm object-contain w-150pxr h-50pxr mb-6pxr" />
    </div>
  )
}

const Description = ({ mainTitle, subTitle }: DescriptionProps) => {
  return (
    <>
      <SubTitle title={subTitle} />
      <MainTitle title={mainTitle} className="text-center" />
    </>
  )
}

BasicCard.Description = Description

export default BasicCard
