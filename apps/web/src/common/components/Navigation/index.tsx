import Link from 'next/link'
import { useRouter } from 'next/router'

import FooterNav from './FooterNav'

const Navigation = () => {
  const router = useRouter()
  const pathName = router.pathname

  return (
    <FooterNav>
      <Link href="book" className="flex-shrink-0">
        <FooterNav.BookIcon isActive={pathName === '/book'} />
      </Link>
      <Link href="home" className="flex-shrink-0">
        <FooterNav.HomeIcon isActive={pathName === '/home'} />
      </Link>
      <Link href="local" className="flex-shrink-0">
        <FooterNav.LocalIcon isActive={pathName === '/local'} />
      </Link>
      <Link href="map" className="flex-shrink-0">
        <FooterNav.MapIcon isActive={pathName === '/map'} />
      </Link>
      <Link href="myll" className="flex-shrink-0">
        <FooterNav.MyllIcon isActive={pathName === '/myll'} />
      </Link>
    </FooterNav>
  )
}

export default Navigation
