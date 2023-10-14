import * as React from 'react'

const ICON_OWL = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="20" height="20" fill="url(#pattern50)" />
      <defs>
        <pattern id="pattern50" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_2061_98846" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="image0_2061_98846"
          width="72"
          height="72"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default ICON_OWL