/* eslint-disable jsx-a11y/label-has-associated-control */
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Button, Input, Tag, TextArea, UploadCard } from 'myll-ui'
import { ICON_EDIT } from 'shared'

import NavLayout from '@/common/components/Layout/NavLayout'
import { TAG_COLOR_MAP } from '@/common/constants'

import LocalRegisterHeader from './section/LocalRegisterHeader'

const TEXT_AREA_ID = 'REGISTER_TEXTAREA_ID'

const Divider = () => {
  return <div className="w-full bg-gray-100 mt-20pxr h-10pxr" />
}

export const Register = () => {
  return (
    <>
      <NavLayout>
        <LocalRegisterHeader />
        <main className="relative flex flex-col gap-5 mt-20pxr">
          <section className="px-20pxr ">
            <UploadCard itemList={[]} onChange={() => {}} />
            <Divider />
          </section>

          <section className="px-20pxr pb-20pxr">
            <Input
              size="large"
              label="제목"
              placeholder="제목을 작성해주세요."
              onChange={() => {}}
              onValidation={(text) => true}
            />
          </section>

          <section className="flex flex-col w-full gap-5 px-20pxr pb-20pxr">
            <Input
              size="large"
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

            <ul className="flex flex-row flex-wrap w-full">
              {Object.keys(TAG_COLOR_MAP).map((contentId) => (
                <li>
                  <Tag contenttype={contentId} />
                </li>
              ))}
            </ul>
            <Divider />
          </section>

          <section className="px-20pxr pb-20pxr">
            <label htmlFor={TEXT_AREA_ID} className="INPUT-LABEL2 ">
              자세한 설명
            </label>
            <TextArea
              className="mt-6pxr"
              id={TEXT_AREA_ID}
              size="large"
              placeholder="제목을 작성해주세요."
              onChange={() => {}}
              autoSize={{ minRows: 5, maxRows: 8 }}
            />
          </section>
          <div className="flex flex-row justify-center m-30pxr">
            <Button color="primary" onClick={() => {}} type="button" variant="block">
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
