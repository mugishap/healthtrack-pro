import { CommonProvider } from '@/context/CommonContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <CommonProvider>
    <Component {...pageProps} />
  </CommonProvider>

}
