import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Avatar, Button, Input, Modal } from 'myll-ui'
import { GetServerSidePropsContext } from 'next'
import nookies from 'nookies'
import { useState } from 'react'
import { ICON_PROFILE_14 } from 'shared'

import { getCookieHeader, withAuth } from '@/common/api'
import { userInfoFn, userInfoKey, useUserInfo } from '@/common/api/user/info'
import { UserUpdate } from '@/common/api/user/update/UserUpdate'
import NavLayout from '@/common/components/Layout/NavLayout'

import MyllHeader from './section/MyllHeader'

export const Myll = () => {
  const { data } = useUserInfo()
  const { email, nickname, introduction } = data.dataValues

  const [value, setValue] = useState<{ nickname: string; email: string; introduction: string }>({
    nickname,
    email,
    introduction,
  })

  const [open, setOpen] = useState<boolean>(false)

  const handleUserInfoUpdate = async (userInfo: { nickname?: string; introduction?: string }) => {
    await UserUpdate(userInfo)
  }

  return (
    <NavLayout>
      <MyllHeader />
      <main className="pl-30pxr pr-30pxr">
        <div className="w-full text-center mt-20pxr">
          <Avatar className="bg-white" size={100} icon={<ICON_PROFILE_14 className="w-full h-full" />} />
        </div>
        <div className="mt-96pxr w-full flex flex-col gap-32pxr items-center">
          <div className="w-full flex">
            <Input
              theme="bottom-border"
              label="프로필 이름"
              value={value.nickname}
              onChange={(e) => setValue((prev) => ({ ...prev, nickname: e.target.value }))}
            />
            <Button
              className="mt-auto"
              color="text"
              type="button"
              variant="medium"
              onClick={() => handleUserInfoUpdate({ nickname: value.nickname })}
            >
              변경
            </Button>
          </div>
          <div className="w-full flex">
            <Input theme="bottom-border" label="이메일" value={value.email} />
            <Button className="mt-auto" color="text" type="button" variant="medium" disabled>
              변경
            </Button>
          </div>
          <div className="w-full flex">
            <Input
              theme="bottom-border"
              label="소개"
              value={value.introduction}
              onChange={(e) => setValue((prev) => ({ ...prev, introduction: e.target.value }))}
            />
            <Button
              className="mt-auto"
              color="text"
              type="button"
              variant="medium"
              onClick={() => handleUserInfoUpdate({ introduction: value.introduction })}
            >
              변경
            </Button>
          </div>
          <Button className="mt-30pxr opacity-40" type="button" variant="block" onClick={() => setOpen(true)}>
            인증하기
          </Button>
        </div>
      </main>
      <Modal
        open={open}
        submitButtonText="확인"
        onSubmit={() => setOpen(false)}
        cancelButtonText="취소"
        onCancel={() => setOpen(false)}
      >
        <div>준비중인 기능입니다.</div>
      </Modal>
    </NavLayout>
  )
}

export const getServerSideProps = withAuth(async (context: GetServerSidePropsContext) => {
  const queryClient = new QueryClient()
  const initHeaders = getCookieHeader(context)

  await queryClient.prefetchQuery({
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
})

export default Myll
