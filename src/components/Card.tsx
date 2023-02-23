import React, { HTMLAttributes, PropsWithChildren } from 'react'

type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export default class Card extends React.Component {
    props!: Readonly<CardProps>

    constructor(props: CardProps) {
        super(props)
    }

    render() {
        return (
            <div
                className='rounded-xl py-7 px-5 text-center'
                style={{ backgroundColor: '#2a2b38' }}
            >
                {this.props.children}
            </div>
        )
    }

    static Title({ children }: PropsWithChildren) {
        return (
            <div className='text-2xl font-medium text-white font-sans mb-8'>
                {children}
            </div>
        )
    }

    static Body({ children }: PropsWithChildren) {
        return <div className='flex flex-col items-center'>{children}</div>
    }

    static Button({ children }: PropsWithChildren) {
        const buttonDefaultStype: string =
            'm-4 border-none rounded font-bold text-base uppercase px-6 py-2 cursor-pointer bg-cyan-500 text-zinc-900 '

        const buttonHoverStype: string = ''

        return (
            <button
                className={buttonDefaultStype + 'hover:bg-cyan-700 hover:text-zinc-200'}
            >
                {children}
            </button>
        )
    }
}
