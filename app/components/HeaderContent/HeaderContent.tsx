import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeaderContent = () => {
  return (
    <div className='hidden md:flex md:flex-row gap-10'>
      <Image src="/images/LogoHero.png" alt="Logo AZtec" width="200" height="200" />
      <nav className="flex flex-col flex-1 text-secondary font-semibold justify-start items-start">
        <div className='w-full flex flex-row flex-wrap justify-between items-center'>
          <div className='flex flex-row gap-4 items-center'>
            <div className='flex gap-2'>
              <Image src="/icons/plantao.png" alt="Telefone" width={20} height={20} />
              <p className='text-sm font-medium'>
                <span className='hidden lg:inline'>Plantão: </span>
                (16) 99107-3633
              </p>
            </div>
            <div className='flex gap-2'>
              <PhoneIcon className='w-7 h-7' />
              <p className='text-sm font-medium'>
                <span className='hidden lg:inline'>Telefone: </span>
                (67) 3425-8189
              </p>
            </div>
            <div className='flex gap-2'>
              <EnvelopeIcon className='w-7 h-7' />
              <p className='text-sm font-medium'>
                <span className='hidden lg:inline'>Email: </span>
                vendas@aztec.ind.br
              </p>
            </div>
          </div>

          <div className='flex flex-row gap-4 '>
            {/* Facebook */}
            <Link href={"https://www.facebook.com/p/Aztec-Engenharia-100064005496513/"} target='_blank' className='hover:opacity-75'>
              <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} />
            </Link>

            {/* Instagram */}
            <Link href={"https://www.instagram.com/aztec.engenharia/"} target='_blank' className='hover:opacity-75'>
              <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={40} />
            </Link>

            {/* LinkedIN */}
            <Link href={"https://www.linkedin.com/company/azteceng/"} target='_blank' className='hover:opacity-75'>
              <Image src="/icons/linkedin.svg" alt="LinkedIN" width={20} height={20} />
            </Link>
          </div>
        </div>
        <div className='divider divider-secondary my-0 p-0 w-full' />
        <ul className="flex flex-row gap-4">
          <Link href={"/"} className='hover:text-black'>Home</Link>
          <Link href={"/quem-somos"} className='hover:text-black'>Quem Somos?</Link>
          <Link href={"/#servicos"} className='hover:text-black'>Serviços</Link>
          <Link href={"/#parceiros"} className='hover:text-black'>Parceiros</Link>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderContent