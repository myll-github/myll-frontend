import { MenuList } from 'myll-ui'
import { ItemType } from 'myll-ui/src/Components/MenuList/type'
import { useRouter } from 'next/router'

const LocalMenuList = (props) => {
  const router = useRouter()

  const handleClick = (item) => {
    const { contentTypeId, id } = item

    router.push(`/details/${contentTypeId}/${id}`)
  }

  return <MenuList onClick={handleClick} {...props} />
}

LocalMenuList.MediumMenuItem = MenuList.MediumMenuItem
LocalMenuList.DefaultMenuItem = MenuList.DefaultMenuItem

export default LocalMenuList
