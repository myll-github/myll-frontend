import { AppBar } from 'myll-ui'
import { ICON_CHAT, ICON_NOTIFICATIONS1 } from 'shared'

import useBookPageStore from '@/stores/useBookPageStore'

const AddPlanHeader = () => {
  const { planTitle, startDate, endDate } = useBookPageStore()
  return (
    <header>
      <AppBar>
        <AppBar.LeftSection>
          <AppBar.FallbackButton />
        </AppBar.LeftSection>
        <div className="flex items-center w-full h-36pxr ml-40pxr">
          <div className="flex flex-col h-full ml-20pxr">
            <span className="text-GRAY_80 SUBTITLE-T5">{planTitle}</span>
            <span className="text-GRAY_70 SUBTITLE-T8">{`${startDate} ~ ${endDate}`}</span>
          </div>
        </div>
      </AppBar>
    </header>
  )
}

export default AddPlanHeader
