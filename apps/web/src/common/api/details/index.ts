import { useQuery } from '@tanstack/react-query'
import { isEmpty } from 'lodash'
import { JSONstartWith } from 'shared'

import { useLocalMenuListQuery } from '@/common/api/local'
import { IconLabelContainerType } from '@/common/components/IconLabel/type'
import { TAG_COLOR_MAP } from '@/common/constants'

import { authAPI, getCookieHeader, InitHeaders } from '..'

interface updateDataType {
  title: string
  contentImage: unknown[]
  contentTypeId: string
  address: string
  introduction: string
  createAt: number

  labels: IconLabelContainerType
}

interface InitHeadersWithId extends InitHeaders {
  contentTypeId: number
  contentId: number
}

interface UseLocalMenuListQuery {
  contentTypeId: number
  contentId: number
}

export const getLocalMenuById = async ({ contentTypeId, contentId, initHeaders }: InitHeadersWithId) => {
  const headers = initHeaders ?? getCookieHeader()

  const data = await authAPI(
    `/local-tour-detail`,

    {
      params: {
        contentTypeId,
        contentId,
      },
      headers,
    },
  )

  return data.data.map((ele, index) => {
    return {
      ...ele,
      img: '',
      href: '',
      mainTitle: ele.title,
      subTitle: `${ele.address} • ${TAG_COLOR_MAP[ele.contentTypeId ?? 13]}` ?? 13,
      contenttype: TAG_COLOR_MAP[ele.contentTypeId ?? 13] ?? 13,
      isRecommend: ele.isRecommend ?? false,
      recommendCount: ele.recommendCount ?? 0,
    }
  })
}

const exData = async () => {
  return {
    contentid: '2789460',
    contenttypeid: '12',
    heritage1: '0',
    heritage2: '0',
    heritage3: '0',
    infocenter: '강서구청 문화체육과 051-970-4062',
    opendate: '',
    restdate: '없음',
    expguide: '',
    expagerange: '',
    accomcount: '',
    useseason: '',
    usetime: '10:00 ~ 20:00',
    parking: '있음',
    chkbabycarriage: '없음',
    chkpet: '가능',
    chkcreditcard: '없음',
  }
}

export const getTourDetailById = async ({ contentTypeId, contentId, initHeaders }: InitHeadersWithId) => {
  const headers = initHeaders ?? getCookieHeader()

  const datas = await Promise.all([
    { data: await exData() },

    authAPI(
      `/tour`,

      {
        params: {
          contentTypeId,
          contentId,
        },
        headers,
      },
    ),
  ])

  let ele = {} as any

  datas.forEach((data) => {
    console.log('datat', data)

    ele = { ...ele, ...data.data }
  })

  console.log(ele)

  return {
    ...ele,
    id: ele.contentid,
    img: ele.firstimage,
    mainTitle: ele.title,
    contentImage: [ele.firstimage, ele.firstimage2].filter((image) => !isEmpty(image)),
    subTitle: ele.addr1,
    contentTypeId: ele.contenttypeid,

    parking: JSONstartWith('parking', ele),
  }
}

export const getLocalMenuQueryKey = ({ contentTypeId, contentId }) => ['localMenuList', contentTypeId, contentId]

export const getLocalMenuFn =
  ({ contentTypeId, contentId, initHeaders }: InitHeadersWithId) =>
  () =>
    getLocalMenuById({ contentTypeId, contentId, initHeaders })

export const useLocalMenuQuery = ({ contentTypeId, contentId }: UseLocalMenuListQuery) => {
  const query = useQuery({
    queryKey: getLocalMenuQueryKey({ contentTypeId, contentId }),
    queryFn: getLocalMenuFn({ contentTypeId, contentId }),
    staleTime: 0,
    cacheTime: Infinity,

    refetchOnMount: true,
  })

  return query
}
