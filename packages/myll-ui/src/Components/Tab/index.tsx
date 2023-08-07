import { Tabs as AntTabs, TabsProps } from 'antd'

interface Props {
  defaultActiveKey: string
  items: TabsProps['items']
  onChange: (key: string) => void
}

const Tab = ({ defaultActiveKey, items, onChange }: Props) => (
  <AntTabs defaultActiveKey={defaultActiveKey} items={items} onChange={onChange} />
)

export default Tab
