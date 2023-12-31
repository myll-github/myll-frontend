import { Button, DatePicker as AntdDatePicker, DatePickerProps } from 'antd'
import locale from 'antd/es/date-picker/locale/ko_KR'
import dayjs from 'dayjs'
import { CSSProperties, useEffect, useState } from 'react'

const customCell = (current: any, info: any) => {
  if (info.type !== 'date') return info.originNode
  const style: CSSProperties = {}
  if (current.date() === 1) {
    style.border = '1px solid #1677ff'
    style.borderRadius = '50%'
  }
  return (
    <div
      className="ant-picker-cell-inner"
      style={style}
      onClickCapture={(e) => {
        e.stopPropagation()
      }}
    >
      {current.date()}
    </div>
  )
}

const { RangePicker } = AntdDatePicker

const DatePicker = (props: DatePickerProps) => {
  const [open, setOpen] = useState(false)

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {}

  const renderExtraFooter = () => <Button>오늘</Button>

  return (
    <>
      {open && <div className="fixed top-0 left-0 z-10 w-screen h-screen pointer-events-none bg-GRAY_100" />}

      <></>
    </>
  )
}

DatePicker.propTypes = {}

export default DatePicker
