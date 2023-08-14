import { Tabs as AntTabs, TabsProps } from 'antd'

// Define the prop types for the Tab component.
interface Props {
  /** The key of the tab pane to be active by default.  */
  defaultActiveKey: string

  /** The list of items (tab panes) for the Tabs component. */
  items: TabsProps['items']

  /**  A callback function that's triggered when a tab is changed. */
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
