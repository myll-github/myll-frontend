import { Button, Drawer, Input } from 'myll-ui'
import { useState } from 'react'

import { useUserInfo } from '@/common/api/user/info'
import { UserUpdate } from '@/common/api/user/update/UserUpdate'

interface InfoDrawerProps {
  open: boolean
  onClose: () => void
}

const InfoDrawer = (props: InfoDrawerProps) => {
  const { open, onClose } = props
  const { data } = useUserInfo()

  const [value, setValue] = useState<{ nickname: string; email: string; introduction: string }>({
    nickname: data?.dataValues?.nickname || '',
    email: data?.dataValues?.email || '',
    introduction: data?.dataValues?.introduction || '',
  })
  const [isChanged, setIsChanged] = useState<boolean>(false)

  const handleUserInfoUpdate = async (userInfo: { nickname?: string; introduction?: string }) => {
    await UserUpdate(userInfo)
  }

  return (
    <Drawer open={open} height="auto" placement="bottom" mask={false} closable={false} onClose={onClose}>
      <div className="mt-30pxr w-full h-full flex flex-col gap-32pxr items-center">
        <Input
          label="프로필 이름"
          value={value.nickname}
          onChange={(e) => {
            if (!isChanged) setIsChanged(true)
            setValue((prev) => ({ ...prev, nickname: e.target.value }))
          }}
        />
        <Input label="이메일" value={value.email} />

        <Input
          label="소개"
          value={value.introduction}
          onChange={(e) => {
            if (!isChanged) setIsChanged(true)
            setValue((prev) => ({ ...prev, introduction: e.target.value }))
          }}
        />
        <Button
          className="mt-100pxr"
          type="button"
          variant="block"
          onClick={async () => {
            onClose()
            if (isChanged) {
              await handleUserInfoUpdate({ nickname: value.nickname, introduction: value.introduction })
              window.location.reload()
            }
          }}
        >
          {isChanged ? '변경사항 저장' : '취소'}
        </Button>
      </div>
    </Drawer>
  )
}

export default InfoDrawer
