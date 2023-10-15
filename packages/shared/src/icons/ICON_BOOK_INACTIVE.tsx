import * as React from 'react'

const ICON_BOOK_INACTIVE = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21.4004 6.4625V3.75H19.9004V6.4625H10.0879V3.75H8.58789V6.4625H3.77539V24.5875H26.2254V6.4625H21.4004ZM24.7254 7.9625V10.7375H5.27539V7.9625H24.7254ZM5.27539 23.0875V12.2375H24.7254V23.1H5.27539V23.0875Z"
        fill="#848E9B"
      />
    </svg>
  )
}

export default ICON_BOOK_INACTIVE
