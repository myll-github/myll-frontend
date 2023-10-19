import * as React from 'react'

const ICON_ARROW_DOWN = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8342 14.844L14.714 10.9642L15.8925 12.1427L9.99998 18.0353L4.10742 12.1427L5.28593 10.9642L9.16751 14.8458V2.0835H10.8342V14.844Z"
        fill=" #007AFF"
      />
    </svg>
  )
}

export default ICON_ARROW_DOWN
