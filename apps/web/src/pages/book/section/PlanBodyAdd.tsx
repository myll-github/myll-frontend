import moment from 'moment'
import { Alert, Button, MenuList } from 'myll-ui'
import DefaultMenuItem from 'myll-ui/src/Components/MenuList/DefaultMenuItem'
import { useRouter } from 'next/router'

import { usePlan } from '@/common/api/book'
import useBookPageStore from '@/stores/useBookPageStore'

interface PlanBodyAddProps {
  openModal: () => void
}

const PlanBodyAdd = (props: PlanBodyAddProps) => {
  const { openModal } = props

  const { data } = usePlan()
  const { setPlans } = useBookPageStore()

  const router = useRouter()

  return (
    <div className="flex flex-col pl-30pxr pr-30pxr pt-20pxr mb-20pxr">
      <div className="break-words HEADER-H2">
        초보 여행자님 <br />
        어디로 떠나볼까요?
      </div>
      <div className="break-words SUBTITLE-T6 mt-10pxr pb-20pxr border-b-[1px] border-solid border-GRAY_30">
        카카오맵에서 여행 동선을 바로 확인하고 <br />
        가고싶은 여행지를 등록해 여행계획을 짜보세요!
      </div>
      {data.length && (
        <div className="mt-20pxr">
          <MenuList
            data={data.map((one) => ({
              id: one.id,
              mainTitle: one.title,
              subTitle: `${moment(one.startDate).format('M월 D일')} ~ ${moment(one.endDate).format('M월 D일')}`,
              img: '',
              href: '',
            }))}
            onClick={(item) => {
              setPlans(data.filter((one) => one.id === item.id)[0])
              router.push('/book/add/plan')
            }}
          >
            <DefaultMenuItem />
          </MenuList>
        </div>
      )}
      <div className="mt-20pxr mb-20pxr">
        <Alert
          type={data.length > 0 ? 'warning' : 'info'}
          message={data.length > 0 ? `예정된 여행계획이 ${data.length}개 있어요.` : '예정된 여행계획이 없어요.'}
          closable={false}
          isVisible
          onVisibleChange={() => {}}
        />
      </div>
      <div className="w-full flex justify-center">
        <Button variant="block" type="button" onClick={openModal}>
          여행일정 등록하기
        </Button>
      </div>
    </div>
  )
}

export default PlanBodyAdd
