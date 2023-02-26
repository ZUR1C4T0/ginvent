import '@/styles/normalize.css'
import '@/styles/globals.css'
import Layout from '@/pages/_layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Head>
                <title>Ginvent</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div
                className='min-h-screen bg-cover bg-center bg-fixed text-white font-sans'
                id='app'
            >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </div>
        </RecoilRoot>
    )
}
