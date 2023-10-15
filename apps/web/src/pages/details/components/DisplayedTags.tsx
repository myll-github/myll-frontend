import { IconLabel } from '@/common/components/IconLabel'
import { IconLabelContainerType, IconLabelType } from '@/common/components/IconLabel/type'

interface DisplayedTagsProps {
  labels: IconLabelContainerType
}

const DisplayedTags = ({ labels }: DisplayedTagsProps) => {
  return (
    <>
      {Object.entries(labels)
        .filter(([key, value]) => {
          return value
        })
        .map(([key, value]) => {
          return <IconLabel label={key as IconLabelType} isSelected={false} disabled handleToggleLabel={() => {}} />
        })}
    </>
  )
}

export default DisplayedTags
