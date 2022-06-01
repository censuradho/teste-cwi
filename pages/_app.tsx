import { ReactElement, ReactNode, useEffect } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { WalletProvider } from 'context'

import { globalStyle } from 'stitches.config'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  useEffect(() => {
    globalStyle()
  }, [])

  return (
    <WalletProvider>
      {getLayout(<Component {...pageProps} />)}
    </WalletProvider>
  )
}

export default MyApp
