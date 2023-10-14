/* eslint-disable jsx-a11y/label-has-associated-control */
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Button, Input, Tag, TextArea, UploadCard } from 'myll-ui'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ICON_EDIT } from 'shared'

import { IconLabelContainer } from '@/common/components/IconLabel'
import { IconLabelContainerType } from '@/common/components/IconLabel/type'
import NavLayout from '@/common/components/Layout/NavLayout'
import { TAG_STRING_TO_COLOR } from '@/common/constants'
import useLocalRegister from '@/stores/local/useLocalRegister'

import Separator from './components/Separator'
import LocalRegisterHeader from './section/LocalRegisterHeader'
import RegisterTagSection from './section/RegisterTagSection'

export const Register = () => {
  const {
    registerTitle,
    handleRegisterTitle,
    handleRegisterDescription,
    handleRegisterLocation,
    handleRegisterFileList,
    handleLabels,
    handleSubmit,
  } = useLocalRegister()
  const router = useRouter()

  return (
    <>
      <NavLayout>
        <LocalRegisterHeader />
        <main className="relative flex flex-col gap-5 mt-20pxr">
          <section className="px-20pxr ">
            <UploadCard
              itemList={[]}
              onChange={(data) => {
                handleRegisterFileList(data)
              }}
            />
            <Separator />
          </section>

          <section className="px-20pxr pb-20pxr">
            <Input
              size="large"
              label="제목"
              placeholder="제목을 작성해주세요."
              onChange={(e) => {
                handleRegisterTitle(e.target.value)
              }}
              onValidation={(text) => true}
            />
          </section>

          <section className="flex flex-col w-full gap-5 px-20pxr pb-20pxr">
            <Input
              size="large"
              label="위치 검색"
              placeholder="위치를 검색해주세요."
              onChange={(e) => {
                handleRegisterLocation(e.target.value)
              }}
              onValidation={(text) => true}
            />

            <Button className="w-full" type="button" color="secondary" onClick={() => {}} variant="medium">
              주소 검색하기
            </Button>
          </section>

          <RegisterTagSection />

          <section className="px-20pxr pb-20pxr">
            <label className="INPUT-LABEL2 ">
              자세한 설명
              <TextArea
                className="mt-6pxr"
                size="large"
                placeholder="제목을 작성해주세요."
                onChange={(e) => {
                  handleRegisterDescription(e.target.value)
                }}
                autoSize={{ minRows: 5, maxRows: 8 }}
              />
            </label>
          </section>

          <section className="flex flex-col gap-10pxr px-20pxr ">
            <p className="INPUT-LABEL2">여행자님에게 알려주고 싶어요!</p>

            <IconLabelContainer
              onChange={(newLabels) => {
                handleLabels(newLabels)
              }}
            />
          </section>

          <div className="flex flex-row justify-center m-30pxr">
            <Button
              color="primary"
              onClick={async () => {
                await handleSubmit()
                router.push('/local/attraction')
              }}
              type="button"
              variant="block"
            >
              작성 완료
            </Button>
          </div>
        </main>
      </NavLayout>
    </>
  )
}

/*

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()

  await Promise.all(
    Object.keys(HOME_LOCALRECOMMANDSECTION_MAP).map((contentTypeId: string) => {
      return queryClient.fetchQuery({
        queryKey: randomTourListQueryKey({ contentTypeId }),
        queryFn: randomTourListQueryFn({ contentTypeId, count: 5 }),
        staleTime: Infinity,
        cacheTime: Infinity,
      })
    }),
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

*/

export default Register
