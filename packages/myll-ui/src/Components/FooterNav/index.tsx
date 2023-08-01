import { FC, SVGProps, useState } from 'react'
import {
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
  return (
    <div>
      {isActive ? (
        <IconActive width="30px" height="30px" className="text-GRAY_90" />
      ) : (
        <IconInactive width="30px" height="30px" className="text-GRAY_70" />
      )}
    </div>
  )
}
/* 
  안타깝게도 시안대로 svg 색 반전 시킬수가
  없어서 2개 import해서 씀 
*/

const FooterNav = () => {
  const [isActive, setActive] = useState(false)

  return (
    <nav>
      <ToggleIcon isActive={isActive} IconActive={ICON_HOME_ACTIVE} IconInactive={ICON_HOME_INACTIVE} />
      <ToggleIcon isActive={isActive} IconActive={ICON_MAP_ACTIVE} IconInactive={ICON_MAP_INACTIVE} />
      <ToggleIcon isActive={isActive} IconActive={ICON_BOOK_ACTIVE} IconInactive={ICON_BOOK_INACTIVE} />
      <ToggleIcon isActive={isActive} IconActive={ICON_MYLL_ACTIVE} IconInactive={ICON_MYLL_INACTIVE} />
      <ToggleIcon isActive={isActive} IconActive={ICON_LOCAL_ACTIVE} IconInactive={ICON_LOCAL_INACTIVE} />
    </nav>
  )
}

export default FooterNav
