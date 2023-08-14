import { Tabs as AntTabs, TabsProps } from 'antd'
import { cloneElement } from 'react'

// Define the prop types for the Tab component.
interface Props {
  /** The key of the tab pane to be active by default.  */
  defaultActiveKey: string

  /** The list of items (tab panes) for the Tabs component. */
  items: TabsProps['items']

  /**  A callback function that's triggered when a tab is changed. */
  onChange: (key: string) => void
}

const { TabPane } = AntTabs

const Tab = ({ defaultActiveKey, items, onChange }: Props) => (
  <AntTabs
    centered
    size="large"
    className="flex justify-center w-full h-44pxr"
    defaultActiveKey={defaultActiveKey}
    items={items}
    onChange={onChange}
    renderTabBar={(props, DefaultTabBar) => {
      return (
        <DefaultTabBar {...props} className="text-GRAY_60">
          {(node) => (
            <>
              {cloneElement(node, {
                className: `${node.props.className} justify-center min-w-[98px]`,
              })}
            </>
          )}
        </DefaultTabBar>
      )
    }}
  />
)

export default Tab
