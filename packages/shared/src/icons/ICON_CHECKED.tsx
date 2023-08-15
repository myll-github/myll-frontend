import * as React from 'react'

const ICON_CHECKED = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_909_4050)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99967 0.833496C4.93706 0.833496 0.833008 4.93755 0.833008 10.0002C0.833008 15.0628 4.93706 19.1668 9.99967 19.1668C15.0623 19.1668 19.1663 15.0628 19.1663 10.0002C19.1663 4.93755 15.0623 0.833496 9.99967 0.833496ZM14.7851 8.11888C15.1268 7.77717 15.1268 7.22315 14.7851 6.88144C14.4433 6.53974 13.8893 6.53974 13.5476 6.88144L9.16634 11.2627L7.28506 9.38144C6.94335 9.03974 6.38933 9.03974 6.04762 9.38144C5.70591 9.72315 5.70591 10.2772 6.04762 10.6189L8.54762 13.1189C8.88933 13.4606 9.44335 13.4606 9.78506 13.1189L14.7851 8.11888Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_909_4050">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ICON_CHECKED
