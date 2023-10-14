import * as React from 'react'

const ICON_CAMERA = (props: React.SVGProps<SVGSVGElement>) => {
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
      <rect width="20" height="20" fill="url(#pattern51)" />
      <defs>
        <pattern id="pattern51" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_2061_98860" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="image0_2061_98860"
          width="72"
          height="72"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default ICON_CAMERA