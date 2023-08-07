import { Tabs as AntTabs, TabsProps } from 'antd'

interface Props {
  defaultActiveKey: string
  items: TabsProps['items']
  onChange: (key: string) => void
}

const Tab = ({ defaultActiveKey, items, onChange }: Props) => (
  <AntTabs
    centered
    size="large"
    className="w-full h-44pxr text-GRAY_60"
    defaultActiveKey={defaultActiveKey}
    items={items}
    onChange={onChange}
  />
)

export default Tab
