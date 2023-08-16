import Image from 'next/image'

interface TitleProps {
  title: string
  className?: string
}

interface ImageRawProps {
  src: string
  alt: string
  className: string
}

export interface ImageProps extends Omit<ImageRawProps, 'className'> {}

export const CardImage = ({ src, alt, className }: ImageRawProps) => {
  return (
    <div className={`${className} overflow-hidden`}>
      <Image src={src} alt={alt} fill style={{ height: '100%', width: '100%' }} />
    </div>
  )
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
