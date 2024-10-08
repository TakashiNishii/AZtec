import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

  return (
    <footer className="footer flex flex-col bg-primary text-secondary p-10 shadow-md">
      <div className='flex flex-col gap-4 md:flex-row justify-between w-full'>
        <aside>
          <Image src="/images/LogoHero.png" alt="AZtec" width={400} height={400} />
          <h3 className="text-2xl font-bold">Localização</h3>
          <p className="text-lg">R. dos Coqueiros, 2945 - CEP 79839-000, Jd. Colibri - Dourados - MS</p>

          <h3 className="text-2xl font-bold">Contato</h3>
          <div className='flex flex-row gap-2 w-full items-center'>
            <PhoneIcon className='w-10 h-10' />
            <span className="text-lg">Plantão: (16) 99107-3633</span>
          </div>

          <div className='flex flex-row gap-2 w-full items-center'>
            <PhoneIcon className='w-10 h-10' />
            <span className="text-lg">(67) 3425-8189</span>
          </div>

          <div className='flex flex-row gap-2 w-full items-center'>
            <EnvelopeIcon className='w-10 h-10' />
            <span className="text-lg">vendas@aztec.ind.br</span>
          </div>


          <h3 className="text-2xl font-bold">Siga-nos</h3>
          <div className='flex flex-row w-full gap-4'>
            {/* Facebook */}
            <Link href={"https://www.facebook.com/p/Aztec-Engenharia-100064005496513/"} target='_blank' className='hover:opacity-75'>
              <Image src="/icons/facebook.svg" alt="Facebook" width={40} height={40} />
            </Link>

            {/* Instagram */}
            <Link href={"https://www.instagram.com/aztec.engenharia/"} target='_blank' className='hover:opacity-75'>
              <Image src="/icons/instagram.svg" alt="Instagram" width={40} height={40} />
            </Link>

            {/* LinkedIN */}
            <Link href={"https://www.linkedin.com/company/azteceng/"} target='_blank' className='hover:opacity-75'>
              <Image src="/icons/linkedin.svg" alt="LinkedIN" width={40} height={40} />
            </Link>
          </div>
        </aside>

        <nav className='w-full md:w-1/2 self-center'>
          <h3 className="text-2xl font-bold text-center">Nos envie um e-mail!</h3>
          <Link href={"mailto:ygortn14@gmail.com"} className='btn btn-secondary btn-circle w-full text-primary text-xl font-bold'>
            <EnvelopeIcon className='w-10 h-10' />
          </Link>
        </nav>
      </div>

      <div className="flex flex-col w-full bg-base-300 text-base-content">

        <div className='divider divider-secondary w-full my-0 ' />
        <p className='text-center w-full text-lg font-bold'> © Copyright {new Date().getFullYear()} - AZtec - Todos os direitos reservado </p>
        <p className='text-center w-full text-lg '>
          💻 Desenvolvido por
          <Link href={"https://takashinishi.com"} target='_blank' className='font-bold hover:underline'> Nishi Software</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer