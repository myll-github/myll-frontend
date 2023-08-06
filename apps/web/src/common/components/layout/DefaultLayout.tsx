import { ReactNode } from 'react'

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return <div className="relative left-1/2 -translate-x-1/2 w-screen h-screen md:w-[768px]">{children}</div>
}

export default DefaultLayout
