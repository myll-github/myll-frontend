import * as React from 'react'

const ICON_CHECKED = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_909_4050)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0007 0.833496C4.93804 0.833496 0.833984 4.93755 0.833984 10.0002C0.833984 15.0628 4.93804 19.1668 10.0007 19.1668C15.0633 19.1668 19.1673 15.0628 19.1673 10.0002C19.1673 4.93755 15.0633 0.833496 10.0007 0.833496ZM14.786 8.11888C15.1277 7.77717 15.1277 7.22315 14.786 6.88144C14.4443 6.53974 13.8903 6.53974 13.5486 6.88144L9.16732 11.2627L7.28604 9.38144C6.94433 9.03974 6.39031 9.03974 6.0486 9.38144C5.70689 9.72315 5.70689 10.2772 6.0486 10.6189L8.5486 13.1189C8.89031 13.4606 9.44433 13.4606 9.78604 13.1189L14.786 8.11888Z"
          fill="#007AFF"
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
