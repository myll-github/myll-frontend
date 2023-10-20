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
        <div className="flex items-center w-full h-36pxr">
          <AppBar.MiddleSection>
            <div className="flex flex-col h-full ml-20pxr">
              <span className="SUBTITLE-T5">{planTitle}</span>
              <span className="SUBTITLE-T8">{`${startDate} ~ ${endDate}`}</span>
            </div>
          </AppBar.MiddleSection>
        </div>
      </AppBar>
    </header>
  )
}

export default AddPlanHeader
