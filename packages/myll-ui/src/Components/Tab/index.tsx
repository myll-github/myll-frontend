import { Tabs as AntTabs, TabsProps } from 'antd'
import { cloneElement } from 'react'

// Define the prop types for the Tab component.
interface Props {
  /** className for style */
  className?: string

  /** The key of the tab pane to be active  */
  activeKey?: string

  /** The key of the tab pane to be active by default.  */
  defaultActiveKey: string

  /** The list of items (tab panes) for the Tabs component. */
  items: TabsProps['items']

  /**  A callback function that's triggered when a tab is changed. */
  onChange: (key: string) => void
}

const { TabPane } = AntTabs

const Tab = ({ defaultActiveKey, className, activeKey, items, onChange }: Props) => (
  <AntTabs
    centered
    size="large"
    className={`flex justify-center w-full h-44pxr ${className}`}
    defaultActiveKey={defaultActiveKey}
    activeKey={activeKey}
    items={items}
    onChange={onChange}
    renderTabBar={(props, DefaultTabBar) => {
      return (
        <DefaultTabBar {...props} className="text-GRAY_60">
          {(node) => (
            <>
              {cloneElement(node, {
                className: `${node.props.className} justify-center sm:w-98pxr m-0 min-w-[40px] GNB_ACTIVE`,
              })}
            </>
          )}
        </DefaultTabBar>
      )
    }}
  />
)

Tab.defaultProps = {
  activeKey: undefined,
  className: '',
}

export default Tab
