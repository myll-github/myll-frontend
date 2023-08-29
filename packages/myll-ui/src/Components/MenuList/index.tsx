/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { List } from 'antd'
import { cloneElement, ReactElement } from 'react'
import { CompoundProvider, noop, OnToggleStatusType, useCheckList } from 'shared'

import DefaultMenuItem from './DefaultMenuItem'
import LargeMenuItem from './LargeMenuItem'
import MediumMenuItem from './MediumMenuItem'
import { ItemType, MenuListProps } from './type'

const MenuList = ({ data, itemLayout, onChange, children }: MenuListProps) => {
  const { checkMap, ToggleCardStatusByClick } = useCheckList({ onChange: onChange! })

  return (
    <CompoundProvider providerValue={{ checkMap, ToggleCardStatusByClick }}>
      <ul
        className={`list-none ${
          itemLayout === 'vertical' ? 'flex flex-row flex-wrap gap-10 justify-center' : 'flex flex-col'
        }`}
      >
        {data.map((item: ItemType) => {
          return <>{cloneElement(children, { key: item.id, item })}</>
        })}
      </ul>
    </CompoundProvider>
  )
}

MenuList.MediumMenuItem = MediumMenuItem
MenuList.DefaultMenuItem = DefaultMenuItem
MenuList.LargeMenuItem = LargeMenuItem

MenuList.defaultProps = {
  onChange: noop,
  itemLayout: 'horizontal',
}

export default MenuList
