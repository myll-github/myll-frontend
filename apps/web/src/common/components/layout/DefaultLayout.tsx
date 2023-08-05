import { ReactNode } from 'react'

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return <div className="relative w-screen h-screen md:w-[768px]">{children}</div>
}

export default DefaultLayout
