import { Tab } from 'myll-ui'
import { CompoundProvider, noop } from 'shared'

import DefaultLayout from '@/common/components/Layout/DefaultLayout'

import FavoriteActivity from './FavoriteActivity'
import FavoritePlace from './FavoritePlace'
import TravelTheme from './TravelTheme'

const getTabItems = () => [
  {
    key: '1',
    label: `좋아하는 지역`,
    children: <FavoriteActivity />,
  },
  {
    key: '2',
    label: `여행테마`,
    children: <TravelTheme />,
  },
  {
    key: '3',
    label: `하고싶은 활동`,
    children: <FavoritePlace />,
  },
]

export const Recommend = () => {
  const a = 1

  return (
    <CompoundProvider providerValue={a}>
      <DefaultLayout>
        <Tab className="mt-30pxr" defaultActiveKey="1" items={getTabItems()} onChange={noop} />
      </DefaultLayout>
    </CompoundProvider>
  )
}

export default Recommend
