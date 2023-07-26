import BasicCard from './BasicCard'
import Card from './components/base'
import { CardImage, ImageProps, MainTitle, SubTitle } from './components/compound'
import { BasicCardProps, CompoundCard, DescriptionProps } from './type'

const RoundCard: CompoundCard<BasicCardProps> = ({ children }: BasicCardProps) => {
  return <BasicCard>{children}</BasicCard>
}

RoundCard.CardImage = ({ src, alt }: ImageProps) => {
  return (
    <CardImage
      src={src}
      alt={alt}
      width={150}
      height={50}
      className="relative object-fill mb-1 rounded-full w-50pxr h-50pxr"
    />
  )
}

RoundCard.Description = BasicCard.Description

export default RoundCard
