import { ICON_CHAT, ICON_NOTIFICATION } from 'shared'

const PlanHeader = () => (
  <div className="h-76pxr pt-30pxr flex justify-between">
    <span className="h-24pxr ml-72pxr text-center flex flex-grow SUBTITLE-T3 justify-center items-center">Book</span>
    <span className="flex h-24pxr mr-20pxr gap-12pxr items-center">
      <ICON_NOTIFICATION />
      <ICON_CHAT />
    </span>
  </div>
)

export default PlanHeader
