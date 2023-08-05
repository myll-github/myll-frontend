import Link from 'next/link'
import { useRouter } from 'next/router'

import FooterNav from './FooterNav'

const Navigation = () => {
  const router = useRouter()
  const pathName = router.pathname

  return (
    <FooterNav>
      <Link href="book">
        <FooterNav.BookIcon isActive={pathName === '/book'} />
      </Link>
      <Link href="home">
        <FooterNav.HomeIcon isActive={pathName === '/home'} />
      </Link>
      <Link href="local">
        <FooterNav.LocalIcon isActive={pathName === '/local'} />
      </Link>
      <Link href="map">
        <FooterNav.MapIcon isActive={pathName === '/map'} />
      </Link>
      <Link href="myll">
        <FooterNav.MyllIcon isActive={pathName === '/myll'} />
      </Link>
    </FooterNav>
  )
}

export default Navigation
