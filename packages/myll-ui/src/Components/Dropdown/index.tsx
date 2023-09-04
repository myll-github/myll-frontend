import { Dropdown as AntdDropdown, Menu } from 'antd'
import { ReactNode } from 'react'
import { noop } from 'shared'

interface MenuProps {
  key: string
  label: ReactNode
  isSelected: boolean
  onClick: () => void
}

interface DropdownProps {
  items: MenuProps[]
}

const Overlay = ({ items }: DropdownProps) => (
  <Menu mode="inline" className="relative">
    {items.map(({ key, label, isSelected, onClick }) => {
      return (
        <Menu.Item
          key={key}
          className={`w-full h-26pxr px-3 py-1 ${
            isSelected ? 'bg-sky-100' : 'bg-WHITE'
          }  rounded justify-start items-center gap-2 inline-flex`}
          onClick={onClick ?? noop}
        >
          <span className="SUBTITLE-T8">{label}</span>
        </Menu.Item>
      )
    })}
  </Menu>
)

const Dropdown = ({ items, DropdownTrigger }: DropdownProps & { DropdownTrigger: ReactNode }) => {
  return (
    <AntdDropdown overlay={() => Overlay({ items })} trigger={['click']}>
      {DropdownTrigger}
    </AntdDropdown>
  )
}

export default Dropdown
