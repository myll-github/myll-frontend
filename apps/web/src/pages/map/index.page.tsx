import { Button, CustomImage } from 'myll-ui'
import Link from 'next/link'
import { ICON_KAKAOMAP } from 'shared'

import NavLayout from '@/common/components/Layout/NavLayout'

export const Login = () => {
  return (
    <NavLayout>
      <main className="flex flex-col justify-center items-center pt-120pxr gap-40pxr">
        <div className="HEADER-H5 text-center">
          <div className="flex gap-3pxr">
            <CustomImage className="w-[110px] h-[24px]" src="/pictures/kakaomap_logo.png" alt="" />
            으로
          </div>
          이동합니다.
        </div>
        <CustomImage className="w-[180px] h-[300px]" src="/pictures/Illust_kakaomap.png" alt="" />
        <Link href="https://m.map.kakao.com">
          <Button className="w-300pxr" type="button" variant="large" color="secondary">
            <ICON_KAKAOMAP className="mr-8pxr" width={24} height={24} />
            카카오맵에서 열기
          </Button>
        </Link>
      </main>
    </NavLayout>
  )
}

export default Login
