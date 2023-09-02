import { ReactNode } from 'react'

const DefaultLayout = ({ children, className }: { children: ReactNode; className: string }) => {
  return <div className={`relative left-1/2 -translate-x-1/2 w-screen md:w-[768px] ${className}`}>{children}</div>
}

export default DefaultLayout
