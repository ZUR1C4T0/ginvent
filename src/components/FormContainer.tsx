import { HTMLAttributes, PropsWithChildren } from 'react'

export default function FormContainer(
    props: PropsWithChildren<HTMLAttributes<HTMLElement>>
) {
    const { children, ...mainprops } = props

    return (
        <main
            className="container min-h-screen mx-auto flex justify-center items-center"
            {...mainprops}
        >
            {children}
        </main>
    )
}
