interface TitleProps {
  title: string
}

interface ImageProps {
  src: string
  alt: string
}

export const CardImage = ({ src, alt }: ImageProps) => {
  return <img src={src} alt={alt} className="relative object-fill mb-1 rounded-sm w-140pxr h-50pxr" />
}

export const MainTitle = ({ title }: TitleProps) => {
  return <p className="text-GRAY_100 SUBTITLE-T2">{title}</p>
}

export const SubTitle = ({ title }: TitleProps) => {
  return <p className="text-GRAY_70 SUBTITLE-T7">{title}</p>
}
