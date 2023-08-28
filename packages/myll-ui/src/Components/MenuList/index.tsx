/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { Avatar, List } from 'antd'
import { memo, useCallback } from 'react'
import { noop, OnToggleStatusType, useCheckList } from 'shared'

import Button from '../Button/Button'
import CustomImage from '../Image'

interface ItemType {
  /** Unique identifier for the item */
  id: number

  /** URL associated with the item */
  href: string

  /** URL for the item's image */
  img: string

  /** The main title of the item */
  mainTitle: string

  /** The subtitle of the item */
  subTitle: string

  /** Whether the item is currently selected or not */
  isSelectedButtonNeeded?: boolean

  isRecommend?: boolean
  recommendCount?: number
}

interface MenuListProps {
  /** Array of items to be rendered in the list */
  data: ItemType[]

  /** Callback function that is fired when an item's selection status changes */
  onChange?: OnToggleStatusType<ItemType>

  /** Whether the list need button or not */
  isSelectedButtonNeeded?: boolean

  /** Size of the list, either 'medium' or 'default' */
  size?: 'medium' | 'default'
}
const ButtonCondition = memo(({ isSelected }: { isSelected: boolean | undefined }) => {
  switch (isSelected) {
    case true:
      return (
        <Button type="button" variant="mini">
          선택
        </Button>
      )
    case false:
      return (
        <Button type="button" variant="mini" color="outlined">
          선택
        </Button>
      )

    case undefined:
    default:
      return <></>
  }
})

const MenuList = ({ data, onChange, isSelectedButtonNeeded, size }: MenuListProps) => {
  const { checkMap, ToggleCardStatusByClick } = useCheckList({ onChange: onChange! })

  const isMedium = size === 'medium'
  const hasHeart = useCallback((item: ItemType) => item.isRecommend !== undefined, [])

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item: ItemType) => (
        <li
          key={item.id}
          className={`flex flex-row border-none w-full h-${isMedium ? '110pxr' : '70pxr'} px-20pxr py-10pxr`}
          onClick={() => isSelectedButtonNeeded && ToggleCardStatusByClick(item)}
        >
          <CustomImage
            className={`${isMedium ? 'w-90pxr h-90pxr' : 'w-50pxr h-50pxr'} mr-14pxr rounded-md bg-GRAY_30`}
            src={item.img}
            alt={item.mainTitle}
          />
          <div className="relative flex flex-col justify-center w-full py-4pxr">
            <span className="SUBTITLE-T2 text-GRAY_80">{item.mainTitle}</span>
            <span className="SUBTITLE-T8 text-GRAY_70">{item.subTitle}</span>

            {hasHeart(item) && <div>heart</div>}

            {isSelectedButtonNeeded && (
              <div className="absolute right-0 transform -translate-y-1/2 top-1/2">
                <ButtonCondition isSelected={checkMap.has(item.id)} />
              </div>
            )}
          </div>
        </li>
      )}
    />
  )
}

MenuList.defaultProps = {
  isSelectedButtonNeeded: false,
  onChange: noop,
  size: 'default' as 'medium' | 'default',
}

export default MenuList
