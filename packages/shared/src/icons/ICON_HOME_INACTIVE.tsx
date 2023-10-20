import * as React from 'react'

const ICON_HOME_INACTIVE = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M26.3883 26.3749H3.67578V10.9249L15.0258 3.7124L26.3758 10.9374V26.3874L26.3883 26.3749ZM5.17578 24.8749H24.8883V11.7499L15.0383 5.4874L5.18828 11.7499V24.8749H5.17578Z"
        fill="#848E9B"
      />
      <path d="M18.625 19.75H11.4375V21.25H18.625V19.75Z" fill="#848E9B" />
    </svg>
  )
}

export default ICON_HOME_INACTIVE
