import { AppBar } from 'myll-ui'
import { ICON_CHAT, ICON_NOTIFICATION } from 'shared'

import useBookPageStore from '@/stores/useBookPageStore'

const AddPlanHeader = () => {
  const { planTitle, startDate, endDate } = useBookPageStore()
  return (
    <header>
      <AppBar>
        <AppBar.LeftSection>
          <AppBar.FallbackButton />
        </AppBar.LeftSection>
        <div className="w-full h-36pxr flex items-center">
          <AppBar.MiddleSection>
            <div className="h-full flex flex-col ml-20pxr">
              <span className="SUBTITLE-T5">{planTitle}</span>
              <span className="SUBTITLE-T8">{`${startDate} ~ ${endDate}`}</span>
            </div>
          </AppBar.MiddleSection>
          <AppBar.RightSection>
            <span className="flex h-full gap-10pxr items-center">
              <ICON_NOTIFICATION />
              <ICON_CHAT />
            </span>
          </AppBar.RightSection>
        </div>
      </AppBar>
    </header>
  )
}

export default AddPlanHeader
