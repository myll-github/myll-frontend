import { useEffect, useState } from 'react'

import CustomImage from '../Image'

interface CaroselData {
  id: string
  img: string
}

interface CustomCaroselProps {
  data: CaroselData[]
  className?: string
}

const CustomCarosel = ({ data, className }: CustomCaroselProps) => {
  const [animate, setAnimate] = useState(true)

  const DuplicatedData = [...data] as CaroselData[]
  const dataLength = DuplicatedData.length

  return (
    <>
      <div className={`flex flex-row overflow-hidden ${className}`}>
        <div className="flex flex-row w-full h-full flex-nowrap">
          {DuplicatedData.map((ele: CaroselData) => (
            <CustomImage key={ele.id} className="object-cover w-full h-full shrink-0" alt={ele.img} src={ele.img} />
          ))}
        </div>
      </div>
    </>
  )
}

CustomCarosel.defaultProps = {
  className: 'w-300pxr h-300pxr',
}

export default CustomCarosel
