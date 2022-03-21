import Head from 'next/head'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import Header from '../components/Header'
import { useRouter } from 'next/router'
import Breadcrumbs from '../components/Breadcrumbs'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Mercado Livre</title>
      </Head>

      {router.pathname !== '/404' && (
        <>
          <Header />

          <Breadcrumbs />
        </>
      )}

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
