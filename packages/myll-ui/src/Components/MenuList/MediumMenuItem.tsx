/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button as AntdButton } from 'antd'
import { ICON_HEART_AC, noop, OnToggleStatusType, useCompound } from 'shared'

import CustomImage from '../Image'
import { ButtonCondition } from './components/ButtonCondition'
import { ItemType, MediumMenuItemProps, MenuItemProps } from './type'

const hasHeart = (item: ItemType) => item.isRecommend !== undefined

const MediumMenuItem = ({ item, isSelectedButtonNeeded, onRecommendButtonClicked }: MediumMenuItemProps) => {
  const { checkMap, ToggleCardStatusByClick } = useCompound()

  return (
    <li
      key={item.key}
      className="relative flex flex-row w-full border-none h-110pxr px-20pxr py-10pxr mb-10pxr"
      onClick={() => isSelectedButtonNeeded && ToggleCardStatusByClick(item)}
    >
      <CustomImage className="rounded-md w-90pxr h-90pxr mr-14pxr bg-GRAY_30" src={item.img} alt={item.mainTitle} />

      <div className="relative flex flex-col justify-center w-full h-full py-4pxr">
        <span className="w-full SUBTITLE-T2 h-40pxr min-h-[40px] line-clamp-2 text-GRAY_80">{item.mainTitle}</span>
        <span className="w-full SUBTITLE-T8 h-21pxr min-h-[21px] text-GRAY_70">{item.subTitle}</span>

        {hasHeart(item) && (
          <div className="flex flex-row items-center text-GRAY_50 mt-6pxr">
            <AntdButton
              className="flex items-center justify-center border-0 mr-1pxr -ml-8pxr"
              onClick={() => onRecommendButtonClicked(item.id)}
              icon={<ICON_HEART_AC className={`text-${item.isRecommend ? 'PRIMARY_BLUE' : 'GRAY_50'}`} />}
            />
            <span
              className="text-GRAY_70"
              style={{ fontSize: 12, fontFamily: 'Pretendard', fontWeight: '400', wordWrap: 'break-word' }}
            >
              {item.recommendCount}
            </span>
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

MediumMenuItem.defaultProps = {
  isSelectedButtonNeeded: false,
}

export default MediumMenuItem
