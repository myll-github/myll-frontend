import { Tab } from 'myll-ui'
import { noop } from 'shared'

import DefaultLayout from '@/common/components/layout/DefaultLayout'

const TabItems = [
  {
    key: '1',
    label: `Tab 1`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: <div>test</div>,
  },
]

export const Recommand = () => {
  return (
    <DefaultLayout>
      <Tab defaultActiveKey="1" items={TabItems} onChange={noop} />
    </DefaultLayout>
  )
}

export default Recommand
