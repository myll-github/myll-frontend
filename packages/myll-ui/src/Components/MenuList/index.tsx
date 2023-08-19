import { Avatar, List } from 'antd'

import CustomImage from '../Image'

interface ItemType {
  href: string
  img: string

  mainTitle: string
  subTitle: string
  content: string
}

interface MenuListProps {
  data: ItemType[]
}

const MenuList = ({ data }: MenuListProps) => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item: ItemType) => (
      <List.Item key={item.mainTitle}>
        <List.Item.Meta
          avatar={<CustomImage src={item.img} alt={item.mainTitle} />}
          title={<a href={item.href}>{item.mainTitle}</a>}
          description={item.subTitle}
        />
        {item.content}
      </List.Item>
    )}
  />
)

export default MenuList
