import moment from 'moment'
import { Alert, Button, MenuList } from 'myll-ui'
import DefaultMenuItem from 'myll-ui/src/Components/MenuList/DefaultMenuItem'
import { useRouter } from 'next/router'

import { usePlan } from '@/common/api/book'
import useBookPageStore from '@/stores/useBookPageStore'

const MyllPlanSection = () => {
  const { data } = usePlan()
  const { setPlans } = useBookPageStore()

  const router = useRouter()
  return (
    <section className="flex flex-col items-center w-full px-20pxr">
      <h2 className="w-full HEADER-H5 text-GRAY_100">나의 마일 플랜</h2>

      <div className="flex flex-col items-center w-full gap-5 mt-20pxr px-10pxr">
        {data.length === 0 && (
          <Alert
            isVisible
            message="예정된 여행계획이 없어요!"
            onVisibleChange={() => {}}
            type="info"
            closable={false}
          />
        )}
        {data.length > 0 && (
          <div className="mt-20pxr w-full">
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

        <Button color="gradient" onClick={() => {}} type="button" variant="block">
          여행계획 추가하기
        </Button>
      </div>
    </section>
  )
}
export default MyllPlanSection
