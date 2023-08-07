import { ReactNode } from 'react'

import Navigation from '../Navigation'
import DefaultLayout from './DefaultLayout'

const NavLayout = ({ children }: { children: ReactNode }) => {
  return (
    <DefaultLayout>
      {children}
      <Navigation />
    </DefaultLayout>
  )
}

export default NavLayout
