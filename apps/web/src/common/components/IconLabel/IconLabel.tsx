import { IconComponentMap, IconLabelMap } from './constants'
import { IconLabelProps } from './type'

const IconLabel = ({ label, isSelected, handleToggleLabel, disabled }: IconLabelProps) => {
  const SelectedStyle = isSelected ? 'text-WHITE bg-SUB_BLUE_1' : 'text-GRAY_90 bg-WHITE'

  return (
    <button
      onClick={() => handleToggleLabel(label)}
      type="button"
      className={`flex flex-row items-center rounded-md px-10pxr gap-4pxr h-32pxr BUTTON-SMALL ${SelectedStyle}`}
      disabled={disabled}
    >
      {IconComponentMap[label]}
      <span>{IconLabelMap[label]}</span>
    </button>
  )
}
export default IconLabel

IconLabel.defaultProps = {
  disabled: false,
}
