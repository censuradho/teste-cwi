import type { AppProps } from 'next/app'
import { globalStyle } from '../stitches.config'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyle()
  return <Component {...pageProps} />
}

export default MyApp
