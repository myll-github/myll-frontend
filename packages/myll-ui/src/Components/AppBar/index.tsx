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
  return <nav className="flex flex-row fixed w-full md:w-[768px] h-76pxr px-20pxr">{children}</nav>
}

const LeftSection = ({ className, children }: SectionProps) => {
  return <div className={`absolute top-0 left-20pxr ${className}`}>{children}</div>
}

LeftSection.defaultProps = {
  className: '',
}

const MiddleSection = ({ className, children }: SectionProps) => {
  return <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 ${className}`}>{children}</div>
}

MiddleSection.defaultProps = {
  className: '',
}

const RightSection = ({ className, children }: SectionProps) => {
  return <div className={`absolute top-0 right-20pxr ${className}`}>{children}</div>
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
