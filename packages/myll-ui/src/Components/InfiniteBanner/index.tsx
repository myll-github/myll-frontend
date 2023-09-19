/* eslint-disable react/no-array-index-key */
import { useState } from 'react'

import CustomImage from '../Image'

interface InfiniteBannerData {
  id: string
  img: string
}

interface InfiniteBannerProps {
  data: InfiniteBannerData[]
}

const InfiniteBanner = ({ data }: InfiniteBannerProps) => {
  return (
    <div className="inline-flex w-full overflow-hidden flex-nowrap">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none  animate-infinite-scroll">
        {data.map((ele) => {
          return (
            <li
              key={ele.id}
              className={`relative z-10 cursor-pointer transition-transform duration-300 transform 
  w-70pxr h-70pxr hover:scale-98 hover:after:bg-black/20`}
            >
              <CustomImage key={ele.id} className="object-cover w-full h-full shrink-0" alt={ele.img} src={ele.img} />
            </li>
          )
        })}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {data.map((ele) => {
          return (
            <li
              key={ele.id}
              className={`relative z-10 cursor-pointer transition-transform duration-300 transform 
  w-70pxr h-70pxr hover:scale-98 hover:after:bg-black/20`}
            >
              <CustomImage key={ele.id} className="object-cover w-full h-full shrink-0" alt={ele.img} src={ele.img} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default InfiniteBanner
