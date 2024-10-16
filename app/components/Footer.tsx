import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

  return (
    <footer className="footer flex flex-col items-center bg-primary text-secondary p-10 shadow-md">

      <Image src="/images/LogoHero.png" alt="AZtec" width={150} height={150} className='md:self-start' />
      <div className='flex flex-col gap-4 md:flex-row justify-between w-full'>
        <aside className='flex flex-col justify-center items-center'>
          <h3 className="text-lg font-bold">Localização</h3>
          <p className="text-md">R. dos Coqueiros, 2945 - CEP 79839-000, Jd. Colibri - Dourados - MS</p>

          <h3 className="text-lg font-bold">Siga-nos</h3>
          <div className='flex flex-row w-full gap-4 justify-center md:justify-start'>
            {/* Facebook */}
            <Link href={"https://www.facebook.com/p/Aztec-Engenharia-100064005496513/"} target='_blank' className='hover:opacity-75'>
              <Image src="/icons/facebook.svg" alt="Facebook" width={25} height={25} />
            </Link>

            {/* Instagram */}
            <Link href={"https://www.instagram.com/aztec.engenharia/"} target='_blank' className='hover:opacity-75'>
              <Image src="/icons/instagram.svg" alt="Instagram" width={25} height={25} />
            </Link>

            {/* LinkedIN */}
            <Link href={"https://www.linkedin.com/company/azteceng/"} target='_blank' className='hover:opacity-75'>
              <Image src="/icons/linkedin.svg" alt="LinkedIN" width={25} height={25} />
            </Link>
          </div>
        </aside>

        <nav className='flex flex-col items-center justify-center w-full md:w-1/3 self-center '>
          <h3 className="text-lg font-bold">Contato</h3>
          <div className='flex flex-row gap-2 w-full items-center justify-center'>
            <PhoneIcon className='w-6 h-6' />
            <span className="text-md">Plantão: (16) 99779-9898</span>
          </div>

          <div className='flex flex-row gap-2 w-full items-center justify-center'>
            <PhoneIcon className='w-6 h-6' />
            <span className="text-md">(67) 3425-8189</span>
          </div>

          <div className='flex flex-row gap-2 w-full items-center justify-center'>
            <EnvelopeIcon className='w-6 h-6' />
            <span className="text-md">comercial@aztec.ind.br</span>
          </div>
        </nav>
        <nav className='w-full md:w-1/4 self-center'>
          <h3 className="text-lg font-bold text-center">Nos envie um e-mail!</h3>
          <Link href={"mailto:comercial@aztec.ind.br"} className='btn btn-secondary btn-circle w-full text-primary text-xl font-bold'>
            <EnvelopeIcon className='w-6 h-6' />
          </Link>

        </nav>
      </div>

      <div className="flex flex-col w-full bg-base-300 text-base-content">
        <div className='divider divider-secondary w-full my-0 ' />
        <p className='text-center w-full text-md font-bold'> © Copyright {new Date().getFullYear()} - AZtec - Todos os direitos reservado </p>
        <p className='text-center w-full text-md '>
          💻 Desenvolvido por
          <Link href={"https://takashinishi.com"} target='_blank' className='font-bold hover:underline'> Nishi Software</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer