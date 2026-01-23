import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (

            <div className="flex justify-center bg-black/60 text-white">
                <div className="container flex flex-col items-center py-4 gap-4">
                    <p className='text-xl '>
                        Larissa Alves Siqueira | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-3'>
                        <a href="https://www.linkedin.com/in/larissa-alves-s/" target="_blank">
                            <LinkedinLogo size={30} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/generationbrasil" target="_blank">
                            <InstagramLogo size={30} weight='bold' />
                        </a>
                        <a href="https://www.facebook.com/generationbrasil" target="_blank">
                            <FacebookLogo size={30} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <>
            { component }
        </>
    )
}

export default Footer