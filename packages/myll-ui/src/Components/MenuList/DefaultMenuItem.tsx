/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from 'react'
import { noop, OnToggleStatusType, useCompound } from 'shared'

import CustomImage from '../Image'
import { ButtonCondition } from './components/ButtonCondition'
import { ItemType, MenuItemProps } from './type'

const DefaultMenuItem = ({ item, onClick, isSelectedButtonNeeded }: MenuItemProps) => {
  const { checkMap, ToggleCardStatusByClick } = useCompound()

  return (
    <li
      className={`relative flex flex-row flex-shrink-0 w-full border-none h-70pxr px-20pxr py-10pxr ${
        checkMap.has(item.id) && 'bg-SUB_BLUE_2'
      }`}
      onClick={() => isSelectedButtonNeeded && ToggleCardStatusByClick(item)}
    >
      <CustomImage
        className="flex-shrink-0 rounded-md w-50pxr h-50pxr mr-14pxr bg-GRAY_30"
        src={item.img}
        alt={item.mainTitle}
        onClick={onClick}
      />

      <div className="relative flex flex-col w-full py-4pxr">
        <button
          type="button"
          onClick={onClick}
          style={{ width: 'calc(100% - 3.125rem)' }}
          className="text-left SUBTITLE-T2 text-GRAY_80 w-full text-ellipsis overflow-hidden"
          disabled={!onClick}
        >
          {item.mainTitle}
        </button>
        <span className="SUBTITLE-T8 text-GRAY_70 w-full text-ellipsis overflow-hidden">{item.subTitle}</span>
      </div>

      {isSelectedButtonNeeded && (
        <div className="absolute right-0 transform -translate-y-1/2 top-1/2 pr-20pxr w-70pxr">
          <ButtonCondition isSelected={checkMap.has(item.id)} />
        </div>
      )}
    </li>
  )
}

DefaultMenuItem.defaultProps = {
  isSelectedButtonNeeded: false,
}

export default DefaultMenuItem
