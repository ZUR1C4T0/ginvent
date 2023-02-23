import '@/styles/globals.css'
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
                id='app'
                className='min-h-screen bg-cover bg-center bg-fixed text-white font-sans'
            >
                <Component {...pageProps} />
            </div>
        </RecoilRoot>
    )
}
