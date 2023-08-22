import { MouseEvent, MouseEventHandler, ReactEventHandler, TouchEventHandler, useId } from 'react'
import { CardViewDefaultImg, ICON_CHECKED, ICON_DEFAULT } from 'shared'

import { ImageProps } from '../Image'
import Card from './components/base'
import { CardImage, MainTitle, SubTitle } from './components/compound'
import { BasicCardProps, CompoundCard, DescriptionProps } from './type'

const RoundCard: CompoundCard<BasicCardProps> = ({ children, isSelected, onClick }: BasicCardProps) => {
  const BG_COLOR = isSelected ? 'bg-WHITE border-PRIMARY_BLUE' : 'bg-SUB_BLUE_3'

  return (
    <Card
      onClick={onClick}
      className={`${BG_COLOR} w-150pxr h-116pxr flex flex-col relative justify-center items-center bg-PRIMARY_SUB2_BLUE3 rounded-lg border-[1.5px] border-solid`}
    >
      {children}
      <div className="absolute top-2.5 right-2.5">
        {isSelected ? <ICON_CHECKED className="text-PRIMARY_BLUE" /> : <ICON_DEFAULT className="text-GRAY_60" />}
      </div>
    </Card>
  )
}

RoundCard.CardImage = ({ src, alt }: ImageProps) => {
  if (!src) return <CardViewDefaultImg className="relative object-fill rounded-full w-50pxr h-50pxr mb-6pxr" />

  return <CardImage src={src} alt={alt} className="relative object-fill rounded-full w-50pxr h-50pxr mb-6pxr" />
}

const Description = ({ mainTitle, subTitle }: DescriptionProps) => {
  return (
    <>
      <SubTitle title={subTitle} />
      <MainTitle title={mainTitle} typography="SUBTITLE-T7" className="px-10pxr max-h-30pxr text-center" />
    </>
  )
}

RoundCard.Description = Description

export default RoundCard
