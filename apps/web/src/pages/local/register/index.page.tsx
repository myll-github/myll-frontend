import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Button, Input, UploadCard } from 'myll-ui'
import { ICON_EDIT } from 'shared'

import NavLayout from '@/common/components/Layout/NavLayout'

import LocalRegisterHeader from './section/LocalRegisterHeader'

export const Register = () => {
  return (
    <>
      <NavLayout>
        <LocalRegisterHeader />
        <main className="relative flex flex-col gap-5 mt-20pxr">
          <section className="px-20pxr ">
            <UploadCard itemList={[]} onChange={() => {}} />
            <div className="w-full bg-gray-100 mt-20pxr h-10pxr" />
          </section>

          <section className="px-20pxr pb-20pxr">
            <Input label="제목" placeholder="제목을 작성해주세요." onChange={() => {}} onValidation={(text) => true} />
          </section>

          <section className="flex flex-col w-full gap-5 px-20pxr pb-20pxr">
            <Input
              label="위치 검색"
              placeholder="위치를 검색해주세요."
              onChange={() => {}}
              onValidation={(text) => true}
            />

            <Button className="w-full" type="button" color="secondary" onClick={() => {}} variant="medium">
              주소 검색하기
            </Button>
          </section>

          <section className="flex flex-col w-full gap-5 px-20pxr pb-30pxr">
            <span className="INPUT-LABEL2">이 장소를 설명할 수 있는 태그는?</span>

            <Button className="w-full" type="button" color="secondary" onClick={() => {}} variant="medium">
              주소 검색하기
            </Button>
          </section>
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
