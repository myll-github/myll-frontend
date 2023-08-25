import { Collapse as AntdCollapse, CollapseProps } from 'antd'

const { Panel } = AntdCollapse

const Collapse = ({ items }: CollapseProps) => {
  return (
    <AntdCollapse defaultActiveKey={['1']} onChange={() => {}}>
      {items?.map((ele) => {
        return (
          <Panel header={ele.label} key={ele.key!}>
            {ele.children}
          </Panel>
        )
      })}
    </AntdCollapse>
  )
}

export default Collapse
