import { useEffect, useState } from 'react'

import IconLabel from './IconLabel'
import { IconLabelContainerType, IconLabelType } from './type'

const iconArray = [
  'CAMERA',
  'HOUSE',
  'BACKPACK',
  'OWL',
  'WASTEBASKET',
  'SHUSHING_FACE',
  'BALANCE_SCALE',
  'CITYSCAPE',
  'SHOPPING_BAGS',
]

interface IconLabelContainerProps {
  className?: string
  initLabels?: IconLabelContainerType

  onChange: (newLabel: IconLabelContainerType) => void
}

const IconLabelContainer = ({ className, initLabels, onChange }: IconLabelContainerProps) => {
  const [labels, setLabels] = useState(initLabels)

  const handleToggleLabel = (label: IconLabelType) => {
    if (labels[label]) {
      setLabels({ ...labels, [label]: false })
      return
    }

    setLabels({ ...labels, [label]: true })
  }

  useEffect(() => {
    onChange(labels)
  }, [labels, onChange])

  return (
    <div className={`flex flex-row flex-wrap gap-x-4pxr gap-y-10pxr ${className}`}>
      {iconArray.map((iconLabel) => {
        return (
          <IconLabel
            key={iconLabel}
            label={iconLabel as IconLabelType}
            isSelected={!!labels[iconLabel]}
            handleToggleLabel={handleToggleLabel}
          />
        )
      })}
    </div>
  )
}

IconLabelContainer.defaultProps = {
  initLabels: {},
  className: '',
}
export default IconLabelContainer
