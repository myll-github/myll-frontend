import Image from 'next/image'

interface TitleProps {
  title: string
}

interface ImageRawProps {
  src: string
  alt: string
  width: number
  height: number
  className: string
}

export interface ImageProps extends Omit<ImageRawProps, 'width' | 'height' | 'className'> {}

export const CardImage = ({ src, alt, width, height, className }: ImageRawProps) => {
  return <Image sizes="250px" src={src} width={width} height={height} alt={alt} className={className} />
}

export const MainTitle = ({ title }: TitleProps) => {
  return <p className="text-GRAY_100 SUBTITLE-T2">{title}</p>
}

export const SubTitle = ({ title }: TitleProps) => {
  return <p className="text-GRAY_70 SUBTITLE-T7">{title}</p>
}
