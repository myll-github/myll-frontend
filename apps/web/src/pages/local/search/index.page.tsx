import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Input, MenuList, Tag } from 'myll-ui'
import { useState } from 'react'

import { getCookieHeader } from '@/common/api'
import { randomTourListQueryFn, randomTourListQueryKey } from '@/common/api/home/localRecommend'
import { getLocalMenuListFn, getLocalMenuListQueryKey, useLocalMenuListQuery } from '@/common/api/local'
import NavLayout from '@/common/components/Layout/NavLayout'
import { TAG_COLOR_MAP, TAG_STRING_TO_COLOR } from '@/common/constants'

import LocalHeader from '../components/LocalHeader'

export const Local = () => {
  const [searchValue, setSearchValue] = useState('')
  const { data } = useLocalMenuListQuery()

  const isThisTagSelected = (tag) => {
    return tag === searchValue
  }

  const handleTag = (tagName) => (e) => {
    e.preventDefault()
    setSearchValue(tagName)
  }

  // TO-DO - 가라친건데;; 전용 api 구현되면 연결
  const FilteredData = data.filter(({ contentTypeId }) => TAG_COLOR_MAP[contentTypeId] === searchValue)

  return (
    <>
      <LocalHeader />
      <NavLayout>
        <main className="flex flex-col gap-20pxr mt-20pxr">
          <section className="flex flex-col border-b px-30pxr pb-20pxr gap-15pxr border-GRAY_30">
            <Input
              className="w-full h-42pxr"
              size="large"
              label=""
              placeholder="테마나 장소를 검색해보세요."
              value={searchValue}
              onChange={(e) => {}}
              onValidation={(text) => true}
            />

            <ul className="flex flex-row flex-wrap w-full">
              {Object.keys(TAG_STRING_TO_COLOR).map((contentId) => (
                <li key={`${contentId}`}>
                  <Tag
                    className={isThisTagSelected(contentId) ? '' : ''}
                    contenttype={contentId}
                    onClick={handleTag(contentId)}
                  />
                </li>
              ))}
            </ul>
          </section>

          <section>
            <MenuList data={FilteredData}>
              <MenuList.DefaultMenuItem />
            </MenuList>
          </section>
        </main>
      </NavLayout>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const queryClient = new QueryClient()
  const initHeaders = getCookieHeader(context)

  await queryClient.fetchQuery({
    queryKey: getLocalMenuListQueryKey(),
    queryFn: getLocalMenuListFn({ initHeaders }),
    staleTime: Infinity,
    cacheTime: Infinity,
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Local
