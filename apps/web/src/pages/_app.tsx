/* eslint-disable react/jsx-props-no-spreading */

import { ZustandContextProvider } from '@/stores'
import '@/styles/index.scss'

import { FC } from 'react'

interface Props {
  Component: FC
  pageProps: Record<string, unknown>
}

const App = ({ Component, pageProps }: Props) => {
  return (
    <ZustandContextProvider>
      <Component {...pageProps} />
    </ZustandContextProvider>
  )
}

export default App
