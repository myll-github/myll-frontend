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
}

export interface RawMenuListProps {
  /** Array of items to be rendered in the list */
  data: ItemType[]

  /** Callback function that is fired when an item's selection status changes */
  onChange?: OnToggleStatusType<ItemType>

  /** Whether the list need button or not */
  isSelectedButtonNeeded?: boolean
}

export interface MenuListProps extends RawMenuListProps {
  /** Size of the list, either 'medium' or 'default' */
  size?: 'medium' | 'default'
}

export interface MediumMenuListProps extends RawMenuListProps {
  onRecommendButtonClick: (id: number) => void
}
