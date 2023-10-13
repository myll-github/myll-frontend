import * as React from 'react'

const ICON_SUITCASE = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 6.5H16V4.5C16 3.4 15.1 2.5 14 2.5H10C8.9 2.5 8 3.4 8 4.5V6.5H2V21.5H22V6.5ZM14 6.5H10V4.5H14V6.5Z"
        fill="black"
      />
    </svg>
  )
}

export default ICON_SUITCASE
