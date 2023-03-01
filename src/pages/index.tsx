import Card from '@/components/Card'
import FormContainer from '@/components/FormContainer'
import Input from '@/components/login/Input'
import FullscreenSpinner from '@/components/spinner/FullscreenSpinner'
import loadingState from '@/context/loadingState'
import { validateFields, Fields } from '@/helpers/validateFields'
import Link from 'next/link'
import { ChangeEvent, FormEvent, useState } from 'react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { useRecoilState } from 'recoil'

interface loginState {
    email: string
    password: string
}

type LoginFieldsToValidate = Record<keyof loginState, Fields[string]>

export default function Index() {
    const [loading, _] = useRecoilState(loadingState)
    const [login, setLogin] = useState<loginState>({ email: '', password: '' })

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setLogin({ ...login, [event.target.name]: event.target.value.trim() })
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const validatedFields = validateFields<LoginFieldsToValidate>({
            email: {
                value: login.email,
                regexp: new RegExp('^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9]+(?:.[a-zA-Z0-9-]+)*$'),
            },
            password: {
                value: login.password,
                regexp: new RegExp(
                    '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=S+$).{8,50}$'
                ),
            },
        })

        console.log(validatedFields)
    }

    if (loading) return <FullscreenSpinner />

    return (
        <FormContainer id="login-container">
            <form
                className="w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12"
                onSubmit={handleSubmit}
            >
                <Card>
                    <Card.Title>Iniciar sesión</Card.Title>
                    <Card.Body>
                        <Input
                            icon={FaUserAlt}
                            placeholder='Correo'
                            name='email'
                            value={login.email}
                            onChange={handleChange}
                        />
                        <Input
                            icon={FaLock}
                            placeholder='Contraseña'
                            type='password'
                            name='password'
                            value={login.password}
                            onChange={handleChange}
                        />
                        <Card.Button>Ingresar</Card.Button>
                        <Link href='/recoverPassword' className='text-white no-underline'>
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </Card.Body>
                </Card>
            </form>
        </FormContainer>
    )
}
