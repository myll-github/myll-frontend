import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Button, Carousel, CustomImage, Tag } from 'myll-ui'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { getCookieHeader } from '@/common/api'
import { IconLabel } from '@/common/components/IconLabel'
import { IconLabelType } from '@/common/components/IconLabel/type'
import DefaultLayout from '@/common/components/Layout/DefaultLayout'
import NavLayout from '@/common/components/Layout/NavLayout'
import { HOME_LOCALRECOMMANDSECTION_MAP } from '@/common/constants'
import HomeHeader from '@/pages/home/section/HomeHeader'

import DetailHeader from './components/DetailHeader'
import Separator from './components/Separator'

const detailData = {
  id: 5,
  userEmail: 'ycp998@naver.com',
  title: 'test4',
  contentTypeId: 12,
  address: 'estet',
  introduction: 'etete',
  createAt: 1697272171457,
  recommendCount: 0,
  isRecommend: false,

  contentImage: ['/pictures/Illust_Intro3.svg', '/pictures/Illust_Intro2.png'],

  labels: {
    CAMERA: false,
    HOUSE: false,
    BACKPACK: true,
    OWL: false,
    WASTEBASKET: true,
    SHUSHING_FACE: true,
    BALANCE_SCALE: false,
    CITYSCAPE: false,
    SHOPPING_BAGS: true,
  },
}

export const Details = () => {
  return (
    <>
      <DetailHeader />
      <NavLayout>
        <main className="flex flex-col ">
          <Carousel onChange={() => {}}>
            {detailData.contentImage.map((url) => (
              <div className="flex flex-col items-center w-full ">
                <CustomImage className="w-[360px] h-[200px]" src={url} alt="" />
              </div>
            ))}
          </Carousel>

          <section className="flex flex-col p-20pxr gap-4pxr">
            <div>
              <Tag contenttype={HOME_LOCALRECOMMANDSECTION_MAP[detailData.contentTypeId]} />
            </div>

            <h2 className="HEADER-H2 text-GRAY_100">{detailData.title}</h2>

            <div
              style={{
                marginLeft: '-10px',
              }}
              className="flex flex-row flex-wrap gap-x-4pxr gap-y-10pxr"
            >
              {Object.entries(detailData.labels)
                .filter(([key, value]) => {
                  return value
                })
                .map(([key, value]) => {
                  return (
                    <IconLabel label={key as IconLabelType} isSelected={false} disabled handleToggleLabel={() => {}} />
                  )
                })}
            </div>
          </section>

          <Separator />

          <section className="flex flex-col p-20pxr gap-4pxr">
            <div>123</div>

            <p className="p-20pxr">{detailData.introduction}</p>
          </section>
        </main>
      </NavLayout>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { contentTypeId, contentId } = context.query
  const queryClient = new QueryClient()
  const initHeaders = getCookieHeader(context)

  await Promise.all([
    /*
    queryClient.prefetchQuery({
      queryKey: randomTourListQueryKey({ contentTypeId: 'all', key: MYLLRECOMMEND_KEY.BUSAN_HOT_PLACE }),
      queryFn: randomTourListQueryFn({ initHeaders, count: 6 }),
      staleTime: Infinity,
      cacheTime: Infinity,
    }),

    */
  ])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
export default Details
