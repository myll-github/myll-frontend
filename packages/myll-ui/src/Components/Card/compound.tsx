import Image from 'next/image'

interface TitleProps {
  title: string
}

export interface ImageProps {
  src: string
  alt: string
  className: string
}

const imageStyle = {
  width: '100%',
  height: '100%',
}

export const CardImage = ({ src, alt, className }: ImageProps) => {
  return <Image src={src} width={140} height={50} alt={alt} className={className} />
}

export const MainTitle = ({ title }: TitleProps) => {
  return <p className="text-GRAY_100 SUBTITLE-T2">{title}</p>
}

export const SubTitle = ({ title }: TitleProps) => {
  return <p className="text-GRAY_70 SUBTITLE-T7">{title}</p>
}
