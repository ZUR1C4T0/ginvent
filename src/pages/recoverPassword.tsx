import Card from '@/components/Card'
import FormContainer from '@/components/FormContainer'
import Input from '@/components/login/Input'
import Link from 'next/link'
import { FaUserAlt } from 'react-icons/fa'
import { MdPersonSearch } from 'react-icons/md'

export default function RecoverPassword() {
    return (
        <FormContainer>
            <form className="w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
                <Card>
                    <Card.Title>Recupera tu contraseña</Card.Title>
                    <Card.Body>
                        <MdPersonSearch className='w-16 h-16 mb-4' />
                        <Input icon={FaUserAlt} placeholder='Correo Electroníco' />
                        <Card.Button>Enviar</Card.Button>
                        <Link href='/' className='text-white no-underline'>
                            Volver
                        </Link>
                    </Card.Body>
                </Card>
            </form>
        </FormContainer>
    )
}
