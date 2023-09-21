import Link from 'next/link'
import { useRouter } from 'next/router'

import FooterNav from './FooterNav'

interface NavigationProps {
  className?: string
}

const Navigation = ({ className }: NavigationProps) => {
  const router = useRouter()
  const pathName = router.pathname

  return (
    <FooterNav className={className}>
      <Link href="/book" className="flex-shrink-0">
        <FooterNav.BookIcon isActive={pathName.startsWith('/book')} />
      </Link>
      <Link href="/home" className="flex-shrink-0">
        <FooterNav.HomeIcon isActive={pathName.startsWith('/home')} />
      </Link>
      <Link href="/local" className="flex-shrink-0">
        <FooterNav.LocalIcon isActive={pathName.startsWith('/local')} />
      </Link>
      <Link href="/map" className="flex-shrink-0">
        <FooterNav.MapIcon isActive={pathName.startsWith('/map')} />
      </Link>
      <Link href="/myll" className="flex-shrink-0">
        <FooterNav.MyllIcon isActive={pathName.startsWith('/myll')} />
      </Link>
    </FooterNav>
  )
}

Navigation.defaultProps = {
  className: '',
}

export default Navigation
