/* eslint-disable react/jsx-props-no-spreading */

// eslint-disable-next-line import/no-unresolved
import '@/styles/index.scss'

import { FC } from 'react'

interface Props {
  Component: FC
  pageProps: Record<string, unknown>
}

const App = ({ Component, pageProps }: Props) => {
  return <Component {...pageProps} />
}

export default App
