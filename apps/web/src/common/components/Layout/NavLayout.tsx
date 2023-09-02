import { ReactNode } from 'react'

import Navigation from '../Navigation'
import DefaultLayout from './DefaultLayout'

const NavLayout = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <>
      <DefaultLayout className={`${className} mb-98pxr`}>{children}</DefaultLayout>
      <div role="none" className="h-98xpr" />
      <Navigation />
    </>
  )
}

NavLayout.defaultProps = {
  className: '',
}

export default NavLayout
