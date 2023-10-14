import { useEffect, useState } from 'react'

import IconLabel from './IconLabel'
import { IconLabelContainerType, IconLabelProps, IconLabelType } from './type'

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
  initLabels?: IconLabelContainerType

  onChange: (newLabel: IconLabelContainerType) => void
}

const IconLabelContainer = ({ initLabels, onChange }: IconLabelContainerProps) => {
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
    <div className="flex flex-row flex-wrap gap-4pxr">
      {iconArray.map((iconLabel) => {
        return (
          <IconLabel
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
}
export default IconLabelContainer
