import * as React from 'react'

const ICON_LOCAL_ACTIVE = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15 13.625C14.2375 13.625 13.625 14.2375 13.625 15C13.625 15.7625 14.2375 16.375 15 16.375C15.7625 16.375 16.375 15.7625 16.375 15C16.375 14.2375 15.7625 13.625 15 13.625ZM15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM17.7375 17.7375L7.5 22.5L12.2625 12.2625L22.5 7.5L17.7375 17.7375Z"
        fill="#28333E"
      />
    </svg>
  )
}

export default ICON_LOCAL_ACTIVE
