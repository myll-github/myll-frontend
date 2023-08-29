import { memo } from 'react'

import Button from '../../Button/Button'

export const ButtonCondition = memo(({ isSelected }: { isSelected: boolean | undefined }) => {
  switch (isSelected) {
    case true:
      return (
        <Button type="button" variant="mini">
          선택
        </Button>
      )
    case false:
      return (
        <Button type="button" variant="mini" color="outlined">
          선택
        </Button>
      )

    case undefined:
    default:
      return <></>
  }
})
