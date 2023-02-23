import { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

type InputProps = InputHTMLAttributes<HTMLInputElement> & { icon?: IconType }

export default function Input({ type = 'text', icon: Icon, ...inputProps }: InputProps) {
    return (
        <div
            className='flex items-center gap-2 rounded p-4 mb-3 w-full box-border'
            style={{ background: '#1f2029' }}
        >
            {Icon && <Icon className='w-8 fill-cyan-500' />}
            <input
                className='bg-transparent border-none outline-none w-full px-px h-8 cursor-text text-teal-200'
                type={type}
                {...inputProps}
            />
        </div>
    )
}
