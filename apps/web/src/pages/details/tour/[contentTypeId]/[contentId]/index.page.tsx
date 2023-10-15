import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Button, Carousel, CustomImage, Tag } from 'myll-ui'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ICON_HEART_AC, ICON_HEART_IN, ICON_KAKAOMAP } from 'shared'

import { getCookieHeader } from '@/common/api'
import { IconLabel } from '@/common/components/IconLabel'
import { IconLabelType } from '@/common/components/IconLabel/type'
import DefaultLayout from '@/common/components/Layout/DefaultLayout'
import NavLayout from '@/common/components/Layout/NavLayout'
import { HOME_LOCALRECOMMANDSECTION_MAP } from '@/common/constants'
import HomeHeader from '@/pages/home/section/HomeHeader'

import DetailHeader from '../../../components/DetailHeader'
import DisplayedTags from '../../../components/DisplayedTags'
import Separator from '../../../components/Separator'

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

interface DetailsProps {
  contentTypeId: number
  contentId: number
}

export const Details = ({ contentTypeId, contentId }: DetailsProps) => {
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

          <section className="flex flex-col p-20pxr gap-4pxr" aria-labelledby="local-detail-header">
            <div>
              <Tag contenttype={HOME_LOCALRECOMMANDSECTION_MAP[detailData.contentTypeId]} />
            </div>

            <h2 id="local-detail-header" className="HEADER-H2 text-GRAY_100">
              {detailData.title}
            </h2>

            <div className="-ml-2.5 flex flex-row flex-wrap gap-x-4pxr gap-y-10pxr">
              <DisplayedTags labels={detailData.labels} />
            </div>
          </section>

          <Separator />

          <section className="flex flex-col p-20pxr gap-4pxr">
            <div className="flex flex-row items-center justify-between w-full h-64pxr">
              <div className="flex flex-row items-center gap-10pxr ">
                <CustomImage
                  className="w-40pxr h-40pxr"
                  src={`/icons/Profile_Icon_${(contentId % 8) + 1}.svg`}
                  alt="유저 아이콘"
                />

                <div className="flex flex-col justify-between h-40pxr">
                  <span className="SUBTITLE-T4 text-GRAY_100">{detailData.userEmail}</span>
                  <span className="SUBTITLE-T8 text-GRAY_60">6 시간전</span>
                </div>
              </div>

              <div className="flex flex-row items-center text-GRAY_50 gap-6pxr px-12pxr">
                <button
                  type="button"
                  className="flex items-center justify-center border-0 w-74pxr h-40pxr mr-1pxr -ml-8pxr gap-6pxr"
                >
                  {detailData.isRecommend ? <ICON_HEART_AC /> : <ICON_HEART_IN />}

                  <span className="">{detailData.recommendCount}</span>
                </button>
              </div>
            </div>

            <p className="p-20pxr">{detailData.introduction}</p>
          </section>

          <div className="flex flex-col items-center justify-center p-20pxr gap-4pxr">
            <Button color="secondary" onClick={() => {}} type="button" variant="block">
              <ICON_KAKAOMAP />
              <span>카카오 맵에서 더 자세하게 볼래요</span>
            </Button>
          </div>
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
      contentTypeId,
      contentId,
      dehydratedState: dehydrate(queryClient),
    },
  }
}
export default Details
