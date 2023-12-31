import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Button, Carousel, CustomImage, Tag } from 'myll-ui'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  ICON_HEART_AC,
  ICON_HEART_IN,
  ICON_INFO,
  ICON_KAKAOMAP,
  ICON_PHONE,
  ICON_PLACE,
  ICON_SUITCASE,
  ICON_TIME,
} from 'shared'

import { authAPI, getCookieHeader } from '@/common/api'
import { getTourDetailById } from '@/common/api/details'
import { IconLabel } from '@/common/components/IconLabel'
import { IconLabelType } from '@/common/components/IconLabel/type'
import DefaultLayout from '@/common/components/Layout/DefaultLayout'
import NavLayout from '@/common/components/Layout/NavLayout'
import { HOME_LOCALRECOMMANDSECTION_MAP } from '@/common/constants'
import IconDiv from '@/pages/details/components/IconDiv'
import HomeHeader from '@/pages/home/section/HomeHeader'

import DetailHeader from '../../../components/DetailHeader'
import DisplayedTags from '../../../components/DisplayedTags'
import Separator from '../../../components/Separator'

interface DetailsProps {
  contentTypeId: number
  contentId: number

  tourData: any
}

export const Details = ({ contentTypeId, contentId, tourData }: DetailsProps) => {
  return (
    <>
      <DetailHeader />
      <NavLayout>
        <main className="flex flex-col ">
          <Carousel onChange={() => {}}>
            {tourData.contentImage.map((url) => (
              <div className="flex flex-col items-center w-full ">
                <CustomImage key={url} className="w-[360px] h-[200px]" src={url} alt="" />
              </div>
            ))}
          </Carousel>

          <section className="flex flex-col p-20pxr gap-4pxr" aria-labelledby="local-detail-header">
            <div>
              <Tag contenttype={HOME_LOCALRECOMMANDSECTION_MAP[tourData.contentTypeId]} />
            </div>

            <h2 id="local-detail-header" className="HEADER-H2 text-GRAY_100">
              {tourData.title}
            </h2>
          </section>

          <Separator />

          <section className="flex flex-col pb-20pxr gap-10pxr">
            <div className="flex flex-row items-center justify-between w-full h-64pxr">
              <span className="flex flex-row items-center w-full border-b gap-10pxr px-20pxr py-14pxr text-GRAY_100 SUBTITLE-T3">
                <ICON_SUITCASE className="w-18pxr h-18pxr" /> 소개 정보
              </span>
            </div>

            {tourData.address && (
              <IconDiv>
                <IconDiv.Header>
                  <ICON_PLACE className="w-18pxr h-18pxr text-GRAY_60 opacity-30" fill="currentColor" />
                  {tourData.address}
                </IconDiv.Header>
              </IconDiv>
            )}

            {tourData.infocenter && (
              <IconDiv>
                <IconDiv.Header>
                  <ICON_PHONE className="w-18pxr h-18pxr text-GRAY_60 opacity-30" fill="currentColor" />
                  {tourData.infocenter}
                </IconDiv.Header>
              </IconDiv>
            )}

            {tourData.open && (
              <IconDiv>
                <IconDiv.Header>
                  <ICON_TIME className="w-18pxr h-18pxr text-GRAY_60 opacity-30" fill="currentColor" />
                  영업일
                </IconDiv.Header>

                <IconDiv.Description>
                  <div className="flex flex-col">
                    {tourData.open.split('<br>').map((openDate) => (
                      <>
                        <span>{openDate}</span>
                      </>
                    ))}
                  </div>
                </IconDiv.Description>

                {tourData.restdate && <IconDiv.Description>휴무일 : {tourData.restdate}</IconDiv.Description>}
              </IconDiv>
            )}

            {tourData.parking && (
              <IconDiv>
                <IconDiv.Header>
                  <ICON_INFO className="w-18pxr h-18pxr text-GRAY_60 opacity-30" fill="currentColor" />
                  주차 가능 정보
                </IconDiv.Header>

                <IconDiv.Description>{tourData.parking}</IconDiv.Description>
              </IconDiv>
            )}
          </section>

          <div className="flex flex-col items-center justify-center p-20pxr gap-4pxr">
            <Button color="secondary" onClick={() => {}} type="button" variant="block">
              <ICON_KAKAOMAP />
              <span>카카오 맵에서 보기</span>
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

  const tourData = await getTourDetailById({ contentId, contentTypeId, initHeaders })

  return {
    props: {
      tourData,
      contentTypeId,
      contentId,
      dehydratedState: dehydrate(queryClient),
    },
  }
}
export default Details
