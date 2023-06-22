import '@/styles/globals.css'
import Head from 'next/head';
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NFPaisanos</title>
      </Head>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
