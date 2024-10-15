import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <div
      className="hero min-h-[calc(100dvh-20dvh)]  bg-[url('/images/imageHero.png')] bg-cover bg-center shadow-2xl border-b-2 border-primary"
    >
      <div className="hero-overlay bg-primary bg-opacity-75"></div>
      <div className="hero-content h-full flex-col text-neutral-content w-full text-center mt-20 md:mt-0">
        <div className="flex flex-col w-full justify-center items-center gap-5 flex-1">
          <Image src="/images/LogoHero.png" alt="AZtec" width={400} height={400} />
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {`Soluções integradas de engenharia `}
          </h1>
          <h2 className="text-3xl text-secondary font-bold">
            &
          </h2>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {` Manutenção agroindustrial`}
          </h2>
        </div>
        <span className="hidden md:block text-2xl text-white font-bold">Conheça nossos serviços!</span>
        <ArrowDownCircleIcon className='w-14 h-14 md:w-20 md:h-20 text-white animate-bounce ' />
      </div>
    </div>
  )
}
