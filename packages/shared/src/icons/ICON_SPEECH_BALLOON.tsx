import * as React from 'react'

const ICON_SPEECH_BALLOON = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect width="20" height="20" fill="url(#pattern54)" />
      <defs>
        <pattern id="pattern54" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_2061_98882" transform="scale(0.00625)" />
        </pattern>
        <image
          id="image0_2061_98882"
          width="160"
          height="160"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default ICON_SPEECH_BALLOON