/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dropdown as AntdDropdown, Menu } from 'antd'
import { ReactNode } from 'react'
import { noop } from 'shared'

interface MenuProps {
  key: string
  children: ReactNode
  onClick: () => void
}

interface DropdownProps {
  items: MenuProps[]
}

const Overlay = ({ items }: DropdownProps) => (
  <Menu mode="inline" className="relative">
    {items.map(({ key, children, onClick }) => {
      return (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li
          key={key}
          className="inline-flex items-center justify-start w-full gap-2 px-3 py-1 rounded h-26pxr"
          onClick={onClick ?? noop}
        >
          <span className="SUBTITLE-T8">{children}</span>
        </li>
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
