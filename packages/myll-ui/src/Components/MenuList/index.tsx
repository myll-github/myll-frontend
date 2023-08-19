/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { Avatar, List } from 'antd'
import { memo } from 'react'

import Button from '../Button/Button'
import { useCheckList } from '../CardContainer/hook'
import { OnToggleCardStatusType } from '../CardContainer/type'
import CustomImage from '../Image'

interface ItemType {
  id: number
  href: string
  img: string

  mainTitle: string
  subTitle: string
  isSelected?: boolean
}

interface MenuListProps {
  data: ItemType[]
  onChange: OnToggleCardStatusType<ItemType>
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

const MenuList = ({ data, onChange }: MenuListProps) => {
  const { checkMap, ToggleCardStatusByClick } = useCheckList({ onChange })

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item: ItemType) => (
        <li
          key={item.id}
          className="flex flex-row border-none w-full h-70pxr px-20pxr py-10pxr"
          onClick={() => ToggleCardStatusByClick(item)}
        >
          <CustomImage className="w-50pxr h-50pxr mr-14pxr rounded-md bg-GRAY_30" src={item.img} alt={item.mainTitle} />
          <div className="relative flex flex-col justify-center py-4pxr">
            <span className="SUBTITLE-T2 text-GRAY_80">{item.mainTitle}</span>
            <span className="SUBTITLE-T8 text-GRAY_70">{item.subTitle}</span>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
              <ButtonCondition isSelected={checkMap.has(item.id)} />
            </div>
          </div>
        </li>
      )}
    />
  )
}

export default MenuList
