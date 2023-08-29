/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { List } from 'antd'
import { cloneElement, ReactElement } from 'react'
import { CompoundProvider, OnToggleStatusType, useCheckList } from 'shared'

import { ItemType } from '../type'

interface RawMenuListProps {
  data: ItemType[]
  onChange: OnToggleStatusType<ItemType>
  MenuList: ReactElement
}

const RawMenuList = ({ data, onChange, MenuList }: RawMenuListProps) => {
  const { checkMap, ToggleCardStatusByClick } = useCheckList({ onChange })

  return (
    <CompoundProvider providerValue={{ checkMap, ToggleCardStatusByClick }}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item: ItemType) => {
          return <>{cloneElement(MenuList, { key: item.id, item })}</>
        }}
      />
    </CompoundProvider>
  )
}

export default RawMenuList
