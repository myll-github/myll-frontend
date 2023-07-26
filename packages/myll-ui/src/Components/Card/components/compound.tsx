import Image from 'next/image'

interface TitleProps {
  title: string
  className?: string
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

export const MainTitle = ({ title, className }: TitleProps) => {
  return <p className={`text-GRAY_100 SUBTITLE-T2 ${className}`}>{title}</p>
}

export const SubTitle = ({ title, className }: TitleProps) => {
  return <p className={`text-GRAY_70 SUBTITLE-T7 ${className}`}>{title}</p>
}

MainTitle.defaultProps = {
  className: '',
}

SubTitle.defaultProps = {
  className: '',
}
