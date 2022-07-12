import { AppProps } from 'next/app'
import '../styles/index.css'
import { SessionProvider } from "next-auth/react"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Component {...pageProps} />
    </SessionProvider>
  )}
