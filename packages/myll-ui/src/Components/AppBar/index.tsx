import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { ICON_ARROW_LEFT } from 'shared'

interface AppBarProps {
  children: ReactNode
}

interface SectionProps {
  children: ReactNode
  className?: string
}

const AppBar = ({ children }: AppBarProps) => {
  return (
    <>
      <nav className="flex flex-row items-center fixed w-full md:w-[768px] h-76pxr pt-30pxr bg-WHITE top-0 z-10">
        <div className="relative flex flex-col justify-center w-full h-full">{children}</div>
      </nav>
      <div role="none" className="h-76pxr" />
    </>
  )
}

const LeftSection = ({ className, children }: SectionProps) => {
  return <div className={`absolute flex items-center justify-center left-20pxr ${className}`}>{children}</div>
}

LeftSection.defaultProps = {
  className: '',
}

const MiddleSection = ({ className, children }: SectionProps) => {
  return (
    <div className={`absolute flex items-center justify-center  left-1/2 transform -translate-x-1/2 ${className}`}>
      {children}
    </div>
  )
}

MiddleSection.defaultProps = {
  className: '',
}

const RightSection = ({ className, children }: SectionProps) => {
  return <div className={`absolute items-center flex justify-center right-20pxr ${className}`}>{children}</div>
}

RightSection.defaultProps = {
  className: '',
}

const FallbackButton = () => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <button type="button" onClick={handleGoBack}>
      <ICON_ARROW_LEFT className="fill-GRAY_80" />
    </button>
  )
}

AppBar.LeftSection = LeftSection
AppBar.MiddleSection = MiddleSection
AppBar.RightSection = RightSection

AppBar.FallbackButton = FallbackButton

export default AppBar
