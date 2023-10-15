import * as React from 'react'

const ICON_MAP_ACTIVE = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15 2.5C10.1625 2.5 6.25 6.4125 6.25 11.25C6.25 16.4625 11.775 23.65 14.05 26.3875C14.55 26.9875 15.4625 26.9875 15.9625 26.3875C18.225 23.65 23.75 16.4625 23.75 11.25C23.75 6.4125 19.8375 2.5 15 2.5ZM15 14.375C13.275 14.375 11.875 12.975 11.875 11.25C11.875 9.525 13.275 8.125 15 8.125C16.725 8.125 18.125 9.525 18.125 11.25C18.125 12.975 16.725 14.375 15 14.375Z"
        fill="#28333E"
      />
    </svg>
  )
}

export default ICON_MAP_ACTIVE
