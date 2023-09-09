import { useRouter } from 'next/router'
import { cloneElement, ReactElement, ReactNode } from 'react'
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
      <nav className="fixed top-0 z-10 flex flex-row items-center justify-center w-full h-76pxr pt-30pxr bg-WHITE">
        <div className="relative flex flex-col justify-center w-full h-full md:w-[768px]">{children}</div>
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

const FallbackButton = ({ Icon }: { Icon?: ReactElement }) => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <button type="button" onClick={handleGoBack}>
      {cloneElement(Icon!, { className: 'fill-GRAY_80' })}
    </button>
  )
}

FallbackButton.defaultProps = {
  Icon: ICON_ARROW_LEFT,
}

AppBar.LeftSection = LeftSection
AppBar.MiddleSection = MiddleSection
AppBar.RightSection = RightSection

AppBar.FallbackButton = FallbackButton

export default AppBar
