import Image from 'next/image'

export interface ImageRawProps {
  src: string
  alt: string
  className: string
}

export interface ImageProps extends Omit<ImageRawProps, 'className'> {}

const CustomImage = ({ src, alt, className }: any) => {
  return (
    <div className={`${className} relative overflow-hidden`}>
      <Image src={src} alt={alt} fill style={{ height: '100%', width: '100%' }} />
    </div>
  )
}

export default CustomImage
