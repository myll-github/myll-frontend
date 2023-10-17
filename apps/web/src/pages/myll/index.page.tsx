import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Avatar, Button, Tab } from 'myll-ui'
import { GetServerSidePropsContext } from 'next'
import nookies from 'nookies'
import { useState } from 'react'
import { ICON_PROFILE_14 } from 'shared'

import { getCookieHeader, withAuth } from '@/common/api'
import { userInfoFn, userInfoKey, useUserInfo } from '@/common/api/user/info'
import NavLayout from '@/common/components/Layout/NavLayout'

import InfoDrawer from './info-drawer/InfoDrawer'
import MyTripContent from './my-trip/MyTripContent'
import MyllHeader from './section/MyllHeader'

export const Myll = () => {
  const { data } = useUserInfo()

  const [open, setOpen] = useState<boolean>(false)

  return (
    <NavLayout>
      <MyllHeader />
      <main>
        <div className="w-full text-center mt-10pxr mb-10pxr">
          <Avatar className="bg-white" size={100} icon={<ICON_PROFILE_14 className="w-full h-full" />} />
        </div>
        {open || (
          <div className="flex flex-col items-center justify-center gap-10pxr mb-20pxr">
            <div className="SUBTITLE-T3 text-GRAY_80">{data?.dataValues?.nickname || ''}</div>
            <div className="SUBTITLE-T8 text-GRAY_70">{data?.dataValues?.email || ''}</div>
          </div>
        )}
        <div className="w-full flex justify-center mb-10pxr">
          <Button
            className={`${open && 'opacity-40'}`}
            type="button"
            variant="small"
            color="text"
            onClick={() => setOpen(true)}
          >
            {open ? '이미지 편집' : '프로필 편집'}
          </Button>
        </div>
        <InfoDrawer
          open={open}
          onClose={async () => {
            setOpen(false)
          }}
        />
        <Tab
          size="middle"
          tabBarGutter={60}
          className="w-full"
          centered
          defaultActiveKey="마이 트립"
          items={[
            {
              children: <MyTripContent />,
              key: '마이 트립',
              label: '마이 트립',
            },
            {
              children: <div className="w-full">test2</div>,
              key: '찜한 여행지',
              label: '찜한 여행지',
            },
            {
              children: <div className="w-full">test3</div>,
              key: '작성한 글',
              label: '작성한 글',
            },
          ]}
          onChange={() => {}}
        />
      </main>
    </NavLayout>
  )
}

export const getServerSideProps = withAuth(async (context: GetServerSidePropsContext) => {
  const queryClient = new QueryClient()
  const initHeaders = getCookieHeader(context)

  try {
    await queryClient.fetchQuery({
      queryKey: userInfoKey(),
      queryFn: userInfoFn({ initHeaders }, nookies.get(context).userEmail || ''),
      staleTime: Infinity,
      cacheTime: Infinity,
    })

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    }
  } catch (e) {
    return {
      props: {},
      redirect: { statusCode: 302, destination: '/login' },
    }
  }
})

export default Myll
