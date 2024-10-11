import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

export const Hero = () => {
  return (
    <div
      className="hero min-h-[calc(100dvh-20dvh)] md:min-h-[calc(100dvh-10dvh)] bg-[url('/images/imageHero.png')] bg-cover bg-center"
    >
      <div className="hero-overlay bg-primary bg-opacity-75"></div>
      <div className="hero-content h-full flex-col text-neutral-content w-full text-center">
        <div className="flex flex-col w-full justify-center gap-5 flex-1">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {`Soluções integradas de engenharia `}
          </h1>
          <h2 className="text-3xl text-secondary font-bold">
            &
          </h2>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {` Manutenção agroindustrial`}
          </h2>
        </div>

        <ArrowDownCircleIcon className='w-14 h-14 md:w-20 md:h-20 text-white animate-bounce ' />
      </div>
    </div>
  )
}
