import { ReactNode } from 'react'

interface IconDivProps {
  children: ReactNode
}

interface HeaderProps {
  children: ReactNode
}

interface DescriptionProps {
  children: ReactNode
}

const IconDiv = ({ children }: IconDivProps) => {
  return <div className="flex flex-col w-full px-20pxr gap-y-10pxr">{children}</div>
}

const Header = ({ children }: HeaderProps) => {
  return <div className="flex flex-row text-GRAY_100 items-center SUBTITLE-T5 *w-full gap-x-6pxr">{children}</div>
}

const Description = ({ children }: DescriptionProps) => {
  return (
    <div className="flex flex-row items-center w-full text-GRAY_100 SUBTITLE-T6 gap-x-6pxr ml-24pxr">{children}</div>
  )
}

IconDiv.Header = Header
IconDiv.Description = Description

export default IconDiv
