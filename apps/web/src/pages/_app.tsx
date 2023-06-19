/* eslint-disable react/jsx-props-no-spreading */

import '@/styles/index.scss'

import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, useState } from 'react'

import { ZustandContextProvider } from '@/stores'

interface Props {
  Component: FC
  pageProps: Record<string, unknown>
}

const App = ({ Component, pageProps }: Props) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ZustandContextProvider>
          <Component {...pageProps} />
        </ZustandContextProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
