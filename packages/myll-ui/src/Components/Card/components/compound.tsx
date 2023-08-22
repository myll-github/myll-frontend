import Image from 'next/image'

import CustomImage, { ImageRawProps } from '../../Image'

interface TitleProps {
  title: string
  className?: string
}

export const CardImage = CustomImage

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
