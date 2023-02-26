import Card from '@/components/Card'
import FormContainer from '@/components/FormContainer'
import Input from '@/components/login/Input'
import FullscreenSpinner from '@/components/spinner/FullscreenSpinner'
import loadingState from '@/context/loadingState'
import Link from 'next/link'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { useRecoilState } from 'recoil'

export default function Index() {
    const [loading, _] = useRecoilState(loadingState)

    if (loading) return <FullscreenSpinner />

    return (
        <FormContainer id="login-container">
            <form className="w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
                <Card>
                    <Card.Title>Iniciar sesión</Card.Title>
                    <Card.Body>
                        <Input icon={FaUserAlt} placeholder='Correo' />
                        <Input icon={FaLock} placeholder='Contraseña' type='password' />
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
