/* eslint-disable react/jsx-props-no-spreading */

import '@/styles/index.scss'

import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AntdConfigProvider } from 'myll-ui'
import Head from 'next/head'
import { FC, useState } from 'react'

interface Props {
  Component: FC
  pageProps: Record<string, unknown>
}

const App = ({ Component, pageProps }: Props) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            initialData: [],
            refetchOnWindowFocus: true,
            refetchInterval: false,
            refetchIntervalInBackground: false,
          },
        },
      }),
  )

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA </title>

        <link rel="manifest" href="/manifest.json" />
        <link href="/icons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/icons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <AntdConfigProvider>
            <Component {...pageProps} />
          </AntdConfigProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default App
