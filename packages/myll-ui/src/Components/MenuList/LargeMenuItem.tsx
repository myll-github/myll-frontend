/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button as AntdButton } from 'antd'
import { ICON_HEART_AC, noop, OnToggleStatusType, useCompound } from 'shared'

import CustomImage from '../Image'
import Tag from '../Tag'
import { ButtonCondition } from './components/ButtonCondition'
import { ItemType, MediumMenuItemProps, MenuItemProps } from './type'

const hasHeart = (item: ItemType) => item.isRecommend !== undefined

const LargeMenuItem = ({ item, onRecommendButtonClicked }: MediumMenuItemProps) => {
  const { checkMap, ToggleCardStatusByClick } = useCompound()
  const centerAlignStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <li
      style={centerAlignStyle}
      className="relative flex-shrink-0 flex flex-col items-center justify-center border-none w-130pxr h-267pxr"
    >
      <CustomImage
        className="rounded-md flex-shrink-0 w-139pxr h-130pxr bg-GRAY_30"
        src={item.img}
        alt={item.mainTitle}
      />

      <div className="relative flex flex-col justify-center w-full gap-y-2 py-4pxr">
        <span className="w-full SUBTITLE-T4 h-40pxr min-h-[40px] line-clamp-2 text-GRAY_80">{item.mainTitle}</span>
        <Tag contenttype={item.contenttype} />
        <span className="w-full SUBTITLE-T8 h-21pxr min-h-[21px] text-GRAY_70">{item.subTitle}</span>

        {hasHeart(item) && (
          <div className="flex flex-row items-center text-GRAY_50">
            <AntdButton
              className="flex items-center justify-center border-0 mr-1pxr -ml-8pxr"
              onClick={() => onRecommendButtonClicked(item.id)}
              icon={<ICON_HEART_AC className={`text-${item.isRecommend ? 'PRIMARY_BLUE' : 'GRAY_50'}`} />}
            />
            {item.recommendCount}
          </div>
        )}
      </div>
    </li>
  )
}

LargeMenuItem.defaultProps = {
  isSelectedButtonNeeded: false,
}

export default LargeMenuItem
