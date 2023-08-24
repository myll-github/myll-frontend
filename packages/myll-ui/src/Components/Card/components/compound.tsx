import CustomImage, { ImageRawProps } from '../../Image'

interface TitleProps {
  title: string
  className?: string
}

export const CardImage = CustomImage
interface MainTitleProps extends TitleProps {
  typography?: string
  isSelected: boolean
}

export const MainTitle = ({ title, className, typography, isSelected }: MainTitleProps) => {
  return (
    <p
      className={`w-full pb-4pxr ${
        isSelected ? 'text-PRIMARY_BLUE' : 'text-GRAY_100'
      } ${typography} line-clamp-2 ${className}`}
    >
      {title}
    </p>
  )
}

export const SubTitle = ({ title, className }: TitleProps) => {
  return <p className={`text-GRAY_70 SUBTITLE-T7 ${className}`}>{title}</p>
}

MainTitle.defaultProps = {
  className: '',
  typography: 'SUBTITLE-T2',
}

SubTitle.defaultProps = {
  className: '',
}
