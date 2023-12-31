/* eslint-disable jsx-a11y/anchor-is-valid */
import { cloneElement, FC, ReactElement, ReactNode, SVGProps, useState } from 'react'
import {
  CompoundProvider,
  ICON_BOOK_ACTIVE,
  ICON_BOOK_INACTIVE,
  ICON_HOME_ACTIVE,
  ICON_HOME_INACTIVE,
  ICON_LOCAL_ACTIVE,
  ICON_LOCAL_INACTIVE,
  ICON_MAP_ACTIVE,
  ICON_MAP_INACTIVE,
  ICON_MYLL_ACTIVE,
  ICON_MYLL_INACTIVE,
} from 'shared'

interface ToggleIconProps {
  isActive: boolean
  IconActive: FC<SVGProps<SVGSVGElement>>
  IconInactive: FC<SVGProps<SVGSVGElement>>
}

const ToggleIcon = ({ isActive, IconActive, IconInactive }: ToggleIconProps) => {
  return isActive ? (
    <IconActive width="30px" height="30px" className="mb-3pxr" />
  ) : (
    <IconInactive width="30px" height="30px" className="mb-3pxr" />
  )
}
/* 
  안타깝게도 시안대로 svg 색 반전 시킬수가
  없어서 2개 import해서 씀 
*/

const FooterNav = ({ children, className }: { children: ReactNode; className: string }) => {
  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 bottom-0 bg-WHITE flex w-screen md:w-[768px] max-h-98px flex-row justify-around border-t border-solid border-GRAY_30 p-l-24pxr p-r-24pxr transform ${className}`}
    >
      {children}
    </nav>
  )
}

const BaseIconStyle =
  'w-full h-full flex flex-col justify-center leading-[14px] items-center pt-20pxr pb-30pxr GNB_ACTIVE'

FooterNav.HomeIcon = ({ isActive = false }: { isActive: boolean }) => (
  <div className={`${BaseIconStyle} ${isActive ? 'text-GRAY_90' : 'text-GRAY_70'}`}>
    <ToggleIcon isActive={isActive} IconActive={ICON_HOME_ACTIVE} IconInactive={ICON_HOME_INACTIVE} />
    HOME
  </div>
)

FooterNav.MapIcon = ({ isActive = false }: { isActive: boolean }) => (
  <div className={`${BaseIconStyle} ${isActive ? 'text-GRAY_90' : 'text-GRAY_70'}`}>
    <ToggleIcon isActive={isActive} IconActive={ICON_MAP_ACTIVE} IconInactive={ICON_MAP_INACTIVE} />
    MAP
  </div>
)

FooterNav.BookIcon = ({ isActive = false }: { isActive: boolean }) => (
  <div className={`${BaseIconStyle} ${isActive ? 'text-GRAY_90' : 'text-GRAY_70'}`}>
    <ToggleIcon isActive={isActive} IconActive={ICON_BOOK_ACTIVE} IconInactive={ICON_BOOK_INACTIVE} />
    BOOK
  </div>
)

FooterNav.MyllIcon = ({ isActive = false }: { isActive: boolean }) => (
  <div className={`${BaseIconStyle} ${isActive ? 'text-GRAY_90' : 'text-GRAY_70'}`}>
    <ToggleIcon isActive={isActive} IconActive={ICON_MYLL_ACTIVE} IconInactive={ICON_MYLL_INACTIVE} />
    MYLL
  </div>
)

FooterNav.LocalIcon = ({ isActive = false }: { isActive: boolean }) => (
  <div className={`${BaseIconStyle} ${isActive ? 'text-GRAY_90' : 'text-GRAY_70'}`}>
    <ToggleIcon isActive={isActive} IconActive={ICON_LOCAL_ACTIVE} IconInactive={ICON_LOCAL_INACTIVE} />
    LOCAL
  </div>
)

export default FooterNav
