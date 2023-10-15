import { MenuList } from 'myll-ui'
import { useRouter } from 'next/router'

const TourMenuList = (props) => {
  const router = useRouter()

  const handleClick = (item) => {
    const { contenttypeid, contentid } = item

    router.push(`/details/tour/${contenttypeid}/${contentid}`)
  }

  return <MenuList onClick={handleClick} {...props} />
}

TourMenuList.LargeMenuItem = MenuList.LargeMenuItem

export default TourMenuList
