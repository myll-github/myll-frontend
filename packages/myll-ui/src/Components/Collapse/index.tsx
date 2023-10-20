import { Collapse as AntdCollapse, CollapseProps } from 'antd'
import { MouseEventHandler, ReactNode } from 'react'

import Button from '../Button/Button'

const genExtra = (onExtraButtonClick: MouseEventHandler<HTMLButtonElement>) => {
  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    onExtraButtonClick(e)
  }

  return (
    <>
      <Button type="button" color="text" onClickCapture={handleButtonClick} variant="mini">
        편집
      </Button>
    </>
  )
}

interface ItemProps {
  key: string
  mainTitle: string
  subTitle: string
  children: ReactNode
}

interface CustomCollapseProps extends Omit<CollapseProps, 'items'> {
  /**
   * Array of items.
   */
  items: ItemProps[]

  /**
   * Event handler for extra button click.
   */
  onExtraButtonClick: MouseEventHandler<HTMLButtonElement>
}
/*
  tailwind css가 안먹음
*/
const Collapse = ({ items, onChange, onExtraButtonClick, ...rest }: CustomCollapseProps) => {
  return (
    <AntdCollapse
      className="border-0 rounded-none"
      defaultActiveKey={['1']}
      onChange={onChange}
      bordered={false}
      {...rest}
    >
      {items!.map((ele, index) => (
        <AntdCollapse.Panel
          key={ele.key!}
          header={
            <div className="flex flex-row">
              <span className="SUBTITLE-T5 text-GRAY_80 mr-10pxr">{ele.mainTitle}</span>
              <span className="SUBTITLE-T6 text-GRAY_70">{ele.subTitle}</span>
            </div>
          }
          style={{ background: '#fff' }}
          extra={genExtra(onExtraButtonClick)}
        >
          {ele.children}
        </AntdCollapse.Panel>
      ))}
    </AntdCollapse>
  )
}

export default Collapse
