import DefaultMenuList from './DefaultMenuList'
import MediumMenuList from './MediumMenuList'
import { MenuListProps } from './type'

const MenuList = ({ size, ...rest }: MenuListProps) => {
  switch (size) {
    case 'medium':
      return <MediumMenuList {...rest} />
    case 'default':
    default:
      return <DefaultMenuList {...rest} />
  }
}

export default MenuList
