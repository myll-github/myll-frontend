/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button as AntdButton } from 'antd'
import { useContext } from 'react'
import { ICON_HEART_AC, noop, OnToggleStatusType, useCompound } from 'shared'

import CustomImage from '../Image'
import RawMenuList from './components/base'
import { ButtonCondition } from './components/compound'
import { ItemType, RawMenuListProps } from './type'

const hasHeart = (item: ItemType) => item.isRecommend !== undefined

const MenuItem = ({ item, isSelectedButtonNeeded }: any) => {
  const { checkMap, ToggleCardStatusByClick } = useCompound()

  return (
    <li
      className="relative flex flex-row w-full border-none h-110pxr px-20pxr py-10pxr"
      onClick={() => ToggleCardStatusByClick(item)}
    >
      <CustomImage className="rounded-md w-90pxr h-90pxr mr-14pxr bg-GRAY_30" src={item.img} alt={item.mainTitle} />

      <div className="relative flex flex-col justify-center w-full py-4pxr">
        <span className="w-full SUBTITLE-T2 h-40pxr text-GRAY_80">{item.mainTitle}</span>
        <span className="w-full SUBTITLE-T8 h-21pxr text-GRAY_70">{item.subTitle}</span>

        {hasHeart(item) && (
          <div className="flex flex-row items-center text-GRAY_50 mt-6pxr">
            <AntdButton
              className="flex items-center justify-center border-0 mr-1pxr"
              icon={<ICON_HEART_AC className={`text-${item.isRecommend ? 'PRIMARY_BLUE' : 'GRAY_50'}`} />}
            />
            {item.recommendCount}
          </div>
        )}
      </div>

      {isSelectedButtonNeeded && (
        <div className="absolute right-0 transform -translate-y-1/2 top-1/2">
          <ButtonCondition isSelected={checkMap.has(item.id)} />
        </div>
      )}
    </li>
  )
}

const MediumMenuList = ({ data, isSelectedButtonNeeded, onChange }: RawMenuListProps) => {
  return (
    <RawMenuList
      data={data}
      onChange={onChange!}
      MenuList={<MenuItem isSelectedButtonNeeded={isSelectedButtonNeeded} />}
    />
  )
}

MediumMenuList.defaultProps = {
  onChange: noop as OnToggleStatusType<ItemType>,
  isSelectedButtonNeeded: false,
}

export default MediumMenuList
