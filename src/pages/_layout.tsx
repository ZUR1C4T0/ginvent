import loadingState from '@/context/loadingState'
import { useRouter } from 'next/router'
import React, { PropsWithChildren, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import FullscreenSpinner from '../components/spinner/FullscreenSpinner'

export default function Layout({ children }: PropsWithChildren) {
    const router = useRouter()
    const [loading, setLoading] = useRecoilState(loadingState)

    useEffect(() => {
        const handleRouterChangeStart = () => {
            setLoading(true)
        }
        const handleRouterChangeComplete = () => {
            setLoading(false)
        }

        router.events.on('routeChangeStart', handleRouterChangeStart)
        router.events.on('routeChangeComplete', handleRouterChangeComplete)

        return () => {
            router.events.off('routeChangeStart', handleRouterChangeStart)
            router.events.off('routeChangeComplete', handleRouterChangeComplete)
        }
    }, [])

    if (loading) return <FullscreenSpinner />

    return <>{children}</>
}
