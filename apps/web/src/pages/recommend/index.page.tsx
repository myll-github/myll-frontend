import { Tab } from 'myll-ui'
import { GetServerSideProps } from 'next'
import { useState } from 'react'
import { CompoundProvider, noop } from 'shared'

import { getFavoritePlace } from '@/common/api/recommend'
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

export const Recommend = ({ favoritePlace }: any) => {
  const [{ favoritePlace: fav }, setFavorite] = useState({ favoritePlace })

  return (
    <CompoundProvider providerValue={{ fav }}>
      <DefaultLayout>
        <Tab className="mt-30pxr" defaultActiveKey="1" items={getTabItems()} onChange={noop} />
      </DefaultLayout>
    </CompoundProvider>
  )
}

export const getServerSideProps = async () => {
  const favoritePlace = await getFavoritePlace()
  return { props: { favoritePlace } }
}

export default Recommend
