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

  const getItemLayout = itemLayout === 'horizontal' ? 'horizontal' : ('' as 'horizontal')
  const isGrid =
    itemLayout === 'grid'
      ? {
          gutter: 2,
          xs: 2,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 2,
          xxl: 2,
        }
      : undefined

  return (
    <CompoundProvider providerValue={{ checkMap, ToggleCardStatusByClick }}>
      <List
        grid={isGrid}
        itemLayout={getItemLayout}
        dataSource={data}
        renderItem={(item: ItemType) => {
          return <>{cloneElement(children, { key: item.id, item })}</>
        }}
      />
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
