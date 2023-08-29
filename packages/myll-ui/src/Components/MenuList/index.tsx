/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { List } from 'antd'
import { cloneElement, ReactElement } from 'react'
import { CompoundProvider, noop, OnToggleStatusType, useCheckList } from 'shared'

import DefaultMenuList from './DefaultMenuList'
import MediumMenuList from './MediumMenuList'
import { ItemType, MenuListProps } from './type'

const MenuList = ({ data, onChange, children }: MenuListProps) => {
  const { checkMap, ToggleCardStatusByClick } = useCheckList({ onChange: onChange! })

  return (
    <CompoundProvider providerValue={{ checkMap, ToggleCardStatusByClick }}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item: ItemType) => {
          return <>{cloneElement(children, { key: item.id, item })}</>
        }}
      />
    </CompoundProvider>
  )
}

MenuList.MediumMenuList = MediumMenuList
MenuList.DefaultMenuList = DefaultMenuList

MenuList.defaultProps = {
  onChange: noop,
}

export default MenuList
