import { MouseEvent, MouseEventHandler, ReactEventHandler, TouchEventHandler, useId } from 'react'
import { ICON_CHECKED, ICON_DEFAULT } from 'shared'

import { ImageProps } from '../Image'
import Card from './components/base'
import { CardImage, MainTitle, SubTitle } from './components/compound'
import { BasicCardProps, CompoundCard, DescriptionProps } from './type'

const RoundCard: CompoundCard<BasicCardProps> = ({ children, isSelected, onClick }: BasicCardProps) => {
  const BG_COLOR = isSelected ? 'bg-WHITE border-PRIMARY_BLUE' : 'bg-SUB_BLUE_3'

  return (
    <Card
      onClick={onClick}
      className={`${BG_COLOR} w-150pxr h-116pxr flex flex-col relative justify-center items-center bg-PRIMARY_SUB2_BLUE3 rounded-lg border border-solid`}
    >
      {children}
      <div className="absolute top-2.5 right-2.5">
        {isSelected ? <ICON_CHECKED className="text-PRIMARY_BLUE" /> : <ICON_DEFAULT className="text-GRAY_60" />}
      </div>
    </Card>
  )
}

RoundCard.CardImage = ({ src, alt }: ImageProps) => {
  return <CardImage src={src} alt={alt} className="relative object-fill mb-1 rounded-full w-50pxr h-50pxr" />
}

const Description = ({ mainTitle, subTitle }: DescriptionProps) => {
  return (
    <>
      <SubTitle title={subTitle} />
      <MainTitle title={mainTitle} />
    </>
  )
}

RoundCard.Description = Description

export default RoundCard
