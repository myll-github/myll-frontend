import { ReactElement } from 'react'
import { OnToggleStatusType } from 'shared'

export interface ItemType {
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

  contenttype?: string
}

export interface MenuListProps {
  /** Array of items to be rendered in the list */
  data: ItemType[]

  /** Callback function that is fired when an item's selection status changes */
  onChange?: OnToggleStatusType<ItemType>

  onClick?: (item: ItemType) => void

  children: ReactElement

  itemLayout?: 'horizontal' | 'vertical'
}

export interface MenuItemProps {
  item?: any
  isSelectedButtonNeeded?: boolean

  onClick?: (item: any) => void
}

export interface MediumMenuItemProps extends MenuItemProps {
  onClick?: (item: any) => void
  onRecommendButtonClicked: (id: number) => void
}
