import { MenuList } from 'myll-ui'
import DefaultMenuItem from 'myll-ui/src/Components/MenuList/DefaultMenuItem'
import { ItemType } from 'myll-ui/src/Components/MenuList/type'
import { Dispatch, memo, SetStateAction } from 'react'

interface SimpleAddListProps {
  data: ItemType[]
  setData: Dispatch<SetStateAction<ItemType[]>>
}

// 카드뷰 ui 다를 수 있음
const SimpleAddList = memo(
  (props: SimpleAddListProps) => {
    const { data, setData } = props

    return (
      <div className="pr-10pxr">
        <MenuList
          data={data}
          onChange={(selectedValue) => {
            setData(Array.from(selectedValue.values()))
          }}
        >
          <DefaultMenuItem isSelectedButtonNeeded />
        </MenuList>
      </div>
    )
  },
  (prev, cur) => prev.data.length === cur.data.length,
)

export default SimpleAddList
