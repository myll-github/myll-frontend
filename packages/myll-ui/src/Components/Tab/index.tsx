import { Tabs as AntTabs, TabsProps as AntTabProps } from 'antd'
import { cloneElement } from 'react'

// Define the prop types for the Tab component.
interface Props extends AntTabProps {
  /** className for style */
  className?: string

  /** The key of the tab pane to be active  */
  activeKey?: string

  /** The key of the tab pane to be active by default.  */
  defaultActiveKey: string

  size?: AntTabProps['size']

  centered?: boolean

  /**  A callback function that's triggered when a tab is changed. */
  onChange: (key: string) => void
}

const { TabPane } = AntTabs

const Tab = ({ defaultActiveKey, className, activeKey, items, size, onChange, centered, ...rest }: Props) => {
  const preprocessedItems = items?.map((ele) => {
    return { ...ele, label: <div className="SUBTITLE-T5">{ele.label}</div> }
  })

  return (
    <AntTabs
      centered={centered}
      size={size}
      className={`flex justify-center w-full h-44pxr ${className}`}
      defaultActiveKey={defaultActiveKey}
      activeKey={activeKey}
      items={preprocessedItems}
      onChange={onChange}
      renderTabBar={(props, DefaultTabBar) => {
        return (
          <DefaultTabBar {...props} className="text-GRAY_60 px-20pxr">
            {(node) => {
              return (
                <>
                  {cloneElement(node, {
                    className: `${node.props.className} ${
                      size === 'large' ? 'sm:w-98pxr' : ''
                    } m-0 min-w-[40px] GNB_ACTIVE`,
                  })}
                </>
              )
            }}
          </DefaultTabBar>
        )
      }}
      {...rest}
    />
  )
}

Tab.defaultProps = {
  activeKey: undefined,
  className: '',
  size: 'large',
  centered: true,
}

export default Tab
