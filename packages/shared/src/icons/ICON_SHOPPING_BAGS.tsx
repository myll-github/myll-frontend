import * as React from 'react'

const ICON_SHOPPING_BAGS = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <rect width="20" height="20" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_2072_99955" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="image0_2072_99955"
          width="72"
          height="72"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default ICON_SHOPPING_BAGS
