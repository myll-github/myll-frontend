import { AppBar, Input } from 'myll-ui'
import { ChangeEvent, memo } from 'react'

interface AddPlaceHeaderProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

// AppBar의 남은 전체 width 사용 하는 방법
const AddPlaceHeader = memo(
  (props: AddPlaceHeaderProps) => {
    const { value, onChange } = props
    return (
      <header>
        <AppBar>
          <AppBar.LeftSection>
            <AppBar.FallbackButton />
          </AppBar.LeftSection>
          <div className="w-full h-36pxr flex items-center">
            <AppBar.MiddleSection>
              <Input value={value} onChange={onChange} />
            </AppBar.MiddleSection>
          </div>
        </AppBar>
      </header>
    )
  },
  (prev, cur) => prev.value === cur.value,
)

export default AddPlaceHeader
