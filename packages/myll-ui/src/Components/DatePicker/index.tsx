import { Button, DatePicker as AntdDatePicker, DatePickerProps } from 'antd'
import koKR from 'antd/es/locale/ko_KR'
import { useEffect, useState } from 'react'

const DatePicker = (props: DatePickerProps) => {
  const [open, setOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(undefined as unknown as Date)

  const handleTodayClick = () => {
    const today = new Date()
    setSelectedDate(today)
    console.log("Today's date:", today.toISOString().split('T')[0])
  }

  const renderExtraFooter = () => <Button onClick={handleTodayClick}>오늘</Button>

  /*
  return <div>1</div>
  return (
    <>
      {open && <div className="fixed top-0 left-0 z-10 w-screen h-screen pointer-events-none bg-GRAY_100" />}
      <AntdDatePicker
        open={open}
        onOpenChange={setOpen}
        value={selectedDate}
        onChange={setSelectedDate}
        locale={koKR}
        renderExtraFooter={renderExtraFooter}
        popupClassName="fixed inset-0 flex justify-center items-center z-50"
        {...props}
      />
    </>
  )

  */
}

DatePicker.propTypes = {}

export default DatePicker
